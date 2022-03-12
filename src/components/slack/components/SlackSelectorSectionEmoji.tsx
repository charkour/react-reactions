import React from 'react';
import { Hover } from '../../../helpers';

export interface SlackSelectorSectionEmojiProps {
  hoverColor: string;
  onSelect: (emoji: string) => void;
  emoji: string;
}

export const SlackSelectorSectionEmoji: React.VFC<
  SlackSelectorSectionEmojiProps
> = ({ hoverColor, onSelect, emoji }) => {
  const wrapStyleHover = React.useMemo(() => {
    return { background: hoverColor };
  }, [hoverColor]);

  const handleClick = () => {
    onSelect(emoji);
  };

  return (
    <Hover hoverStyle={wrapStyleHover} style={wrapStyle} onClick={handleClick}>
      <div style={emojiStyle}>{emoji}</div>
    </Hover>
  );
};

const wrapStyle = {
  width: '36px',
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 1px 1px 0',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background .15s ease-out 50ms',
};
const emojiStyle = {
  fontSize: '22px',
  width: '22px',
  height: '22px',
  lineHeight: '26px',
};

export default SlackSelectorSectionEmoji;
