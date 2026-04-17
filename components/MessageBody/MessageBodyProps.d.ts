import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseMessageBodyProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type MessageBodyProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseMessageBodyProps<BaseComponentColorNameType>;
export type { MessageBodyProps as default };
//# sourceMappingURL=MessageBodyProps.d.ts.map