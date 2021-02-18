import React from 'react';
import SlackSelectorCSS from './SlackSelectorCSS';
import SlackSelectorFooter from './SlackSelectorFooter';
import SlackSelectorHeader from './SlackSelectorHeader';
import SlackSelectorItems from './SlackSelectorItems';

export interface SlackSelectorProps {
  scrollHeight?: string;
  frequent?: string[];
  removeEmojis?: string[];
  onSelect?: (id: string) => void;
}

export const SlackSelector: React.VFC<SlackSelectorProps> = ({
  scrollHeight = defaultProps.scrollHeight,
  frequent = defaultProps.frequent,
  removeEmojis = defaultProps.removeEmojis,
  onSelect = defaultProps.onSelect,
}) => {
  return (
    <div style={menuStyle}>
      <SlackSelectorCSS />
      <SlackSelectorHeader />
      <SlackSelectorItems
        scrollHeight={scrollHeight}
        removeEmojis={removeEmojis}
        frequent={frequent}
        onSelect={onSelect}
      />
      <SlackSelectorFooter onSelect={onSelect} />
    </div>
  );
};

const menuStyle = {
  fontFamily: '"Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif',
  width: '358px',
  color: '#555459',
  fontSize: '.95rem',
  background: '#f7f7f7',
  lineHeight: '1rem',
  boxShadow: '0 5px 10px rgba(0,0,0,.12)',
  borderRadius: '6px',
  border: '1px solid rgba(0,0,0,.15)',
};

export const defaultProps: Required<SlackSelectorProps> = {
  scrollHeight: '270px',
  removeEmojis: [
    '🙂',
    '🙃',
    '☺️',
    '🤑',
    '🤓',
    '🤗',
    '🙄',
    '🤔',
    '🙁',
    '☹️',
    '🤐',
    '🤒',
    '🤕',
    '🤖',
  ],
  frequent: [
    '👍',
    '🐉',
    '🙌',
    '🗿',
    '😊',
    '🐬',
    '😹',
    '👻',
    '🚀',
    '🚁',
    '🏇',
    '🇨🇦',
  ],
  onSelect: (id: string) => {
    console.log(id);
  },
};

export default SlackSelector;
