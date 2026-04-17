import { ClassAttributes, InputHTMLAttributes } from '../../../node_modules/react';
import { BaseVoidComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseInputProps<BaseComponentColorNameType extends string> extends BaseVoidComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
}
type InputProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & BaseInputProps<BaseComponentColorNameType>;
export type { InputProps as default };
//# sourceMappingURL=InputProps.d.ts.map