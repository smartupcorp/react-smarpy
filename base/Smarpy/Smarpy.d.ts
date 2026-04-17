import { ColorName } from '../../types';
import { default as SmarpyProps, BaseSmarpyProps } from './SmarpyProps';
export default function Smarpy<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseSmarpyProps<BaseComponentColorNameType> = SmarpyProps<BaseComponentColorNameType>>(props: ComponentPropsType): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Smarpy.d.ts.map