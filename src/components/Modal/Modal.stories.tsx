import type { Meta, StoryObj } from "@storybook/react-vite";

import Modal from "./Modal";
import Smarpy from "../../base/Smarpy";
import ModalContent from "../ModalContent/ModalContent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text",
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    isActive: true,
  },
  render: (props) => (
    <Smarpy>
      {"Body"}
      <Modal {...props}>
        {"Modal"}
        <ModalContent>{"ModalContent"}</ModalContent>
      </Modal>
    </Smarpy>
  ),
};
