import type { ClassAttributes, HTMLAttributes, PropsWithChildren } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { ColorName } from "../../types";

export interface BaseButtonProps<BaseComponentColorNameType extends string>
  extends BaseNormalComponentProps<BaseComponentColorNameType>, PropsWithChildren {
  colorName?: ColorName;
}

type ButtonProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLButtonElement> &
    HTMLAttributes<HTMLButtonElement> &
    BaseButtonProps<BaseComponentColorNameType>;

export type { ButtonProps as default };

