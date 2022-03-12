import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  SlackSelectorFooter,
  SlackSelectorFooterProps,
} from '../src/components/slack/components/SlackSelectorFooter';

const meta: Meta = {
  title: 'SlackSelectorFooter',
  component: SlackSelectorFooter,
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

const Template: Story<SlackSelectorFooterProps> = (args) => (
  <SlackSelectorFooter {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
