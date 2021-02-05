import React from 'react';
import { groupBy, listOfNames } from '../../helpers';
import FacebookCounterReaction from './FacebookCounterReaction';

export interface CounterObject {
  emoji: string;
  by: string;
}

export interface FacebookCounterProps {
  counters: CounterObject[];
  user: string;
  important: string[];
  onClick: () => void;
  bg: string;
}

const counterStyle = {
  display: 'flex',
  cursor: 'pointer',
  color: '#365899',
  fontFamily: `"San Francisco", -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif`,
  fontSize: '12px',
  fontWeight: 500,
};
const nameStyle = {
  paddingLeft: '4px',
  marginTop: '2px',
};

export const FacebookCounter: React.VFC<FacebookCounterProps> = ({
  counters,
  user,
  important,
  onClick,
  bg,
}) => {
  const groups = groupBy(counters, 'emoji');
  const names = counters.map(({ by }: CounterObject) => {
    return by;
  });

  const nameString = [];
  if (names.includes(user)) {
    nameString.push('You');
  }
  if (important.length) {
    if (names.includes(important[0])) {
      nameString.push(important[0]);
    }
    if (names.includes(important[1])) {
      nameString.push(important[1]);
    }
  }
  nameString.push(`${names.length - nameString.length} others`);

  return (
    <div style={counterStyle} onClick={onClick}>
      {Object.keys(groups).map((reaction, i, reactions) => {
        return (
          <FacebookCounterReaction
            key={i}
            reaction={reaction}
            index={reactions.length - i}
            bg={bg}
          />
        );
      })}
      <div style={nameStyle}>{listOfNames(nameString)}</div>
    </div>
  );
};

FacebookCounter.defaultProps = {
  important: [],
  bg: '#fff',
};

export default FacebookCounter;
