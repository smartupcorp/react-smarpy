import { ColorName } from '../../common/literalTypes';
import { BaseComponentProps } from '../../common/models';
import { default as React } from '../../../node_modules/react';
export default interface FooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, BaseComponentProps {
    colorName?: ColorName;
    isSticky?: boolean | undefined;
    isFixed?: boolean | undefined;
}
//# sourceMappingURL=FooterProps.d.ts.map