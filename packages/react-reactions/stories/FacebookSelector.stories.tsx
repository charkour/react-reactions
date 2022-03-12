import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  defaultProps,
  FacebookSelector,
  FacebookSelectorProps,
} from '../src/components/facebook/FacebookSelector';
import './helper.css';

const meta: Meta = {
  title: 'FacebookSelector',
  component: FacebookSelector,
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

const Template: Story<FacebookSelectorProps> = (args) => (
  <div className="center">
    <FacebookSelector {...args} />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = { ...defaultProps };
