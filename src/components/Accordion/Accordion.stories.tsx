import type { Meta, StoryObj } from "@storybook/react-vite";

import Accordion from "./Accordion";
import Smarpy from "../../base/Smarpy";
import AccordionSummary from "../AccordionSummary/AccordionSummary";
import AccordionDetails from "../AccordionDetails/AccordionDetails";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: "red"
  },
  render: (props) => (
    <Smarpy>
      <Accordion {...props}>
        <AccordionSummary>
          {"AccordionSummary"}
        </AccordionSummary>
        <AccordionDetails>
          {"AccordionDetails"}
        </AccordionDetails>
      </Accordion>
    </Smarpy>
  ),
};
