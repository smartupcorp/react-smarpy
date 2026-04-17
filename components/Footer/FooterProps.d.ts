import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseFooterProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
    isSticky?: boolean | undefined;
    isFixed?: boolean | undefined;
}
type FooterProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & BaseFooterProps<BaseComponentColorNameType>;
export type { FooterProps as default };
//# sourceMappingURL=FooterProps.d.ts.map