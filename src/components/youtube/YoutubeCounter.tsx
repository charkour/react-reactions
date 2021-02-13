import React from 'react';
import YoutubeCounterButton from './YoutubeCounterButton';

export interface YoutubeCounterProps {
  like: string;
  dislike: string;
  onLikeClick: () => void;
  onDislikeClick: () => void;
  didLike: boolean;
  didDislike: boolean;
}

export const YoutubeCounter: React.VFC<YoutubeCounterProps> = ({
  like,
  dislike,
  onLikeClick,
  onDislikeClick,
  didLike,
  didDislike,
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

const counterStyle = {
  display: 'flex',
};
const spaceStyle = {
  width: '12px',
};

export default YoutubeCounter;
