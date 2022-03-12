import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  FacebookCounterReaction,
  FacebookCounterReactionProps,
} from './FacebookCounterReaction';

const meta: Meta = {
  title: 'FacebookCounterReaction',
  component: FacebookCounterReaction,
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

const Template: Story<FacebookCounterReactionProps> = (args) => (
  <FacebookCounterReaction {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  reaction: 'angry',
  bg: '#000',
  variant: 'facebook',
};
