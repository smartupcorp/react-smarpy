import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseGinghamProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
    degree?: 0 | 15 | 30 | 45 | 60 | 75 | 90;
}
type GinghamProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseGinghamProps<BaseComponentColorNameType>;
export type { GinghamProps as default };
//# sourceMappingURL=GinghamProps.d.ts.map