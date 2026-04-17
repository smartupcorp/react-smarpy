import type { Property } from "csstype";
import type { ColorProps, ColorName, FontSize, FontWeight } from "../types";

export default interface ForeProps<ColorNameType extends string = ColorName> {
  color?: ColorProps<ColorNameType>;
  fontSize?: FontSize;
  fontStyle?: Property.FontStyle;
  fontWeight?: FontWeight;
  textTransform?: Property.TextTransform;
}
