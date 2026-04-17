import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseBreadcrumbProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
}
type BreadcrumbProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLUListElement> & HTMLAttributes<HTMLUListElement> & BaseBreadcrumbProps<BaseComponentColorNameType>;
export type { BreadcrumbProps as default };
//# sourceMappingURL=BreadcrumbProps.d.ts.map