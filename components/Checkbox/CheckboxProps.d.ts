import { ReactNode } from '../../../node_modules/react';
import { ColorName } from '../../common/literalTypes';
import { BaseComponentProps } from '../../common/models';
export default interface CheckboxProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, BaseComponentProps {
    colorName?: ColorName;
    text?: string | ReactNode;
}
//# sourceMappingURL=CheckboxProps.d.ts.map