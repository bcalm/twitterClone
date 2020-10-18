const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
};

const getTweets = () => fetch('/api/getTweets').then((x) => x.json());

const getRetweets = () => fetch('/api/getRetweets').then((x) => x.json());

const getLikedTweets = () => fetch('/api/getLikedTweets').then((x) => x.json());

const addTweet = (tweet) =>
  postReq('/api/addTweet', tweet).then((x) => x.json());

const deleteTweet = (id) =>
  postReq('/api/deleteTweet', id).then((x) => x.json());

const addLike = (id) => postReq('/api/addLike', id).then((x) => x.json());

const addRetweet = (id) => postReq('/api/addRetweet', id).then((x) => x.json());

const getUserActionDetails = (id) =>
  postReq('/api/getUserActionDetails', id).then((x) => x.json());

const getUserDetails = (user) =>
  fetch(`/api/getUserDetails/${user}`).then((x) => x.json());

export default {
  getTweets,
  addTweet,
  deleteTweet,
  addLike,
  getUserActionDetails,
  addRetweet,
  getUserDetails,
  getRetweets,
  getLikedTweets,
};
