import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: () => import("react/jsx-runtime").JSX.Element;
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
