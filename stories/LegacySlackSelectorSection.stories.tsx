import { Meta, Story } from '@storybook/react';
import React from 'react';
import { SlackSelectorSection } from '../legacy/src/components/slack/SlackSelectorSection';

const meta: Meta = {
  title: 'LegacySlackSelectorSection',
  component: SlackSelectorSection,
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

const Template: Story<any> = args => <SlackSelectorSection {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  slug: '✨',
  emojis: ['✨', '🔥'],
};
