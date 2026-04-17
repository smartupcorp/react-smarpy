import type { ClassAttributes, ImgHTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseDialogAvatarProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type DialogAvatarProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLImageElement> &
    ImgHTMLAttributes<HTMLImageElement> &
    BaseDialogAvatarProps<BaseComponentColorNameType>;

export type { DialogAvatarProps as default };
