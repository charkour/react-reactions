import React from 'react';
import {
  defaultProps,
  FacebookSelector,
  FacebookSelectorProps,
} from '../facebook/FacebookSelector';

export type PokemonSelectorProps = Omit<FacebookSelectorProps, 'variant'>;

export const PokemonSelector: React.VFC<PokemonSelectorProps> = ({
  reactions = defaultProps.reactions,
  iconSize = defaultProps.iconSize,
  onSelect = defaultProps.onSelect,
}) => {
  return (
    <FacebookSelector
      reactions={reactions}
      variant="pokemon"
      iconSize={iconSize}
      onSelect={onSelect}
    />
  );
};
