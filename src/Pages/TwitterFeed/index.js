import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-height: 50vh;
  overflow-y: scroll;
`;

const TwitterFeed = () => {
  return (
    <Wrapper className="twitter-feed">
      <TwitterTimelineEmbed sourceType="profile" screenName="Malmo_FF" />
      <a
        className="twitter-timeline"
        href="https://twitter.com/Malmo_FF?ref_src=twsrc%5Etfw"
      >
        Tweets by Malmo_FF
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </Wrapper>
  );
};

export default TwitterFeed;
