import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  SlackSelectorHeaderTab,
  SlackSelectorHeaderTabProps,
} from '../src/components/slack/components/SlackSelectorHeaderTab';

const meta: Meta = {
  title: 'SlackSelectorHeaderTab',
  component: SlackSelectorHeaderTab,
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

const Template: Story<SlackSelectorHeaderTabProps> = (args) => (
  <SlackSelectorHeaderTab {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const tabs = [
  {
    icon: '🥰',
    id: 'mine',
  },
  {
    icon: '✨',
    id: 'people',
  },
];

Default.args = {
  icon: tabs[0].icon,
  id: tabs[0].id,
  active: true,
};
