"use client";

import { Loader2 } from "lucide-react";
import { useCallback, useEffect, useReducer, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageViewerProps {
  selector?: string;
  observe?: string | string[];
}

type ViewerAction =
  | { type: "OPEN_IMAGE"; src: string; alt: string }
  | { type: "CLOSE_IMAGE" }
  | { type: "IMAGE_LOADED" }
  | { type: "IMAGE_ERROR"; error?: string };

type ViewerState = {
  image: string | null;
  alt: string;
  isOpen: boolean;
  isLoading: boolean;
  error: string | null;
};

function viewerReducer(state: ViewerState, action: ViewerAction): ViewerState {
  switch (action.type) {
    case "OPEN_IMAGE":
      return {
        image: action.src,
        alt: action.alt || "",
        isOpen: true,
        isLoading: true,
        error: null,
      };
    case "CLOSE_IMAGE":
      return {
        ...state,
        isOpen: false,
      };
    case "IMAGE_LOADED":
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case "IMAGE_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.error || "Could not load image",
      };
    default:
      return state;
  }
}

const imageEventHandlers = new WeakMap<
  HTMLImageElement,
  { enter: EventListener; leave: EventListener; click: EventListener }
>();

export const ImageViewer: React.FC<ImageViewerProps> = ({
  selector = "article img",
  observe,
}) => {
  const [state, dispatch] = useReducer(viewerReducer, {
    image: null,
    alt: "",
    isOpen: false,
    isLoading: false,
    error: null,
  });

  const dispatchRef = useRef(dispatch);
  const refreshFrameRef = useRef<number | null>(null);

  useEffect(() => {
    dispatchRef.current = dispatch;
  });

  const detachListeners = useCallback(() => {
    for (const img of document.querySelectorAll(selector)) {
      if (!(img instanceof HTMLImageElement)) continue;

      const handlers = imageEventHandlers.get(img);
      if (handlers) {
        img.removeEventListener("mouseenter", handlers.enter);
        img.removeEventListener("mouseleave", handlers.leave);
        img.removeEventListener("click", handlers.click);
        img.style.cursor = "";
        imageEventHandlers.delete(img);
      }
    }
  }, [selector]);

  const attachListeners = useCallback(() => {
    detachListeners();

    for (const img of document.querySelectorAll(selector)) {
      if (!(img instanceof HTMLImageElement)) continue;

      img.style.cursor = "zoom-in";
      const originalFilter = img.style.filter;

      const handleMouseEnter = () => {
        img.style.transition = "filter 0.2s ease";
        img.style.filter = "brightness(90%)";
      };

      const handleMouseLeave = () => {
        img.style.filter = originalFilter;
      };

      const handleClick = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        dispatchRef.current({
          type: "OPEN_IMAGE",
          src: img.src,
          alt: img.alt || "",
        });
      };

      img.addEventListener("mouseenter", handleMouseEnter);
      img.addEventListener("mouseleave", handleMouseLeave);
      img.addEventListener("click", handleClick);

      imageEventHandlers.set(img, {
        enter: handleMouseEnter,
        leave: handleMouseLeave,
        click: handleClick,
      });
    }
  }, [detachListeners, selector]);

  useEffect(() => {
    attachListeners();

    return () => {
      if (refreshFrameRef.current !== null) {
        cancelAnimationFrame(refreshFrameRef.current);
        refreshFrameRef.current = null;
      }

      detachListeners();
    };
  }, [attachListeners, detachListeners]);

  useEffect(() => {
    if (!observe) return;

    const selectors = Array.isArray(observe) ? observe : [observe];
    const targets = selectors.flatMap((sel) =>
      Array.from(document.querySelectorAll(sel)).filter(
        (node): node is Element => node instanceof Element,
      ),
    );

    if (targets.length === 0) {
      return;
    }

    const queueRefresh = () => {
      if (refreshFrameRef.current !== null) return;
      refreshFrameRef.current = requestAnimationFrame(() => {
        refreshFrameRef.current = null;
        attachListeners();
      });
    };

    const observers = targets.map((target) => {
      const observer = new MutationObserver((mutations) => {
        if (
          mutations.some(
            (mutation) =>
              mutation.addedNodes.length > 0 ||
              mutation.removedNodes.length > 0,
          )
        ) {
          queueRefresh();
        }
      });

      observer.observe(target, {
        childList: true,
        subtree: true,
      });

      return observer;
    });

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, [observe, attachListeners]);

  const handleDialogChange = (open: boolean) => {
    if (!open) dispatch({ type: "CLOSE_IMAGE" });
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: "CLOSE_IMAGE" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
      dispatch({ type: "CLOSE_IMAGE" });
    }
  };

  const handleImageLoad = () => {
    dispatch({ type: "IMAGE_LOADED" });
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const img = e.currentTarget;
    dispatch({
      type: "IMAGE_ERROR",
      error: `Failed to load image: ${img.src}`,
    });
  };

  return (
    <>
      {state.image ? (
        <Dialog open={state.isOpen} onOpenChange={handleDialogChange}>
          <DialogContent
            hideCloseButton
            className="cursor-pointer p-0 overflow-hidden bg-black/0 border-0 shadow-none sm:max-w-[95vw] sm:rounded-lg"
          >
            <DialogTitle className="sr-only hidden">Image Viewer</DialogTitle>
            <DialogDescription className="sr-only hidden">
              View the image in full size
            </DialogDescription>
            <div className="relative w-full h-full flex justify-center items-center">
              <button
                type="button"
                className="relative w-full h-full flex justify-center items-center cursor-pointer bg-transparent border-0 p-0"
                onClick={handleImageClick}
                onKeyDown={handleKeyDown}
                aria-label="Close"
              >
                {state.isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Loader2 className="h-8 w-8 animate-spin text-white" />
                  </div>
                )}

                {state.error ? (
                  <div
                    className="max-h-[90vh] max-w-[90vw]"
                    aria-hidden="true"
                  />
                ) : (
                  <img
                    src={state.image}
                    alt={state.alt}
                    className="max-h-[90vh] max-w-[90vw] cursor-pointer object-contain"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    aria-label="Close"
                  />
                )}
              </button>

              {state.error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/10 rounded-lg pointer-events-none">
                  <span className="text-red-500 mb-2">⚠️ {state.error}</span>
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm mt-2 pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (state.image) {
                        dispatch({
                          type: "OPEN_IMAGE",
                          src: state.image,
                          alt: state.alt,
                        });
                      }
                    }}
                    onKeyDown={handleKeyDown}
                  >
                    Retry
                  </button>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </>
  );
};
