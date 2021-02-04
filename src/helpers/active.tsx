import React from 'react';

// HOC that keeps track of weather or not the component is being clicked.
// https://stackoverflow.com/a/53453431/9931154
export const active = (Component: React.ElementType) => {
  return <T,>({ ...props }: T) => {
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
};

export default active;
