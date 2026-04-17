"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Footer.module.scss";
import type FooterProps from "./FooterProps";
import type { BaseFooterProps } from "./FooterProps";

export default function Footer<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseFooterProps<BaseComponentColorNameType> =
    FooterProps<BaseComponentColorNameType>,
>(props: ComponentPropsType) {
  const assignedProps = { ...props };
  delete assignedProps["colorName"];
  delete assignedProps["isSticky"];
  delete assignedProps["isFixed"];
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

  const assignedClassNames: string[] = [classNames["footer"]];
  if (props.colorName) {
    assignedClassNames.push(classNames[`is-${props.colorName}`]);
  }
  if (props.isSticky) {
    assignedClassNames.push(classNames[`is-sticky`]);
  }
  if (props.isFixed) {
    assignedClassNames.push(classNames[`is-fixed`]);
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
        ["--smarpy-footer-color-fore"]: `var(--smarpy-color-${props.colorName}-footer-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-footer-color-back"]: `var(--smarpy-color-${props.colorName}-footer-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-footer-selection-color-fore"]: `var(--smarpy-color-${props.colorName}-footer-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-footer-selection-color-back"]: `var(--smarpy-color-${props.colorName}-footer-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
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
    <footer
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
