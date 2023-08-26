import { FC } from "react";

import { useWidth } from "../hooks/useWidth";
import styled from "styled-components";
import { TimeText } from "./TimeText";

function defaultRenderText(time: number) {
  let viewTime = time.toFixed(2);
  if (viewTime.endsWith(".00")) {
    viewTime = viewTime.slice(0, -3);
  } else if (viewTime.endsWith("0")) {
    viewTime = viewTime.slice(0, -1);
  }
  if (viewTime === "-0") {
    viewTime = "0";
  }
  return viewTime;
}

type TimeViewProps = {
  offsetSec: number;
  pxPerSec: number;
  height?: number;
  steps?: number[];
  renderText?: (time: number) => string;
} & Omit<JSX.IntrinsicElements["div"], "ref">;

export const secStep = [0.01, 0.05, 0.1, 0.2, 0.5, 1, 5, 10, 30, 60];

const minInterval = 32;

export function getStepPixel(
  pxPerSec: number,
  minInterval: number,
  step: number[],
  width: number,
  offsetSec = 0
) {
  const stepI = step.findIndex((s) => s * pxPerSec > minInterval);
  const stepPx = step[stepI] * pxPerSec;
  const viewNumber = Math.ceil(width / stepPx);
  const offset = (offsetSec * pxPerSec) % stepPx;
  if (isNaN(viewNumber)) return [];
  return [...Array(viewNumber).keys()].map((i) => {
    return i * stepPx - offset;
  });
}

export const TimeView: FC<TimeViewProps> = (props) => {
  const [width, ref] = useWidth();

  const { offsetSec, pxPerSec, renderText, steps: propsSteps, ...rest } = props;
  const steps = getStepPixel(
    props.pxPerSec,
    minInterval,
    propsSteps ?? secStep,
    width,
    props.offsetSec
  );
  const pSteps = getStepPixel(
    props.pxPerSec,
    minInterval / 4,
    propsSteps ?? secStep,
    width,
    props.offsetSec
  );

  return (
    <TimeViewRootDiv
      ref={ref}
      onMouseDown={props.onMouseDown}
      onTouchStart={props.onTouchStart}
      style={{
        height: props.height,
      }}
      {...rest}
    >
      {pSteps.map((left) => {
        return <TimePointDiv $left={left} key={left} />;
      })}
      {steps.map((left) => {
        const time = left / props.pxPerSec + props.offsetSec;
        return (
          <TimeText
            time={renderText ? renderText(time) : defaultRenderText(time)}
            height={props.height ?? 20}
            key={left}
            left={left}
          />
        );
      })}
    </TimeViewRootDiv>
  );
};

const TimeViewRootDiv = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  overflow: hidden;
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid white;
  user-select: none;
  touch-action: none;
  color: white;
`;

const TimePointDiv = styled.div.attrs<{
  $left: number;
}>((props) => ({
  style: {
    left: props.$left,
  },
}))<{ $left: number }>`
  position: absolute;
  touch-action: none;
  pointer-events: none;
  border-left: 1px solid gray;
  height: 4px;
  bottom: 0px;
`;
