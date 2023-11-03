import React, { FC } from "react";
import styled from "styled-components";

import { getDragHandler } from "../utils/getDragHandler";

import { DividerBox } from "./DividerBox";

const HPanelDivider = styled.div`
  min-width: 4px;
  min-height: 100%;
  background-color: var(--color-panel-divider);
  cursor: col-resize;
  user-select: none;
`;

const HBoxRoot = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const HPanel = ({
  left,
  right,
  defaultRate,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  defaultRate?: number;
}) => {
  const [rate, setRate] = React.useState(defaultRate ?? 0.5);
  const leftWidth = `calc(${rate * 100}% - 2px)`;
  const rightWidth = `calc(${(1 - rate) * 100}% - 2px)`;
  const handleMouseDown = getDragHandler((ctx) => {
    const { diffX } = ctx;
    const el = ctx.startEvent.target as HTMLElement;
    const ctxWidth = el.parentElement?.clientWidth ?? 0;
    const newRate = Math.max(0, Math.min(1, rate + diffX / ctxWidth));
    setRate(newRate);
  });
  return (
    <HBoxRoot>
      <DividerBox
        style={{
          width: leftWidth,
        }}
      >
        {left}
      </DividerBox>
      <HPanelDivider onMouseDown={handleMouseDown} />
      <DividerBox
        style={{
          width: rightWidth,
        }}
      >
        {right}
      </DividerBox>
    </HBoxRoot>
  );
};
