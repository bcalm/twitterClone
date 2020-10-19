package com.twitter.service;

import com.twitter.model.Tweet;
import com.twitter.model.Twitter;
import com.twitter.model.UserTweetActions;
import com.twitter.repository.TwitterRepository;
import com.twitter.repository.UserActionRepository;
import com.twitter.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class TwitterService implements  ITwitterService {

    @Autowired
    private TwitterRepository twitterRepository;

    @Autowired
    private UserActionRepository userActionRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Tweet> getTweets() {
        return this.twitterRepository.findAll();
    }

    @Override
    public List<Tweet> getRetweets() {
        List<UserTweetActions> allTweets = this.userActionRepository.findAll();
        List<Tweet> retweets = new ArrayList<>();
        for (UserTweetActions tweet : allTweets) {
            if (tweet.isRetweeted()) {
                retweets.add(this.twitterRepository.getOne(tweet.getTweetId()));
            }
        }
        return retweets;
    }

    @Override
    public List<Tweet> getLikeTweets() {
        List<UserTweetActions> allTweets = this.userActionRepository.findAll();
        List<Tweet> likedTweets = new ArrayList<>();
        for (UserTweetActions tweet : allTweets) {
            if (tweet.isLiked()) {
                likedTweets.add(this.twitterRepository.getOne(tweet.getTweetId()));
            }
        }
        return likedTweets;
    }

    @Override
    public List<Tweet> addTweet(String content) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Tweet tweet = new Tweet();
        tweet.setContent(content);
        tweet.setUserId("bcalm");
        tweet.setUserName("Vikram Singh");
        tweet.setTimeStamp(dtf.format(now));
        this.twitterRepository.save(tweet);
        this.userActionRepository.save(new UserTweetActions(false, false, false, 0, 0, 0));
        return this.twitterRepository.findAll();
    }

    @Override
    public List<Tweet> deleteTweet(Long id) {
        this.twitterRepository.deleteById(id);
        this.userActionRepository.deleteById(id);
        return this.twitterRepository.findAll();
    }

    @Override
    public UserTweetActions toggleLike(Long id) {
        UserTweetActions userDetails = this.userActionRepository.getOne(id);
        int value = userDetails.isLiked() ? -1 : 1;
        int addValue = (userDetails.getLikeCount() + value);
        userDetails.setLikeCount(addValue);
        userDetails.setLiked(!userDetails.isLiked());
        this.userActionRepository.save(userDetails);
        return userDetails;
    }

    @Override
    public UserTweetActions getUserActionDetails(Long id) {
        return this.userActionRepository.getOne(id);
    }

    @Override
    public List<Tweet> addRetweet(Long id) {
        Tweet tweet = this.twitterRepository.getOne(id);
        String content = tweet.getContent();
        UserTweetActions userDetails = this.userActionRepository.getOne(id);
        userDetails.setRetweetCount(userDetails.getRetweetCount() + 1);
        userDetails.setRetweeted(true);
        this.userActionRepository.save(userDetails);
        return this.addTweet(content);
    }

    @Override
    public List<Tweet> deleteRetweet(Long id) {
        UserTweetActions userDetails = this.userActionRepository.getOne(id);
        userDetails.setRetweetCount(userDetails.getRetweetCount() + 1);
        userDetails.setRetweeted(false);
        this.userActionRepository.save(userDetails);
        return this.twitterRepository.findAll();
    }

    @Override
    public Twitter getTwitter(String userId) {
        return this.userRepository.findAll().get(0);
    }
}
