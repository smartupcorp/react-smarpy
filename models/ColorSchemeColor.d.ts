import { default as ComponentStatePseudoClass } from './ComponentStatePseudoClass';
import { default as ColorSchemeColorComponents } from './ColorSchemeColorComponents';
export default interface ColorSchemeColor<BaseComponentColorNameType extends string> {
    default?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    gray?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    red?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    coral?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    orange?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    yellow?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    lime?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    green?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    cyan?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    blue?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    violet?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    magenta?: ComponentStatePseudoClass<BaseComponentColorNameType> | undefined;
    components?: ColorSchemeColorComponents<BaseComponentColorNameType> | undefined;
}
//# sourceMappingURL=ColorSchemeColor.d.ts.map