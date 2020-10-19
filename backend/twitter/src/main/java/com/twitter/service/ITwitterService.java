package com.twitter.service;

import com.twitter.model.Tweet;
import com.twitter.model.Twitter;
import com.twitter.model.UserTweetActions;

import java.util.List;

public interface ITwitterService {
    List<Tweet> getTweets();

    List<Tweet> getRetweets();

    List<Tweet> getLikeTweets();

    List<Tweet> addTweet(String content);

    List<Tweet> deleteTweet(Long id);

    UserTweetActions toggleLike(Long id);

    UserTweetActions getUserActionDetails(Long id);

    List<Tweet> addRetweet(Long id);

    List<Tweet> deleteRetweet(Long id);

    Twitter getTwitter(String userId);

}
