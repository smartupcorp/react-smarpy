import SmarpyCssVariable from "../../common/models/SmarpyCssVariable";
import {
  ComponentPart,
  ComponentStatePseudoClass,
  Oklch,
} from "../../common/models";
import ComponentSchemeColor from "../../common/models/ComponentSchemeColor";

const prefix = "smarpy-";

function getComponentColorVariables(
  colorName: string,
  componentPart?: ComponentPart,
  componentStateName?: string,
  elementName?: string
): string[] {
  const styles: string[] = [];

  if (componentPart) {
    if (componentPart.fore) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-fore: ${
          componentPart.fore.startsWith(`--${prefix}`)
            ? `var(${componentPart.fore});`
            : `${componentPart.fore};`
        }`
      );
    }
    if (componentPart.back) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-back: ${
          componentPart.back.startsWith(`--${prefix}`)
            ? `var(${componentPart.back});`
            : `${componentPart.back};`
        }`
      );
    }
    if (componentPart.border) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-border: ${
          componentPart.border.startsWith(`--${prefix}`)
            ? `var(${componentPart.border});`
            : `${componentPart.border};`
        }`
      );
    }
    if (componentPart.shadow) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-shadow: ${
          componentPart.shadow.startsWith(`--${prefix}`)
            ? `var(${componentPart.shadow});`
            : `${componentPart.shadow};`
        }`
      );
    }
    if (componentPart.placeholder) {
      styles.push(
        `--${prefix}color-${colorName}${
          componentStateName ? `-${componentStateName}` : ``
        }${elementName ? `-${elementName}` : ``}-placeholder: ${
          componentPart.placeholder.startsWith(`--${prefix}`)
            ? `var(${componentPart.placeholder});`
            : `${componentPart.placeholder};`
        }`
      );
    }
  }
  return styles;
}

function getColorVariables(
  colorName: string,
  componentState: ComponentStatePseudoClass,
  elementName?: string
) {
  const derives: string[] = [];
  if (componentState.default) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.default,
      undefined,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.hover) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.hover,
      `hover`,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.focus) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.focus,
      `focus`,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.active) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.active,
      `active`,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  if (componentState.disabled) {
    const styles = getComponentColorVariables(
      colorName,
      componentState.disabled,
      `disabled`,
      elementName
    );
    if (styles.length > 0) {
      derives.push(...styles);
    }
  }

  return derives;
}

function getSmarpyCssVariableStyles(
  cssVariableSetting?: SmarpyCssVariable
): string {
  const smarpyStyles: string[] = [];

  const rootStyles = getRootStyles(cssVariableSetting);
  const lightSchemeStyles = getLightSchemeStyles(cssVariableSetting);
  const darkSchemeStyles = getDarkSchemeStyles(cssVariableSetting);

  rootStyles.length > 0 && smarpyStyles.push(`:root{${rootStyles.join(``)}}`);
  lightSchemeStyles.length > 0 &&
    smarpyStyles.push(`:root{${lightSchemeStyles.join(``)}}`);
  lightSchemeStyles.length > 0 &&
    smarpyStyles.push(
      `[data-color-scheme="light"]{${lightSchemeStyles.join(``)}}`
    );
  darkSchemeStyles.length > 0 &&
    smarpyStyles.push(
      `[data-color-scheme="dark"]{${darkSchemeStyles.join(``)}}`
    );

  return smarpyStyles.join(``);
}

