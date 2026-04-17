import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseAdminProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    isSidebarCollapse?: boolean;
}
type AdminProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseAdminProps<BaseComponentColorNameType>;
export type { AdminProps as default };
//# sourceMappingURL=AdminProps.d.ts.map