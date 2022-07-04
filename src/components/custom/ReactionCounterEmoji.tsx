import React from 'react';

export interface ReactionCounterEmojiProps {
  node: JSX.Element;
  bg: string;
  iconSize: number;
  index: number;
}

export const ReactionCounterEmoji = React.forwardRef<
  HTMLDivElement,
  ReactionCounterEmojiProps
>(({ node, bg, iconSize, index }, ref) => {
  const emojiContainerStyle: React.CSSProperties = React.useMemo(() => {
    return {
      zIndex: index,
      position: 'relative',
      boxShadow: `0 0 0 2px ${bg}`,
      width: `${iconSize}px`,
      height: `${iconSize}px`,
    };
  }, [iconSize, index, bg]);

  const emojiStyle: React.CSSProperties = React.useMemo(() => {
    return {
      width: `${iconSize}px`,
      height: `${iconSize}px`,
      objectFit: 'contain',
      objectPosition: 'center center',
    };
  }, [iconSize]);

  return (
    <div ref={ref} style={emojiContainerStyle}>
      {React.cloneElement(node, {
        style: { ...emojiStyle, ...node.props.style },
      })}
    </div>
  );
});

export default ReactionCounterEmoji;
