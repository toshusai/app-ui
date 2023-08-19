import { useState } from "react";
import { getDragHander } from "../utils";

export function useSelectRect(onUnselect?: () => void) {
  const [rect, setRect] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);
  const handleMouseDownForSelect = getDragHander<
    {
      scrollLeft: number;
      scrollTop: number;
    },
    void
  >(
    ({ diffX, diffY, startEvent, pass }) => {
      const el = startEvent.target as HTMLElement;
      const rect = el.getBoundingClientRect();
      if (!pass) return;
      let left = startEvent.clientX - rect.left + pass.scrollLeft;
      let top = startEvent.clientY - rect.top + pass.scrollTop;
      let width = diffX;
      let height = diffY;
      if (width < 0) {
        left += width;
        width = -width;
      }
      if (height < 0) {
        top += height;
        height = -height;
      }
      setRect({ left, top, width, height });
    },
    ({ startEvent }) => {
      const el = startEvent.target as HTMLElement;
      return {
        scrollLeft: el.scrollLeft,
        scrollTop: el.scrollTop,
      };
    },
    (ctx) => {
      setRect(null);
      if (ctx.diffX === 0 && ctx.diffY === 0) {
        onUnselect?.();
      }
    }
  );
  return {
    handleMouseDownForSelect,
    rect,
  };
}
