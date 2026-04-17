import { ColorName } from '../../types';
import { default as ColumnProps, BaseColumnProps } from './ColumnProps';
export default function Column<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseColumnProps<BaseComponentColorNameType> = ColumnProps<BaseComponentColorNameType>>(props: ComponentPropsType): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Column.d.ts.map