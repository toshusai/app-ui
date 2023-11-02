import styled, { css } from "styled-components";
import { COLOR_BACKGROUND_2_NAME } from "../GlobalStyle/GlobalStyle";

const ToolTipDiv = styled.div`
  position: absolute;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: var(${COLOR_BACKGROUND_2_NAME});
  color: var(--color-text);
  font-size: 12px;
  white-space: nowrap;
  z-index: 10000;
  border: 1px solid var(--color-border);
`;

const TriggerDiv = styled.div`
  display: flex;
  width: fit-content;
`;

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useTooltip } from "./useTooltip";

export function ToolTip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
}) {
  const toolTipRef = React.useRef<HTMLDivElement>(null);
  const { isVisible, setIsVisible, position, childRef } =
    useTooltip(toolTipRef);

  const tooltipStyle = {
    top: `${position.top}px`,
    left: `${position.left}px`,
  };

  let cancel: NodeJS.Timeout | number = 0;

  useEffect(() => {
    return () => {
      clearTimeout(cancel as NodeJS.Timeout);
    };
  });

  return (
    <>
      <TriggerDiv
        ref={childRef}
        onMouseEnter={() => {
          clearTimeout(cancel as NodeJS.Timeout);
          setIsVisible(true);
        }}
        onMouseLeave={(e) => {
          cancel = setTimeout(() => {
            setIsVisible(false);
          }, 300);
        }}
      >
        {children}
      </TriggerDiv>
      {isVisible &&
        ReactDOM.createPortal(
          <ToolTipDiv
            ref={toolTipRef}
            style={{
              ...tooltipStyle,
              opacity: 1,
            }}
            onMouseEnter={(e) => {
              clearTimeout(cancel as NodeJS.Timeout);
              setIsVisible(true);
            }}
            onMouseLeave={(e) => {
              cancel = setTimeout(() => {
                setIsVisible(false);
              }, 300);
            }}
          >
            {content}
          </ToolTipDiv>,
          document.body
        )}
    </>
  );
}
