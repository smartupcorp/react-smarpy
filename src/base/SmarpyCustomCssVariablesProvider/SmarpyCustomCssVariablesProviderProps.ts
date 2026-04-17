import type { PropsWithChildren } from "react";
import type { SmarpyCssVariables } from "../../models";

export default interface SmarpyCustomCssVariablesProviderProps<
  BaseComponentColorNameType extends string,
> extends PropsWithChildren {
  smarpyCssVariables?: SmarpyCssVariables<BaseComponentColorNameType>;
}
