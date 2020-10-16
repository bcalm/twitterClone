import React from 'react';
import Tweet from './Tweet';

const Tweets = ({ tweets }) => {
  const tweetComponents = tweets
    .slice()
    .reverse()
    .map((tweet) => <Tweet key={tweet.id} {...tweet} id={tweet.id} />);
  return <div>{tweetComponents}</div>;
};

export default Tweets;
