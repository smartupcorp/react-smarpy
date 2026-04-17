import type { Interpolation, Theme } from "@emotion/react";
import type { ColorName } from "../types";
import type BackProps from "./BackProps";
import type BorderProps from "./BorderProps";
import type ForeProps from "./ForeProps";
import type HighlighterProps from "./HighlighterProps";
import type PositioningProps from "./PositioningProps";
import type SizingProps from "./SizingProps";
import type SpacingProps from "./SpacingProps";
import type { PropsWithChildren } from "react";

export interface BaseComponentProps<ColorNameType extends string = ColorName> {
  fore?: ForeProps<ColorNameType> | undefined;
  back?: BackProps<ColorNameType> | undefined;
  highlighter?: HighlighterProps<ColorNameType> | undefined;
  border?: BorderProps<ColorNameType> | undefined;
  positioning?: PositioningProps | undefined;
  sizing?: SizingProps | undefined;
  spacing?: SpacingProps | undefined;

  className?: string | undefined;
  css?: Interpolation<Theme> | undefined;
  as?: React.ElementType | undefined;

  [key: string]: any;
}

export interface BaseVoidComponentProps<
  ColorNameType extends string = ColorName,
> extends BaseComponentProps<ColorNameType> {}

export interface BaseNormalComponentProps<
  ColorNameType extends string = ColorName,
>
  extends BaseComponentProps<ColorNameType>, PropsWithChildren {}
