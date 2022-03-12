import { Meta, Story } from '@storybook/react';
import React from 'react';
import { defaultProps } from '../src/components/facebook/FacebookSelector';
import {
  PokemonSelector,
  PokemonSelectorProps,
} from '../src/components/pokemon/PokemonSelector';
import './PokemonSelector.css';

const meta: Meta = {
  title: 'PokemonSelector',
  component: PokemonSelector,
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

const Template: Story<PokemonSelectorProps> = (args) => (
  <PokemonSelector {...args} />
);

const Animation: Story<PokemonSelectorProps> = (args) => {
  const [emojiSelector, setEmojiSelector] = React.useState(false);
  return (
    <div className="animation-story">
      <div style={{ position: 'relative' }}>
        <div
          className={
            emojiSelector ? 'PokemonSelector_Active' : 'PokemonSelector_Idle'
          }
        >
          <PokemonSelector {...args} iconSize={20} />
        </div>
      </div>

      <button
        onClick={() => setEmojiSelector(!emojiSelector)}
        style={{ float: 'right' }}
      >
        <img
          src="https://s2.svgbox.net/hero-solid.svg?ic=emoji-happy&color=000"
          width="32"
          height="32"
          alt="selector"
        />
      </button>
    </div>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const SlideInAnimation = Animation.bind({});

const { variant, ...props } = defaultProps;
Default.args = { ...props };

SlideInAnimation.args = { ...props };
