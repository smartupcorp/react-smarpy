import type { Meta, StoryObj } from "@storybook/react-vite";

import Message from "./Message";
import Smarpy from "../../base/Smarpy";
import MessageHeader from "../MessageHeader/MessageHeader";
import MessageBody from "../MessageBody/MessageBody";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text",
    },
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <Smarpy>
      <Message {...props}>
        <MessageHeader>
          {"Header"}
        </MessageHeader>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </Smarpy>
  ),
};

export const BodyOnly: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <Smarpy>
      <Message {...props}>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </Smarpy>
  ),
};
