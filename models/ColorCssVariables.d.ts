import { default as ColorSchemeColor } from './ColorSchemeColor';
import { default as Gradation } from './Gradation';
import { default as Oklch } from './Oklch';
export default interface ColorCssVariables<BaseComponentColorNameType extends string> {
    white?: Oklch | undefined;
    black?: Oklch | undefined;
    gray?: Gradation | undefined;
    red?: Gradation | undefined;
    coral?: Gradation | undefined;
    orange?: Gradation | undefined;
    yellow?: Gradation | undefined;
    lime?: Gradation | undefined;
    green?: Gradation | undefined;
    cyan?: Gradation | undefined;
    blue?: Gradation | undefined;
    violet?: Gradation | undefined;
    magenta?: Gradation | undefined;
    colorScheme?: ColorSchemeColor<BaseComponentColorNameType> | undefined;
}
//# sourceMappingURL=ColorCssVariables.d.ts.map