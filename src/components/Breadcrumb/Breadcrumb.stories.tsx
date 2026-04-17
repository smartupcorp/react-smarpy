import type { Meta, StoryObj } from "@storybook/react-vite";

import Smarpy from "../../base/Smarpy";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "../BreadcrumbItem";
import BreadcrumbWrapper from "../BreadcrumbWrapper";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text",
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <BreadcrumbWrapper>
        <Breadcrumb {...props}>
          <BreadcrumbItem>{"smarpy"}</BreadcrumbItem>
          <BreadcrumbItem>{"react"}</BreadcrumbItem>
          <BreadcrumbItem>{"storybook"}</BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbWrapper>
    </Smarpy>
  ),
};
