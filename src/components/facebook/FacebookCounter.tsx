import React from 'react';
import { CounterObject, groupBy, listOfNames } from '../../helpers';
import FacebookCounterReaction from './FacebookCounterReaction';

export interface FacebookCounterProps {
  counters?: CounterObject[];
  user?: string;
  important?: string[];
  onClick?: () => void;
  bg?: string;
  variant?: 'facebook' | 'pokemon';
}

export const FacebookCounter: React.VFC<FacebookCounterProps> = ({
  counters = defaultProps.counters,
  user = defaultProps.user,
  important = defaultProps.important,
  onClick = defaultProps.onClick,
  bg = defaultProps.bg,
  variant = defaultProps.variant,
}) => {
  const groups = groupBy(counters, 'emoji');
  const names = counters.map(({ by }: CounterObject) => {
    return by;
  });

  const nameString = [];
  if (names.includes(user)) {
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
            variant={variant}
          />
        );
      })}
      <div style={nameStyle}>{listOfNames(nameString)}</div>
    </div>
  );
};

export const defaultProps: Required<FacebookCounterProps> = {
  important: [],
  bg: '#fff',
  variant: 'facebook',
  counters: [
    {
      emoji: 'like',
      by: 'Case Sandberg',
    },
    {
      emoji: 'haha',
      by: 'Charlie',
    },
  ],
  user: 'Charlie',
  onClick: () => {
    console.log('click');
  },
};

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

export default FacebookCounter;
