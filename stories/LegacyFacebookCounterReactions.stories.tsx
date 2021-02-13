import { Meta, Story } from '@storybook/react';
import React from 'react';
import { FacebookCounterReaction } from '../legacy/src/components/facebook/FacebookCounterReaction';

const meta: Meta = {
  title: 'LegacyFacebookCounterReaction',
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

const Template: Story<any> = args => <FacebookCounterReaction {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  reaction: 'angry',
  bg: '#000',
};
