import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  defaultProps,
  FacebookCounter,
  FacebookCounterProps,
} from './FacebookCounter';

const meta: Meta = {
  title: 'FacebookCounter',
  component: FacebookCounter,
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

const Template: Story<FacebookCounterProps> = (args) => (
  <FacebookCounter {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = { ...defaultProps };
