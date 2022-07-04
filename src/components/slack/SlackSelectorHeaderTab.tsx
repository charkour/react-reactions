import React from 'react';
import { Hover } from '../../helpers';

export interface SlackSelectorHeaderTabProps {
  onClick: (id: string) => void;
  id: string;
  icon: string;
  active?: boolean;
}

export const SlackSelectorHeaderTab = React.forwardRef<
  HTMLDivElement,
  SlackSelectorHeaderTabProps
>(({ onClick, id, icon, active = false }, ref) => {
  const handleClick = () => {
    onClick && onClick(id);
  };

  return (
    <Hover
      ref={ref}
      hoverStyle={{ ...tabStyleHover }}
      style={{ ...tabStyle, ...(active ? tabStyleActive : {}) }}
      onClick={handleClick}
    >
      <div style={iconStyle}>{icon}</div>
    </Hover>
  );
});

const tabStyle = {
  color: '#9e9ea6',
  padding: '5px 8px 7px',
  borderRadius: '6px 6px 0 0',
  marginRight: '1px',
  borderBottom: '3px solid transparent',
  cursor: 'pointer',
};
const iconStyle = {
  width: '20px',
  height: '18px',
  fontFamily: 'Slack',
  fontSize: '20px',
  WebkitFontSmoothing: 'antialiased',
};
const tabStyleHover = {
  color: '#555459',
  borderBottom: '3px solid #2ab27b',
};
const tabStyleActive = {
  color: '#9e9ea6',
  borderBottom: '3px solid #2ab27b',
};

export default SlackSelectorHeaderTab;
