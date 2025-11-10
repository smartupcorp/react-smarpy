import { StoryObj } from '@storybook/react-vite';
import { default as Checkbox } from './Checkbox';
declare const meta: {
    title: string;
    component: typeof Checkbox;
    tags: string[];
    argTypes: {
        checked: {
            type: "boolean";
        };
        disabled: {
            type: "boolean";
        };
        text: {
            type: "string";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Plain: Story;
//# sourceMappingURL=Checkbox.stories.d.ts.map