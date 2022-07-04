import React from 'react';

// HOC that keeps track of weather or not the component is being clicked.
// https://stackoverflow.com/a/53453431/9931154
export const withActive = <T extends Record<string, any>>(
  Component: React.ElementType
) => {
  return React.forwardRef<HTMLDivElement, T>((props, ref) => {
    const [active, setActive] = React.useState(false);

    const handleMouseDown = React.useCallback(() => {
      setActive(true);
    }, []);
    const handleMouseUp = React.useCallback(() => {
      setActive(false);
    }, []);

    return (
      <div ref={ref} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <Component {...props} active={active} />
      </div>
    );
  });
};

export default withActive;
