import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as FacebookCounter } from '../stories/FacebookCounter.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <FacebookCounter
        counters={[
          {
            emoji: 'like',
            by: 'Case Sandberg',
          },
          {
            emoji: 'haha',
            by: 'Charlie',
          },
        ]}
        user="Charlie"
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
