import { default as SmarpyCssVariable } from '../../common/models/SmarpyCssVariable';
declare function getSmarpyCssVariableStyles(cssVariableSetting?: SmarpyCssVariable): string;
declare function getRootStyles(cssVariableSetting?: SmarpyCssVariable): string[];
declare function getLightSchemeStyles(cssVariableSetting?: SmarpyCssVariable): string[];
declare function getDarkSchemeStyles(cssVariableSetting?: SmarpyCssVariable): string[];
declare const smarpyStyleUtility: {
    getSmarpyCssVariableStyles: typeof getSmarpyCssVariableStyles;
    getRootStyles: typeof getRootStyles;
    getLightSchemeStyles: typeof getLightSchemeStyles;
    getDarkSchemeStyles: typeof getDarkSchemeStyles;
};
export default smarpyStyleUtility;
//# sourceMappingURL=smarpyStyleUtility.d.ts.map