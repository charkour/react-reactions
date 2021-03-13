import React from 'react';
import { Reaction } from '../../helpers';
import ReactionBarSelectorEmoji from './ReactionBarSelectorEmoji';

export interface ReactionBarSelectorProps {
  iconSize?: number;
  reactions?: Reaction[];
  onSelect?: (label: string) => void;
}

export const ReactionBarSelector: React.VFC<ReactionBarSelectorProps> = ({
  iconSize = defaultProps.iconSize,
  reactions = defaultProps.reactions,
  onSelect = defaultProps.onSelect,
}) => {
  const emojiStyle = React.useMemo(() => {
    return {
      width: `${iconSize + 10}px`,
      height: `${iconSize + 10}px`,
      display: 'flex',
      alignItems: 'center',
      fontSize: iconSize,
    };
  }, [iconSize]);

  return (
    <div style={wrapStyle}>
      {reactions.map(reaction => {
        return (
          <div style={emojiStyle} key={reaction.label}>
            <ReactionBarSelectorEmoji reaction={reaction} onSelect={onSelect} />
          </div>
        );
      })}
    </div>
  );
};

export const defaultProps: Required<ReactionBarSelectorProps> = {
  reactions: [
    { node: <div>👍</div>, label: 'like' },
    { node: <div>❤️</div>, label: 'love' },
    { node: <div>😆</div>, label: 'haha' },
    { node: <div>😮</div>, label: 'wow' },
    { node: <div>😢</div>, label: 'sad' },
    { node: <div>😡</div>, label: 'angry' },
  ],
  iconSize: 38,
  onSelect: (label: string) => {
    console.log(label);
  },
};

const wrapStyle = {
  backgroundColor: '#fff',
  borderRadius: '50px',
  padding: '2px',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .15)',
  display: 'flex',
  width: 'fit-content',
};

export default ReactionBarSelector;
