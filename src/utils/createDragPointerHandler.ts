import { DragHanderContext } from "./getDragHander";

export function createDragPointerHandler<T, U>(functions: {
  onDown?: (context: DragHanderContext<T, U>) => T;
  onUp?: (context: DragHanderContext<T, U>) => void;
  onMove?: (context: DragHanderContext<T, U>) => U;
}) {
  return (downEvent: React.PointerEvent) => {
    const el = downEvent.currentTarget;
    if (!(el instanceof HTMLElement)) {
      return;
    }
    downEvent.currentTarget.setPointerCapture(downEvent.pointerId);
    const pass = functions.onDown?.({
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
    const handlePointerMove = (e: PointerEvent) => {
      const diffX = e.clientX - startX;
      const diffY = e.clientY - startY;
      functions.onMove?.({
        startX,
        startY,
        diffX,
        diffY,
        startEvent: downEvent.nativeEvent,
        pass,
        event: e,
      });
    };
    const handlePointerUp = (e: PointerEvent) => {
      const diffX = e.clientX - startX;
      const diffY = e.clientY - startY;
      functions.onUp?.({
        startX,
        startY,
        diffX,
        diffY,
        startEvent: e,
        pass,
        event: e,
      });
      el.releasePointerCapture(downEvent.pointerId);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerup", handlePointerUp);
    };
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerup", handlePointerUp);
  };
}
