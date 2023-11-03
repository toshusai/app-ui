import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from ".";
import { Button, Input } from "..";

const meta = {
  component: Modal,
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    isOpen: false,
    canEscapeKeyClose: true,
    title: "Modal",
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">
          <Input type="text" />
        </Modal>
      </>
    );
  },
};
