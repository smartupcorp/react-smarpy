import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseVoidComponentProps } from "../../models";
import type { ColorName } from "../../types";

export interface BaseLoaderProps<
  BaseComponentColorNameType extends string,
> extends BaseVoidComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
}

type LoaderProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseLoaderProps<BaseComponentColorNameType>;

export type { LoaderProps as default };
