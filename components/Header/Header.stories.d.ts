import { StoryObj } from '@storybook/react-vite';
import { default as Header } from './Header';
declare const meta: {
    title: string;
    component: typeof Header;
    tags: string[];
    argTypes: {
        colorName: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Plain: Story;
//# sourceMappingURL=Header.stories.d.ts.map