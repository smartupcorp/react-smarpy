"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Card.module.scss";
import type CardProps from "./CardProps";
import type { BaseCardProps } from "./CardProps";

export default function Card<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseCardProps<BaseComponentColorNameType> =
    CardProps<BaseComponentColorNameType>,
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

  const assignedClassNames = [classNames["card"]];
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
        ["--smarpy-card-color-fore"]: `var(--smarpy-color-${props.colorName}-card-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-card-color-back"]: `var(--smarpy-color-${props.colorName}-card-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-card-color-border"]: `var(--smarpy-color-${props.colorName}-card-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-card-color-shadow"]: `var(--smarpy-color-${props.colorName}-card-shadow, var(--smarpy-color-${props.colorName}-shadow))`,
        ["--smarpy-card-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-card-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-card-selection-color-back"]: `var(--smarpy-color-${props.colorName}-card-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
        ["--smarpy-card-header-color-fore"]: `var(--smarpy-color-${props.colorName}-card-header-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-card-header-color-back"]: `var(--smarpy-color-${props.colorName}-card-header-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-card-header-color-border"]: `var(--smarpy-color-${props.colorName}-card-header-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-card-body-color-fore"]: `var(--smarpy-color-${props.colorName}-card-body-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-card-body-color-back"]: `var(--smarpy-color-${props.colorName}-card-body-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-card-body-color-border"]: `var(--smarpy-color-${props.colorName}-card-body-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-card-footer-color-fore"]: `var(--smarpy-color-${props.colorName}-card-footer-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-card-footer-color-back"]: `var(--smarpy-color-${props.colorName}-card-footer-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-card-footer-color-border"]: `var(--smarpy-color-${props.colorName}-card-footer-border, var(--smarpy-color-${props.colorName}-border))`,
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
