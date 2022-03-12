import { Meta, Story } from '@storybook/react';
import React from 'react';
import { PokemonCounter, PokemonCounterProps } from './PokemonCounter';

const meta: Meta = {
  title: 'PokemonCounter',
  component: PokemonCounter,
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

const Template: Story<PokemonCounterProps> = (args) => (
  <PokemonCounter {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
