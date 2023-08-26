import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal } from ".";

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
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Title">
          <input type="text" />
        </Modal>
      </div>
    );
  },
};
