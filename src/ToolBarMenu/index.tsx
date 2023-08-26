import { useCallback, useEffect, useRef, useState } from "react";
import { ToolbarButton } from "../ToolbarButton";
import { DropdownMenu } from "../DropdownMenu";
import { createPortal } from "react-dom";

type Position = "left" | "right" | "top" | "bottom";

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

function useKeyboardMenuHandler(
  ref: React.RefObject<HTMLDivElement>,
  showMenu: boolean,
  setShowMenu: (showMenu: boolean) => void,
  buttonRef: React.RefObject<HTMLButtonElement>
) {
  useEffect(() => {
    if (showMenu) {
      const focusableElements = ref.current?.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );

      let index = -1;
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setShowMenu(false);
        } else if (e.key === "Tab") {
          setShowMenu(false);
          if (buttonRef.current) {
            buttonRef.current.focus();
          }
        } else if (e.key === "ArrowDown") {
          if (!focusableElements) return;
          index++;
          if (index >= focusableElements?.length) {
            index = 0;
          }
          const focusableElement = focusableElements?.[index];
          if (!focusableElement || !(focusableElement instanceof HTMLElement))
            return;
          focusableElement?.focus();
        } else if (e.key === "ArrowUp") {
          if (!focusableElements) return;
          index--;
          if (index < 0) {
            index = focusableElements?.length - 1;
          }
          const focusableElement = focusableElements?.[index];
          if (!focusableElement || !(focusableElement instanceof HTMLElement))
            return;
          focusableElement?.focus();
        }
      };
      const handleMouseDown = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement) {
          if (ref.current?.contains(e.target)) {
            return;
          }
          if (buttonRef.current?.contains(e.target)) {
            return;
          }
          setShowMenu(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("mousedown", handleMouseDown, {
        capture: true,
      });
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("mousedown", handleMouseDown);
      };
    }
  }, [buttonRef, ref, setShowMenu, showMenu]);
}

export function ToolBarMenu(props: {
  title: string;
  children?: React.ReactNode;
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}) {
  const { showMenu, setShowMenu } = props;
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useKeyboardMenuHandler(ref, showMenu, setShowMenu, buttonRef);
  usePopover(ref, buttonRef, showMenu, "bottom", "left");

  return (
    <>
      <ToolbarButton ref={buttonRef} onClick={handleClick}>
        {props.title}
      </ToolbarButton>
      {showMenu &&
        createPortal(
          <DropdownMenu ref={ref}>{props.children}</DropdownMenu>,
          document.body
        )}
    </>
  );
}

function usePopover2(
  horizontal: "left" | "right",
  vertical: "top" | "bottom",
  render: () => React.ReactNode,
  show: boolean,
  ref: React.RefObject<HTMLElement>
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      let x = 0;
      let y = 0;
      if (horizontal === "left") {
        x = rect.left;
      } else if (horizontal === "right") {
        x = rect.right;
      }
      if (vertical === "top") {
        y = rect.top;
      } else if (vertical === "bottom") {
        y = rect.bottom;
      }
      setPosition({ x, y });
    }
  }, [horizontal, vertical]);

  return createPortal(
    <>
      {show && (
        <div
          style={{
            position: "absolute",
            left: horizontal === "left" ? position.x : undefined,
            right:
              horizontal === "right"
                ? window.innerWidth - position.x
                : undefined,
            top: vertical === "top" ? position.y : undefined,
            bottom:
              vertical === "bottom"
                ? window.innerHeight - position.y
                : undefined,
          }}
        >
          {render()}
        </div>
      )}
    </>,
    document.body
  );
}
