import React from 'react';
import { HoverContext } from './useHover';

// Wrapper that keeps track of weather or not the component is being hovered
export const Hover: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <HoverContext.Provider value={isHovered}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...rest}
      >
        {children}
      </div>
    </HoverContext.Provider>
  );
};

export default Hover;
