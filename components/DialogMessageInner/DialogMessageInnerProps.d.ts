import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseDialogMessageInnerProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type DialogMessageInnerProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseDialogMessageInnerProps<BaseComponentColorNameType>;
export type { DialogMessageInnerProps as default };
//# sourceMappingURL=DialogMessageInnerProps.d.ts.map