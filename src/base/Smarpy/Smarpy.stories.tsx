import type { Meta, StoryObj } from "@storybook/react-vite";

import Smarpy from "./Smarpy";
import {
  Angle,
  Button,
  ColorName,
  Div,
  Dot,
  Gradation,
  Hamburger,
  Header,
  Main,
  Message,
  MessageBody,
  MessageHeader,
  Nav,
  NavAccordion,
  NavBrand,
  NavBrandCenter,
  NavBrandLeft,
  NavBrandRight,
  NavMenu,
  NavMenuItem,
  NavStatic,
  Oklch,
  Percentage,
  SmarpyCssVariable,
} from "../../react-smarpy";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Base/Smarpy",
  component: Smarpy,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Smarpy>;

export default meta;
type Story = StoryObj<typeof meta>;

type ColorInfo = {
  name: ColorName;
  hue: Angle;
  chroma: number;
};

const colorChromaGray = 0.02;
const colorChromaColorful = 0.14;

const colorLightness500 = 61;
const colorLightnessOffsetLighter = 4;
const colorLightnessOffsetDarker = 4;

const colorGray: ColorInfo = {
  name: "gray",
  hue: 90,
  chroma: colorChromaGray,
};
const colorRed: ColorInfo = {
  name: "red",
  hue: 0,
  chroma: colorChromaColorful,
};
const colorOrange: ColorInfo = {
  name: "orange",
  hue: 58,
  chroma: colorChromaColorful,
};

const colorYellow: ColorInfo = {
  name: "yellow",
  hue: 102,
  chroma: colorChromaColorful,
};

const colorGreen: ColorInfo = {
  name: "green",
  hue: 132,
  chroma: colorChromaColorful,
};

const colorCyan: ColorInfo = {
  name: "cyan",
  hue: 212,
  chroma: colorChromaColorful,
};

const colorBlue: ColorInfo = {
  name: "blue",
  hue: 262,
  chroma: colorChromaColorful,
};

const colorViolet: ColorInfo = {
  name: "violet",
  hue: 286,
  chroma: colorChromaColorful,
};

const colorMagenta: ColorInfo = {
  name: "magenta",
  hue: 316,
  chroma: colorChromaColorful,
};

function getColorVar(color: ColorInfo): Gradation {
  let colorVar: Gradation = {};
  for (let i = 19; i >= 1; i--) {
    const gradation = i * 50;
    const chroma = colorChromaColorful;

    const lightness =
      i < 10
        ? colorLightness500 - (10 - i) * colorLightnessOffsetDarker
        : i > 10
        ? colorLightness500 + (i - 10) * colorLightnessOffsetLighter
        : colorLightness500;

    const oklch: Oklch = {
      hue: color.hue,
      lightness: lightness as Percentage,
      chroma: color.name === "gray" ? color.chroma : chroma,
    };
    colorVar = Object.assign(colorVar, {
      [gradation]: oklch,
    });
  }

  return colorVar;
}

function genSmarpyCssVariable(): SmarpyCssVariable {
  let cssVariableSetting: SmarpyCssVariable = {
    color: {
      gray: getColorVar(colorGray),
      red: getColorVar(colorRed),
      orange: getColorVar(colorOrange),
      yellow: getColorVar(colorYellow),
      green: getColorVar(colorGreen),
      cyan: getColorVar(colorCyan),
      blue: getColorVar(colorBlue),
      violet: getColorVar(colorViolet),
      magenta: getColorVar(colorMagenta),
    },
  };

  return cssVariableSetting;
}

const cssVariableSetting = genSmarpyCssVariable();

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

const elem = (
  <>
    <Header>
      <Nav>
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
    </Header>
    <Main>
      <Div spacing={{ padding: 1 }}>
        <Message>
          <MessageHeader>{"Message"}</MessageHeader>
          <MessageBody>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          </MessageBody>
        </Message>
      </Div>
      <Div spacing={{ padding: 1 }}>
        <Button>{"Button"}</Button>
      </Div>
      <Div spacing={{ padding: 1 }}>
        <Dot
          colorName="gray"
          sizing={{
            aspectRatio: "16:9",
            width: "100$"
          }}
        />
      </Div>
      <Div spacing={{ padding: 1 }}>
        <Div fore={{ color: { default: { name: "cyan", lightness: 600 } } }}>
          {"color default cyan 600"}
        </Div>
        <Div
          fore={{
            color: {
              light: { default: { name: "blue", lightness: 500 } },
              dark: { default: { name: "red", lightness: 500 } },
            },
          }}
        >
          {"color light blue 500, dark red 500"}
        </Div>
        <Div
          fore={{
            color: {
              light: { default: { name: "blue", lightness: 500 } },
              dark: { default: { name: "red", lightness: 500 } },
            },
          }}
          css={{
            fontSize: "2rem",
          }}
        >
          {"css props"}
        </Div>
      </Div>
    </Main>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightTheme: Story = {
  args: {
    colorScheme: "light",
    cssVariableSetting: cssVariableSetting,
  },
  render: (props) => <Smarpy {...props}>{elem}</Smarpy>,
};

export const DarkTheme: Story = {
  args: {
    colorScheme: "dark",
    cssVariableSetting: cssVariableSetting,
  },
  render: (props) => <Smarpy {...props}>{elem}</Smarpy>,
};
