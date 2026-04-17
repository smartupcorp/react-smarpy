import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseContainerProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  gutter?:
    | `${number}rem`
    | {
        x?: `${number}rem` | number;
        y?: `${number}rem` | number;
      };
}

type ContainerProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseContainerProps<BaseComponentColorNameType>;

export type { ContainerProps as default };

