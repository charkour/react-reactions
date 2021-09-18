import React from 'react';

export interface ReactionCounterEmojiProps {
  node: JSX.Element;
  bg: string,
  iconSize: number;
  index: number;
}

export const ReactionCounterEmoji: React.VFC<ReactionCounterEmojiProps> = ({
  node,
  iconSize,
  index
}) => {
  const emojiContainerStyle: React.CSSProperties = React.useMemo(() => {
    return {
      boxShadow: '0 0 0 2px #FFF',
      position: 'relative',
      zIndex: index,
    };
  }, [index]);

  const emojiStyle: React.CSSProperties = React.useMemo(() => {
    return {
      width: `${iconSize}px`,
      height: `${iconSize}px`,
      objectFit: 'contain',
      objectPosition: 'center center',
    };
  }, [iconSize, index]);

  return (
    <div style={emojiContainerStyle}>
      {React.cloneElement(node, { style: emojiStyle })}
    </div>
  );
}

export default ReactionCounterEmoji;
