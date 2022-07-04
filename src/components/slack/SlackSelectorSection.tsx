import React from 'react';
import { emojiColors, sectionSlugToName } from '../../helpers/slack';
import SlackSelectorSectionEmoji from './SlackSelectorSectionEmoji';

export interface SlackSelectorSectionProps {
  slug?: string;
  emojis: string[];
  onSelect: (emoji: string) => void;
}

export const SlackSelectorSection = React.forwardRef<
  HTMLDivElement,
  SlackSelectorSectionProps
>(({ slug = '', emojis, onSelect }, ref) => {
  return (
    <div ref={ref} id={slug}>
      <div style={titleStyle}>{sectionSlugToName(slug)}</div>
      <div style={emojisStyle}>
        {emojis.map((emoji, i) => {
          return (
            <SlackSelectorSectionEmoji
              key={i}
              hoverColor={emojiColors[i % emojiColors.length]}
              emoji={emoji}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
});

const emojisStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
};
const titleStyle: React.CSSProperties = {
  fontWeight: 600,
  WebkitFontSmoothing: 'antialiased',
  fontSize: '16px',
  lineHeight: '1.5rem',
  margin: '0 6px',
};

export default SlackSelectorSection;
