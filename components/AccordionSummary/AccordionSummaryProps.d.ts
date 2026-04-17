import { ClassAttributes, HTMLAttributes } from '../../../node_modules/react';
import { BaseNormalComponentProps } from '../../models';
export interface BaseAccordionSummaryProps<BaseComponentColorNameType extends string> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}
type AccordionSummaryProps<BaseComponentColorNameType extends string> = ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & BaseAccordionSummaryProps<BaseComponentColorNameType>;
export type { AccordionSummaryProps as default };
//# sourceMappingURL=AccordionSummaryProps.d.ts.map