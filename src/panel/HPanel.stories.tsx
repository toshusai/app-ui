import type { Meta, StoryObj } from "@storybook/react";
import { HPanel, VPanel } from ".";
import { ExampleDiv, Root } from "./__stories__/ExampleDiv";

const meta = {
  component: HPanel,
} satisfies Meta<typeof HPanel>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    left: <ExampleDiv>left</ExampleDiv>,
    right: <ExampleDiv>right</ExampleDiv>,
  },
  render: (args) => (
    <Root>
      <HPanel {...args} />
    </Root>
  ),
};

export const WithVPanel: StoryObj<typeof meta> = {
  args: {
    left: (
      <div
        style={{
          width: "100%",
        }}
      >
        <VPanel
          top={<ExampleDiv>top</ExampleDiv>}
          bottom={<ExampleDiv>bottom</ExampleDiv>}
        />
      </div>
    ),
    right: <ExampleDiv>right</ExampleDiv>,
  },
  render: (args) => {
    return (
      <Root>
        <HPanel {...args} />
      </Root>
    );
  },
};
