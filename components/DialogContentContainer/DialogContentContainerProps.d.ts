import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseDialogContentContainerProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type DialogContentContainerProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseDialogContentContainerProps<BaseComponentColorNameType>;
export type { DialogContentContainerProps as default };
//# sourceMappingURL=DialogContentContainerProps.d.ts.map