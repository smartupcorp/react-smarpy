import { ColorName } from '../../types';
import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseHeaderProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
    isSticky?: boolean | undefined;
    isFixed?: boolean | undefined;
}
type HeaderProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & BaseHeaderProps<BaseComponentColorNameType>;
export type { HeaderProps as default };
//# sourceMappingURL=HeaderProps.d.ts.map