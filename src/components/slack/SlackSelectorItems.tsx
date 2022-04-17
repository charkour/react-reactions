import React from 'react';
import emoji from '../../helpers/emoji';
import SlackSelectorSection from './SlackSelectorSection';

export interface SlackSelectorItemsProps {
  scrollHeight: string;
  frequent: string[];
  onSelect: (emoji: string) => void;
  removeEmojis: string[];
}

export const SlackSelectorItems: React.FC<SlackSelectorItemsProps> = ({
  scrollHeight,
  frequent,
  onSelect,
  removeEmojis,
}) => {
  const wrapStyle: React.CSSProperties = React.useMemo(() => {
    return {
      maxHeight: scrollHeight,
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: '4px 4px 8px',
    };
  }, [scrollHeight]);

  return (
    <div style={sectionsStyle}>
      <div style={wrapStyle} className="frame">
        {frequent ? (
          <SlackSelectorSection
            key="mine"
            slug="mine"
            emojis={frequent}
            onSelect={onSelect}
          />
        ) : null}
        {Object.keys(emoji).map((slug: string) => {
          const group = emoji[slug as keyof typeof emoji];
          return (
            <SlackSelectorSection
              key={slug}
              slug={slug}
              emojis={group.filter(function (this: any, e: string) {
                // https://stackoverflow.com/a/41945742/9931154
                // https://stackoverflow.com/a/34902391/9931154
                return this.indexOf(e) < 0;
              }, removeEmojis)}
              onSelect={onSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

const sectionsStyle = {
  padding: '4px 4px 0',
  background: '#fff',
};

export default SlackSelectorItems;
