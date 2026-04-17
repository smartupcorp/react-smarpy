import { default as ColorAttributes } from './ColorAttributes';
import { default as ColorName } from '../types/ColorName';
export default interface ColorProps<ColorNameType extends string = ColorName> {
    default?: ColorAttributes<ColorNameType> | "transparent";
    hover?: ColorAttributes<ColorNameType> | "transparent";
    focus?: ColorAttributes<ColorNameType> | "transparent";
    active?: ColorAttributes<ColorNameType> | "transparent";
    disabled?: ColorAttributes<ColorNameType> | "transparent";
    colorScheme?: {
        light: {
            default?: ColorAttributes<ColorNameType> | "transparent";
            hover?: ColorAttributes<ColorNameType> | "transparent";
            focus?: ColorAttributes<ColorNameType> | "transparent";
            active?: ColorAttributes<ColorNameType> | "transparent";
            disabled?: ColorAttributes<ColorNameType> | "transparent";
        };
        dark: {
            default?: ColorAttributes<ColorNameType> | "transparent";
            hover?: ColorAttributes<ColorNameType> | "transparent";
            focus?: ColorAttributes<ColorNameType> | "transparent";
            active?: ColorAttributes<ColorNameType> | "transparent";
            disabled?: ColorAttributes<ColorNameType> | "transparent";
        };
    };
}
//# sourceMappingURL=ColorProps.d.ts.map