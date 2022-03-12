import React from 'react';
import GithubSelectorEmoji from './components/GithubSelectorEmoji';

export interface GithubSelectorProps {
  reactions?: string[];
  onSelect?: (shortCode: string) => void;
}

export const GithubSelector: React.VFC<GithubSelectorProps> = ({
  reactions = defaultProps.reactions,
  onSelect = defaultProps.onSelect,
}) => {
  return (
    <div style={selectorStyle}>
      <p style={labelStyle}>Pick your reaction</p>
      <div style={dividerStyle} />
      <div style={emojiStyle}>
        {reactions.map((reaction: string) => {
          return (
            <GithubSelectorEmoji
              key={reaction}
              shortCode={reaction}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export const defaultProps: Required<GithubSelectorProps> = {
  reactions: ['👍', '👎', '😄', '🎉', '😕', '❤️'],
  onSelect: (shortCode: string) => {
    console.log(shortCode);
  },
};

const selectorStyle = {
  paddingTop: '5px',
  backgroundColor: '#fff',
  border: '1px solid rgba(0,0,0,0.15)',
  borderRadius: '4px',
  boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
  display: 'inline-block',
};
const labelStyle = {
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#767676',
  margin: '6px 12px',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica',
};
const dividerStyle = {
  height: '1px',
  margin: '8px 1px 0px',
  backgroundColor: '#e5e5e5',
};
const emojiStyle = {
  display: 'flex',
  margin: '0 6px',
};

export default GithubSelector;
