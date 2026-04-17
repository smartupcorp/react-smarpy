import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseHeadingProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}
type HeadingProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement> & BaseHeadingProps<BaseComponentColorNameType>;
export type { HeadingProps as default };
//# sourceMappingURL=HeadingProps.d.ts.map