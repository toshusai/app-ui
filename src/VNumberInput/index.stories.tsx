import type { Meta, StoryObj } from "@storybook/react";
import { VNumberInput } from ".";
import { useState } from "react";
import { screen, userEvent } from "@storybook/testing-library";

const meta = {
  component: VNumberInput,
  argTypes: {},
} satisfies Meta<typeof VNumberInput>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  render: (args) => {
    return <VNumberInput {...args} />;
  },
};

export const _123: StoryObj<typeof meta> = {
  name: "123",
  render: (args) => {
    const [value, setValue] = useState(0);
    return <VNumberInput {...args} value={value} onInput={setValue} />;
  },
  play: async () => {
    const el = document.querySelector("input")!;
    await userEvent.type(el, "123");
    el.blur();
  }
}
export const _2x3: StoryObj<typeof meta> = {
  name: "2 * 3",
  render: (args) => {
    const [value, setValue] = useState(0);
    return <VNumberInput {...args} value={value} onInput={setValue}
    />;
  },
  play: async () => {
    const el = document.querySelector("input")!;
    await userEvent.type(el, "2 * 3");
    el.blur();
  }
}

