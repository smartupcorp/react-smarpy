import { ClassAttributes, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseButtonProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType>, PropsWithChildren {
    colorName?: ColorName;
}
type ButtonProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLButtonElement> & HTMLAttributes<HTMLButtonElement> & BaseButtonProps<BaseComponentColorNameType>;
export type { ButtonProps as default };
//# sourceMappingURL=ButtonProps.d.ts.map