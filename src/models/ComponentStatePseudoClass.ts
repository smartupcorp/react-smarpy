import type ComponentPart from "./ComponentPart";

export default interface ComponentStatePseudoClass<
  BaseComponentColorNameType extends string,
> {
  default?: ComponentPart<BaseComponentColorNameType> | undefined;
  disabled?: ComponentPart<BaseComponentColorNameType> | undefined;
  hover?: ComponentPart<BaseComponentColorNameType> | undefined;
  focus?: ComponentPart<BaseComponentColorNameType> | undefined;
  active?: ComponentPart<BaseComponentColorNameType> | undefined;
}
