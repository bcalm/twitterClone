const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
};

const getTweets = () => fetch('/api/getTweets').then((x) => x.json());

const addTweet = (tweet) =>
  postReq('/api/addTweet', tweet).then((x) => x.json());

const deleteTweet = (id) =>
  postReq('/api/deleteTweet', id).then((x) => x.json());

export default { getTweets, addTweet, deleteTweet };
