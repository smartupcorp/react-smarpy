import type BorderStyle from "../types/BorderStyle";
import type BorderWidth from "../types/BorderWidth";
import type ColorProps from "../models/ColorProps";

export default interface BorderDetailProps {
  color?: ColorProps;
  style: BorderStyle;
  width?: BorderWidth;
}
