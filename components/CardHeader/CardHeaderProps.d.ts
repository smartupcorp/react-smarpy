import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseCardHeaderProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type CardHeaderProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseCardHeaderProps<BaseComponentColorNameType>;
export type { CardHeaderProps as default };
//# sourceMappingURL=CardHeaderProps.d.ts.map