import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { ColorName } from "../../types";

export interface BaseModalProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  isActive?: boolean | undefined;
  colorName?: ColorName;
}

type ModalProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseModalProps<BaseComponentColorNameType>;

export type { ModalProps as default };
