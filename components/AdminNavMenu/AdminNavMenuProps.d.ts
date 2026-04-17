import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseAdminNavMenuProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type AdminNavMenuProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseAdminNavMenuProps<BaseComponentColorNameType>;
export type { AdminNavMenuProps as default };
//# sourceMappingURL=AdminNavMenuProps.d.ts.map