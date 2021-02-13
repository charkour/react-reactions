import React from 'react';
import FacebookSelector, {
  FacebookSelectorProps,
} from '../facebook/FacebookSelector';

export type PokemonSelectorProps = Omit<FacebookSelectorProps, 'variant'>;

export const PokemonSelector: React.VFC<PokemonSelectorProps> = ({
  reactions,
  iconSize,
  onSelect,
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

PokemonSelector.defaultProps = {
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
  iconSize: 38,
};

export default PokemonSelector;
