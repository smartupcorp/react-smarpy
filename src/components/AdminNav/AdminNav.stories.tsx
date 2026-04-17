import type { Meta, StoryObj } from "@storybook/react-vite";

import Smarpy from "../../base/Smarpy";
import AdminNav from "./AdminNav";
import Admin from "../../layouts/Admin";
import AdminSidebar from "../../layouts/AdminSidebar";
import AdminMain from "../../layouts/AdminMain";
import AdminNavBrand from "../AdminNavBrand";
import AdminNavMenu from "../AdminNavMenu";
import AdminNavMenuItem from "../AdminNavMenuItem";
import AdminNavMenuItemBasic from "../AdminNavMenuItemBasic";
import AdminNavBrandCollapsed from "../AdminNavBrandCollapsed";
import AdminNavBrandBasic from "../AdminNavBrandBasic";
import AdminNavMenuItemCollapsed from "../AdminNavMenuItemCollapsed";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/AdminNav",
  component: AdminNav,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text",
    },
  },
} satisfies Meta<typeof AdminNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <Admin>
        <AdminSidebar>
          <AdminNav {...props}>
            <AdminNavBrand>
              <AdminNavBrandCollapsed>{"s"}</AdminNavBrandCollapsed>
              <AdminNavBrandBasic>{"smarpy"}</AdminNavBrandBasic>
            </AdminNavBrand>
            <AdminNavMenu>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapsed>{"M1"}</AdminNavMenuItemCollapsed>
                <AdminNavMenuItemBasic>{"Menu 1"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapsed>{"M2"}</AdminNavMenuItemCollapsed>
                <AdminNavMenuItemBasic>{"Menu 2"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapsed>{"M3"}</AdminNavMenuItemCollapsed>
                <AdminNavMenuItemBasic>{"Menu 3"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapsed>{"M4"}</AdminNavMenuItemCollapsed>
                <AdminNavMenuItemBasic>{"Menu 4"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
            </AdminNavMenu>
          </AdminNav>
        </AdminSidebar>
        <AdminMain></AdminMain>
      </Admin>
    </Smarpy>
  ),
};

export const IsSidebarCollapsed: Story = {
  args: {},
  render: (props) => (
    <Smarpy>
      <Admin isSidebarCollapse={true}>
        <AdminSidebar>
          <AdminNav {...props}>
            <AdminNavBrand>
              <AdminNavBrandCollapsed>{"s"}</AdminNavBrandCollapsed>
              <AdminNavBrandBasic>{"smarpy"}</AdminNavBrandBasic>
            </AdminNavBrand>
            <AdminNavMenu>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapsed>{"M1"}</AdminNavMenuItemCollapsed>
                <AdminNavMenuItemBasic>{"Menu 1"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapsed>{"M2"}</AdminNavMenuItemCollapsed>
                <AdminNavMenuItemBasic>{"Menu 2"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapsed>{"M3"}</AdminNavMenuItemCollapsed>
                <AdminNavMenuItemBasic>{"Menu 3"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
              <AdminNavMenuItem>
                <AdminNavMenuItemCollapsed>{"M4"}</AdminNavMenuItemCollapsed>
                <AdminNavMenuItemBasic>{"Menu 4"}</AdminNavMenuItemBasic>
              </AdminNavMenuItem>
            </AdminNavMenu>
          </AdminNav>
        </AdminSidebar>
        <AdminMain></AdminMain>
      </Admin>
    </Smarpy>
  ),
};
