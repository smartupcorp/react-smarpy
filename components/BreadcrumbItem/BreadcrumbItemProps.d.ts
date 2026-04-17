import { ClassAttributes, LiHTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseBreadcrumbItemProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type BreadcrumbItemProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLLIElement> & LiHTMLAttributes<HTMLLIElement> & BaseBreadcrumbItemProps<BaseComponentColorNameType>;
export type { BreadcrumbItemProps as default };
//# sourceMappingURL=BreadcrumbItemProps.d.ts.map