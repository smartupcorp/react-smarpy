"use client";

import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Ruby.module.scss";
import type RubyProps from "./RubyProps";

export default function Ruby<
  BaseComponentColorNameType extends string = ColorName,
>(props: RubyProps<BaseComponentColorNameType>) {
  const assignedProps = { ...props };
  delete assignedProps["rubyText"];
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
  // delete assignedProps["as"];
  //#endregion BaseComponentProps

  const assignedClassNames: string[] = [classNames["element"]];

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

  const css = emotionCssUtility.getEmotionCss<BaseComponentColorNameType>({
    fore: props.fore,
    back: props.back,
    border: props.border,
    highlighter: props.highlighter,
    spacing: props.spacing,
    sizing: props.sizing,
    positioning: props.positioning,
    css: props.css,
  });

  return (
    <ruby {...assignedProps} className={assignedClassNames.join(" ")} css={css}>
      {props.children}
      <rp>(</rp>
      <rt>{props.rubyText}</rt>
      <rp>)</rp>
    </ruby>
  );
}
