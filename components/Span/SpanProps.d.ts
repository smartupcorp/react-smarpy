import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseSpanProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type SpanProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement> & BaseSpanProps<BaseComponentColorNameType>;
export type { SpanProps as default };
//# sourceMappingURL=SpanProps.d.ts.map