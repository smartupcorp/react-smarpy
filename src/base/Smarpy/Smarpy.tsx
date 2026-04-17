"use client";

import { SmarpyColorSchemeContext } from "../../contexts";
import { type ColorName } from "../../types";
import { Smaroot } from "../Smaroot";
import "./Smarpy.scss";
import type SmarpyProps from "./SmarpyProps";
import type { BaseSmarpyProps } from "./SmarpyProps";

export default function Smarpy<
  BaseComponentColorNameType extends string = ColorName,
  ComponentPropsType extends BaseSmarpyProps<BaseComponentColorNameType> =
    SmarpyProps<BaseComponentColorNameType>,
>(props: ComponentPropsType) {
  const assignedProps = { ...props };

  return (
    <SmarpyColorSchemeContext.Provider
      value={assignedProps.colorScheme}
    >
      <Smaroot<BaseComponentColorNameType> {...assignedProps} />
    </SmarpyColorSchemeContext.Provider>
  );
}
