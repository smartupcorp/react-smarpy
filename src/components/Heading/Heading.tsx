"use client";

import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./Heading.module.scss";
import type HeadingProps from "./HeadingProps";
import type { BaseHeadingProps } from "./HeadingProps";

export default function Heading<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseHeadingProps<BaseComponentColorNameType> =
    HeadingProps<BaseComponentColorNameType>,
>(props: ComponentPropsType): React.ReactElement {
  const assignedProps = { ...props };
  delete assignedProps["level"];
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

  const level = props.level;
  const assignedClassNames: string[] = [classNames[`heading-${props.level}`]];

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

  if (props.as) {
    return (
      <props.as
        {...assignedProps}
        className={assignedClassNames.join(" ")}
        css={css}
      />
    );
  }

  if (level) {
    switch (level) {
      case 1:
        return (
          <h1
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 2:
        return (
          <h2
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 3:
        return (
          <h3
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 4:
        return (
          <h4
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 5:
        return (
          <h5
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
      case 6:
        return (
          <h6
            {...assignedProps}
            className={assignedClassNames.join(" ")}
            css={css}
          />
        );
    }
  }

  return (
    <h1 {...assignedProps} className={assignedClassNames.join(" ")} css={css} />
  );
}
