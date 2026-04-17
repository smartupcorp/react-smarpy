import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseAdminNavMenuItemProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type AdminNavMenuItemProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseAdminNavMenuItemProps<BaseComponentColorNameType>;

export type { AdminNavMenuItemProps as default };

