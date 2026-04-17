import type { Meta, StoryObj } from "@storybook/react-vite";

import Label from "./Label";
import Smarpy from "../../base/Smarpy";
import type LabelProps from "./LabelProps";
import type { ColorName } from "../../types";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props: LabelProps<ColorName>) => (
    <Smarpy>
      <Label {...props}>{"Plain"}</Label>
    </Smarpy>
  ),
};
