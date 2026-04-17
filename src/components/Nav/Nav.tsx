"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Nav.module.scss";
import type NavProps from "./NavProps";
import type { BaseNavProps } from "./NavProps";

export default function Nav<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseNavProps<BaseComponentColorNameType> =
    NavProps<BaseComponentColorNameType>,
>(props: ComponentPropsType) {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["border"];
  delete assignedProps["highlighter"];
  delete assignedProps["positioning"];
  delete assignedProps["sizing"];
  delete assignedProps["spacing"];
  delete assignedProps["className"];
  delete assignedProps["css"];
  delete assignedProps["as"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["nav"]];

  const utilityClassNames = classNameUtility.getUtilityClassNames({
    fore: props.fore,
    back: props.back,
    border: props.border,
    highlighter: props.highlighter,
    spacing: props.spacing,
    sizing: props.sizing,
    positioning: props.positioning,
  });
  if (utilityClassNames) {
    assignedClassNames.push(...utilityClassNames);
  }

  if (props.className) {
    assignedClassNames.push(props.className);
  }

  const colorNameCss: Interpolation<Theme> = props.colorName
    ? {
        ["--smarpy-nav-color-fore"]: `var(--smarpy-color-${props.colorName}-nav-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-color-fore"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-color-shadow"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-shadow, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-icon-color-shadow"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-icon-shadow, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-hover-color-fore"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-hover-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-hover-color-shadow"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-hover-shadow, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-icon-hover-color-shadow"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-icon-hover-shadow, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-active-color-fore"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-active-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-active-color-shadow"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-active-shadow, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-icon-active-color-shadow"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-icon-active-shadow, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-disabled-color-fore"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-disabled-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-disabled-color-shadow"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-disabled-shadow, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-nav-menu-item-icon-disabled-color-shadow"]: `var(--smarpy-color-${props.colorName}-nav-menu-item-icon-disabled-shadow, var(--smarpy-color-${props.colorName}-fore))`,
      }
    : undefined;

  const optionalCss = {
    ...colorNameCss,
  };

  const css = emotionCssUtility.getEmotionCss<BaseComponentColorNameType>(
    {
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
      sizing: props.sizing,
      positioning: props.positioning,
      css: props.css,
    },
    optionalCss,
  );

  return props.as ? (
    <props.as
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  ) : (
    <nav
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
