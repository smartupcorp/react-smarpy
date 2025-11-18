"use client";
import { useContext } from "react";
import { SmarpyColorSchemeContext } from "../../contexts";
import classNameUtility from "../../utilities/classNameUtility";
import emotionCssUtility from "../../utilities/emotionCssUtility";
import classNames from "./NavStatic.module.scss";
import NavStaticProps from "./NavStaticProps";

export default function NavStatic(props: NavStaticProps) {
  const assignedProps = { ...props };
  delete assignedProps["isMobile"];
  delete assignedProps["isMobileOrMore"];
  delete assignedProps["isTabletOrLess"];
  delete assignedProps["isTablet"];
  delete assignedProps["isTabletOrMore"];
  delete assignedProps["isDesktopOrLess"];
  delete assignedProps["isDesktop"];
  delete assignedProps["isDesktopOrMore"];
  delete assignedProps["isWidescreenOrLess"];
  delete assignedProps["isWidescreen"];
  delete assignedProps["isWidescreenOrMore"];
  delete assignedProps["isFullhdOrLess"];
  delete assignedProps["isFullhd"];
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

  const assignedClassNames: string[] = [classNames["nav-static"]];
  props.isMobile && assignedClassNames.push(classNames[`is-mobile`]);
  props.isMobileOrMore &&
    assignedClassNames.push(classNames[`is-mobile-or-more`]);
  props.isTabletOrLess &&
    assignedClassNames.push(classNames[`is-tablet-or-less`]);
  props.isTablet && assignedClassNames.push(classNames[`is-tablet`]);
  props.isTabletOrMore &&
    assignedClassNames.push(classNames[`is-tablet-or-more`]);
  props.isDesktopOrLess &&
    assignedClassNames.push(classNames[`is-desktop-or-less`]);
  props.isDesktop && assignedClassNames.push(classNames[`is-desktop`]);
  props.isDesktopOrMore &&
    assignedClassNames.push(classNames[`is-desktop-or-more`]);
  props.isWidescreenOrLess &&
    assignedClassNames.push(classNames[`is-widescreen-or-less`]);
  props.isWidescreen && assignedClassNames.push(classNames[`is-widescreen`]);
  props.isWidescreenOrMore &&
    assignedClassNames.push(classNames[`is-widescreen-or-more`]);
  props.isFullhdOrLess &&
    assignedClassNames.push(classNames[`is-fullhd-or-less`]);
  props.isFullhd && assignedClassNames.push(classNames[`is-fullhd`]);

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
