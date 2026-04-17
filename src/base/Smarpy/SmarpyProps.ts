import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseSmarootProps } from "../Smaroot";

export interface BaseSmarpyProps<
  BaseComponentColorNameType extends string,
> extends BaseSmarootProps<BaseComponentColorNameType> {}

type SmarpyProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseSmarpyProps<BaseComponentColorNameType>;

export type { SmarpyProps as default };

