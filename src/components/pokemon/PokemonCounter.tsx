import React from 'react';
import FacebookCounter, {
  FacebookCounterProps,
} from '../facebook/FacebookCounter';

export type PokemonCounterProps = Omit<FacebookCounterProps, 'variant'>;

export const PokemonCounter: React.VFC<PokemonCounterProps> = props => {
  return <FacebookCounter {...props} variant="pokemon" />;
};

export default PokemonCounter;