function getRootStyles(cssVariableSetting?: SmarpyCssVariable): string[] {
  const rootStyles: string[] = [];

  if (cssVariableSetting) {
    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      const setColorDetailVariable = (
        colorName: string,
        lightness: string,
        oklch?: Oklch
      ) => {
        if (oklch) {
          rootStyles.push(
            `--${prefix}color-${colorName}-${lightness}-oklch: ${oklch.lightness}% ${oklch.chroma} ${oklch.hue};`
          );
          rootStyles.push(
            `--${prefix}color-${colorName}-${lightness}: oklch(var(--${prefix}color-${colorName}-${lightness}-oklch));`
          );
        }
      };

      if (color.white) {
        if (typeof color.white === `string`) {
          rootStyles.push(`--${prefix}color-white: ${color.white};`);
        } else {
          rootStyles.push(
            `--${prefix}color-white-oklch: ${color.white.lightness}% ${color.white.chroma} ${color.white.hue};`
          );
          rootStyles.push(
            `--${prefix}color-white: oklch(var(--${prefix}color-white-oklch));`
          );
        }
      }

      if (color.black) {
        if (typeof color.black === `string`) {
          rootStyles.push(`--${prefix}color-black: ${color.black};`);
        } else {
          rootStyles.push(
            `--${prefix}color-black-oklch: ${color.black.lightness}% ${color.black.chroma} ${color.black.hue};`
          );
          rootStyles.push(
            `--${prefix}color-black: oklch(var(--${prefix}color-black-oklch));`
          );
        }
      }

      if (color.gray) {
        const gradation = color.gray;
        const colorName = `gray`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.red) {
        const gradation = color.red;
        const colorName = `red`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.coral) {
        const gradation = color.coral;
        const colorName = `coral`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.orange) {
        const gradation = color.orange;
        const colorName = `orange`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.yellow) {
        const gradation = color.yellow;
        const colorName = `yellow`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.lime) {
        const gradation = color.lime;
        const colorName = `lime`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.green) {
        const gradation = color.green;
        const colorName = `green`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.cyan) {
        const gradation = color.cyan;
        const colorName = `cyan`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.blue) {
        const gradation = color.blue;
        const colorName = `blue`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.violet) {
        const gradation = color.violet;
        const colorName = `violet`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }

      if (color.magenta) {
        const gradation = color.magenta;
        const colorName = `magenta`;
        setColorDetailVariable(colorName, `950`, gradation[950]);
        setColorDetailVariable(colorName, `900`, gradation[900]);
        setColorDetailVariable(colorName, `850`, gradation[850]);
        setColorDetailVariable(colorName, `800`, gradation[800]);
        setColorDetailVariable(colorName, `750`, gradation[750]);
        setColorDetailVariable(colorName, `700`, gradation[700]);
        setColorDetailVariable(colorName, `650`, gradation[650]);
        setColorDetailVariable(colorName, `600`, gradation[600]);
        setColorDetailVariable(colorName, `550`, gradation[550]);
        setColorDetailVariable(colorName, `500`, gradation[500]);
        setColorDetailVariable(colorName, `450`, gradation[450]);
        setColorDetailVariable(colorName, `400`, gradation[400]);
        setColorDetailVariable(colorName, `350`, gradation[350]);
        setColorDetailVariable(colorName, `300`, gradation[300]);
        setColorDetailVariable(colorName, `250`, gradation[250]);
        setColorDetailVariable(colorName, `200`, gradation[200]);
        setColorDetailVariable(colorName, `150`, gradation[150]);
        setColorDetailVariable(colorName, `100`, gradation[100]);
        setColorDetailVariable(colorName, `050`, gradation[50]);
      }
    }

    if (cssVariableSetting.typography) {
      const typography = cssVariableSetting.typography;
      if (typography.fontFamily) {
        if (typography.fontFamily.sansSerif) {
          rootStyles.push(
            `--${prefix}font-family-sans-serif: ${typography.fontFamily.sansSerif};`
          );
        }
        if (typography.fontFamily.serif) {
          rootStyles.push(
            `--${prefix}font-family-serif: ${typography.fontFamily.serif};`
          );
        }
        if (typography.fontFamily.monospace) {
          rootStyles.push(
            `--${prefix}font-family-monospace: ${typography.fontFamily.monospace};`
          );
        }
        if (typography.fontFamily.main) {
          rootStyles.push(
            `--${prefix}font-family-main: ${typography.fontFamily.main};`
          );
        }
        if (typography.fontFamily.heading) {
          rootStyles.push(
            `--${prefix}font-family-heading: ${typography.fontFamily.heading};`
          );
        }
        if (typography.fontFamily.code) {
          rootStyles.push(
            `--${prefix}font-family-code: ${typography.fontFamily.code};`
          );
        }
      }
      if (typography.fontSize) {
        if (typography.fontSize.small) {
          rootStyles.push(
            `--${prefix}font-size-small: ${typography.fontSize.small};`
          );
        }
        if (typography.fontSize.normal) {
          rootStyles.push(
            `--${prefix}font-size-normal: ${typography.fontSize.normal};`
          );
        }
        if (typography.fontSize.medium) {
          rootStyles.push(
            `--${prefix}font-size-medium: ${typography.fontSize.medium};`
          );
        }
        if (typography.fontSize.large) {
          rootStyles.push(
            `--${prefix}font-size-large: ${typography.fontSize.large};`
          );
        }
        if (typography.fontSize.xlarge) {
          rootStyles.push(
            `--${prefix}font-size-xlarge: ${typography.fontSize.xlarge};`
          );
        }
        if (typography.fontSize.xxlarge) {
          rootStyles.push(
            `--${prefix}font-size-xxlarge: ${typography.fontSize.xxlarge};`
          );
        }
        if (typography.fontSize.xxxlarge) {
          rootStyles.push(
            `--${prefix}font-size-xxxlarge: ${typography.fontSize.xxxlarge};`
          );
        }
        if (typography.fontSize.xxxxlarge) {
          rootStyles.push(
            `--${prefix}font-size-xxxxlarge: ${typography.fontSize.xxxxlarge};`
          );
        }
        if (typography.fontSize.xxxxxlarge) {
          rootStyles.push(
            `--${prefix}font-size-xxxxxlarge: ${typography.fontSize.xxxxxlarge};`
          );
        }
      }
      if (typography.fontWeight) {
        if (typography.fontWeight.light) {
          rootStyles.push(
            `--${prefix}font-weight-light: ${typography.fontWeight.light};`
          );
        }
        if (typography.fontWeight.normal) {
          rootStyles.push(
            `--${prefix}font-weight-normal: ${typography.fontWeight.normal};`
          );
        }
        if (typography.fontWeight.medium) {
          rootStyles.push(
            `--${prefix}font-weight-medium: ${typography.fontWeight.medium};`
          );
        }
        if (typography.fontWeight.semibold) {
          rootStyles.push(
            `--${prefix}font-weight-semibold: ${typography.fontWeight.semibold};`
          );
        }
        if (typography.fontWeight.bold) {
          rootStyles.push(
            `--${prefix}font-weight-bold: ${typography.fontWeight.bold};`
          );
        }
      }
    }

    if (cssVariableSetting.components) {
      const components = cssVariableSetting.components;

      if (components.breadcrumb) {
        const breadcrumb = components.breadcrumb;
        if (breadcrumb.breadcrumbDivider) {
          rootStyles.push(
            `--${prefix}breadcrumb-divider: ${breadcrumb.breadcrumbDivider};`
          );
        }
      }

      if (components.button) {
        const button = components.button;
        if (button.paddingX) {
          rootStyles.push(`--${prefix}button-padding-x: ${button.paddingX};`);
        }
        if (button.paddingY) {
          rootStyles.push(`--${prefix}button-padding-y: ${button.paddingY};`);
        }
      }

      if (components.dialog) {
        const dialog = components.dialog;
        if (dialog.avatarSizeDefault) {
          rootStyles.push(
            `--${prefix}dialog-avatar-size-default: ${dialog.avatarSizeDefault};`
          );
        }
        if (dialog.avatarSizeSmall) {
          rootStyles.push(
            `--${prefix}dialog-avatar-size-small: ${dialog.avatarSizeSmall};`
          );
        }
        if (dialog.avatarSizeLarge) {
          rootStyles.push(
            `--${prefix}dialog-avatar-size-large: ${dialog.avatarSizeLarge};`
          );
        }
        if (dialog.avatarTopOffset) {
          rootStyles.push(
            `--${prefix}dialog-avatar-top-offset: ${dialog.avatarTopOffset};`
          );
        }
        if (dialog.nameFontSize) {
          if (typeof dialog.nameFontSize.includes("rem")) {
            rootStyles.push(
              `--${prefix}dialog-name-font-size: ${dialog.nameFontSize};`
            );
          } else {
            rootStyles.push(
              `--${prefix}dialog-name-font-size: var(--${prefix}font-size-${dialog.nameFontSize});`
            );
          }
        }
        if (dialog.namePaddingX) {
          rootStyles.push(
            `--${prefix}dialog-name-padding-x: ${dialog.namePaddingX};`
          );
        }
        if (dialog.namePaddingY) {
          rootStyles.push(
            `--${prefix}dialog-name-padding-y: ${dialog.namePaddingY};`
          );
        }
        if (dialog.messageArrowHeight) {
          rootStyles.push(
            `--${prefix}dialog-messege-arrow-height: ${dialog.messageArrowHeight};`
          );
        }
        if (dialog.messageArrowWidth) {
          rootStyles.push(
            `--${prefix}dialog-messege-arrow-width: ${dialog.messageArrowWidth};`
          );
        }
        if (dialog.messageInnerPaddingX) {
          rootStyles.push(
            `--${prefix}dialog-message-inner-padding-x: ${dialog.messageInnerPaddingX};`
          );
        }
        if (dialog.messageInnerPaddingY) {
          rootStyles.push(
            `--${prefix}dialog-message-inner-padding-y: ${dialog.messageInnerPaddingY};`
          );
        }
      }

      if (components.heading) {
        const heading = components.heading;
        if (heading.fontFamily) {
          rootStyles.push(
            `--${prefix}font-family-heading: ${heading.fontFamily};`
          );
        }
      }
    }
  }

  return rootStyles;
}

