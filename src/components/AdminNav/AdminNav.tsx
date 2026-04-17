"use client";

import type { Interpolation, Theme } from "@emotion/react";
import { type ColorName } from "../../types";
import { classNameUtility, emotionCssUtility } from "../../utilities";
import classNames from "./AdminNav.module.scss";
import type AdminNavProps from "./AdminNavProps";
import type { BaseAdminNavProps } from "./AdminNavProps";

export default function AdminNav<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseAdminNavProps<BaseComponentColorNameType> =
    AdminNavProps<BaseComponentColorNameType>,
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

  const assignedClassNames: string[] = [classNames["admin-nav"]];

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
        ["--smarpy-admin-nav-color-fore"]: `var(--smarpy-color-${props.colorName}-admin-nav-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-admin-nav-color-back"]: `var(--smarpy-color-${props.colorName}-admin-nav-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-admin-nav-color-selection-fore"]: `var(--smarpy-color-${props.colorName}-admin-nav-selection-fore, var(--smarpy-color-${props.colorName}-selection-fore))`,
        ["--smarpy-admin-nav-color-selection-back"]: `var(--smarpy-color-${props.colorName}-admin-nav-selection-back, var(--smarpy-color-${props.colorName}-selection-back))`,
        ["--smarpy-admin-nav-color-border"]: `var(--smarpy-color-${props.colorName}-admin-nav-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-admin-nav-brand-color-fore"]: `var(--smarpy-color-${props.colorName}-admin-nav-brand-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-admin-nav-brand-color-back"]: `var(--smarpy-color-${props.colorName}-admin-nav-brand-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-admin-nav-brand-color-border"]: `var(--smarpy-color-${props.colorName}-admin-nav-brand-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-admin-nav-menu-color-fore"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-admin-nav-menu-color-back"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-admin-nav-menu-color-border"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-admin-nav-menu-item-color-fore"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-admin-nav-menu-item-color-back"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-admin-nav-menu-item-color-border"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-admin-nav-menu-item-focus-color-fore"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-focus-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-admin-nav-menu-item-focus-color-back"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-focus-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-admin-nav-menu-item-focus-color-border"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-focus-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-admin-nav-menu-item-active-color-fore"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-active-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-admin-nav-menu-item-active-color-back"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-active-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-admin-nav-menu-item-active-color-border"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-active-border, var(--smarpy-color-${props.colorName}-border))`,
        ["--smarpy-admin-nav-menu-item-disabled-color-fore"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-disabled-fore, var(--smarpy-color-${props.colorName}-fore))`,
        ["--smarpy-admin-nav-menu-item-disabled-color-back"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-disabled-back, var(--smarpy-color-${props.colorName}-back))`,
        ["--smarpy-admin-nav-menu-item-disabled-color-border"]: `var(--smarpy-color-${props.colorName}-admin-nav-menu-item-disabled-border, var(--smarpy-color-${props.colorName}-border))`,
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
    <nav
      {...assignedProps}
      className={assignedClassNames.join(" ")}
      css={css}
    />
  );
}
