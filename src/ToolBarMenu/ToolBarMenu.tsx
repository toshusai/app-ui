import { useRef } from "react";
import { ToolBarButton } from "./ToolBarButton";
import { Popover } from "../Popover/Popover";
import { createPortal } from "react-dom";
import { usePopover } from "./usePopover";
import { useKeyboardMenuHandler } from "./useKeyboardMenuHandler";

export type Position = "left" | "right" | "top" | "bottom";

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
      <ToolBarButton ref={buttonRef} onClick={handleClick}>
        {props.title}
      </ToolBarButton>
      {showMenu &&
        createPortal(
          <Popover ref={ref}>{props.children}</Popover>,
          document.body
        )}
    </>
  );
}
