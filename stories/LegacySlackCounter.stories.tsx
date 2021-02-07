import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SlackCounter } from '../legacy/src/components/slack/SlackCounter';

const meta: Meta = {
  title: 'LegacySlackCounter',
  component: SlackCounter,
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

const Template: Story<any> = args => <SlackCounter {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  counters: [
    {
      emoji: '👍', // String name of reaction
      by: 'Case Sandberg', // String of persons name
    },
    {
      emoji: '👎', // String name of reaction
      by: 'Charlie', // String of persons name
    },
  ],
  user: 'Charlie',
};
