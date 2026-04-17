import { default as AnimationCssVariables } from './AnimationCssVariables';
import { default as BorderCssVariables } from './BorderCssVariables';
import { default as ColorCssVariables } from './ColorCssVariables';
import { default as ComponentCssVariables } from './ComponentCssVariables';
import { default as MiscellaneousCssVariables } from './MiscellaneousCssVariables';
import { default as TypographyCssVariables } from './TypographyCssVariables';
export default interface SmarpyCssVariables<BaseComponentColorNameType extends string> {
    animation?: AnimationCssVariables | undefined;
    border?: BorderCssVariables | undefined;
    color?: ColorCssVariables<BaseComponentColorNameType> | undefined;
    miscellaneous?: MiscellaneousCssVariables | undefined;
    typography?: TypographyCssVariables | undefined;
    components?: ComponentCssVariables | undefined;
}
//# sourceMappingURL=SmarpyCssVariables.d.ts.map