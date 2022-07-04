import React from 'react';
import { HoverContext } from './useHover';

interface HoverProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverStyle?: React.CSSProperties;
}

// TODO: turn this into a HOC?
// Wrapper that keeps track of weather or not the component is being hovered
export const Hover = React.forwardRef<
  HTMLDivElement,
  HoverProps
>(({ hoverStyle = {}, children, style, ...rest }, ref) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <HoverContext.Provider value={isHovered}>
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...rest}
        style={{ ...style, ...(isHovered ? hoverStyle : {}) }}
      >
        {children}
      </div>
    </HoverContext.Provider>
  );
});

export default Hover;
