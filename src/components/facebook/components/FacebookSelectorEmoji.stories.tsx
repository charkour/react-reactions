import { Meta, Story } from '@storybook/react';
import React from 'react';
import { icons } from '../../../helpers';
import {
  FacebookSelectorEmoji,
  FacebookSelectorEmojiProps,
} from './FacebookSelectorEmoji';

const meta: Meta = {
  title: 'FacebookSelectorEmoji',
  component: FacebookSelectorEmoji,
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

const Template: Story<FacebookSelectorEmojiProps> = (args) => {
  return (
    <div style={{ height: 30, width: 30 }}>
      <FacebookSelectorEmoji {...args} />
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  icon: icons.find('facebook', 'haha'),
  label: 'cool',
  onSelect: (label: string) => console.log(label),
};
