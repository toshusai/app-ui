import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from ".";
const meta = {
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    children: "Popover",
  },
};
