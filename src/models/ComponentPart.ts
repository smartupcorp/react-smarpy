import type LightDarkColor from "./LightDarkColor";

export default interface ComponentPart<
  BaseComponentColorNameType extends string,
> {
  fore?: LightDarkColor<BaseComponentColorNameType> | undefined;
  back?: LightDarkColor<BaseComponentColorNameType> | undefined;
  border?: LightDarkColor<BaseComponentColorNameType> | undefined;
  shadow?: LightDarkColor<BaseComponentColorNameType> | undefined;
  placeholder?: LightDarkColor<BaseComponentColorNameType> | undefined;
}
