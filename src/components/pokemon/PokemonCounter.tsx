import React from 'react';
import FacebookCounter, {
  FacebookCounterProps,
} from '../facebook/FacebookCounter';

export type PokemonCounterProps = Omit<FacebookCounterProps, 'variant'>;

export const PokemonCounter = React.forwardRef<
  HTMLDivElement,
  PokemonCounterProps
>((props, ref) => {
  return <FacebookCounter ref={ref} {...props} variant="pokemon" />;
});

export default PokemonCounter;
