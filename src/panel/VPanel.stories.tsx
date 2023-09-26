import type { Meta, StoryObj } from "@storybook/react";
import { HPanel, VPanel } from ".";
import { ExampleDiv, Root } from "./__stories__/ExampleDiv";

const meta = {
  component: VPanel,
} satisfies Meta<typeof VPanel>;

export default meta;

export const Basic: StoryObj<typeof meta> = {
  args: {
    top: <ExampleDiv>top</ExampleDiv>,
    bottom: <ExampleDiv>bottom</ExampleDiv>,
  },
  render: (args) => {
    return (
      <Root>
        <VPanel {...args} />
      </Root>
    );
  },
};

export const WithHPanel: StoryObj<typeof meta> = {
  args: {
    top: (
      <div
        style={{
          width: "100%",
        }}
      >
        <HPanel
          left={<ExampleDiv>left</ExampleDiv>}
          right={<ExampleDiv>right</ExampleDiv>}
        />
      </div>
    ),
    bottom: <ExampleDiv>bottom</ExampleDiv>,
  },
  render: (args) => {
    return (
      <Root>
        <VPanel {...args} />
      </Root>
    );
  },
};
