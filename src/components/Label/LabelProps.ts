import type { ClassAttributes, LabelHTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseLabelProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}

type LabelProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLLabelElement> &
    LabelHTMLAttributes<HTMLLabelElement> &
    BaseLabelProps<BaseComponentColorNameType>;

export type { LabelProps as default };
