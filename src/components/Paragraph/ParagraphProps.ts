import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseParagraphProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}

type ParagraphProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLParagraphElement> &
    HTMLAttributes<HTMLParagraphElement> &
    BaseParagraphProps<BaseComponentColorNameType>;

export type { ParagraphProps as default };
