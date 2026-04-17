import { Interpolation, Theme } from '@emotion/react';
import { BaseComponentProps, ColorAttributes } from '../../models';
declare function getColorVariable<BaseComponentColorNameType extends string>(colorAttributes?: ColorAttributes<BaseComponentColorNameType> | "transparent"): string | undefined;
declare function getEmotionCss<BaseComponentColorNameType extends string>(props: BaseComponentProps<BaseComponentColorNameType>, optionalCss?: Interpolation<Theme>): Interpolation<Theme>;
declare const emotionStyleUtility: {
    getColorVariable: typeof getColorVariable;
    getEmotionCss: typeof getEmotionCss;
};
export default emotionStyleUtility;
//# sourceMappingURL=emotionCssUtility.d.ts.map