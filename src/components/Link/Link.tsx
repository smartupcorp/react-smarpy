"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Link.module.scss";
import type { BaseLinkProps } from "./LinkProps";
import type LinkProps from "./LinkProps";

export default function Link<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseLinkProps<BaseComponentColorNameType> =
    LinkProps<BaseComponentColorNameType>,
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

  const assignedClassNames: string[] = [classNames["link"]];

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
        ["--smarpy-link-color-fore"]: `var(--smarpy-color-${props.colorName}-link-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-link-hover-color-fore"]: `var(--smarpy-color-${props.colorName}-link-hover-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-link-visited-color-fore"]: `var(--smarpy-color-${props.colorName}-link-visited-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-link-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-link-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-link-selection-color-back"]: `var(--smarpy-color-${props.colorName}-link-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
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
    <a {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
