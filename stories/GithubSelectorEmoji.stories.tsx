import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  GithubSelectorEmoji,
  GithubSelectorEmojiProps,
} from '../src/components/github/GithubSelectorEmoji';

const meta: Meta = {
  title: 'GithubSelectorEmoji',
  component: GithubSelectorEmoji,
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

const Template: Story<GithubSelectorEmojiProps> = args => (
  <GithubSelectorEmoji {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  shortCode: '😄',
  active: true,
};
