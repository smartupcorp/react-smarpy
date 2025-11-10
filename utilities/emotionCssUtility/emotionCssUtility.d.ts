import { Interpolation, Theme } from '@emotion/react';
import { ColorAttributes, ColorScheme } from '../../common/literalTypes';
import { BaseComponentProps } from '../../common/models';
declare function getColorVariable(colorAttributes?: ColorAttributes): string | undefined;
declare function getEmotionCss(props: BaseComponentProps, colorScheme?: ColorScheme): Interpolation<Theme>;
declare const emotionStyleUtility: {
    getColorVariable: typeof getColorVariable;
    getEmotionCss: typeof getEmotionCss;
};
export default emotionStyleUtility;
//# sourceMappingURL=emotionCssUtility.d.ts.map