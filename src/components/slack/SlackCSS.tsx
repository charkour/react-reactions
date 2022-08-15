import React from 'react';
import SlackFontEOT from './fonts/slack-icons-Regular.eot';
import SlackFontWOFF from './fonts/slack-icons-Regular.woff';
import SlackFontTTF from './fonts/slack-icons-Regular.ttf';

export const SlackCSS = () => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        @font-face {
          font-family: Slack;
          src: url(${SlackFontEOT});
          src: url(${SlackFontEOT}?#iefix) format('embedded-opentype'),
               url(${SlackFontWOFF}) format('woff'),
               url(${SlackFontTTF}) format('truetype')
        }
        .frame::-webkit-scrollbar {
            -webkit-appearance: none;
        }
        .frame::-webkit-scrollbar:vertical {
            width: 8px;
        }
        .frame::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #D9D9DE;
            box-shadow: 0 0 0 3px #fff;
            height: 30px;
        }
        .frame::-webkit-scrollbar-track {
            background-color: #F3F3F3;
            border-radius: 4px;
        }
      `,
      }}
    />
  );
};

export default SlackCSS;
