import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostApi from '../api/PostApi';
import Tweets from './Tweets';
import TweetContext from './TweetContext';
import PostAPI from '../api/PostApi';

const Options = (props) => {
  const [tweets, setTweets] = useState([]);
  const deleteTweet = (id) => PostAPI.deleteTweet(id).then(setTweets);
  const addRetweet = (id) => PostAPI.addRetweet(id).then(setTweets);

  useEffect(() => {
    PostApi.getTweets().then(setTweets);
  }, []);

  return (
    <div>
      <div className={props.className}>
        <div>Tweets</div>
        <div>Retweets</div>
        <div>Likes</div>
      </div>
      <TweetContext.Provider
        value={{ delete: deleteTweet, retweet: addRetweet }}
      >
        <Tweets tweets={tweets} />
      </TweetContext.Provider>
    </div>
  );
};

const StyledOptions = styled(Options)`
  display: flex;
  justify-content: space-around;
  border-bottom: 0.5px solid lightgray;
  height: 6%;

  div {
    width: 30%;
    cursor: pointer;
  }
`;

export default StyledOptions;
