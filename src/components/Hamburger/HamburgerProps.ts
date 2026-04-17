import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseHamburgerProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  isActive?: boolean | undefined;
  crownInner?: | string | undefined;
  heelInner?: | string | undefined;
}

type HamburgerProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseHamburgerProps<BaseComponentColorNameType>;

export type { HamburgerProps as default };
