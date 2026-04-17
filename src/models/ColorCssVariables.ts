import type ColorSchemeColor from "./ColorSchemeColor";
import type Gradation from "./Gradation";
import type Oklch from "./Oklch";

export default interface ColorCssVariables<
  BaseComponentColorNameType extends string,
> {
  white?: Oklch | undefined;
  black?: Oklch | undefined;

  gray?: Gradation | undefined;
  red?: Gradation | undefined;
  coral?: Gradation | undefined;
  orange?: Gradation | undefined;
  yellow?: Gradation | undefined;
  lime?: Gradation | undefined;
  green?: Gradation | undefined;
  cyan?: Gradation | undefined;
  blue?: Gradation | undefined;
  violet?: Gradation | undefined;
  magenta?: Gradation | undefined;
  colorScheme?: ColorSchemeColor<BaseComponentColorNameType> | undefined;
}
