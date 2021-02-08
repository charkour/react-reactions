import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  SlackSelectorHeader,
  SlackSelectorHeaderProps,
} from '../src/components/slack/SlackSelectorHeader';

const meta: Meta = {
  title: 'SlackSelectorHeader',
  component: SlackSelectorHeader,
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

const Template: Story<SlackSelectorHeaderProps> = args => (
  <SlackSelectorHeader {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  active: 'mine',
};
