import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ScaleScrollBar } from ".";
import { Canvas } from "@storybook/blocks";

const meta = {
  component: ScaleScrollBar,
  argTypes: {},
} satisfies Meta<typeof ScaleScrollBar>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    end: 0.5,
    start: 0,
  },
  render: (args) => {
    const [start, setStart] = useState(args.start);
    const [end, setEnd] = useState(args.end);
    return (
      <div style={{ width: "256px" }}>
        <div>start: {start}</div>
        <div>end: {end}</div>
        <div>length: {end - start}</div>
        <ScaleScrollBar
          start={start}
          end={end}
          onScaleChange={(start, end) => {
            setStart(start);
            setEnd(end);
          }}
        />
      </div>
    );
  },
};
