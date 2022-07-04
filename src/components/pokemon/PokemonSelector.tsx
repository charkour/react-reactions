import React from 'react';
import FacebookSelector, {
  defaultProps,
  FacebookSelectorProps,
} from '../facebook/FacebookSelector';

export type PokemonSelectorProps = Omit<FacebookSelectorProps, 'variant'>;

export const PokemonSelector = React.forwardRef<
  HTMLDivElement,
  PokemonSelectorProps
>(
  (
    {
      reactions = defaultProps.reactions,
      iconSize = defaultProps.iconSize,
      onSelect = defaultProps.onSelect,
    },
    ref
  ) => {
    return (
      <FacebookSelector
        ref={ref}
        reactions={reactions}
        variant="pokemon"
        iconSize={iconSize}
        onSelect={onSelect}
      />
    );
  }
);

export default PokemonSelector;
