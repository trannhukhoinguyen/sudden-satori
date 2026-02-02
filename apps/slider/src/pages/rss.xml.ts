import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context: APIContext) {
  const posts = await getCollection("blogs");
  const cards = await getCollection("cards");
  const slides = await getCollection("slides");
  const doodles = await getCollection("doodles");
  const contents = [...posts, ...cards, ...slides, ...doodles];

  if (!context.site) {
    throw new Error("Expected 'context.site' when generating RSS feed.");
  }

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: contents.map((content) => ({
      ...content.data,
      link: `/${content.collection}/${content.id}`,
    })),
  });
}
