import React, { useEffect, useState } from 'react';
import PostAPI from '../api/PostApi';
import Tweet from './Tweet';

const Tweets = (props) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    setTweets(PostAPI.getTweets());
  }, []);

  const tweetComponents = tweets.map((tweet, index) => (
    <Tweet key={index} {...tweet} id={index} />
  ));
  return <div>{tweetComponents}</div>;
};

export default Tweets;
