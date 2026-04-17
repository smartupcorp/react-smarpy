import { AnchorHTMLAttributes, ClassAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseLinkProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
}
type LinkProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & BaseLinkProps<BaseComponentColorNameType>;
export type { LinkProps as default };
//# sourceMappingURL=LinkProps.d.ts.map