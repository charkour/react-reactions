import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SlackSelectorHeaderTab } from '../legacy/src/components/slack/SlackSelectorHeaderTab';

const meta: Meta = {
  title: 'LegacySlackSelectorHeaderTab',
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

const Template: Story<any> = args => <SlackSelectorHeaderTab {...args} />;

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
