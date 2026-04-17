import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseAdminMainProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    isSidebarCollapse?: boolean;
}
type AdminMainProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseAdminMainProps<BaseComponentColorNameType>;
export type { AdminMainProps as default };
//# sourceMappingURL=AdminMainProps.d.ts.map