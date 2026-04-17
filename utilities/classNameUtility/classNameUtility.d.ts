import { BaseComponentProps } from '../../models/BaseComponentProps';
import { ColorName } from '../../types';
declare function getUtilityClassNames<BaseComponentColorNameType extends string = ColorName>(props: BaseComponentProps<BaseComponentColorNameType>): string[];
declare const classNameUtility: {
    getUtilityClassNames: typeof getUtilityClassNames;
};
export default classNameUtility;
//# sourceMappingURL=classNameUtility.d.ts.map