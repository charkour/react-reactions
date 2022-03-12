import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  SlackSelectorSectionEmoji,
  SlackSelectorSectionEmojiProps,
} from '../src/components/slack/components/SlackSelectorSectionEmoji';

const meta: Meta = {
  title: 'SlackSelectorSectionEmoji',
  component: SlackSelectorSectionEmoji,
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

const Template: Story<SlackSelectorSectionEmojiProps> = (args) => (
  <SlackSelectorSectionEmoji {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  hoverColor: 'blue',
  emoji: '🥰',
};
