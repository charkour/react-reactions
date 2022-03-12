import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  defaultProps,
  GithubCounter,
  GithubCounterProps,
} from './GithubCounter';

const meta: Meta = {
  title: 'GithubCounter',
  component: GithubCounter,
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

const Template: Story<GithubCounterProps> = (args) => (
  <GithubCounter {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = { ...defaultProps };
