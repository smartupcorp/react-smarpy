import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseNavBrandCenterProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type NavBrandCenterProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseNavBrandCenterProps<BaseComponentColorNameType>;
export type { NavBrandCenterProps as default };
//# sourceMappingURL=NavBrandCenterProps.d.ts.map