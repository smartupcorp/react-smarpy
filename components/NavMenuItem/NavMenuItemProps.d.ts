import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseNavMenuItemProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type NavMenuItemProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & BaseNavMenuItemProps<BaseComponentColorNameType>;
export type { NavMenuItemProps as default };
//# sourceMappingURL=NavMenuItemProps.d.ts.map