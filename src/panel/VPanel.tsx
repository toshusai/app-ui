import React, { FC } from "react";
import styled from "styled-components";

import { getDragHandler } from "../utils/getDragHandler";

import { DividerBox } from "./DividerBox";

const VPanelDivider = styled.div`
  width: 100%;
  min-height: 4px;
  background-color: var(--color-panel-divider);
  cursor: row-resize;
  user-select: none;
`;

const VPanelBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const VPanel = ({
  top,
  bottom,
  defaultRate = 0.5,
}: {
  top: React.ReactNode;
  bottom: React.ReactNode;
  defaultRate?: number;
}) => {
  const [rate, setRate] = React.useState(defaultRate ?? 0.5);
  const topHeight = `calc(${rate * 100}% - 2px)`;
  const bottomHeight = `calc(${(1 - rate) * 100}% - 2px)`;
  const handleMouseDown = getDragHandler((ctx) => {
    const { diffY } = ctx;
    const el = ctx.startEvent.target as HTMLElement;
    const ctxWidth = el.parentElement?.clientHeight ?? 0;
    const newRate = Math.max(0, Math.min(1, rate + diffY / ctxWidth));
    setRate(newRate);
  });
  return (
    <VPanelBox>
      <DividerBox
        style={{
          height: topHeight,
        }}
      >
        {top}
      </DividerBox>
      <VPanelDivider onMouseDown={handleMouseDown} />
      <DividerBox
        style={{
          height: bottomHeight,
        }}
      >
        {bottom}
      </DividerBox>
    </VPanelBox>
  );
};
