import React from 'react';
import YoutubeCounterButton from './YoutubeCounterButton';

export interface YoutubeCounterProps {
  like?: string;
  dislike?: string;
  onLikeClick?: () => void;
  onDislikeClick?: () => void;
  didLike?: boolean;
  didDislike?: boolean;
}

export const YoutubeCounter: React.FC<YoutubeCounterProps> = ({
  like = defaultProps.like,
  dislike = defaultProps.dislike,
  onLikeClick = defaultProps.onLikeClick,
  onDislikeClick = defaultProps.onDislikeClick,
  didLike = defaultProps.didLike,
  didDislike = defaultProps.didDislike,
}) => {
  const handleLikeClick = () => onLikeClick();
  const handleDislikeClick = () => onDislikeClick();

  return (
    <div style={counterStyle}>
      <YoutubeCounterButton
        number={like}
        position="-66px -69px"
        tooltip="I like this"
        onClick={handleLikeClick}
        active={didLike}
      />
      <div style={spaceStyle} />
      <YoutubeCounterButton
        number={dislike}
        position="-390px -148px"
        tooltip="I dislike this"
        onClick={handleDislikeClick}
        active={didDislike}
      />
    </div>
  );
};

const defaultProps: Required<YoutubeCounterProps> = {
  like: '3',
  dislike: '2',
  onLikeClick: () => {
    console.log('like');
  },
  onDislikeClick: () => {
    console.log('dislike');
  },
  didLike: false,
  didDislike: false,
};

const counterStyle = {
  display: 'flex',
};
const spaceStyle = {
  width: '12px',
};

export default YoutubeCounter;
