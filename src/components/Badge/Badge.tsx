"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Badge.module.scss";
import type { BaseBadgeProps } from "./BadgeProps";
import type BadgeProps from "./BadgeProps";

export default function Badge<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseBadgeProps<BaseComponentColorNameType> =
    BadgeProps<BaseComponentColorNameType>,
>(props: ComponentPropsType) {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSmall"];
  // //#region BaseComponentProps
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

  const assignedClassNames = [classNames["badge"]];
  if (props.isSmall) {
    assignedClassNames.push(classNames[`is-small`]);
  }

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
        ["--smarpy-badge-color-fore"]: `var(--smarpy-color-${props.colorName}-badge-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-badge-color-back"]: `var(--smarpy-color-${props.colorName}-badge-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-badge-color-border"]: `var(--smarpy-color-${props.colorName}-badge-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-badge-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-badge-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-badge-selection-color-back"]: `var(--smarpy-color-${props.colorName}-badge-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
        ["--smarpy-badge-focus-color-fore"]: `var(--smarpy-color-${props.colorName}-badge-focus-fore, var(--smarpy-color-${props.colorName}-focus-fore))`,
        ["--smarpy-badge-focus-color-back"]: `var(--smarpy-color-${props.colorName}-badge-focus-back, var(--smarpy-color-${props.colorName}-focus-back))`,
        ["--smarpy-badge-focus-color-border"]: `var(--smarpy-color-${props.colorName}-badge-focus-border, var(--smarpy-color-${props.colorName}-focus-border))`,
        ["--smarpy-badge-hover-color-fore"]: `var(--smarpy-color-${props.colorName}-badge-hover-fore, var(--smarpy-color-${props.colorName}-hover-fore))`,
        ["--smarpy-badge-hover-color-back"]: `var(--smarpy-color-${props.colorName}-badge-hover-back, var(--smarpy-color-${props.colorName}-hover-back))`,
        ["--smarpy-badge-hover-color-border"]: `var(--smarpy-color-${props.colorName}-badge-hover-border, var(--smarpy-color-${props.colorName}-hover-border))`,
        ["--smarpy-badge-active-color-fore"]: `var(--smarpy-color-${props.colorName}-badge-active-fore, var(--smarpy-color-${props.colorName}-active-fore))`,
        ["--smarpy-badge-active-color-back"]: `var(--smarpy-color-${props.colorName}-badge-active-back, var(--smarpy-color-${props.colorName}-active-back))`,
        ["--smarpy-badge-active-color-border"]: `var(--smarpy-color-${props.colorName}-badge-active-border, var(--smarpy-color-${props.colorName}-active-border))`,
        ["--smarpy-badge-disabled-color-fore"]: `var(--smarpy-color-${props.colorName}-badge-disabled-fore, var(--smarpy-color-${props.colorName}-disabled-fore))`,
        ["--smarpy-badge-disabled-color-back"]: `var(--smarpy-color-${props.colorName}-badge-disabled-back, var(--smarpy-color-${props.colorName}-disabled-back))`,
        ["--smarpy-badge-disabled-color-border"]: `var(--smarpy-color-${props.colorName}-badge-disabled-border, var(--smarpy-color-${props.colorName}-disabled-border))`,
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
    <span
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
