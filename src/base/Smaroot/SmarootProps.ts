import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import { type ColorScheme } from "../../types";

export interface BaseSmarootProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorScheme?: ColorScheme | undefined;
}

type SmarootProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseSmarootProps<BaseComponentColorNameType>;

export type { SmarootProps as default };
