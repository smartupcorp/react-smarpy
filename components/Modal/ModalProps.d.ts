import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseModalProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    isActive?: boolean | undefined;
    colorName?: ColorName;
}
type ModalProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseModalProps<BaseComponentColorNameType>;
export type { ModalProps as default };
//# sourceMappingURL=ModalProps.d.ts.map