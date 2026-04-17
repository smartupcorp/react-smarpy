import { Interpolation, Theme } from '@emotion/react';
import { ColorName } from '../types';
import { default as BackProps } from './BackProps';
import { default as BorderProps } from './BorderProps';
import { default as ForeProps } from './ForeProps';
import { default as HighlighterProps } from './HighlighterProps';
import { default as PositioningProps } from './PositioningProps';
import { default as SizingProps } from './SizingProps';
import { default as SpacingProps } from './SpacingProps';
import { PropsWithChildren } from '../../node_modules/react';
export interface BaseComponentProps<ColorNameType extends string = ColorName> {
    fore?: ForeProps<ColorNameType> | undefined;
    back?: BackProps<ColorNameType> | undefined;
    highlighter?: HighlighterProps<ColorNameType> | undefined;
    border?: BorderProps<ColorNameType> | undefined;
    positioning?: PositioningProps | undefined;
    sizing?: SizingProps | undefined;
    spacing?: SpacingProps | undefined;
    className?: string | undefined;
    css?: Interpolation<Theme> | undefined;
    as?: React.ElementType | undefined;
    [key: string]: any;
}
export interface BaseVoidComponentProps<ColorNameType extends string = ColorName> extends BaseComponentProps<ColorNameType> {
}
export interface BaseNormalComponentProps<ColorNameType extends string = ColorName> extends BaseComponentProps<ColorNameType>, PropsWithChildren {
}
//# sourceMappingURL=BaseComponentProps.d.ts.map