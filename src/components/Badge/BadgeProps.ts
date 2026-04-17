import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { ColorName } from "../../types";

export interface BaseBadgeProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
  isSmall?: boolean;
}

type BadgeProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLSpanElement> &
    HTMLAttributes<HTMLSpanElement> &
    BaseBadgeProps<BaseComponentColorNameType>;

export type { BadgeProps as default };
