import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseNavMenuItemProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type NavMenuItemProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLSpanElement> &
    HTMLAttributes<HTMLSpanElement> &
    BaseNavMenuItemProps<BaseComponentColorNameType>;

export type { NavMenuItemProps as default };
