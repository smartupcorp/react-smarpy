import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseParagraphProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type ParagraphProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement> & BaseParagraphProps<BaseComponentColorNameType>;
export type { ParagraphProps as default };
//# sourceMappingURL=ParagraphProps.d.ts.map