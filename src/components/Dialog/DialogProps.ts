import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import type { BorderStyle, BorderWidth, ColorName } from "../../types";

export interface BaseDialogProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
  avatarSize?: "large" | "small";
  borderStyle?: BorderStyle;
  borderWidth?: BorderWidth;
  isAvatarCircle?: boolean;
  isRight?: boolean;
}

type DialogProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseDialogProps<BaseComponentColorNameType>;

export type { DialogProps as default };

