import React from 'react';
import { listOfNames } from '../../helpers/strings';
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

var groupBy = function(xs: any, key: string) {
  return xs.reduce(function(rv: any, x: any) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const FacebookCounter: React.VFC<FacebookCounterProps> = ({
  counters,
  user,
  important,
  onClick,
  bg,
}) => {
  // const styles = reactCSS({
  //   default: {
  //     counter: {
  //       display: 'flex',
  //       cursor: 'pointer',
  //       color: '#365899',
  //       fontFamily: `"San Francisco", -apple-system, BlinkMacSystemFont,
  //         ".SFNSText-Regular", sans-serif`,
  //       fontSize: '12px',
  //       fontWeight: '500',
  //     },
  //     name: {
  //       paddingLeft: '4px',
  //       marginTop: '2px',
  //     },
  //   },
  // });

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
    <div
      style={{
        display: 'flex',
        cursor: 'pointer',
        color: '#365899',
        fontFamily: `"San Francisco", -apple-system, BlinkMacSystemFont,
        ".SFNSText-Regular", sans-serif`,
        fontSize: '12px',
        fontWeight: 500,
      }}
      onClick={onClick}
    >
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
      <div
        style={{
          paddingLeft: '4px',
          marginTop: '2px',
        }}
      >
        {listOfNames(nameString)}
      </div>
    </div>
  );
};

FacebookCounter.defaultProps = {
  important: [],
  bg: '#fff',
};

export default FacebookCounter;
