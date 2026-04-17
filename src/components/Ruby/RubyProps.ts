import type { ClassAttributes, HTMLAttributes, ReactNode } from "react";
import type { BaseVoidComponentProps } from "../../models";
export interface BaseRubyProps<
  BaseComponentColorNameType extends string,
> extends Omit<BaseVoidComponentProps<BaseComponentColorNameType>, "as"> {
  rubyText?: ReactNode | undefined;
}

type RubyProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    BaseRubyProps<BaseComponentColorNameType>;

export type { RubyProps as default };
