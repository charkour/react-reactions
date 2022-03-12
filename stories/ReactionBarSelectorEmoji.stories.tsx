import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  ReactionBarSelectorEmoji,
  ReactionBarSelectorEmojiProps,
} from '../src/components/custom/components/ReactionBarSelectorEmoji';
import './helper.css';

const meta: Meta = {
  title: 'ReactionBarSelectorEmoji',
  component: ReactionBarSelectorEmoji,
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

const Template: Story<ReactionBarSelectorEmojiProps> = (args) => {
  return (
    <div className="center">
      <ReactionBarSelectorEmoji {...args} />
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  reaction: {
    node: <div style={{ width: 38, fontSize: 38 }}>😆</div>,
    label: 'haha',
  },
  onSelect: (label: string) => console.log(label),
};
