import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseNavAccordionProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  isMobile?: boolean | undefined;
  isMobileOrMore?: boolean | undefined;
  isTabletOrLess?: boolean | undefined;
  isTablet?: boolean | undefined;
  isTabletOrMore?: boolean | undefined;
  isDesktopOrLess?: boolean | undefined;
  isDesktop?: boolean | undefined;
  isDesktopOrMore?: boolean | undefined;
  isWidescreenOrLess?: boolean | undefined;
  isWidescreen?: boolean | undefined;
  isWidescreenOrMore?: boolean | undefined;
  isFullhdOrLess?: boolean | undefined;
  isFullhd?: boolean | undefined;
}

type NavAccordionProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseNavAccordionProps<BaseComponentColorNameType>;

export type { NavAccordionProps as default };

