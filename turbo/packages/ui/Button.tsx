import * as React from 'react';
export const Button = () => {
  React.useEffect(() => {
    console.log('Button');
  });
  return <button>Boop</button>;
};
