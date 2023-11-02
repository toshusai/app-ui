import type { Meta, StoryObj } from "@storybook/react";
import { VTextarea } from "./VTextarea";
const meta = {
  component: VTextarea,
} satisfies Meta<typeof VTextarea>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {},
};
