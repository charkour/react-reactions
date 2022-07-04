import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  FacebookSelectorEmoji,
  FacebookSelectorEmojiProps,
} from '../src/components/facebook/FacebookSelectorEmoji';
import { icons } from '../src/helpers';

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

const Template: Story<FacebookSelectorEmojiProps> = args => {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div style={{ height: 30, width: 30, paddingTop: 100 }}>
      <FacebookSelectorEmoji ref={ref} {...args} onSelect={() => {
        args.onSelect(args.label);
        console.log(ref.current);
      }}/>
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
