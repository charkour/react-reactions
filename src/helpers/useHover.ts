import React from 'react';

export const HoverContext = React.createContext(false);

export const useHover = () => React.useContext(HoverContext);
