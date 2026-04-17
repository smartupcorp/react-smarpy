import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseMessageHeaderProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type MessageHeaderProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseMessageHeaderProps<BaseComponentColorNameType>;
export type { MessageHeaderProps as default };
//# sourceMappingURL=MessageHeaderProps.d.ts.map