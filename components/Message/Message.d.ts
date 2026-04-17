import { ColorName } from '../../types';
import { default as MessageProps, BaseMessageProps } from './MessageProps';
export default function Message<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseMessageProps<BaseComponentColorNameType> = MessageProps<BaseComponentColorNameType>>(props: ComponentPropsType): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Message.d.ts.map