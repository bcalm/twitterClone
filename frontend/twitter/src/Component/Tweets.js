import React from 'react';
import Tweet from './Tweet';

const Tweets = ({ tweets, onClick }) => {
  const tweetComponents = tweets
    .slice()
    .reverse()
    .map((tweet) => (
      <Tweet key={tweet.id} {...tweet} id={tweet.id} onClick={onClick} />
    ));
  return <div>{tweetComponents}</div>;
};

export default Tweets;
