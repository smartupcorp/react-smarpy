"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Accordion.module.scss";
import type { BaseAccordionProps } from "./AccordionProps";
import type AccordionProps from "./AccordionProps";

export default function Accordion<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseAccordionProps<BaseComponentColorNameType> =
    AccordionProps<BaseComponentColorNameType>,
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

  const assignedClassNames = [classNames["accordion"]];

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
        ["--smarpy-accordion-color-fore"]: `var(--smarpy-color-${props.colorName}-accordion-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-accordion-color-back"]: `var(--smarpy-color-${props.colorName}-accordion-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-accordion-color-border"]: `var(--smarpy-color-${props.colorName}-accordion-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-accordion-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-accordion-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-accordion-selection-color-back"]: `var(--smarpy-color-${props.colorName}-accordion-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
        ["--smarpy-accordion-summary-color-fore"]: `var(--smarpy-color-${props.colorName}-accordion-summary-fore)`,
        ["--smarpy-accordion-summary-color-back"]: `var(--smarpy-color-${props.colorName}-accordion-summary-back)`,
        ["--smarpy-accordion-summary-color-border"]: `var(--smarpy-color-${props.colorName}-accordion-summary-border)`,
        ["--smarpy-accordion-details-color-fore"]: `var(--smarpy-color-${props.colorName}-accordion-details-fore)`,
        ["--smarpy-accordion-details-color-back"]: `var(--smarpy-color-${props.colorName}-accordion-details-back)`,
        ["--smarpy-accordion-details-color-border"]: `var(--smarpy-color-${props.colorName}-accordion-details-border)`,
        ["--smarpy-accordion-summary-focus-color-fore"]: `var(--smarpy-color-${props.colorName}-accordion-summary-focus-fore)`,
        ["--smarpy-accordion-summary-focus-color-back"]: `var(--smarpy-color-${props.colorName}-accordion-summary-focus-back)`,
        ["--smarpy-accordion-summary-focus-color-border"]: `var(--smarpy-color-${props.colorName}-accordion-summary-focus-border)`,
        ["--smarpy-accordion-summary-hover-color-fore"]: `var(--smarpy-color-${props.colorName}-accordion-summary-hover-fore)`,
        ["--smarpy-accordion-summary-hover-color-back"]: `var(--smarpy-color-${props.colorName}-accordion-summary-hover-back)`,
        ["--smarpy-accordion-summary-hover-color-border"]: `var(--smarpy-color-${props.colorName}-accordion-summary-hover-border)`,
        ["--smarpy-accordion-summary-active-color-fore"]: `var(--smarpy-color-${props.colorName}-accordion-summary-active-fore)`,
        ["--smarpy-accordion-summary-active-color-back"]: `var(--smarpy-color-${props.colorName}-accordion-summary-active-back)`,
        ["--smarpy-accordion-summary-active-color-border"]: `var(--smarpy-color-${props.colorName}-accordion-summary-active-border)`,
        ["--smarpy-accordion-summary-disabled-color-fore"]: `var(--smarpy-color-${props.colorName}-accordion-summary-disabled-fore)`,
        ["--smarpy-accordion-summary-disabled-color-back"]: `var(--smarpy-color-${props.colorName}-accordion-summary-disabled-back)`,
        ["--smarpy-accordion-summary-disabled-color-border"]: `var(--smarpy-color-${props.colorName}-accordion-summary-active-border)`,
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
    <details
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
