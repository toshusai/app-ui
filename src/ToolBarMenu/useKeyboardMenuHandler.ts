import { useEffect } from "react";

export function useKeyboardMenuHandler(
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
