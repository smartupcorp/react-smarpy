import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import { type ColorName } from "../../types";

export interface BaseFooterProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
  isSticky?: boolean | undefined;
  isFixed?: boolean | undefined;
}

type FooterProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    BaseFooterProps<BaseComponentColorNameType>;

export type { FooterProps as default };
