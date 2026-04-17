import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";
import { type ColorName } from "../../types";

export interface BaseAccordionProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
  colorName?: ColorName;
}

type AccordionProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDetailsElement> &
    HTMLAttributes<HTMLDetailsElement> &
    BaseAccordionProps<BaseComponentColorNameType>;

export type { AccordionProps as default };
