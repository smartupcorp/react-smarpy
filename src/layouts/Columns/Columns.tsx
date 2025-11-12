"use client";
import { useContext } from "react";
import { SmarpyColorSchemeContext } from "../../contexts";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./Columns.module.scss";
import ColumnsProps from "./ColumnsProps";

export default function Columns(props: ColumnsProps) {
  const assignedProps = { ...props };
  delete assignedProps["isDirectionRow"];
  delete assignedProps["isDirectionRowReverse"];
  delete assignedProps["isDirectionColumn"];
  delete assignedProps["isDirectionColumnReverse"];
  delete assignedProps["isMobileDirectionRow"];
  delete assignedProps["isMobileOrMoreDirectionRow"];
  delete assignedProps["isTabletOrLessDirectionRow"];
  delete assignedProps["isTabletDirectionRow"];
  delete assignedProps["isTabletOrMoreDirectionRow"];
  delete assignedProps["isDesktopOrLessDirectionRow"];
  delete assignedProps["isDesktopDirectionRow"];
  delete assignedProps["isDesktopOrMoreDirectionRow"];
  delete assignedProps["isWidescreenOrLessDirectionRow"];
  delete assignedProps["isWidescreenDirectionRow"];
  delete assignedProps["isWidescreenOrMoreDirectionRow"];
  delete assignedProps["isFullhdOrLessDirectionRow"];
  delete assignedProps["isFullhdDirectionRow"];
  delete assignedProps["isMobileDirectionRowReverse"];
  delete assignedProps["isMobileOrMoreDirectionRowReverse"];
  delete assignedProps["isTabletOrLessDirectionRowReverse"];
  delete assignedProps["isTabletDirectionRowReverse"];
  delete assignedProps["isTabletOrMoreDirectionRowReverse"];
  delete assignedProps["isDesktopOrLessDirectionRowReverse"];
  delete assignedProps["isDesktopDirectionRowReverse"];
  delete assignedProps["isDesktopOrMoreDirectionRowReverse"];
  delete assignedProps["isWidescreenOrLessDirectionRowReverse"];
  delete assignedProps["isWidescreenDirectionRowReverse"];
  delete assignedProps["isWidescreenOrMoreDirectionRowReverse"];
  delete assignedProps["isFullhdOrLessDirectionRowReverse"];
  delete assignedProps["isFullhdDirectionRowReverse"];
  delete assignedProps["isMobileDirectionColumn"];
  delete assignedProps["isMobileOrMoreDirectionColumn"];
  delete assignedProps["isTabletOrLessDirectionColumn"];
  delete assignedProps["isTabletDirectionColumn"];
  delete assignedProps["isTabletOrMoreDirectionColumn"];
  delete assignedProps["isDesktopOrLessDirectionColumn"];
  delete assignedProps["isDesktopDirectionColumn"];
  delete assignedProps["isDesktopOrMoreDirectionColumn"];
  delete assignedProps["isWidescreenOrLessDirectionColumn"];
  delete assignedProps["isWidescreenDirectionColumn"];
  delete assignedProps["isWidescreenOrMoreDirectionColumn"];
  delete assignedProps["isFullhdOrLessDirectionColumn"];
  delete assignedProps["isFullhdDirectionColumn"];
  delete assignedProps["isMobileDirectionColumnReverse"];
  delete assignedProps["isMobileOrMoreDirectionColumnReverse"];
  delete assignedProps["isTabletOrLessDirectionColumnReverse"];
  delete assignedProps["isTabletDirectionColumnReverse"];
  delete assignedProps["isTabletOrMoreDirectionColumnReverse"];
  delete assignedProps["isDesktopOrLessDirectionColumnReverse"];
  delete assignedProps["isDesktopDirectionColumnReverse"];
  delete assignedProps["isDesktopOrMoreDirectionColumnReverse"];
  delete assignedProps["isWidescreenOrLessDirectionColumnReverse"];
  delete assignedProps["isWidescreenDirectionColumnReverse"];
  delete assignedProps["isWidescreenOrMoreDirectionColumnReverse"];
  delete assignedProps["isFullhdOrLessDirectionColumnReverse"];
  delete assignedProps["isFullhdDirectionColumnReverse"];
  delete assignedProps["gutter"];

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

  const assignedClassNames: string[] = [classNames["columns"]];

  props.isDirectionRow &&
    assignedClassNames.push(classNames["is-direction-row"]);
  props.isDirectionRowReverse &&
    assignedClassNames.push(classNames["is-direction-row-reverse"]);
  props.isDirectionColumn &&
    assignedClassNames.push(classNames["is-direction-column"]);
  props.isDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-direction-column-reverse"]);
  props.isMobileDirectionRow &&
    assignedClassNames.push(classNames["is-mobile-direction-row"]);
  props.isMobileOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-mobile-or-more-direction-row"]);
  props.isTabletOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-tablet-or-less-direction-row"]);
  props.isTabletDirectionRow &&
    assignedClassNames.push(classNames["is-tablet-direction-row"]);
  props.isTabletOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-tablet-or-more-direction-row"]);
  props.isDesktopOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-desktop-or-less-direction-row"]);
  props.isDesktopDirectionRow &&
    assignedClassNames.push(classNames["is-desktop-direction-row"]);
  props.isDesktopOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-desktop-or-more-direction-row"]);
  props.isWidescreenOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-widescreen-or-less-direction-row"]);
  props.isWidescreenDirectionRow &&
    assignedClassNames.push(classNames["is-widescreen-direction-row"]);
  props.isWidescreenOrMoreDirectionRow &&
    assignedClassNames.push(classNames["is-widescreen-or-more-direction-row"]);
  props.isFullhdOrLessDirectionRow &&
    assignedClassNames.push(classNames["is-fullhd-or-less-direction-row"]);
  props.isFullhdDirectionRow &&
    assignedClassNames.push(classNames["is-fullhd-direction-row"]);
  props.isMobileDirectionRowReverse &&
    assignedClassNames.push(classNames["is-mobile-direction-row-reverse"]);
  props.isMobileOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-mobile-or-more-direction-row-reverse"]
    );
  props.isTabletOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-tablet-or-less-direction-row-reverse"]
    );
  props.isTabletDirectionRowReverse &&
    assignedClassNames.push(classNames["is-tablet-direction-row-reverse"]);
  props.isTabletOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-tablet-or-more-direction-row-reverse"]
    );
  props.isDesktopOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-desktop-or-less-direction-row-reverse"]
    );
  props.isDesktopDirectionRowReverse &&
    assignedClassNames.push(classNames["is-desktop-direction-row-reverse"]);
  props.isDesktopOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-desktop-or-more-direction-row-reverse"]
    );
  props.isWidescreenOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-widescreen-or-less-direction-row-reverse"]
    );
  props.isWidescreenDirectionRowReverse &&
    assignedClassNames.push(classNames["is-widescreen-direction-row-reverse"]);
  props.isWidescreenOrMoreDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-widescreen-or-more-direction-row-reverse"]
    );
  props.isFullhdOrLessDirectionRowReverse &&
    assignedClassNames.push(
      classNames["is-fullhd-or-less-direction-row-reverse"]
    );
  props.isFullhdDirectionRowReverse &&
    assignedClassNames.push(classNames["is-fullhd-direction-row-reverse"]);
  props.isMobileDirectionColumn &&
    assignedClassNames.push(classNames["is-mobile-direction-column"]);
  props.isMobileOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-mobile-or-more-direction-column"]);
  props.isTabletOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-tablet-or-less-direction-column"]);
  props.isTabletDirectionColumn &&
    assignedClassNames.push(classNames["is-tablet-direction-column"]);
  props.isTabletOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-tablet-or-more-direction-column"]);
  props.isDesktopOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-desktop-or-less-direction-column"]);
  props.isDesktopDirectionColumn &&
    assignedClassNames.push(classNames["is-desktop-direction-column"]);
  props.isDesktopOrMoreDirectionColumn &&
    assignedClassNames.push(classNames["is-desktop-or-more-direction-column"]);
  props.isWidescreenOrLessDirectionColumn &&
    assignedClassNames.push(
      classNames["is-widescreen-or-less-direction-column"]
    );
  props.isWidescreenDirectionColumn &&
    assignedClassNames.push(classNames["is-widescreen-direction-column"]);
  props.isWidescreenOrMoreDirectionColumn &&
    assignedClassNames.push(
      classNames["is-widescreen-or-more-direction-column"]
    );
  props.isFullhdOrLessDirectionColumn &&
    assignedClassNames.push(classNames["is-fullhd-or-less-direction-column"]);
  props.isFullhdDirectionColumn &&
    assignedClassNames.push(classNames["is-fullhd-direction-column"]);
  props.isMobileDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-mobile-direction-column-reverse"]);
  props.isMobileOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-mobile-or-more-direction-column-reverse"]
    );
  props.isTabletOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-tablet-or-less-direction-column-reverse"]
    );
  props.isTabletDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-tablet-direction-column-reverse"]);
  props.isTabletOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-tablet-or-more-direction-column-reverse"]
    );
  props.isDesktopOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-desktop-or-less-direction-column-reverse"]
    );
  props.isDesktopDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-desktop-direction-column-reverse"]);
  props.isDesktopOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-desktop-or-more-direction-column-reverse"]
    );
  props.isWidescreenOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-widescreen-or-less-direction-column-reverse"]
    );
  props.isWidescreenDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-widescreen-direction-column-reverse"]
    );
  props.isWidescreenOrMoreDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-widescreen-or-more-direction-column-reverse"]
    );
  props.isFullhdOrLessDirectionColumnReverse &&
    assignedClassNames.push(
      classNames["is-fullhd-or-less-direction-column-reverse"]
    );
  props.isFullhdDirectionColumnReverse &&
    assignedClassNames.push(classNames["is-fullhd-direction-column-reverse"]);

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

  const colorScheme = useContext(SmarpyColorSchemeContext);

  const css = emotionCssUtility.getEmotionCss(
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
    colorScheme
  );

  return (
    <div
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
