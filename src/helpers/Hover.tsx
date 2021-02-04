import React from 'react';

interface Hover extends React.HTMLAttributes<HTMLDivElement> {
  hoverStyle: React.CSSProperties;
  isHovered: boolean;
}

// https://stackoverflow.com/a/65886428/9931154
export const Hover: React.FC<Hover> = ({
  style = {},
  hoverStyle,
  children,
  isHovered,
  ...rest
}) => {
  const calculatedStyle = { ...style, ...(isHovered ? hoverStyle : {}) };
  return (
    <div {...rest} style={calculatedStyle}>
      {children}
    </div>
  );
};
