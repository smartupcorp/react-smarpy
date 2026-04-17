import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { ColorName } from "../../types";

export interface BaseBreadcrumbProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
}

type BreadcrumbProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLUListElement> &
    HTMLAttributes<HTMLUListElement> &
    BaseBreadcrumbProps<BaseComponentColorNameType>;

export type { BreadcrumbProps as default };
