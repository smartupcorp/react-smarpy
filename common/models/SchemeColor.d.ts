import { default as ComponentSchemeColor } from './ComponentSchemeColor';
import { default as ComponentStatePseudoClass } from './ComponentStatePseudoClass';
export default interface SchemeColor {
    default?: ComponentStatePseudoClass | undefined;
    gray?: ComponentStatePseudoClass | undefined;
    red?: ComponentStatePseudoClass | undefined;
    coral?: ComponentStatePseudoClass | undefined;
    orange?: ComponentStatePseudoClass | undefined;
    yellow?: ComponentStatePseudoClass | undefined;
    lime?: ComponentStatePseudoClass | undefined;
    green?: ComponentStatePseudoClass | undefined;
    cyan?: ComponentStatePseudoClass | undefined;
    blue?: ComponentStatePseudoClass | undefined;
    violet?: ComponentStatePseudoClass | undefined;
    magenta?: ComponentStatePseudoClass | undefined;
    components?: {
        accordion?: ComponentSchemeColor & {
            accordionSummary?: ComponentSchemeColor;
            accordionDetails?: ComponentSchemeColor;
        };
        adminNav?: ComponentSchemeColor & {
            adminNavBrand?: ComponentSchemeColor;
            adminNavMenu?: ComponentSchemeColor;
            adminNavMenuItem?: ComponentSchemeColor;
        };
        badge?: ComponentSchemeColor;
        breadcrumb?: ComponentSchemeColor & {
            breadcrumbDivider?: ComponentSchemeColor;
        };
        button?: ComponentSchemeColor;
        card?: ComponentSchemeColor & {
            cardTitle?: ComponentSchemeColor;
            cardBody?: ComponentSchemeColor;
        };
        dialog?: ComponentSchemeColor & {
            dialogAvatar?: ComponentSchemeColor;
            dialogName?: ComponentSchemeColor;
            dialogMessage?: ComponentSchemeColor;
        };
    };
}
//# sourceMappingURL=SchemeColor.d.ts.map