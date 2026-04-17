import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseAccordionDetailsProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type AccordionDetailsProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & BaseAccordionDetailsProps<BaseComponentColorNameType>;
export type { AccordionDetailsProps as default };
//# sourceMappingURL=AccordionDetailsProps.d.ts.map