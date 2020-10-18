import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostApi from '../api/PostApi';
import Tweets from './Tweets';
import TweetContext from './TweetContext';
import PostAPI from '../api/PostApi';

const Options = (props) => {
  const indicator = { borderBottom: 'solid 2px #4a61c8' };
  const [tweets, setTweets] = useState([]);
  const [{ tweetStyle, retweetStyle, likeStyle }, setStyle] = useState({});

  const deleteTweet = (id) => PostAPI.deleteTweet(id).then(setTweets);
  const addRetweet = (id) => PostAPI.addRetweet(id).then(setTweets);
  const getTweets = () => PostApi.getTweets().then(setTweets);
  const getRetweet = () => PostApi.getRetweets().then(setTweets);
  const getLikeTweet = () => PostApi.getTweets().then(setTweets);

  const showRetweet = () => {
    setStyle({ retweetStyle: indicator });
    getRetweet();
  };

  const showLikeTweet = () => {
    setStyle({ likeStyle: indicator });
    getLikeTweet();
  };

  const showTweet = () => {
    setStyle({ tweetStyle: indicator });
    getTweets();
  };

  useEffect(showTweet, []);

  return (
    <div>
      <div className={props.className}>
        <div onClick={showTweet} style={tweetStyle}>
          Tweets
        </div>
        <div onClick={showRetweet} style={retweetStyle}>
          Retweets
        </div>
        <div onClick={showLikeTweet} style={likeStyle}>
          Likes
        </div>
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
