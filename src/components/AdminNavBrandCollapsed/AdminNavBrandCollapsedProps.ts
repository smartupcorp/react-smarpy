import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseAdminNavBrandCollapsedProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type AdminNavBrandCollapsedProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseAdminNavBrandCollapsedProps<BaseComponentColorNameType>;

export type { AdminNavBrandCollapsedProps as default };
