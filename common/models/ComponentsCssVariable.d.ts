import { FontSize } from '../literalTypes';
export default interface ComponentsCssVariable {
    breadcrumb?: {
        breadcrumbDivider?: string;
    };
    button?: {
        paddingX?: `${number}rem`;
        paddingY?: `${number}rem`;
    };
    dialog?: {
        avatarSizeDefault?: `${number}rem`;
        avatarSizeSmall?: `${number}rem`;
        avatarSizeLarge?: `${number}rem`;
        avatarTopOffset?: `${number}rem`;
        nameFontSize?: `${number}rem` | FontSize;
        namePaddingX?: `${number}rem`;
        namePaddingY?: `${number}rem`;
        messageArrowWidth?: `${number}rem`;
        messageArrowHeight?: `${number}rem`;
        messageInnerPaddingX?: `${number}rem`;
        messageInnerPaddingY?: `${number}rem`;
    };
    header?: {
        backdropFilter?: string;
        zIndexIsSticky?: "auto" | number;
        zIndexIsFixed?: "auto" | number;
    };
    heading?: {
        fontFamily?: string;
    };
}
//# sourceMappingURL=ComponentsCssVariable.d.ts.map