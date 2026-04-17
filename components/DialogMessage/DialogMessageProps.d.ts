import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseDialogMessageProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type DialogMessageProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseDialogMessageProps<BaseComponentColorNameType>;
export type { DialogMessageProps as default };
//# sourceMappingURL=DialogMessageProps.d.ts.map