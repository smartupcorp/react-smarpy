import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseVoidComponentProps } from "../../models";
import type { ColorName, Percentage } from "../../types";

export interface BaseProgressProps<
  BaseComponentColorNameType extends string,
> extends BaseVoidComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
  percentage: Percentage;
}

type ProgressProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseProgressProps<BaseComponentColorNameType>;

export type { ProgressProps as default };

