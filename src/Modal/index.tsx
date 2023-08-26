import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { ModalBody } from "./ModalBody";

function useFocusTrap(
  elementRef: React.RefObject<HTMLElement>,
  isOpen: boolean,
  onClose?: () => void
) {
  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const focusableElements = element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );

    const firstFocusable = focusableElements[0];
    const secondFocusable = focusableElements[1];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusable) {
            event.preventDefault();
            if (lastFocusable instanceof HTMLElement) lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            event.preventDefault();
            if (firstFocusable instanceof HTMLElement) firstFocusable.focus();
          }
        }
      } else if (event.key === "Escape") {
        if (isOpen) {
          event.preventDefault();
          onClose?.();
        }
      }
    };
    if (secondFocusable instanceof HTMLElement) secondFocusable.focus();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [elementRef, isOpen, onClose]);
}

export const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  canEscapeKeyClose?: boolean;
  title?: string;
  canOutsideClickClose?: boolean;
}> = ({ isOpen, onClose, children, title, canOutsideClickClose }) => {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, isOpen, onClose);

  const handleOutsideClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (canOutsideClickClose) {
        onClose();
      }
    },
    [canOutsideClickClose, onClose]
  );

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      ref={ref}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 100,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
      onClick={handleOutsideClick}
    >
      <ModalBody onClose={onClose} title={title}>
        {children}
      </ModalBody>
    </div>,
    document.body
  );
};
