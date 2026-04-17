import { expect, test } from "vitest";
import smarpyStyleUtility from "./smarpyStyleUtility";
import type { ColorName, SmarpyCssVariables } from "../../react-smarpy";

const colors: string[] = [
  "gray",
  "red",
  "coral",
  "orange",
  "yellow",
  "lime",
  "green",
  "cyan",
  "blue",
  "violet",
  "magenta",
];

const colorchromaGray = 0.04;
const colorchromaColorful = 0.11;

test("change color black.", () => {
  const cssVariables: SmarpyCssVariables<ColorName> = {
    color: {
      black: {
        hue: 190,
        lightness: 13,
        chroma: colorchromaGray,
      },
    },
  };

  expect(
    smarpyStyleUtility.getSmarpyCssVariableStyles(cssVariables)
  ).toStrictEqual([":root{--smarpy-color-black-oklch: 13% 0.04 190;--smarpy-color-black: oklch(var(--smarpy-color-black-oklch));}"]);
});

test("change color white.", () => {
  const cssVariables: SmarpyCssVariables<ColorName> = {
    color: {
      white: {
        hue: 190,
        lightness: 98,
        chroma: colorchromaGray,
      },
    },
  };

  expect(
    smarpyStyleUtility.getSmarpyCssVariableStyles(cssVariables)
  ).toStrictEqual([":root{--smarpy-color-white-oklch: 98% 0.04 190;--smarpy-color-white: oklch(var(--smarpy-color-white-oklch));}"]);
});

colors.forEach((color) => {
  for (let i = 19; i >= 1; i--) {
    const gradation = i * 50;
    test(`change color ${color}[${gradation}]`, () => {
      const cssVariables: SmarpyCssVariables<ColorName> = {
        color: {
          [color]: {
            [gradation]: {
              hue: 0,
              lightness: 98,
              chroma: colorchromaColorful,
            },
          },
        },
      };
      const gradStr = gradation < 100 ? "050" : `${gradation}`;
      expect(
        smarpyStyleUtility.getSmarpyCssVariableStyles(cssVariables)
      ).toStrictEqual([
        `:root{--smarpy-color-${color}-${gradStr}-oklch: 98% 0.11 0;--smarpy-color-${color}-${gradStr}: oklch(var(--smarpy-color-${color}-${gradStr}-oklch));}`,
      ]);
    });
  }
});
