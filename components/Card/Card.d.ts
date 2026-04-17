import { ColorName } from '../../types';
import { default as CardProps, BaseCardProps } from './CardProps';
export default function Card<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseCardProps<BaseComponentColorNameType> = CardProps<BaseComponentColorNameType>>(props: ComponentPropsType): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Card.d.ts.map