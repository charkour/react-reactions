import React from 'react';
import { groupBy, listOfNames, ReactionCounterObject } from '../../helpers';
import {
  ReactionCounterEmoji,
  ReactionCounterEmojiProps,
} from './components/ReactionCounterEmoji';

export interface ReactionCounterProps
  extends Partial<Pick<ReactionCounterEmojiProps, 'iconSize' | 'bg'>> {
  reactions: ReactionCounterObject[];
  user?: string;
  important?: string[];
  showReactsOnly?: boolean;
  showTotalOnly?: boolean;
  showOthersAlways?: boolean;
  className?: string;
  onClick?: () => void;
}

export const ReactionCounter: React.VFC<ReactionCounterProps> = ({
  reactions,
  user,
  important,
  className,
  onClick,
  iconSize = 24,
  bg = '#FFF',
  showReactsOnly = false,
  showTotalOnly = false,
  showOthersAlways = true,
}) => {
  const groups = groupBy(reactions, 'label');
  const names = reactions.map(({ by }: ReactionCounterObject) => {
    return by;
  });

  const nameString = [];
  if (user && names.includes(user)) {
    nameString.push('You');
  }
  if (important?.length) {
    if (names.includes(important[0])) {
      nameString.push(important[0]);
    }
    if (names.includes(important[1])) {
      nameString.push(important[1]);
    }
  }
  const othersCount = names.length - nameString.length;
  if (showOthersAlways || othersCount > 0) {
    nameString.push(`${othersCount} other${othersCount === 1 ? '' : 's'}`);
  }

  const nameStyle: React.CSSProperties = React.useMemo(() => {
    return {
      fontSize: `${iconSize - 8}px`,
      marginLeft: '8px',
    };
  }, [iconSize]);

  return (
    <div style={counterStyle} className={className} onClick={onClick}>
      {Object.keys(groups).map((reaction, i, reactions) => (
        <ReactionCounterEmoji
          key={i}
          bg={bg}
          iconSize={iconSize}
          index={reactions.length - i}
          node={groups[reaction][0].node}
        />
      ))}
      {!showReactsOnly ? (
        <div style={nameStyle}>
          {showTotalOnly ? names.length : listOfNames(nameString)}
        </div>
      ) : null}
    </div>
  );
};

const counterStyle = {
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
};

export default ReactionCounter;
