import { Meta, Story } from '@storybook/react';
import React from 'react';
import active from '../src/helpers/active';

interface ThingProps {
  message: string;
}

const Thing = active(({ message }: ThingProps) => {
  return <div>{message}</div>;
});

const meta: Meta = {
  title: 'withActive',
  component: Thing,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ThingProps> = args => {
  return <Thing {...args} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  message: 'Test',
};
