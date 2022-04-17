import React from 'react';
import { Hover, HoverStyle, withActive } from '../../helpers';

export interface FacebookSelectorEmojiProps {
  icon: string;
  label: string;
  onSelect: (label: string) => void;
}

export const FacebookSelectorEmoji: React.FC<FacebookSelectorEmojiProps> = withActive(
  ({ icon, label, onSelect }) => {
    const iconStyle = React.useMemo(() => {
      return {
        paddingBottom: '100%',
        backgroundImage: `url(${icon})`,
        backgroundSize: '100% 100%',
        transformOrigin: 'bottom',
        cursor: 'pointer',
        transition: '200ms transform cubic-bezier(0.23, 1, 0.32, 1)',
      };
    }, [icon]);

    const handleClick = () => {
      onSelect && onSelect(label);
    };

    return (
      <Hover style={wrapStyle}>
        <HoverStyle hoverStyle={labelStyleHover} style={labelStyle}>
          {label}
        </HoverStyle>
        <HoverStyle
          hoverStyle={iconStyleHover}
          style={iconStyle}
          onClick={handleClick}
        />
      </Hover>
    );
  }
);

const wrapStyle: React.CSSProperties = {
  padding: '5px',
  position: 'relative',
};
const labelStyleHover = {
  transform: 'translateX(-50%) translateY(-10px)',
  opacity: '1',
};
const labelStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-22px',
  background: 'rgba(0,0,0,.8)',
  borderRadius: '14px',
  color: '#fff',
  fontSize: '11px',
  padding: '4px 7px 3px',
  fontWeight: 'bold',
  textTransform: 'capitalize',
  left: '50%',
  transform: 'translateX(-50%)',
  transition: '200ms transform cubic-bezier(0.23, 1, 0.32, 1)',
  opacity: '0',
};
const iconStyleHover = { transform: 'scale(1.3)' };

export default FacebookSelectorEmoji;
