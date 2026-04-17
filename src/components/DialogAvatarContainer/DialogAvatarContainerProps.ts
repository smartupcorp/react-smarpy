import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseDialogAvatarContainerProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type DialogAvatarContainerProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseDialogAvatarContainerProps<BaseComponentColorNameType>;

export type { DialogAvatarContainerProps as default };
