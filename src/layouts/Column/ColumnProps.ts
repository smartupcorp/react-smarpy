import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseColumnProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  isFull?: boolean;
  size?: number | undefined;
  sizeMobile?: number | undefined;
  sizeMobileOrMore?: number | undefined;
  sizeTabletOrLess?: number | undefined;
  sizeTablet?: number | undefined;
  sizeTabletOrMore?: number | undefined;
  sizeDesktopOrLess?: number | undefined;
  sizeDesktop?: number | undefined;
  sizeDesktopOrMore?: number | undefined;
  sizeWidescreenOrLess?: number | undefined;
  sizeWidescreen?: number | undefined;
  sizeWidescreenOrMore?: number | undefined;
  sizeFullhdOrLess?: number | undefined;
  sizeFullhd?: number | undefined;}

type ColumnProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseColumnProps<BaseComponentColorNameType>;

export type { ColumnProps as default };
