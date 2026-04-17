import { ColorName } from '../../types';
import { BaseContainerProps, default as ContainerProps } from './ContainerProps';
export default function Container<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseContainerProps<BaseComponentColorNameType> = ContainerProps<BaseComponentColorNameType>>(props: ComponentPropsType): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Container.d.ts.map