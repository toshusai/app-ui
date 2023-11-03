import type { Meta, StoryObj } from "@storybook/react";
import { AutoHeightTextarea } from "./AutoHeightTextarea";
const meta = {
  component: AutoHeightTextarea,
} satisfies Meta<typeof AutoHeightTextarea>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    children: "AutoHeightTextarea",
  },
};
