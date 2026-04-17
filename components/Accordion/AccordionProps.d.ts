import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
import { ColorName } from '../../types';
export interface BaseAccordionProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
    colorName?: ColorName;
}
type AccordionProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDetailsElement> & HTMLAttributes<HTMLDetailsElement> & BaseAccordionProps<BaseComponentColorNameType>;
export type { AccordionProps as default };
//# sourceMappingURL=AccordionProps.d.ts.map