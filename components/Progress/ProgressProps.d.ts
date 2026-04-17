import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseVoidComponentProps } from '../../models';
import { ColorName, Percentage } from '../../types';
export interface BaseProgressProps<BaseComponentColorNameType extends string> extends BaseVoidComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
    percentage: Percentage;
}
type ProgressProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseProgressProps<BaseComponentColorNameType>;
export type { ProgressProps as default };
//# sourceMappingURL=ProgressProps.d.ts.map