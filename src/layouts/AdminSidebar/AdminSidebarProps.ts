import type { ClassAttributes, HTMLAttributes } from "react";
import type { BaseNormalComponentProps } from "../../models";

export interface BaseAdminSidebarProps<
  BaseComponentColorNameType extends string,
> extends BaseNormalComponentProps<BaseComponentColorNameType> {
}

type AdminSidebarProps<BaseComponentColorNameType extends string> =
  ClassAttributes<HTMLElement> &
    HTMLAttributes<HTMLElement> &
    BaseAdminSidebarProps<BaseComponentColorNameType>;

export type { AdminSidebarProps as default };
