import { Meta, Story } from '@storybook/react';
import React from 'react';
import {
  ReactionCounter,
  ReactionCounterProps,
} from '../src/components/custom/ReactionCounter';
import './helper.css';

const meta: Meta = {
  title: 'ReactionCounter',
  component: ReactionCounter,
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

const Template: Story<ReactionCounterProps> = (args) => (
  <ReactionCounter {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const reactions = [
  {
    label: 'like',
    node: (
      <div role="img" style={{ backgroundColor: 'blue', borderRadius: '4px' }}>
        👍🏾
      </div>
    ),
    by: 'name',
  },
  {
    label: 'love',
    node: (
      <div style={{ backgroundColor: 'blue', borderRadius: '4px' }}>❤️</div>
    ),
    by: 'vens',
  },
  {
    label: 'care',
    node: (
      <div style={{ backgroundColor: 'blue', borderRadius: '4px' }}>🥰</div>
    ),
    by: 'jo',
  },
  {
    label: 'haha',
    node: (
      <div style={{ backgroundColor: 'blue', borderRadius: '4px' }}>😆</div>
    ),
    by: 'abla',
  },
  {
    label: 'wow',
    node: (
      <div style={{ backgroundColor: 'blue', borderRadius: '4px' }}>😲</div>
    ),
    by: 'rosa',
  },
  {
    label: 'sad',
    node: (
      <div style={{ backgroundColor: 'blue', borderRadius: '4px' }}>😔</div>
    ),
    by: 'peter',
  },
  {
    label: 'angry',
    node: (
      <div style={{ backgroundColor: 'blue', borderRadius: '4px' }}>😡</div>
    ),
    by: 'jove',
  },
  { label: 'angry', node: <div>😡</div>, by: 'john' },
  { label: 'angry', node: <div>😡</div>, by: 'jane' },
  { label: 'angry', node: <div>😡</div>, by: 'scott' },
  { label: 'angry', node: <div>😡</div>, by: 'dave' },
];

Default.args = {
  user: 'Elliot',
  reactions,
  bg: 'transparent',
  style: { display: 'flex', flexDirection: 'row', gap: 8 },
};