function getLightSchemeStyles(
  cssVariableSetting?: SmarpyCssVariable
): string[] {
  const lightSchemeStyles: string[] = [];

  const setComponentSchemeColor = (
    component: ComponentSchemeColor,
    elementName?: string
  ) => {
    if (component.default) {
      const styles = getColorVariables(
        `default`,
        component.default,
        elementName
      );
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.gray) {
      const styles = getColorVariables(`gray`, component.gray, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.red) {
      const styles = getColorVariables(`red`, component.red, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.coral) {
      const styles = getColorVariables(`coral`, component.coral, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.orange) {
      const styles = getColorVariables(`orange`, component.orange, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.yellow) {
      const styles = getColorVariables(`yellow`, component.yellow, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.lime) {
      const styles = getColorVariables(`lime`, component.lime, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.green) {
      const styles = getColorVariables(`green`, component.green, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.cyan) {
      const styles = getColorVariables(`cyan`, component.cyan, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.blue) {
      const styles = getColorVariables(`blue`, component.blue, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.violet) {
      const styles = getColorVariables(`violet`, component.violet, elementName);
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
    if (component.magenta) {
      const styles = getColorVariables(
        `magenta`,
        component.magenta,
        elementName
      );
      if (styles.length > 0) {
        lightSchemeStyles.push(...styles);
      }
    }
  };

  if (cssVariableSetting) {
    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      if (color.light) {
        if (color.light.default) {
          const styles = getColorVariables(`default`, color.light.default);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.gray) {
          const styles = getColorVariables(`gray`, color.light.gray);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.red) {
          const styles = getColorVariables(`red`, color.light.red);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.coral) {
          const styles = getColorVariables(`coral`, color.light.coral);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.orange) {
          const styles = getColorVariables(`orange`, color.light.orange);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.yellow) {
          const styles = getColorVariables(`yellow`, color.light.yellow);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.lime) {
          const styles = getColorVariables(`lime`, color.light.lime);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.green) {
          const styles = getColorVariables(`green`, color.light.green);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.cyan) {
          const styles = getColorVariables(`cyan`, color.light.cyan);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.blue) {
          const styles = getColorVariables(`blue`, color.light.blue);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }
        if (color.light.violet) {
          const styles = getColorVariables(`violet`, color.light.violet);
          if (styles.length > 0) {
            lightSchemeStyles.push(...styles);
          }
        }

        if (color.light.components) {
          const components = color.light.components;

          if (components.accordion) {
            const accordion = components.accordion;
            setComponentSchemeColor(accordion, `accordion`);

            if (accordion.accordionSummary) {
              const accordionSummary = accordion.accordionSummary;
              setComponentSchemeColor(accordionSummary, `accordion-summary`);
            }

            if (accordion.accordionDetails) {
              const accordionDetails = accordion.accordionDetails;
              setComponentSchemeColor(accordionDetails, `accordion-details`);
            }
          }

          if (components.adminNav) {
            const adminNav = components.adminNav;
            setComponentSchemeColor(adminNav, `admin-nav`);

            if (adminNav.adminNavBrand) {
              const adminNavBrand = adminNav.adminNavBrand;
              setComponentSchemeColor(adminNavBrand, `admin-nav-brand`);
            }

            if (adminNav.adminNavMenu) {
              const adminNavMenu = adminNav.adminNavMenu;
              setComponentSchemeColor(adminNavMenu, `admin-nav-menu`);
            }

            if (adminNav.adminNavMenuItem) {
              const adminNavMenuItem = adminNav.adminNavMenuItem;
              setComponentSchemeColor(adminNavMenuItem, `admin-nav-menu-item`);
            }
          }

          if (components.badge) {
            const badge = components.badge;
            setComponentSchemeColor(badge, `badge`);
          }

          if (components.breadcrumb) {
            const breadcrumb = components.breadcrumb;
            setComponentSchemeColor(breadcrumb, `breadcrumb`);

            if (breadcrumb.breadcrumbDivider) {
              const breadcrumbDivider = breadcrumb.breadcrumbDivider;
              setComponentSchemeColor(breadcrumbDivider, `card-divider`);
            }
          }

          if (components.button) {
            const button = components.button;
            setComponentSchemeColor(button, `button`);
          }

          if (components.card) {
            const card = components.card;
            setComponentSchemeColor(card, `card`);

            if (card.cardTitle) {
              const cardTitle = card.cardTitle;
              setComponentSchemeColor(cardTitle, `card-title`);
            }

            if (card.cardBody) {
              const cardBody = card.cardBody;
              setComponentSchemeColor(cardBody, `card-body`);
            }
          }

          if (components.dialog) {
            const dialog = components.dialog;
            setComponentSchemeColor(dialog, `dialog`);

            if (dialog.dialogAvatar) {
              const dialogAvatar = dialog.dialogAvatar;
              setComponentSchemeColor(dialogAvatar, `dialog-avatar`);
            }

            if (dialog.dialogName) {
              const dialogName = dialog.dialogName;
              setComponentSchemeColor(dialogName, `dialog-name`);
            }

            if (dialog.dialogMessage) {
              const dialogMessage = dialog.dialogMessage;
              setComponentSchemeColor(dialogMessage, `dialog-message`);
            }
          }
        }
      }
    }
  }

  return lightSchemeStyles;
}

function getDarkSchemeStyles(cssVariableSetting?: SmarpyCssVariable): string[] {
  const darkSchemeStyles: string[] = [];

  const setComponentSchemeColor = (
    component: ComponentSchemeColor,
    elementName?: string
  ) => {
    if (component.default) {
      const styles = getColorVariables(
        `default`,
        component.default,
        elementName
      );
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.gray) {
      const styles = getColorVariables(`gray`, component.gray, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.red) {
      const styles = getColorVariables(`red`, component.red, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.coral) {
      const styles = getColorVariables(`coral`, component.coral, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.orange) {
      const styles = getColorVariables(`orange`, component.orange, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.yellow) {
      const styles = getColorVariables(`yellow`, component.yellow, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.lime) {
      const styles = getColorVariables(`lime`, component.lime, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.green) {
      const styles = getColorVariables(`green`, component.green, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.cyan) {
      const styles = getColorVariables(`cyan`, component.cyan, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.blue) {
      const styles = getColorVariables(`blue`, component.blue, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.violet) {
      const styles = getColorVariables(`violet`, component.violet, elementName);
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
    if (component.magenta) {
      const styles = getColorVariables(
        `magenta`,
        component.magenta,
        elementName
      );
      if (styles.length > 0) {
        darkSchemeStyles.push(...styles);
      }
    }
  };

  if (cssVariableSetting) {
    if (cssVariableSetting.color) {
      const color = cssVariableSetting.color;
      if (color.dark) {
        if (color.dark.default) {
          const styles = getColorVariables(`default`, color.dark.default);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.gray) {
          const styles = getColorVariables(`gray`, color.dark.gray);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.red) {
          const styles = getColorVariables(`red`, color.dark.red);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.coral) {
          const styles = getColorVariables(`coral`, color.dark.coral);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.orange) {
          const styles = getColorVariables(`orange`, color.dark.orange);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.yellow) {
          const styles = getColorVariables(`yellow`, color.dark.yellow);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.lime) {
          const styles = getColorVariables(`lime`, color.dark.lime);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.green) {
          const styles = getColorVariables(`green`, color.dark.green);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.cyan) {
          const styles = getColorVariables(`cyan`, color.dark.cyan);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.blue) {
          const styles = getColorVariables(`blue`, color.dark.blue);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.violet) {
          const styles = getColorVariables(`violet`, color.dark.violet);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }
        if (color.dark.magenta) {
          const styles = getColorVariables(`magenta`, color.dark.magenta);
          if (styles.length > 0) {
            darkSchemeStyles.push(...styles);
          }
        }

        if (color.dark.components) {
          const components = color.dark.components;

          if (components.accordion) {
            const accordion = components.accordion;
            setComponentSchemeColor(accordion, `accordion`);

            if (accordion.accordionSummary) {
              const accordionSummary = accordion.accordionSummary;
              setComponentSchemeColor(accordionSummary, `accordion-summary`);
            }

            if (accordion.accordionDetails) {
              const accordionDetails = accordion.accordionDetails;
              setComponentSchemeColor(accordionDetails, `accordion-details`);
            }
          }

          if (components.adminNav) {
            const adminNav = components.adminNav;
            setComponentSchemeColor(adminNav, `admin-nav`);

            if (adminNav.adminNavBrand) {
              const adminNavBrand = adminNav.adminNavBrand;
              setComponentSchemeColor(adminNavBrand, `admin-nav-brand`);
            }

            if (adminNav.adminNavMenu) {
              const adminNavMenu = adminNav.adminNavMenu;
              setComponentSchemeColor(adminNavMenu, `admin-nav-menu`);
            }

            if (adminNav.adminNavMenuItem) {
              const adminNavMenuItem = adminNav.adminNavMenuItem;
              setComponentSchemeColor(adminNavMenuItem, `admin-nav-menu-item`);
            }
          }

          if (components.badge) {
            const badge = components.badge;
            setComponentSchemeColor(badge, `badge`);
          }

          if (components.breadcrumb) {
            const breadcrumb = components.breadcrumb;
            setComponentSchemeColor(breadcrumb, `breadcrumb`);

            if (breadcrumb.breadcrumbDivider) {
              const breadcrumbDivider = breadcrumb.breadcrumbDivider;
              setComponentSchemeColor(breadcrumbDivider, `card-divider`);
            }
          }

          if (components.button) {
            const button = components.button;
            setComponentSchemeColor(button, `button`);
          }

          if (components.card) {
            const card = components.card;
            setComponentSchemeColor(card, `card`);

            if (card.cardTitle) {
              const cardTitle = card.cardTitle;
              setComponentSchemeColor(cardTitle, `card-title`);
            }

            if (card.cardBody) {
              const cardBody = card.cardBody;
              setComponentSchemeColor(cardBody, `card-body`);
            }
          }

          if (components.dialog) {
            const dialog = components.dialog;
            setComponentSchemeColor(dialog, `dialog`);

            if (dialog.dialogAvatar) {
              const dialogAvatar = dialog.dialogAvatar;
              setComponentSchemeColor(dialogAvatar, `dialog-avatar`);
            }

            if (dialog.dialogName) {
              const dialogName = dialog.dialogName;
              setComponentSchemeColor(dialogName, `dialog-name`);
            }

            if (dialog.dialogMessage) {
              const dialogMessage = dialog.dialogMessage;
              setComponentSchemeColor(dialogMessage, `dialog-message`);
            }
          }
        }
      }
    }
  }

  return darkSchemeStyles;
}

const smarpyStyleUtility = {
  getSmarpyCssVariableStyles,
  getRootStyles,
  getLightSchemeStyles,
  getDarkSchemeStyles,
};

export default smarpyStyleUtility;
