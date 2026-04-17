import type ComponentColorSchemeColor from "./ComponentColorSchemeColor";

export default interface ColorSchemeColorComponents<
  BaseComponentColorNameType extends string,
> {
  accordion?:
    | (ComponentColorSchemeColor<BaseComponentColorNameType> & {
        accordionSummary?:
          | ComponentColorSchemeColor<BaseComponentColorNameType>
          | undefined;
        accordionDetails?:
          | ComponentColorSchemeColor<BaseComponentColorNameType>
          | undefined;
      })
    | undefined;
  adminNav?:
    | (ComponentColorSchemeColor<BaseComponentColorNameType> & {
        adminNavBrand?:
          | ComponentColorSchemeColor<BaseComponentColorNameType>
          | undefined;
        adminNavMenu?:
          | ComponentColorSchemeColor<BaseComponentColorNameType>
          | undefined;
        adminNavMenuItem?:
          | ComponentColorSchemeColor<BaseComponentColorNameType>
          | undefined;
      })
    | undefined;
  badge?: ComponentColorSchemeColor<BaseComponentColorNameType> | undefined;
  breadcrumb?:
    | (ComponentColorSchemeColor<BaseComponentColorNameType> & {
        breadcrumbDivider?:
          | ComponentColorSchemeColor<BaseComponentColorNameType>
          | undefined;
      })
    | undefined;
  button?: ComponentColorSchemeColor<BaseComponentColorNameType> | undefined;
  card?: ComponentColorSchemeColor<BaseComponentColorNameType> & {
    cardHeader?:
      | ComponentColorSchemeColor<BaseComponentColorNameType>
      | undefined;
    cardBody?:
      | ComponentColorSchemeColor<BaseComponentColorNameType>
      | undefined;
    cardFooter?:
      | ComponentColorSchemeColor<BaseComponentColorNameType>
      | undefined;
  };
  dialog?: ComponentColorSchemeColor<BaseComponentColorNameType> & {
    dialogAvatar?:
      | ComponentColorSchemeColor<BaseComponentColorNameType>
      | undefined;
    dialogName?:
      | ComponentColorSchemeColor<BaseComponentColorNameType>
      | undefined;
    dialogMessage?:
      | ComponentColorSchemeColor<BaseComponentColorNameType>
      | undefined;
  };
  header?: ComponentColorSchemeColor<BaseComponentColorNameType> | undefined;
  label?: ComponentColorSchemeColor<BaseComponentColorNameType> | undefined;
  link?: ComponentColorSchemeColor<BaseComponentColorNameType> | undefined;
  loader?: ComponentColorSchemeColor<BaseComponentColorNameType> | undefined;
  message?: ComponentColorSchemeColor<BaseComponentColorNameType> & {
    messageHeader?:
      | ComponentColorSchemeColor<BaseComponentColorNameType>
      | undefined;
    messageBody?:
      | ComponentColorSchemeColor<BaseComponentColorNameType>
      | undefined;
  };
  progress?: ComponentColorSchemeColor<BaseComponentColorNameType> | undefined;
}
