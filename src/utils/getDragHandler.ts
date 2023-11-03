import { useMemo } from "react";

export type DragHandlerContext<T, U> = {
  startX: number;
  startY: number;
  diffX: number;
  diffY: number;
  startEvent: MouseEvent;
  pass?: T;
  movePass?: U;
  event: MouseEvent;
};

export function useDragHandler<T, U>(
  cb: (context: DragHandlerContext<T, U>) => U,
  onDown?: (context: DragHandlerContext<T, U>) => T,
  onUp?: (context: DragHandlerContext<T, U>) => void
) {
  const memoHandler = useMemo(
    () => getDragHandler(cb, onDown, onUp),
    [cb, onDown, onUp]
  );
  return memoHandler;
}

export function getDragHandler<T, U>(
  cb: (context: DragHandlerContext<T, U>) => U,
  onDown?: (context: DragHandlerContext<T, U>) => T,
  onUp?: (context: DragHandlerContext<T, U>) => void
) {
  return (downEvent: React.MouseEvent) => {
    const pass = onDown?.({
      startX: 0,
      startY: 0,
      diffX: 0,
      diffY: 0,
      startEvent: downEvent.nativeEvent,
      event: downEvent.nativeEvent,
    });
    downEvent.stopPropagation();
    const startX = downEvent.clientX;
    const startY = downEvent.clientY;

    let movePass: U | undefined;

    const handleMouseMove = (e: MouseEvent) => {
      const diffX = e.clientX - startX;
      const diffY = e.clientY - startY;
      movePass = cb({
        startX,
        startY,
        diffX,
        diffY,
        startEvent: downEvent.nativeEvent,
        pass,
        event: e,
      });
    };

    const handleMouseUp = (e: MouseEvent) => {
      const diffX = e.clientX - startX;
      const diffY = e.clientY - startY;
      onUp?.({
        startX,
        startY,
        diffX,
        diffY,
        startEvent: e,
        pass,
        movePass,
        event: e,
      });
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
}
