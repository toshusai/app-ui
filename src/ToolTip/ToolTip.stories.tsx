import type { Meta, StoryObj } from "@storybook/react";
import { ToolTip } from "./ToolTip";
import { Button } from "../Button";
const meta = {
  component: ToolTip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToolTip>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    children: "",
    content: "ToolTip",
  },
  render: (args) => {
    return (
      <ToolTip {...args}>
        <Button>???</Button>
      </ToolTip>
    );
  },
};
