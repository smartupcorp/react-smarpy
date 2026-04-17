import type {
  BorderCollapse,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  ColorName,
  ColorProps,
} from "../types";
import type BorderDetailProps from "./BorderDetailProps";

export default interface BorderProps<ColorNameType extends string = ColorName> {
  color?: ColorProps<ColorNameType>;
  collapse?: BorderCollapse;
  radius?: BorderRadius;
  style?: BorderStyle;
  width?: BorderWidth;
  top?: BorderDetailProps;
  bottom?: BorderDetailProps;
  left?: BorderDetailProps;
  right?: BorderDetailProps;
}
