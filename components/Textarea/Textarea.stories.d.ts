import { StoryObj } from '@storybook/react-vite';
import { default as Textarea } from './Textarea';
declare const meta: {
    title: string;
    component: typeof Textarea;
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
//# sourceMappingURL=Textarea.stories.d.ts.map