import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Basic: StoryObj<typeof meta> = {};
