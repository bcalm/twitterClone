package com.twitter.service;

import com.twitter.model.Tweet;
import com.twitter.model.Twitter;
import com.twitter.model.TweetActions;
import com.twitter.repository.TweetRepository;
import com.twitter.repository.TweetActionRepository;
import com.twitter.repository.TwitterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

@Service
public class TwitterService implements ITwitterService {

    private final TweetRepository tweetRepository;
    private final TweetActionRepository tweetActionRepository;
    private final TwitterRepository twitterRepository;

    @Autowired
    public TwitterService(TweetRepository tweetRepository, TweetActionRepository tweetActionRepository, TwitterRepository twitterRepository) {
        this.tweetRepository = tweetRepository;
        this.tweetActionRepository = tweetActionRepository;
        this.twitterRepository = twitterRepository;
    }

    @Override
    public List<Tweet> getTweets() {
        return this.tweetRepository.findAll();
    }

    @Override
    public List<Tweet> getRetweets() {
        List<Tweet> retweets = new ArrayList<>();
        List<TweetActions> allTweets = this.tweetActionRepository.findAll();
        for (TweetActions tweet : allTweets) {
            if (tweet.isRetweeted()) {
                retweets.add(this.tweetRepository.getOne(tweet.getTweetId()));
            }
        }
        return retweets;
    }

    @Override
    public List<Tweet> getLikeTweets() {
        List<TweetActions> allTweets = this.tweetActionRepository.findAll();
        List<Tweet> likedTweets = new ArrayList<>();
        for (TweetActions tweet : allTweets) {
            if (tweet.isLiked()) {
                likedTweets.add(this.tweetRepository.getOne(tweet.getTweetId()));
            }
        }
        return likedTweets;
    }

    @Override
    public List<Tweet> addTweet(String content) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Twitter user = this.twitterRepository.findAll().get(0);
        this.tweetRepository.save(new Tweet(content, user.getUserName(), user.getUserId(), dtf.format(now)));
        this.tweetActionRepository.save(new TweetActions(false, false, false, 0, 0, 0));
        return this.tweetRepository.findAll();
    }

    @Override
    public List<Tweet> deleteTweet(Long id) {
        this.tweetRepository.deleteById(id);
        this.tweetActionRepository.deleteById(id);
        return this.tweetRepository.findAll();
    }

    @Override
    public TweetActions toggleLike(Long id) {
        TweetActions tweetActionsDetails = this.tweetActionRepository.getOne(id);
        int value = tweetActionsDetails.isLiked() ? -1 : 1;
        int addValue = (tweetActionsDetails.getLikeCount() + value);
        tweetActionsDetails.setLikeCount(addValue);
        tweetActionsDetails.setLiked(!tweetActionsDetails.isLiked());
        this.tweetActionRepository.save(tweetActionsDetails);
        return tweetActionsDetails;
    }

    @Override
    public TweetActions getUserActionDetails(Long id) {
        return this.tweetActionRepository.getOne(id);
    }

    @Override
    public List<Tweet> addRetweet(Long id) {
        Tweet tweet = this.tweetRepository.getOne(id);
        String content = tweet.getContent();
        TweetActions tweetActionDetails = this.tweetActionRepository.getOne(id);
        tweetActionDetails.setRetweetCount(tweetActionDetails.getRetweetCount() + 1);
        tweetActionDetails.setRetweeted(true);
        this.tweetActionRepository.save(tweetActionDetails);
        return this.addTweet(content);
    }

    @Override
    public List<Tweet> deleteRetweet(Long id) {
        TweetActions userDetails = this.tweetActionRepository.getOne(id);
        userDetails.setRetweetCount(userDetails.getRetweetCount() - 1);
        userDetails.setRetweeted(false);
        this.tweetActionRepository.save(userDetails);
        return this.tweetRepository.findAll();
    }

    @Override
    public Twitter getTwitterDetails(String userId) {
        return this.twitterRepository.findAll().get(0);
    }
}
