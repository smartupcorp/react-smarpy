import type { ClassAttributes, TextareaHTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { ColorName } from "../../types";

export interface BaseTextareaProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
}

type TextareaProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLTextAreaElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement> &
    BaseTextareaProps<BaseComponentColorNameType>;

export type { TextareaProps as default };
