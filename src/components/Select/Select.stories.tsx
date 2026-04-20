import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';
import { useState } from 'react';

const meta = {
    component: Select,
} satisfies Meta<typeof Select>;

export default meta;

export const SelectDemo = () => {
    const [collapsed, setCollcpased] = useState(true);
    const [value, setValue] = useState('Choose smth');
    return (
        <Select
            items={[
                { title: 'hi', value: '1' },
                { title: 'hihi', value: '2' },
            ]}
            changeTitle={(value) => {
                setValue(value);
                setCollcpased(true);
            }}
            setAccordionCollapsed={() => {
                setCollcpased(!collapsed);
            }}
            collapsed={collapsed}
            value={value}
        />
    );
};
