import React from 'react';
import { Reaction } from '../../helpers';
import ReactionBarSelectorEmoji from './ReactionBarSelectorEmoji';

export interface ReactionBarSelectorProps {
  iconSize?: number;
  reactions?: Reaction[];
  onSelect?: (key: string) => void;
  style?: React.CSSProperties;
}

export const ReactionBarSelector = React.forwardRef<
  HTMLDivElement,
  ReactionBarSelectorProps
>(
  (
    {
      iconSize = defaultProps.iconSize,
      reactions = defaultProps.reactions,
      onSelect = defaultProps.onSelect,
      style = defaultProps.style,
    },
    ref
  ) => {
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
      <div ref={ref} style={{ ...wrapStyle, ...style }}>
        {reactions.map((reaction: Reaction) => {
          return (
            <div style={emojiStyle} key={reaction.key ?? reaction.label}>
              <ReactionBarSelectorEmoji
                reaction={reaction}
                onSelect={onSelect}
              />
            </div>
          );
        })}
      </div>
    );
  }
);

export const defaultProps: Required<ReactionBarSelectorProps> = {
  style: {},
  reactions: [
    { node: <div>👍</div>, label: 'like', key: 'satisfaction' },
    { node: <div>❤️</div>, label: 'love', key: 'love' },
    { node: <div>😆</div>, label: 'haha', key: 'happy' },
    { node: <div>😮</div>, label: 'wow', key: 'surprise' },
    { node: <div>😢</div>, label: 'sad', key: 'sad' },
    { node: <div>😡</div>, label: 'angry', key: 'angry' },
  ],
  iconSize: 38,
  onSelect: (key: string) => {
    console.log(key);
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
