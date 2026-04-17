import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseBadgeProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
    isSmall?: boolean;
}
type BadgeProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & BaseBadgeProps<BaseComponentColorNameType>;
export type { BadgeProps as default };
//# sourceMappingURL=BadgeProps.d.ts.map