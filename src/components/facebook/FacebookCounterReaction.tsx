import React from 'react';
import icons from '../../helpers/icons';

export interface FacebookCounterReactionProps {
  reaction: string;
  bg: string;
  index: number;
  variant: 'facebook' | 'pokemon';
}

export const FacebookCounterReaction: React.FC<
  FacebookCounterReactionProps
> = ({ reaction, bg, index, variant }) => {
  const reactionStyle: React.CSSProperties = React.useMemo(() => {
    return {
      width: '16px',
      height: '16px',
      backgroundSize: '100% 100%',
      borderRadius: '8px',
      backgroundImage: `url(${icons.find(variant, reaction)})`,
      boxShadow: `0 0 0 2px ${bg}`,
      position: 'relative',
      zIndex: index,
    };
  }, [reaction, bg, index, variant]);

  return <div style={reactionStyle} />;
};

export default FacebookCounterReaction;
