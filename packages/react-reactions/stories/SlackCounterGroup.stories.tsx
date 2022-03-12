import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  SlackCounterGroup,
  SlackCounterGroupProps,
} from '../src/components/slack/components/SlackCounterGroup';

const meta: Meta = {
  title: 'SlackCounterGroup',
  component: SlackCounterGroup,
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

const Template: Story<SlackCounterGroupProps> = (args) => (
  <SlackCounterGroup {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  emoji: '🎉',
  count: '3',
  names: ['Jon', 'Jo', 'Jeff'],
  active: true,
};
