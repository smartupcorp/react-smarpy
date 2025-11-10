"use client";
import { useContext } from "react";
import { SmarpyColorSchemeContext } from "../../contexts";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./Heading.module.scss";
import HeadingProps from "./HeadingProps";

export default function Heading(props: HeadingProps): React.ReactElement {
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
  delete assignedProps["css"];
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

  const colorScheme = useContext(SmarpyColorSchemeContext);

  const css = emotionCssUtility.getEmotionCss(
    {
      fore: props.fore,
      back: props.back,
      border: props.border,
      highlighter: props.highlighter,
      spacing: props.spacing,
      css: props.css,
    },
    colorScheme
  );

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
