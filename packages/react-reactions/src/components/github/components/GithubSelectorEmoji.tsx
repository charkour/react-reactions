import React from 'react';
import { Hover, HoverStyle, withActive } from '../../../helpers';

export interface GithubSelectorEmojiProps {
  onSelect: (shortCode: string) => void;
  shortCode: string;
  active?: boolean;
}

export const GithubSelectorEmoji: React.VFC<GithubSelectorEmojiProps> =
  withActive(({ onSelect, shortCode, active = false }) => {
    const handleClick = () => {
      onSelect(shortCode);
    };

    return (
      <Hover
        style={{ ...wrapStyle, ...(active ? wrapStyleActive : {}) }}
        onClick={handleClick}
      >
        <HoverStyle hoverStyle={emojiStyleHover} style={emojiStyle}>
          {shortCode}
        </HoverStyle>
      </Hover>
    );
  });

const wrapStyle = {
  padding: '8px 0',
};
const emojiStyle: React.CSSProperties = {
  width: '34px',
  textAlign: 'center',
  lineHeight: '29px',
  fontSize: '21px',
  fontFamily:
    '"Apple Color Emoji", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol"',
  cursor: 'pointer',

  transform: 'scale(1)',
  transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.13, 2)',
};
const emojiStyleHover = {
  transform: 'scale(1.2)',
};
const wrapStyleActive = {
  backgroundColor: '#f2f8fa',
};
