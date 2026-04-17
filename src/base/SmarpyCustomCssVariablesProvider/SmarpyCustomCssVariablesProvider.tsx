"use client";

import { type ReactElement, useInsertionEffect, useMemo } from "react";
import { type ColorName } from "../../types";
import smarpyStyleUtility from "../../utilities/smarpyStyleUtility";
import type SmarpyCustomCssVariablesProviderProps from "./SmarpyCustomCssVariablesProviderProps";

export default function SmarpyCustomCssVariablesProvider<
  BaseComponentColorNameType extends string = ColorName,
>(
  props: SmarpyCustomCssVariablesProviderProps<BaseComponentColorNameType>,
): ReactElement {
  const smarpyStyles = useMemo(
    () =>
      smarpyStyleUtility.getSmarpyCssVariableStyles(props.smarpyCssVariables),
    [props.smarpyCssVariables],
  );

  useInsertionEffect(() => {
    const styleId = "smarpy-custom-css-variables";

    const createSmarpyCustomStyleElement = () => {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = smarpyStyles;
      return style;
    };

    const setStyle = (element: HTMLElement) => {
      const currentCustomStyle = element.querySelector(`#${styleId}`);
      if (currentCustomStyle) {
        element.removeChild(currentCustomStyle);
      }

      const style = createSmarpyCustomStyleElement();
      element.append(style);
    };

    setStyle(document.head);

    if (document.querySelector(`#${styleId}`) === null) {
      setStyle(document.body);
    }
  }, [smarpyStyles]);

  return <>{props.children}</>;
}
