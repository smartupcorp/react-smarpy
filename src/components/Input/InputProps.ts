import type { ClassAttributes, InputHTMLAttributes } from "react";
import type { BaseVoidComponentProps } from "../../models";
import { type ColorName } from "../../types";

export interface BaseInputProps<
  BaseComponentColorNameType extends string,
> extends BaseVoidComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
}

type InputProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> &
    BaseInputProps<BaseComponentColorNameType>;

export type { InputProps as default };

