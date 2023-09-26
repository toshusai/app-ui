import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from ".";
import { Button } from "../styled";

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
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">
          <input type="text" />
        </Modal>
      </div>
    );
  },
};
