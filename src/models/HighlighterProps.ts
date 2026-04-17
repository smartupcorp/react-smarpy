import type { ColorName, ColorProps } from "../types";

export default interface HighlighterProps<ColorNameType extends string = ColorName> {
  color?: ColorProps<ColorNameType>;
}
