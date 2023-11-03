import type { Meta, StoryObj } from "@storybook/react";
import { VInput } from "./VInput";
const meta = {
  component: VInput,
} satisfies Meta<typeof VInput>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {},
};
