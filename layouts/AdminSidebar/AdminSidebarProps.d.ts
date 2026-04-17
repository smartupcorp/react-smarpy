import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseAdminSidebarProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type AdminSidebarProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & BaseAdminSidebarProps<BaseComponentColorNameType>;
export type { AdminSidebarProps as default };
//# sourceMappingURL=AdminSidebarProps.d.ts.map