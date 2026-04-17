import { ClassAttributes, HTMLAttributes, ReactNode } from '../../../node_modules/react';
import { BaseVoidComponentProps } from '../../models';
export interface BaseRubyProps<BaseComponentColorNameType extends string> extends Omit<BaseVoidComponentProps<BaseComponentColorNameType>, "as"> {
    rubyText?: ReactNode | undefined;
}
type RubyProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & BaseRubyProps<BaseComponentColorNameType>;
export type { RubyProps as default };
//# sourceMappingURL=RubyProps.d.ts.map