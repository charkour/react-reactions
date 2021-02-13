import React from 'react';
import { Hover, HoverStyle } from '../../helpers';

export interface YoutubeCounterButtonProps {
  position: string;
  number: string;
  tooltip: string;
  onClick: () => void;
  active: boolean;
  // TODO: not used, but would be cool
  // activeColor: string;
}

export const YoutubeCounterButton: React.VFC<YoutubeCounterButtonProps> = ({
  position,
  number,
  tooltip,
  onClick,
  active,
  // activeColor,
}) => {
  const iconStyle = React.useMemo(() => {
    return {
      background: `no-repeat url(//s.ytimg.com/yts/imgbin/www-hitchhiker-2x-vflaXbyPz.webp) ${position}`,
      backgroundSize: '573px 310px',
      width: '20px',
      height: '20px',
      marginRight: '6px',
    };
  }, [position]);

  return (
    <Hover
      hoverStyle={buttonStyleHover}
      style={{ ...buttonStyle, ...(active ? buttonStyleActive : {}) }}
      onClick={onClick}
    >
      <div style={iconStyle} />
      {parseInt(number, 10).toLocaleString()}
      <HoverStyle hoverStyle={tooltipStyleHover} style={tooltipStyle}>
        {tooltip}
      </HoverStyle>
    </Hover>
  );
};

const buttonStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Roboto,arial,sans-serif',
  fontSize: '11px',
  opacity: '0.5',
  cursor: 'pointer',
  position: 'relative',
};
const tooltipStyle: React.CSSProperties = {
  color: '#fff',
  background: 'rgba(0,0,0,0.8)',
  borderRadius: '3px',
  padding: '5px 8px',
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  marginBottom: '4px',
  whiteSpace: 'nowrap',
  opacity: '0',
  transition: 'opacity 0.1s ease-in-out',
};
const buttonStyleHover = {
  opacity: '0.7',
};
const tooltipStyleHover = {
  opacity: '1',
};
const buttonStyleActive = {
  opacity: '1',
};

export default YoutubeCounterButton;
