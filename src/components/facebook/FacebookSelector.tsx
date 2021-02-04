import React from 'react';
import { icons } from '../../helpers';
import FacebookSelectorEmoji from './FacebookSelectorEmoji';

export interface FacebookSelectorProps {
  iconSize: number;
  reactions: string[];
  variant: string;
  onSelect: (label: string) => void;
}

const wrapStyle = {
  backgroundColor: '#fff',
  borderRadius: '50px',
  padding: '2px',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .15)',
  display: 'flex',
};

export const FacebookSelector: React.FC<FacebookSelectorProps> = ({
  iconSize,
  reactions,
  variant,
  onSelect,
}) => {
  const emojiStyle = React.useMemo(() => {
    return { width: `${iconSize + 10}px` };
  }, [iconSize]);

  return (
    <div style={wrapStyle}>
      {reactions.map(reaction => {
        return (
          <div style={emojiStyle} key={reaction}>
            <FacebookSelectorEmoji
              icon={icons.find(variant, reaction)}
              label={reaction}
              onSelect={onSelect}
            />
          </div>
        );
      })}
    </div>
  );
};

FacebookSelector.defaultProps = {
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
  iconSize: 38,
  variant: 'facebook',
};

export default FacebookSelector;
