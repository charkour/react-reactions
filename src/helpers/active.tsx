import React from 'react';

// HOC that keeps track of weather or not the component is being clicked.
// TODO: remove any
export const active = (Component: any) => ({ ...props }: any) => {
  const [active, setActive] = React.useState(false);

  const handleMouseDown = React.useCallback(() => {
    setActive(true);
  }, []);
  const handleMouseUp = React.useCallback(() => {
    setActive(false);
  }, []);

  return (
    <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <Component {...props} {...active} />
    </div>
  );
};

export default active;
