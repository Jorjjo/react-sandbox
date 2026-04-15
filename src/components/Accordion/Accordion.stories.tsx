import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from './Accordion';
import { useState } from 'react';
import { action } from 'storybook/actions';

const meta = {
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

// export const FirstStory: Story = {
//     args: {
//         titleValue: 'hello',
//         collapsed: true,
//         // setAccordionCollapsed: () => {},
//     },
// };

const onChangeCallback = action('onChange')

export const OpenedAccordion = () => {
    return (
        <Accordion
            titleValue='OpenedAccordion'
            collapsed={false}
            setAccordionCollapsed={onChangeCallback}
        />
    );
};

export const CollapsedAccordion = () => {
    return (
        <Accordion
            titleValue='CollapsedAccordion'
            collapsed={true}
            setAccordionCollapsed={() => {}}
        />
    );
};

export const AccordionDemo = () => {
    const [accordionCollapsed, setAccordionCollapsed] = useState(false);
    return (
        <Accordion
            titleValue='Accordion'
            collapsed={accordionCollapsed}
            setAccordionCollapsed={() => {
                setAccordionCollapsed(!accordionCollapsed);
            }}
        />
    );
};
