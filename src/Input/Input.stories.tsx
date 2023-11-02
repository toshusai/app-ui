import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export const Basic: StoryObj<typeof meta> = {};
