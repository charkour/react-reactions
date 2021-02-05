import React from 'react';
import icons from '../../helpers/icons';

export interface FacebookCounterReactionProps {
  reaction: string;
  bg: string;
  index: number;
}

export const FacebookCounterReaction: React.VFC<FacebookCounterReactionProps> = ({
  reaction,
  bg,
  index,
}) => {
  const reactionStyle: React.CSSProperties = React.useMemo(() => {
    return {
      width: '16px',
      height: '16px',
      backgroundSize: '100% 100%',
      borderRadius: '8px',
      backgroundImage: `url(${icons.find('facebook', reaction)})`,
      boxShadow: `0 0 0 2px ${bg}`,
      position: 'relative',
      zIndex: index,
    };
  }, [icons, reaction, bg, index]);

  return <div style={reactionStyle} />;
};

export default FacebookCounterReaction;
