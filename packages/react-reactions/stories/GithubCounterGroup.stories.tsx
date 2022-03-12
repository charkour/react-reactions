import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  GithubCounterGroup,
  GithubCounterGroupProps,
} from '../src/components/github/components/GithubCounterGroup';

const meta: Meta = {
  title: 'GithubCounterGroup',
  component: GithubCounterGroup,
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

const Template: Story<GithubCounterGroupProps> = (args) => (
  <GithubCounterGroup {...args} />
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
