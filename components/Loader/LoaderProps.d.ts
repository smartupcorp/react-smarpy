import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseVoidComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseLoaderProps<BaseComponentColorNameType extends string> extends BaseVoidComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
}
type LoaderProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseLoaderProps<BaseComponentColorNameType>;
export type { LoaderProps as default };
//# sourceMappingURL=LoaderProps.d.ts.map