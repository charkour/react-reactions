# ![react-reactions](./assets/react-reactions-media.png)

- **4 Different Selectors** - Slack, Facebook, Pokemon and GitHub
- **5 Different Counters** - GitHub, YouTube, Facebook, Pokemon, and Slack

Install [via npm](https://www.npmjs.com/package/@charkour/react-reactions):

```sh
npm i @charkour/react-reactions
```

> This originated as a fork of [casesandberg/react-reactions](https://github.com/casesandberg/react-reactions) which is been modified under the MIT license to include additional features.

## New Features

- [x] Fixed security vulnerabilities
- [x] CJS and ESM support
- [x] Zero dependencies
- [x] Built in Typescript and modern React (with [TSDX](https://github.com/formium/tsdx))
- [x] Works with React 16.8+ and Next 10

## Road Map

- [ ] Add ability to pass **custom icons**
- [ ] Update current Selectors and Counter to match 2021 styles
- [ ] Add Discord Selector and Counter
- [ ] Update stories to use `defaultProps` from the components
- [ ] Add unit testing
- [ ] More??? Suggest a feature on [Github Issues](https://github.com/charkour/react-reactions/issues)

## Selectors

### Slack Selector

```tsx
import React from 'react';
import { SlackSelector } from '@charkour/react-reactions';

const Component = () => {
  return <SlackSelector />;
};
```

**Props:**

`active`: String of active tab. Defaults to `mine`

`scrollHeight`: String pixel height of scroll container. Defaults to `270px`

`removeEmojis`: Array of emojis to remove from emoji list

`frequent`: Array of emojis to set Frequently Used. Defaults to `['👍', '🐉', '🙌', '🗿', '😊', '🐬', '😹', '👻', '🚀', '🚁', '🏇', '🇨🇦']`

`onSelect`: Function callback when emoji is selected

---

### Github Selector

```tsx
import React from 'react';
import { GithubSelector } from '@charkour/react-reactions';

const Component = () => {
  return <GithubSelector />;
};
```

**Props:**

`reactions`: Array of emoji to dispay. Defaults to `['👍', '👎', '😄', '🎉', '😕', '❤️']`

`onSelect`: Function callback when emoji is selected

---

### Facebook Selector

```tsx
import React from 'react';
import { FacebookSelector } from '@charkour/react-reactions';

const Component = () => {
  return <FacebookSelector />;
};
```

**Props:**

`reactions`: Array of strings for reactions to display. Defaults to `['like', 'love', 'haha', 'wow', 'sad', 'angry']`

`iconSize`: String icon pixel size. Defaults to `38px`

`onSelect`: Function callback when emoji is selected

---

### Pokemon Selector

```tsx
import React from 'react';
import { PokemonSelector } from '@charkour/react-reactions';

const Component = () => {
  return <PokemonSelector />;
};
```

**Props:**

`reactions`: Array of strings for reactions to display. Defaults to `['like', 'love', 'haha', 'wow', 'sad', 'angry']`

`iconSize`: String icon pixel size. Defaults to `38px`

`onSelect`: Function callback when emoji is selected

---

## Counters

### Github Counter

```tsx
import React from 'react';
import { GithubCounter } from '@charkour/react-reactions';

const Component = () => {
  return <GithubCounter />;
};
```

**Props:**

`counters`: Array of counter objects structured such that:

```tsx
{
  emoji: '👍', // String emoji reaction
  by: 'case', // String of persons name
}
```

`user`: String name of user so that user displays as `You`

`onSelect`: Function callback when emoji is selected

`onAdd`: Function callback when add reaction is clicked

---

### Youtube Counter

```tsx
import React from 'react';
import { YoutubeCounter } from '@charkour/react-reactions';

const Component = () => {
  return <YoutubeCounter />;
};
```

**Props:**

`like`: String number of likes

`dislike`: String number of dislikes

`onLikeClick`: Function callback when like is clicked

`onDislikeClick`: Function callback when dislike is clicked

---

### Facebook Counter

```tsx
import React from 'react';
import { FacebookCounter } from '@charkour/react-reactions';

const Component = () => {
  return <FacebookCounter />;
};
```

**Props:**

`counters`: Array of counter objects structured such that:

```tsx
{
  emoji: 'like', // String name of reaction
  by: 'Case Sandberg', // String of persons name
}
```

---

### Pokemon Counter

```tsx
import React from 'react';
import { PokemonCounter } from '@charkour/react-reactions';

const Component = () => {
  return <PokemonCounter />;
};
```

**Props:**

`counters`: Array of counter objects structured such that:

```tsx
{
  emoji: 'like', // String name of reaction
  by: 'Charles Kornoelje', // String of persons name
}
```

`user`: String name of user so that user displays as `You`

`important`: Array of strings for important users to display their name

`bg`: String of hex color for outline of overlapping reactions. Defaults to `#fff`

`onClick`: Function callback when clicked

---

### Slack Counter

```tsx
import React from 'react';
import { SlackCounter } from '@charkour/react-reactions';

const Component = () => {
  return <SlackCounter />;
};
```

**Props:**

`counters`: Array of counter objects structured such that:

```tsx
{
  emoji: '🗿', // String emoji reaction
  by: 'case', // String of persons name
}
```

`user`: String name of user so that user displays as `You`

`onSelect`: Function callback when emoji is selected

`onAdd`: Function callback when add reaction is clicked

---

## Development

```bash
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
npm run storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Example

Then run the example inside another:

```bash
cd example
npm i
npm start
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build`.

To run tests, use `npm test`.

## Configuration

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Jest

Jest tests are set up to run with `npm test`.

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

---

> Pokemon Illustrations by [Chris Owens](https://dribbble.com/monkee1895)
