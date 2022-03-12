import React from 'react';
import SlackSelectorHeaderTab from './SlackSelectorHeaderTab';

interface Tab {
  icon: string;
  id: string;
}

export interface SlackSelectorHeaderProps {
  tabs?: Tab[];
}

export const SlackSelectorHeader: React.VFC<SlackSelectorHeaderProps> = ({
  tabs = [],
}) => {
  const [activeString, setActiveString] = React.useState('');

  const handleClick = (id: string) => {
    document?.getElementById(id)!.scrollIntoView(false);
    setActiveString(id);
  };

  return (
    <div style={headerStyle}>
      {tabs.map((tab: Tab) => {
        return (
          <SlackSelectorHeaderTab
            icon={tab.icon}
            id={tab.id}
            key={tab.id}
            active={tab.id === activeString}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};

const headerStyle = {
  padding: '4px 0 0 7px',
  borderBottom: '1px solid rgba(0,0,0,.15)',
  display: 'flex',
};

SlackSelectorHeader.defaultProps = {
  tabs: [
    {
      icon: '',
      id: 'mine',
    },
    {
      icon: '',
      id: 'people',
    },
    {
      icon: '',
      id: 'nature',
    },
    {
      icon: '',
      id: 'food-and-drink',
    },
    {
      icon: '',
      id: 'activity',
    },
    {
      icon: '',
      id: 'travel-and-places',
    },
    {
      icon: '',
      id: 'objects',
    },
    {
      icon: '',
      id: 'symbols',
    },
    {
      icon: '',
      id: 'flags',
    },
  ],
};

export default SlackSelectorHeader;
