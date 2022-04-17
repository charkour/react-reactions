import React from 'react';
import { icons } from '../../helpers';
import FacebookSelectorEmoji from './FacebookSelectorEmoji';

// TODO: use the custom reaction bar
export interface FacebookSelectorProps {
  iconSize?: number;
  reactions?: string[];
  variant?: 'facebook' | 'pokemon';
  onSelect?: (label: string) => void;
}

export const FacebookSelector: React.FC<FacebookSelectorProps> = ({
  iconSize = defaultProps.iconSize,
  reactions = defaultProps.reactions,
  variant = defaultProps.variant,
  onSelect = defaultProps.onSelect,
}) => {
  const emojiStyle = React.useMemo(() => {
    return { width: `${iconSize + 10}px` };
  }, [iconSize]);

  return (
    <div style={wrapStyle}>
      {reactions.map((reaction: string) => {
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

export const defaultProps: Required<FacebookSelectorProps> = {
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
  iconSize: 38,
  variant: 'facebook',
  onSelect: (label: string) => {
    console.log(label);
  },
};

const wrapStyle = {
  backgroundColor: '#fff',
  borderRadius: '50px',
  padding: '2px',
  boxShadow: '0 0 0 1px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .15)',
  display: 'flex',
};

export default FacebookSelector;
