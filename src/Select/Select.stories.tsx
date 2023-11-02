import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

export const Basic: StoryObj<typeof meta> = {};
