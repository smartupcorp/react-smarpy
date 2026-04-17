import { ClassAttributes, TextareaHTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseTextareaProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
}
type TextareaProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLTextAreaElement> & TextareaHTMLAttributes<HTMLTextAreaElement> & BaseTextareaProps<BaseComponentColorNameType>;
export type { TextareaProps as default };
//# sourceMappingURL=TextareaProps.d.ts.map