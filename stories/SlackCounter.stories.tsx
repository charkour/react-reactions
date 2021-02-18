import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  defaultProps,
  SlackCounter,
  SlackCounterProps,
} from '../src/components/slack/SlackCounter';

const meta: Meta = {
  title: 'SlackCounter',
  component: SlackCounter,
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

const Template: Story<SlackCounterProps> = args => <SlackCounter {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = { ...defaultProps };
