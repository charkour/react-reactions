import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  FacebookCounter,
  FacebookCounterProps,
} from '../src/components/facebook/FacebookCounter';

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

const Template: Story<FacebookCounterProps> = args => (
  <FacebookCounter {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  counters: [
    {
      emoji: 'like', // String name of reaction
      by: 'Case Sandberg', // String of persons name
    },
    {
      emoji: 'haha', // String name of reaction
      by: 'Charlie', // String of persons name
    },
  ],
  user: 'Charlie',
};
