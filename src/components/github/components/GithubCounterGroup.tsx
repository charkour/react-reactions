/* eslint-disable no-shadow */

import React from 'react';
import { Hover, HoverStyle } from '../../../helpers';
import { listOfNames } from '../../../helpers/strings';

export interface GithubCounterGroupProps {
  emoji: string;
  count: number;
  onSelect: (emoji: string) => void;
  names: string[];
  active: boolean;
}

export const GithubCounterGroup: React.VFC<GithubCounterGroupProps> = ({
  emoji,
  count,
  onSelect,
  names,
  active,
}) => {
  const handleClick = () => {
    onSelect(emoji);
  };

  return (
    <Hover
      style={{ ...groupStyle, ...(active ? groupStyleActive : {}) }}
      onClick={handleClick}
    >
      <span style={emojiStyle}>{emoji}</span> {count}
      <HoverStyle hoverStyle={tooltipStyleHover} style={tooltipStyle}>
        {listOfNames(names)}
      </HoverStyle>
    </Hover>
  );
};

const groupStyle: React.CSSProperties = {
  width: '35px',
  height: '20px',
  padding: '8px 15px',
  borderRight: '1px solid #ddd',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica',
  fontSize: '14px',
  color: '#3D76C2',
  fontWeight: 500,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: '3px 0 0 3px',
};
const groupStyleActive = {
  background: '#f2f8fa',
};
const emojiStyle = {
  fontSize: '21px',
  marginTop: '1px',
};
const tooltipStyle: React.CSSProperties = {
  maxWidth: '250px',
  wordBreak: 'break-word',
  wordWrap: 'normal',
  whiteSpace: 'nowrap',
  font: `normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  color: '#fff',
  background: 'rgba(0,0,0,0.8)',
  borderRadius: '3px',
  padding: '5px 8px',
  position: 'absolute',
  top: '100%',
  left: '15px',
  marginTop: '4px',
  opacity: '0',
  transition: 'opacity 0.1s ease-in-out',
};
const tooltipStyleHover = { opacity: '1' };

export default GithubCounterGroup;
