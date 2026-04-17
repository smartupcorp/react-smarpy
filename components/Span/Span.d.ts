import { ColorName } from '../../types';
import { default as SpanProps, BaseSpanProps } from './SpanProps';
export default function Span<BaseComponentColorNameType extends string = ColorName, ComponentPropsType extends BaseSpanProps<BaseComponentColorNameType> = SpanProps<BaseComponentColorNameType>>(props: ComponentPropsType): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Span.d.ts.map