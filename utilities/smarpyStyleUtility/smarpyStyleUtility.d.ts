import { SmarpyCssVariables } from '../../models';
declare function getSmarpyCssVariableStyles<BaseComponentColorNameType extends string>(smarpyCssVariables?: SmarpyCssVariables<BaseComponentColorNameType>): string;
declare function getRootStyles<BaseComponentColorNameType extends string>(smarpyCssVariables?: SmarpyCssVariables<BaseComponentColorNameType>): string[];
declare const smarpyStyleUtility: {
    getSmarpyCssVariableStyles: typeof getSmarpyCssVariableStyles;
    getRootStyles: typeof getRootStyles;
};
export default smarpyStyleUtility;
//# sourceMappingURL=smarpyStyleUtility.d.ts.map