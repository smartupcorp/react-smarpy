import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { ColorName } from "../../types";

export interface BaseNavProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
}

type NavProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    BaseNavProps<BaseComponentColorNameType>;

export type { NavProps as default };

