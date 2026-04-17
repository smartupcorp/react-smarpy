import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";
import CardHeader from "../CardHeader/CardHeader";
import CardBody from "../CardBody/CardBody";
import Smarpy from "../../base/Smarpy";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],

  argTypes: {
    colorName: {
      control: "text",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <Smarpy>
      <Card {...props}>
        <CardHeader>{"Title"}</CardHeader>
        <CardBody>{"Body"}</CardBody>
      </Card>
    </Smarpy>
  ),
};
