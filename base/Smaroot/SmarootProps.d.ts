import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorScheme } from '../../types';
export interface BaseSmarootProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorScheme?: ColorScheme | undefined;
}
type SmarootProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseSmarootProps<BaseComponentColorNameType>;
export type { SmarootProps as default };
//# sourceMappingURL=SmarootProps.d.ts.map