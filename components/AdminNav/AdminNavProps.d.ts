import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseAdminNavProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
}
type AdminNavProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & BaseAdminNavProps<BaseComponentColorNameType>;
export type { AdminNavProps as default };
//# sourceMappingURL=AdminNavProps.d.ts.map