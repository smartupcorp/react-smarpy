import { type ColorName } from "../../types";
import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseHeaderProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
  isSticky?: boolean | undefined;
  isFixed?: boolean | undefined;
}

type HeaderProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    BaseHeaderProps<BaseComponentColorNameType>;

export type { HeaderProps as default };
