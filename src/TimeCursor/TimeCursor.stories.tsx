import type { Meta, StoryObj } from "@storybook/react";
import { TimeCursor } from ".";
const meta = {
  component: TimeCursor,
} satisfies Meta<typeof TimeCursor>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    left: 0,
    top: 0,
  },
};
