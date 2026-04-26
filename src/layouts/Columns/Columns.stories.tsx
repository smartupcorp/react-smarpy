import type { Meta, StoryObj } from "@storybook/react-vite";

import Columns from "./Columns";
import Smarpy from "../../base/Smarpy";
import { Column } from "../Column";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layouts/Columns",
  component: Columns,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AllAuto: Story = {
  args: {
  },
  render: (props) => (
    <Smarpy>
      <Columns {...props}>
        <Column>
          {"Column1"}
        </Column>
        <Column>
          {"Column2"}
        </Column>
        <Column>
          {"Column3"}
        </Column>
        <Column>
          {"Column4"}
        </Column>
        <Column>
          {"Column5"}
        </Column>
        <Column>
          {"Column6"}
        </Column>
        <Column>
          {"Column7"}
        </Column>
        <Column>
          {"Column8"}
        </Column>
        <Column>
          {"Column9"}
        </Column>
        <Column>
          {"Column10"}
        </Column>
        <Column>
          {"Column11"}
        </Column>
        <Column>
          {"Column12"}
        </Column>
      </Columns>
    </Smarpy>
  ),
};
export const HasGutter1rem: Story = {
  args: {
    gutter: "1rem"
  },
  render: (props) => (
    <Smarpy>
      <Columns {...props}>
        <Column>
          {"Column1"}
        </Column>
        <Column>
          {"Column2"}
        </Column>
        <Column>
          {"Column3"}
        </Column>
        <Column>
          {"Column4"}
        </Column>
        <Column>
          {"Column5"}
        </Column>
        <Column>
          {"Column6"}
        </Column>
        <Column>
          {"Column7"}
        </Column>
        <Column>
          {"Column8"}
        </Column>
        <Column>
          {"Column9"}
        </Column>
        <Column>
          {"Column10"}
        </Column>
        <Column>
          {"Column11"}
        </Column>
        <Column>
          {"Column12"}
        </Column>
      </Columns>
    </Smarpy>
  ),
};

export const TabletOrLess12: Story = {
  args: {
  },
  render: (props) => (
    <Smarpy>
      <Columns {...props}>
        <Column sizeTabletOrLess={12}>
          {"Column1"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column2"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column3"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column4"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column5"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column6"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column7"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column8"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column9"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column10"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column11"}
        </Column>
        <Column sizeTabletOrLess={12}>
          {"Column12"}
        </Column>
      </Columns>
    </Smarpy>
  ),
};

export const Tablet6Mobile12: Story = {
  args: {
  },
  render: (props) => (
    <Smarpy>
      <Columns {...props}>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column1"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column2"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column3"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column4"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column5"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column6"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column7"}
        </Column>
        <Column  sizeTablet={6}sizeMobile={12}>
          {"Column8"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column9"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column10"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column11"}
        </Column>
        <Column sizeTablet={6} sizeMobile={12}>
          {"Column12"}
        </Column>
      </Columns>
    </Smarpy>
  ),
};
