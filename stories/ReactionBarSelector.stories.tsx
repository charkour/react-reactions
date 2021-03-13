import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  defaultProps,
  ReactionBarSelector,
  ReactionBarSelectorProps,
} from '../src/components/custom/ReactionBarSelector';
import './helper.css';

const meta: Meta = {
  title: 'ReactionBarSelector',
  component: ReactionBarSelector,
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

const Template: Story<ReactionBarSelectorProps> = args => (
  <div className="center">
    <ReactionBarSelector {...args} />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = { ...defaultProps };
