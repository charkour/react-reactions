import { Meta, Story } from '@storybook/react';
import React from 'react';
import { YoutubeCounter } from '../legacy/src/components/youtube/YoutubeCounter';

const meta: Meta = {
  title: 'LegacyYoutubeCounter',
  component: YoutubeCounter,
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

const Template: Story<any> = args => <YoutubeCounter {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  like: '3',
  dislike: '2',
};
