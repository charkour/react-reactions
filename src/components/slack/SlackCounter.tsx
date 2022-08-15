import React, { CSSProperties } from 'react';
import { CounterObject, groupBy, Hover, HoverStyle } from '../../helpers';
import SlackCounterGroup from './SlackCounterGroup';
import SlackCSS from './SlackCSS';

export interface styleProps {
  addStyle?: CSSProperties;
  counterStyle?: CSSProperties;
  groupStyle?: CSSProperties;
  addStyleHover?: CSSProperties;
}
export interface SlackCounterProps {
  counters?: CounterObject[];
  user?: string;
  onSelect?: (emoji: string) => void;
  onAdd?: () => void;
  styles?: styleProps;
}
const deepMerge = (a: styleProps, b: styleProps, fn: any) =>
  // @ts-ignore
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    // @ts-ignore
    (acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }),
    {}
  );

export const SlackCounter = React.forwardRef<HTMLDivElement, SlackCounterProps>(
  (
    {
      counters = defaultProps.counters,
      user = defaultProps.user,
      onSelect = defaultProps.onSelect,
      onAdd = defaultProps.onAdd,
      styles,
    },
    ref
  ) => {
    const groups = groupBy(counters, 'emoji');
    const mergedStyles = deepMerge(
      defaultProps.styles,
      styles || {},
      (key: any, a: any, b: any) =>
        key === 'a' ? a && b : Object.assign({}, a, b)
    );
    return (
      <>
        <SlackCSS />
        <Hover ref={ref} style={mergedStyles.counterStyle}>
          {Object.keys(groups).map((emoji: string) => {
            const names = groups[emoji].map(({ by }: CounterObject) => {
              return by;
            });
            return (
              <div style={mergedStyles.groupStyle} key={emoji}>
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
          <HoverStyle
            hoverStyle={mergedStyles.addStyleHover}
            style={mergedStyles.addStyle}
            onClick={onAdd}
          >
            <SlackCounterGroup emoji={''} />
          </HoverStyle>
        </Hover>
      </>
    );
  }
);

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
  opacity: 1,
};

export const defaultProps: Required<SlackCounterProps> = {
  counters: [
    {
      emoji: '👍',
      by: 'Case Sandberg',
    },
    {
      emoji: '👎',
      by: 'Charlie!!!!!',
    },
  ],
  user: 'Charlie',
  onSelect: (emoji: string) => {
    console.log(emoji);
  },
  onAdd: () => {
    console.log('add');
  },
  styles: {
    counterStyle,
    addStyle,
    groupStyle,
    addStyleHover,
  },
};

export default SlackCounter;
