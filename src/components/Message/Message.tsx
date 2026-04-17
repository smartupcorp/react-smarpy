"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Message.module.scss";
import type MessageProps from "./MessageProps";
import type { BaseMessageProps } from "./MessageProps";

export default function Message<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseMessageProps<BaseComponentColorNameType> =
    MessageProps<BaseComponentColorNameType>,
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

  const assignedClassNames: string[] = [classNames["message"]];

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
        ["--smarpy-message-color-fore"]: `var(--smarpy-color-${props.colorName}-message-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-message-color-back"]: `var(--smarpy-color-${props.colorName}-message-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-message-color-border"]: `var(--smarpy-color-${props.colorName}-message-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-message-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-message-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-message-selection-color-back"]: `var(--smarpy-color-${props.colorName}-message-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
        ["--smarpy-message-header-color-fore"]: `var(--smarpy-color-${props.colorName}-message-header-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-message-header-color-back"]: `var(--smarpy-color-${props.colorName}-message-header-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-message-header-color-border"]: `var(--smarpy-color-${props.colorName}-message-header-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-message-body-color-fore"]: `var(--smarpy-color-${props.colorName}-message-body-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-message-body-color-back"]: `var(--smarpy-color-${props.colorName}-message-body-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-message-body-color-border"]: `var(--smarpy-color-${props.colorName}-message-body-border, var(--smarpy-color-${props.colorName}-border))`,
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
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
