import type { Meta, StoryObj } from "@storybook/react-vite";

import Smarpy from "../../base/Smarpy";
import Hamburger from "../Hamburger";
import NavAccordion from "../NavAccordion";
import NavBrand from "../NavBrand";
import NavBrandCenter from "../NavBrandCenter";
import NavBrandLeft from "../NavBrandLeft";
import NavBrandRight from "../NavBrandRight";
import NavMenu from "../NavMenu";
import NavMenuItem from "../NavMenuItem";
import NavStatic from "../NavStatic";
import Nav from "./Nav";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Nav",
  component: Nav,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text",
    },
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

const navMenuItems = (
  <>
    <NavMenuItem as="a" href="/">
      {"NavMenuItem1"}
    </NavMenuItem>
    <NavMenuItem as="a" href="/">
      {"NavMenuItem2"}
    </NavMenuItem>
    <NavMenuItem as="a" href="/">
      {"NavMenuItem3"}
    </NavMenuItem>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <Nav {...props}>
        <NavAccordion isTabletOrLess>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger />
            </NavBrandLeft>
            <NavBrandCenter>{"Center"}</NavBrandCenter>
            <NavBrandRight></NavBrandRight>
          </NavBrand>
          <NavMenu isActive={true}>{navMenuItems}</NavMenu>
        </NavAccordion>
        <NavStatic isDesktopOrMore>
          <NavBrand>
            <NavBrandLeft>{"NavBrandLeft"}</NavBrandLeft>
            <NavBrandCenter>{"NavBrandCenter"}</NavBrandCenter>
            <NavBrandRight>{"NavBrandRight"}</NavBrandRight>
          </NavBrand>
          <NavMenu>{navMenuItems}</NavMenu>
        </NavStatic>
      </Nav>
    </Smarpy>
  ),
};
