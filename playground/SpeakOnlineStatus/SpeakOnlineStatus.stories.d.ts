import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    parameters: {
        layout: string;
        notes: string;
        info: string;
        docs: {
            subtitle: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
