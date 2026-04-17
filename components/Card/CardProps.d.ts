import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseCardProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
}
type CardProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseCardProps<BaseComponentColorNameType>;
export type { CardProps as default };
//# sourceMappingURL=CardProps.d.ts.map