import type { AnchorHTMLAttributes, ClassAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { ColorName } from "../../types";

export interface BaseLinkProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
}

type LinkProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLAnchorElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    BaseLinkProps<BaseComponentColorNameType>;

export type { LinkProps as default };

