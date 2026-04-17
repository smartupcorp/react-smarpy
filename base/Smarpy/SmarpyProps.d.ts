import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseSmarootProps } from '../Smaroot';
export interface BaseSmarpyProps<BaseComponentColorNameType extends string> extends BaseSmarootProps<BaseComponentColorNameType> {
}
type SmarpyProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseSmarpyProps<BaseComponentColorNameType>;
export type { SmarpyProps as default };
//# sourceMappingURL=SmarpyProps.d.ts.map