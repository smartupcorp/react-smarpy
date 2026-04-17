"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Label.module.scss";
import type LabelProps from "./LabelProps";
import type { BaseLabelProps } from "./LabelProps";

export default function Label<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseLabelProps<BaseComponentColorNameType> =
    LabelProps<BaseComponentColorNameType>,
>(props: ComponentPropsType) {
  const assignedProps = { ...props };

  const assignedClassNames: string[] = [classNames["label"]];

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
        ["--smarpy-label-color-fore"]: `var(--smarpy-color-${props.colorName}-label-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-label-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-label-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-label-selection-color-back"]: `var(--smarpy-color-${props.colorName}-label-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
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
    <label
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
