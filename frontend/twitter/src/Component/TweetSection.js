import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TweetBox from './TweetBox';
import PostAPI from '../api/PostApi';
import Tweets from './Tweets';
import TweetContext from './TweetContext';

const TweetSection = (props) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    PostAPI.getTweets().then(setTweets);
  }, []);

  const addTweet = (content) => PostAPI.addTweet(content).then(setTweets);
  const deleteTweet = (id) => PostAPI.deleteTweet(id).then(setTweets);
  const addRetweet = (id) => PostAPI.addRetweet(id).then(setTweets);

  return (
    <div className={props.className}>
      <TweetContext.Provider value={{ add: addTweet }}>
        <TweetBox />
      </TweetContext.Provider>
      <TweetContext.Provider
        value={{ delete: deleteTweet, retweet: addRetweet }}
      >
        <Tweets tweets={tweets} />
      </TweetContext.Provider>
    </div>
  );
};

const StyledTweetSection = styled(TweetSection)`
  height: 90%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export default StyledTweetSection;
