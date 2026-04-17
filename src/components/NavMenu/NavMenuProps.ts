import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseNavMenuProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  isActive?: boolean | undefined;
}

type NavMenuProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseNavMenuProps<BaseComponentColorNameType>;

export type { NavMenuProps as default };
