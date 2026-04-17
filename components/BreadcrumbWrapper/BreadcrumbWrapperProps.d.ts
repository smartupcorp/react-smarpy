import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseBreadcrumbWrapperProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type BreadcrumbWrapperProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & BaseBreadcrumbWrapperProps<BaseComponentColorNameType>;
export type { BreadcrumbWrapperProps as default };
//# sourceMappingURL=BreadcrumbWrapperProps.d.ts.map