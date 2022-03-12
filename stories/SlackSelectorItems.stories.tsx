import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  SlackSelectorItems,
  SlackSelectorItemsProps,
} from '../src/components/slack/components/SlackSelectorItems';

const meta: Meta = {
  title: 'SlackSelectorItems',
  component: SlackSelectorItems,
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

const Template: Story<SlackSelectorItemsProps> = (args) => (
  <SlackSelectorItems {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  scrollHeight: '270px',
  removeEmojis: [
    '🙂',
    '🙃',
    '☺️',
    '🤑',
    '🤓',
    '🤗',
    '🙄',
    '🤔',
    '🙁',
    '☹️',
    '🤐',
    '🤒',
    '🤕',
    '🤖',
  ],
  frequent: [
    '👍',
    '🐉',
    '🙌',
    '🗿',
    '😊',
    '🐬',
    '😹',
    '👻',
    '🚀',
    '🚁',
    '🏇',
    '🇨🇦',
  ],
};
