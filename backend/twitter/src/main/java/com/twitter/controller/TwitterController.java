package com.twitter.controller;

import com.twitter.model.Tweets;
import com.twitter.model.Twitter;
import com.twitter.repository.UserRepository;
import com.twitter.model.UserTweetActions;
import com.twitter.repository.TwitterRepository;
import com.twitter.repository.UserActionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping()
public class TwitterController {

    @Autowired
    private TwitterRepository twitterRepository;

    @Autowired
    private UserActionRepository userActionRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/api/getTweets")
    public List<Tweets> getAllTweets() {
        return this.twitterRepository.findAll();
    }

    @GetMapping("/api/getRetweets")
    public List<Tweets> getRetweets() {
        List<UserTweetActions> allTweets = this.userActionRepository.findAll();
        List<Tweets> retweets= new ArrayList<>();
        for (UserTweetActions tweet : allTweets) {
            if (tweet.isRetweeted()) {
                retweets.add(this.twitterRepository.getOne(tweet.getTweetId()));
            }
        }
        return retweets;
    }

    @GetMapping("/api/getLikeTweets")
    public List<Tweets> getLikeTweets() {
        List<UserTweetActions> allTweets = this.userActionRepository.findAll();
        List<Tweets> retweets= new ArrayList<>();
        for (UserTweetActions tweet : allTweets) {
            if (tweet.isLiked()) {
                retweets.add(this.twitterRepository.getOne(tweet.getTweetId()));
            }
        }
        return retweets;
    }

    @PostMapping("/api/addTweet")
    public List<Tweets> addTweet(@RequestBody String content) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        Tweets tweet = new Tweets();
        tweet.setContent(content);
        tweet.setUserId("bcalm");
        tweet.setUserName("Vikram Singh");
        tweet.setTimeStamp(dtf.format(now));
        this.twitterRepository.save(tweet);
        this.userActionRepository.save(new UserTweetActions(false, false, false, 0, 0, 0));
        return this.twitterRepository.findAll();
    }

    @PostMapping("/api/deleteTweet")
    public List<Tweets> deleteTweet(@RequestBody Long tweetId) {
        this.twitterRepository.deleteById(tweetId);
        this.userActionRepository.deleteById(tweetId);
        return this.twitterRepository.findAll();
    }

    @PostMapping("/api/addLike")
    public UserTweetActions addLike(@RequestBody Long tweetId) {
        UserTweetActions userDetails = this.userActionRepository.getOne(tweetId);
        int value = userDetails.isLiked() ? -1 : 1;
        int addValue = (userDetails.getLikeCount() + value);
        userDetails.setLikeCount(addValue);
        userDetails.setLiked(!userDetails.isLiked());
        this.userActionRepository.save(userDetails);
        return userDetails;
    }

    @PostMapping("/api/getUserActionDetails")
    public UserTweetActions getUserActionDetails(@RequestBody Long tweetId) {
        return this.userActionRepository.getOne(tweetId);
    }

    @PostMapping("/api/addRetweet")
    public List<Tweets> addRetweet(@RequestBody Long tweetId) {
        Tweets tweet = this.twitterRepository.getOne(tweetId);
        String content = tweet.getContent();
        UserTweetActions userDetails = this.userActionRepository.getOne(tweetId);
        userDetails.setRetweetCount(userDetails.getRetweetCount()+1);
        userDetails.setRetweeted(true);
        this.userActionRepository.save(userDetails);
        return this.addTweet(content);
    }

    @PostMapping("/api/deleteRetweet")
    public List<Tweets> deleteRetweet(@RequestBody Long tweetId){
        UserTweetActions userDetails = this.userActionRepository.getOne(tweetId);
        userDetails.setRetweetCount(userDetails.getRetweetCount()+1);
        userDetails.setRetweeted(false);
        this.userActionRepository.save(userDetails);
        return this.twitterRepository.findAll();
    }


    @GetMapping("/api/getUserDetails/{userId}")
    public Twitter getTwitter(@PathVariable String userId) {
        return this.userRepository.findAll().get(0);
    }
}

