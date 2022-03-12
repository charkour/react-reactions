import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  YoutubeCounterButton,
  YoutubeCounterButtonProps,
} from '../src/components/youtube/components/YoutubeCounterButton';

const meta: Meta = {
  title: 'YoutubeCounterButton',
  component: YoutubeCounterButton,
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

const Template: Story<YoutubeCounterButtonProps> = (args) => (
  <YoutubeCounterButton {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  number: '532385901',
  position: '-66px -69px',
  tooltip: 'I likey',
  active: true,
};
