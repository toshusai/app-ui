import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from ".";

const meta = {
  component: ListItem,
} satisfies Meta<typeof ListItem>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    children: "ListItem",
  },
};
