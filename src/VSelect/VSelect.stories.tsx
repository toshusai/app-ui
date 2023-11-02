import type { Meta, StoryObj } from "@storybook/react";
import { VSelect } from "./VSelect";
import { useState } from "react";
const meta = {
  component: VSelect,
} satisfies Meta<typeof VSelect>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    items: [...Array(10).keys()].map((i) => ({
      value: `${i}`,
      label: `Item ${i}`,
    })),
    value: "0",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <VSelect
        {...args}
        value={value}
        onChange={(e) => setValue(e)}
      />
    );
  },
};
