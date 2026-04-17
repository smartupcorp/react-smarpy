import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseAdminNavMenuItemProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type AdminNavMenuItemProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseAdminNavMenuItemProps<BaseComponentColorNameType>;
export type { AdminNavMenuItemProps as default };
//# sourceMappingURL=AdminNavMenuItemProps.d.ts.map