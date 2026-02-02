import gsap from 'gsap'
import { addIntersectingObserver } from './observers';
import type { VisibilityChangeElement } from './observers';

type FN = (t: number) => void
interface TickerElement extends HTMLElement {
  onVisibilityChange?: (entries: IntersectionObserverEntry[]) => void
  tick: (t: number) => void
}

const visibleElements: TickerElement[] = []
const fns: FN[] = []

export function addGlobalTicker(fn: FN) {
  fns.push(fn)
}

export function addIntersectingTicker(el: TickerElement) {
  const override = el.onVisibilityChange;
  el.onVisibilityChange = (ents) => {
    override && override.call(el, ents);

    ents.forEach((ent) => {
      const target = ent.target as TickerElement

      if (ent.isIntersecting) {
        visibleElements.push(target)
      } else {
        const i = visibleElements.indexOf(target as TickerElement)
        if (i > -1) {
          visibleElements.splice(i, 1)
        }
      }
    })
  };

  addIntersectingObserver(el as VisibilityChangeElement);
}

gsap.ticker.add(tick)
gsap.ticker.lagSmoothing(0)

function tick(now: number) {
  for (const fn of fns) {
    fn(now)
  }


  for (const el of visibleElements) {
    el.tick.call(el, now)
  }
}
