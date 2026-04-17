import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseHamburgerProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    isActive?: boolean | undefined;
    crownInner?: string | undefined;
    heelInner?: string | undefined;
}
type HamburgerProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseHamburgerProps<BaseComponentColorNameType>;
export type { HamburgerProps as default };
//# sourceMappingURL=HamburgerProps.d.ts.map