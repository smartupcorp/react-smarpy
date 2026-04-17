"use client";

import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Container.module.scss";
import type { BaseContainerProps } from "./ContainerProps";
import type ContainerProps from "./ContainerProps";

export default function Container<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseContainerProps<BaseComponentColorNameType> =
    ContainerProps<BaseComponentColorNameType>,
>(props: ComponentPropsType) {
  const assignedProps = { ...props };
  delete assignedProps["gutter"];
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

  const assignedClassNames: string[] = [classNames["container"]];

  if (props.gutter) {
    if (typeof props.gutter === "string") {
      assignedClassNames.push(classNames[`has-gutter-${props.gutter}`]);
    } else if (typeof props.gutter === "number") {
      assignedClassNames.push(classNames[`has-gutter-${props.gutter}rem`]);
    } else {
      if (props.gutter.x) {
        if (typeof props.gutter.x === "string") {
          assignedClassNames.push(classNames[`has-gutter-x-${props.gutter.x}`]);
        } else if (typeof props.gutter.x === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-x-${props.gutter.x}rem`]
          );
        }
      }
      if (props.gutter.y) {
        if (typeof props.gutter.y === "string") {
          assignedClassNames.push(classNames[`has-gutter-y-${props.gutter.y}`]);
        } else if (typeof props.gutter.y === "number") {
          assignedClassNames.push(
            classNames[`has-gutter-y-${props.gutter.y}rem`]
          );
        }
      }
    }
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
