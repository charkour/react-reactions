import React from 'react';
import { CounterObject, groupBy, Hover, HoverStyle } from '../../helpers';
import SlackCounterGroup from './SlackCounterGroup';

export interface SlackCounterProps {
  hover?: boolean;
  counters: CounterObject[];
  user: string;
  onSelect: (emoji: string) => void;
  onAdd: () => void;
}

export const SlackCounter: React.VFC<SlackCounterProps> = ({
  counters,
  user,
  onSelect,
  onAdd,
}) => {
  const groups = groupBy(counters, 'emoji');

  return (
    <Hover style={counterStyle}>
      {Object.keys(groups).map(emoji => {
        const names = groups[emoji].map(({ by }: CounterObject) => {
          return by;
        });
        return (
          <div style={groupStyle} key={emoji}>
            <SlackCounterGroup
              emoji={emoji}
              count={names.length}
              names={names}
              active={names.includes(user)}
              onSelect={onSelect}
            />
          </div>
        );
      })}
      <HoverStyle hoverStyle={addStyleHover} style={addStyle} onClick={onAdd}>
        <SlackCounterGroup emoji={''} />
      </HoverStyle>
    </Hover>
  );
};

const counterStyle = {
  display: 'flex',
};
const addStyle = {
  cursor: 'pointer',
  fontFamily: 'Slack',
  paddingLeft: '8px',
  opacity: '0',
  transition: 'opacity 0.1s ease-in-out',
};
const groupStyle = {
  marginRight: '4px',
};
const addStyleHover = {
  opacity: '1',
};

export default SlackCounter;
