"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Button.module.scss";
import type ButtonProps from "./ButtonProps";
import type { BaseButtonProps } from "./ButtonProps";

export default function Button<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseButtonProps<BaseComponentColorNameType> =
    ButtonProps<BaseComponentColorNameType>,
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

  const assignedClassNames = [classNames["button"]];

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
        ["--smarpy-button-color-fore"]: `var(--smarpy-color-${props.colorName}-button-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-button-color-back"]: `var(--smarpy-color-${props.colorName}-button-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-button-color-border"]: `var(--smarpy-color-${props.colorName}-button-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-button-focus-color-fore"]: `var(--smarpy-color-${props.colorName}-button-focus-fore, var(--smarpy-color-${props.colorName}-focus-fore))`,
        ["--smarpy-button-focus-color-back"]: `var(--smarpy-color-${props.colorName}-button-focus-back, var(--smarpy-color-${props.colorName}-focus-back))`,
        ["--smarpy-button-focus-color-border"]: `var(--smarpy-color-${props.colorName}-button-focus-border, var(--smarpy-color-${props.colorName}-focus-border))`,
        ["--smarpy-button-hover-color-fore"]: `var(--smarpy-color-${props.colorName}-button-hover-fore, var(--smarpy-color-${props.colorName}-hover-fore))`,
        ["--smarpy-button-hover-color-back"]: `var(--smarpy-color-${props.colorName}-button-hover-back, var(--smarpy-color-${props.colorName}-hover-back))`,
        ["--smarpy-button-hover-color-border"]: `var(--smarpy-color-${props.colorName}-button-hover-border, var(--smarpy-color-${props.colorName}-hover-border))`,
        ["--smarpy-button-active-color-fore"]: `var(--smarpy-color-${props.colorName}-button-active-fore, var(--smarpy-color-${props.colorName}-active-fore))`,
        ["--smarpy-button-active-color-back"]: `var(--smarpy-color-${props.colorName}-button-active-back, var(--smarpy-color-${props.colorName}-active-back))`,
        ["--smarpy-button-active-color-border"]: `var(--smarpy-color-${props.colorName}-button-active-border, var(--smarpy-color-${props.colorName}-active-border))`,
        ["--smarpy-button-disabled-color-fore"]: `var(--smarpy-color-${props.colorName}-button-disabled-fore, var(--smarpy-color-${props.colorName}-disabled-fore))`,
        ["--smarpy-button-disabled-color-back"]: `var(--smarpy-color-${props.colorName}-button-disabled-back, var(--smarpy-color-${props.colorName}-disabled-back))`,
        ["--smarpy-button-disabled-color-border"]: `var(--smarpy-color-${props.colorName}-button-disabled-border, var(--smarpy-color-${props.colorName}-disabled-border))`,
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
    <button
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
