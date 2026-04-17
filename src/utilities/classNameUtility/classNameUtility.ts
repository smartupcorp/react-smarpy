
import type { BaseComponentProps } from "../../models/BaseComponentProps";
import type { ColorName } from "../../types";

function getUtilityClassNames<
  BaseComponentColorNameType extends string = ColorName,
>(props: BaseComponentProps<BaseComponentColorNameType>): string[] {
  const assignedClassNames: string[] = [];

  if (props.positioning) {
    if (props.positioning.translateMiddle) {
      assignedClassNames.push(`translate-middle`);
    }
    if (props.positioning.translateMiddleX) {
      assignedClassNames.push(`translate-middle-x`);
    }
    if (props.positioning.translateMiddleY) {
      assignedClassNames.push(`translate-middle-y`);
    }
  }

  if (props.sizing) {
    if (props.sizing.aspectRatio) {
      if (props.sizing.aspectRatio.includes(":")) {
        assignedClassNames.push(
          `aspect-ratio-${props.sizing.aspectRatio.replace(":", "-")}`
        );
      } else {
        assignedClassNames.push(`aspect-ratio-${props.sizing.aspectRatio}`);
      }
    }
  }

  return assignedClassNames;
}

const classNameUtility = {
  getUtilityClassNames,
};

export default classNameUtility;
