import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SlackSelectorCSS } from '../src/components/slack/SlackSelectorCSS';

const meta: Meta = {
  title: 'SlackSelectorCSS',
  component: SlackSelectorCSS,
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

const Template: Story<{}> = args => <SlackSelectorCSS {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
