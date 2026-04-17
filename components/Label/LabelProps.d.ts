import { ClassAttributes, LabelHTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseLabelProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type LabelProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLLabelElement> & LabelHTMLAttributes<HTMLLabelElement> & BaseLabelProps<BaseComponentColorNameType>;
export type { LabelProps as default };
//# sourceMappingURL=LabelProps.d.ts.map