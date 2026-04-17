import type { Property } from "csstype";
import type ColorAttributes from "./ColorAttributes";
import type ColorName from "../types/ColorName";

export default interface LightDarkColor<ColorNameType extends string = ColorName> {
  light: Property.Color | ColorAttributes<ColorNameType>;
  dark: Property.Color | ColorAttributes<ColorNameType>;
}
