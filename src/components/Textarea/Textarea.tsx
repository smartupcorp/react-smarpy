"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Textarea.module.scss";
import type { BaseTextareaProps } from "./TextareaProps";
import type TextareaProps from "./TextareaProps";

export default function Textarea<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseTextareaProps<BaseComponentColorNameType> =
    TextareaProps<BaseComponentColorNameType>,
>(props: ComponentPropsType): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  //#region BaseComponentProps
  delete assignedProps["fore"];
  delete assignedProps["back"];
  delete assignedProps["highlighter"];
  delete assignedProps["border"];
  delete assignedProps["spacing"];
  delete assignedProps["css"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["input"]];
  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
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
        ["--smarpy-input-color-fore"]: `var(--smarpy-color-${props.colorName}-input-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-input-color-back"]: `var(--smarpy-color-${props.colorName}-input-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-input-color-border"]: `var(--smarpy-color-${props.colorName}-input-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-input-color-placeholder"]: `var(--smarpy-color-${props.colorName}-input-placeholder, var(--smarpy-color-${props.colorName}-placeholder))`,
        ["--smarpy-input-color-outline"]: `var(--smarpy-color-${props.colorName}-input-outline, var(--smarpy-color-${props.colorName}-outline))`,
        ["--smarpy-input-focus-color-fore"]: `var(--smarpy-color-${props.colorName}-input-focus-fore, var(--smarpy-color-${props.colorName}-focus-fore))`,
        ["--smarpy-input-focus-color-back"]: `var(--smarpy-color-${props.colorName}-input-focus-back, var(--smarpy-color-${props.colorName}-focus-back))`,
        ["--smarpy-input-focus-color-border"]: `var(--smarpy-color-${props.colorName}-input-focus-border, var(--smarpy-color-${props.colorName}-focus-border))`,
        ["--smarpy-input-disabled-color-fore"]: `var(--smarpy-color-${props.colorName}-input-disabled-fore, var(--smarpy-color-${props.colorName}-disabled-fore))`,
        ["--smarpy-input-disabled-color-back"]: `var(--smarpy-color-${props.colorName}-input-disabled-back, var(--smarpy-color-${props.colorName}-disabled-back))`,
        ["--smarpy-input-disabled-color-border"]: `var(--smarpy-color-${props.colorName}-input-disabled-border, var(--smarpy-color-${props.colorName}-disabled-border))`,
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
    <textarea
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
