package com.twitter.service;

import com.twitter.model.Tweet;
import com.twitter.model.Twitter;
import com.twitter.model.TweetActions;

import java.util.List;

public interface ITwitterService {
    List<Tweet> getTweets();

    List<Tweet> getRetweets();

    List<Tweet> getLikeTweets();

    List<Tweet> addTweet(String content);

    List<Tweet> deleteTweet(Long id);

    TweetActions toggleLike(Long id);

    TweetActions getUserActionDetails(Long id);

    List<Tweet> addRetweet(Long id);

    List<Tweet> deleteRetweet(Long id);

    Twitter getTwitterDetails(String userId);

}
