import { Meta, Story } from '@storybook/react';
import { useState } from 'react';
import { SlackCounter } from '../src/components/slack/SlackCounter';
import { SlackSelector } from '../src/components/slack/SlackSelector';

const meta: Meta = {
  title: 'SlackSelectorExample',
  component: SlackSelector,
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

const Template: Story = () => <Reactions />;

export function Reactions() {
  const [emojiState, setEmojiState] = useState({
    counters: [{ emoji: '🗿', by: 'case' }],
    user: 'case',
    showSelector: false,
  });

  const handleAdd = () => {
    setEmojiState({ ...emojiState, showSelector: !emojiState.showSelector });
  };

  const handleSelect = async (emoji) => {
    const index = emojiState.counters.findIndex(
      (x) => x.emoji === emoji && x.by === emojiState.user
    );
    if (index > -1) {
      setEmojiState({
        ...emojiState,
        counters: [
          ...emojiState.counters.slice(0, index),
          ...emojiState.counters.slice(index + 1),
        ],
        showSelector: false,
      });
    } else {
      setEmojiState({
        ...emojiState,
        counters: [...emojiState.counters, { emoji, by: emojiState.user }],
        showSelector: false,
      });
    }
  };

  return (
    <div>
      <div
        style={{
          height: '75vh',
        }}
      />
      temp
      <div style={{ position: 'relative' }}>
        <SlackCounter
          counters={emojiState.counters}
          user={emojiState.user}
          onAdd={handleAdd}
          onSelect={handleSelect}
        />
        {emojiState.showSelector ? (
          <div
            className="z-10"
            style={{
              position: 'absolute',
              bottom: '100%',
              marginBottom: '10px',
            }}
          >
            <SlackSelector onSelect={handleSelect} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
