import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import icons from '../../helpers/icons'

import FacebookSelectorEmoji from './FacebookSelectorEmoji'

export const FacebookSelector = ({ iconSize, reactions, variant, onSelect }) => {
  const styles = reactCSS({
    'default': {
      selector: {
        overflowY: "none",
        overflowX: "scroll",
        cursor: "pointer",
        position: "absolute",
        bottom: "10px",
        color: "white",
        fontSize: "large",
        left:"82%",
        height:"150px",
      },
      icon: {
        width: `${ iconSize + 10 }px`,
      },
    },
  })

  return (
    <div style={ styles.selector }>
      { _.map(reactions, (reaction) => {
        return (
          <div style={ styles.icon } key={ reaction }>
            <FacebookSelectorEmoji
              icon={ icons.find(variant, reaction) }
              label={ reaction }
              onSelect={ onSelect }
            />
          </div>
        )
      }) }
    </div>
  )
}

FacebookSelector.defaultProps = {
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry'],
  iconSize: 38,
  variant: 'facebook',
}

export default FacebookSelector
