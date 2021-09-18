import React from 'react';
import { groupBy, ReactionCounterObject } from '../../helpers';

export interface ReactionCounterProps {
  reactions: ReactionCounterObject[];
  user?: string;
  important?: string[];
  onlyShowTotal?: boolean;
  showOthers?: boolean;
  className?: string;
  onClick?: () => void;
}

export const ReactionCounter: React.VFC<ReactionCounterProps> = ({
  reactions,
  className,
  onClick,
  onlyShowTotal = false,
  showOthers = true,
}) => {
  const groups = groupBy(reactions, 'label');
  const names = reactions.map(({ by }: ReactionCounterObject) => {
    return by;
  });

  return (
    <div style={counterStyle} className={className} onClick={onClick}>
      reaction counter
    </div>
  );
};

const counterStyle = {
  display: 'flex',
  cursor: 'pointer',
};

export default ReactionCounter;
