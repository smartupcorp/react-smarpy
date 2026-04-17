import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseAdminNavMenuProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {}

type AdminNavMenuProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement> &
    BaseAdminNavMenuProps<BaseComponentColorNameType>;

export type { AdminNavMenuProps as default };
