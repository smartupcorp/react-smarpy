import { Property } from 'csstype';
import { default as ColorAttributes } from './ColorAttributes';
import { default as ColorName } from '../types/ColorName';
export default interface LightDarkColor<ColorNameType extends string = ColorName> {
    light: Property.Color | ColorAttributes<ColorNameType>;
    dark: Property.Color | ColorAttributes<ColorNameType>;
}
//# sourceMappingURL=LightDarkColor.d.ts.map