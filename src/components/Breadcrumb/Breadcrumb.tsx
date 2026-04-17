"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Breadcrumb.module.scss";
import type { BaseBreadcrumbProps } from "./BreadcrumbProps";
import type BreadcrumbProps from "./BreadcrumbProps";

export default function Breadcrumb<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseBreadcrumbProps<BaseComponentColorNameType> =
    BreadcrumbProps<BaseComponentColorNameType>,
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

  const assignedClassNames = [classNames["breadcrumb"]];

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
        ["--smarpy-breadcrumb-color-fore"]: `var(--smarpy-color-${props.colorName}-breadcrumb-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-breadcrumb-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-breadcrumb-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-breadcrumb-selection-color-back"]: `var(--smarpy-color-${props.colorName}-breadcrumb-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
        ["--smarpy-breadcrumb-item-color-fore"]: `var(--smarpy-color-${props.colorName}-breadcrumb-item-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-breadcrumb-divider-color-fore"]: `var(--smarpy-color-${props.colorName}-breadcrumb-divider-fore, var(--smarpy-color-${props.colorName}-fore))`,
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
    <ul {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
