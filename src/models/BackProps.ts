import type { ColorProps, ColorName } from "../types";

export default interface BackProps<ColorNameType extends string = ColorName> {
  color?: ColorProps<ColorNameType>;
}
