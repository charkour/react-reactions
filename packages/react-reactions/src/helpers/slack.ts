export const emojiColors = [
  '#b7e887',
  '#b5e0fe',
  '#f9ef67',
  '#f3c1fd',
  '#ffe1ae',
  '#e0dfff',
];

export const sectionSlugToName = (name: string): string => {
  const thing: { [key: string]: string } = {
    mine: 'Frequently Used',
    people: 'People',
    nature: 'Nature',
    'food-and-drink': 'Food & Drink',
    activity: 'Activity',
    'travel-and-places': 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
  };
  return thing[name];
};
