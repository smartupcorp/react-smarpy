import { ColorName } from '../../types';
import { default as ButtonProps, BaseButtonProps } from './ButtonProps';
export default function Button<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseButtonProps<BaseComponentColorNameType> = ButtonProps<BaseComponentColorNameType>>(props: ComponentPropsType): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map