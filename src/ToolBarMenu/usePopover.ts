import { useEffect } from "react";
import { Position } from "./ToolBarMenu";

export function usePopover(
  ref: React.RefObject<HTMLElement>,
  parentRef: React.RefObject<HTMLElement>,
  show: boolean,
  position1: Position,
  position2: Position
) {
  useEffect(() => {
    if (show) {
      if (ref.current && parentRef.current) {
        const rect = parentRef.current.getBoundingClientRect();
        const position = `${position1}-${position2}`;

        const tryPositions = [position];

        if (position1 === "left") {
          tryPositions.push(`right-${position2}`);
        } else if (position1 === "right") {
          tryPositions.push(`left-${position2}`);
        } else if (position1 === "top") {
          tryPositions.push(`bottom-${position2}`);
        } else if (position1 === "bottom") {
          tryPositions.push(`top-${position2}`);
        }

        if (position2 === "left") {
          tryPositions.push(`${position1}-right`);
        } else if (position2 === "right") {
          tryPositions.push(`${position1}-left`);
        } else if (position2 === "top") {
          tryPositions.push(`${position1}-bottom`);
        } else if (position2 === "bottom") {
          tryPositions.push(`${position1}-top`);
        }

        for (const position of tryPositions) {
          let finalLeft = "0";
          let finalTop = "0";

          if (position === "bottom-left") {
            finalLeft = `${rect.left}px`;
            finalTop = `${rect.bottom}px`;
          } else if (position === "bottom-right") {
            finalLeft = `${rect.right - ref.current.clientWidth}px`;
            finalTop = `${rect.bottom}px`;
          } else if (position === "top-left") {
            finalLeft = `${rect.left}px`;
            finalTop = `${rect.top - ref.current.clientHeight}px`;
          } else if (position === "top-right") {
            finalLeft = `${rect.right - ref.current.clientWidth}px`;
            finalTop = `${rect.top - ref.current.clientHeight}px`;
          } else if (position === "left-top") {
            finalLeft = `${rect.left - ref.current.clientWidth}px`;
            finalTop = `${rect.top}px`;
          } else if (position === "left-bottom") {
            finalLeft = `${rect.left - ref.current.clientWidth}px`;
            finalTop = `${rect.bottom - ref.current.clientHeight}px`;
          } else if (position === "right-top") {
            finalLeft = `${rect.right}px`;
            finalTop = `${rect.top}px`;
          } else if (position === "right-bottom") {
            finalLeft = `${rect.right}px`;
            finalTop = `${rect.bottom - ref.current.clientHeight}px`;
          }

          let isOverflow = false;
          if (finalLeft.startsWith("-")) {
            isOverflow = true;
            finalLeft = "0px";
          }
          if (
            parseInt(finalLeft) + ref.current.clientWidth >
            window.innerWidth
          ) {
            isOverflow = true;
            finalLeft = `${window.innerWidth - ref.current.clientWidth}px`;
          }
          if (
            parseInt(finalTop) + ref.current.clientHeight >
            window.innerHeight
          ) {
            isOverflow = true;
            finalTop = `${window.innerHeight - ref.current.clientHeight}px`;
          }
          if (finalTop.startsWith("-")) {
            isOverflow = true;
            finalTop = "0px";
          }
          if (isOverflow) {
            continue;
          }

          ref.current.style.left = finalLeft;
          ref.current.style.top = finalTop;
          break;
        }
      }
    }
  }, [parentRef, ref, show]);
}
