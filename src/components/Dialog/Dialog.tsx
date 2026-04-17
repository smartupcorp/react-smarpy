"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Dialog.module.scss";
import type { BaseDialogProps } from "./DialogProps";
import type DialogProps from "./DialogProps";

export default function Dialog<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseDialogProps<BaseComponentColorNameType> =
    DialogProps<BaseComponentColorNameType>,
>(props: ComponentPropsType): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["avatarSize"];
  delete assignedProps["borderStyle"];
  delete assignedProps["borderWidth"];
  delete assignedProps["isRight"];
  delete assignedProps["isAvatarCircle"];
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

  const assignedClassNames = [classNames["dialog"]];
  if (props.isRight) {
    assignedClassNames.push(classNames[`is-right`]);
  } else {
    assignedClassNames.push(classNames[`is-left`]);
  }
  if (props.avatarSize) {
    assignedClassNames.push(classNames[`is-avatar-${props.avatarSize}`]);
  }
  if (props.borderStyle) {
    assignedClassNames.push(classNames[`is-border-style-${props.borderStyle}`]);
  }
  if (props.borderWidth) {
    assignedClassNames.push(classNames[`is-border-width-${props.borderWidth}`]);
  }
  props.isAvatarCircle &&
    assignedClassNames.push(classNames[`is-avatar-circle`]);

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
        ["--smarpy-dialog-color-fore"]: `var(--smarpy-color-${props.colorName}-dialog-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-dialog-color-back"]: `var(--smarpy-color-${props.colorName}-dialog-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-dialog-color-border"]: `var(--smarpy-color-${props.colorName}-dialog-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-dialog-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-dialog-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-dialog-selection-color-back"]: `var(--smarpy-color-${props.colorName}-dialog-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
        ["--smarpy-dialog-avatar-color-back"]: `var(--smarpy-color-${props.colorName}-dialog-back)`,
        ["--smarpy-dialog-avatar-color-border"]: `var(--smarpy-color-${props.colorName}-dialog-border)`,
        ["--smarpy-dialog-name-color-fore"]: `var(--smarpy-color-${props.colorName}-dialog-name-fore)`,
        ["--smarpy-dialog-name-color-back"]: `var(--smarpy-color-${props.colorName}-dialog-name-back)`,
        ["--smarpy-dialog-name-color-border"]: `var(--smarpy-color-${props.colorName}-dialog-name-border)`,
        ["--smarpy-dialog-message-color-fore"]: `var(--smarpy-color-${props.colorName}-dialog-message-fore)`,
        ["--smarpy-dialog-message-color-back"]: `var(--smarpy-color-${props.colorName}-dialog-message-back)`,
        ["--smarpy-dialog-message-color-border"]: `var(--smarpy-color-${props.colorName}-dialog-message-border)`,
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
