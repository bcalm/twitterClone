package com.twitter.controller;

import com.twitter.model.Tweet;
import com.twitter.model.Twitter;
import com.twitter.repository.UserRepository;
import com.twitter.model.UserTweetActions;
import com.twitter.repository.TwitterRepository;
import com.twitter.repository.UserActionRepository;
import com.twitter.service.TwitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class TwitterController {

    @Autowired
    private TwitterService twitterService;

    @GetMapping("/api/getTweets")
    public List<Tweet> getAllTweets() {
        return this.twitterService.getTweets();
    }

    @GetMapping("/api/getRetweets")
    public List<Tweet> getRetweets() {
        return this.twitterService.getRetweets();
    }

    @GetMapping("/api/getLikeTweets")
    public List<Tweet> getLikeTweets() {
        return this.twitterService.getLikeTweets();
    }

    @PostMapping("/api/addTweet")
    public List<Tweet> addTweet(@RequestBody String content) {
        return this.twitterService.addTweet(content);
    }

    @PostMapping("/api/deleteTweet")
    public List<Tweet> deleteTweet(@RequestBody Long tweetId) {
        return this.twitterService.deleteTweet(tweetId);
    }

    @PostMapping("/api/addLike")
    public UserTweetActions addLike(@RequestBody Long tweetId) {
        return this.twitterService.toggleLike(tweetId);
    }

    @PostMapping("/api/getUserActionDetails")
    public UserTweetActions getUserActionDetails(@RequestBody Long tweetId) {
        return this.twitterService.getUserActionDetails(tweetId);
    }

    @PostMapping("/api/addRetweet")
    public List<Tweet> addRetweet(@RequestBody Long tweetId) {
        return this.twitterService.addRetweet(tweetId);
    }

    @PostMapping("/api/deleteRetweet")
    public List<Tweet> deleteRetweet(@RequestBody Long tweetId) {
        return this.twitterService.deleteRetweet(tweetId);
    }


    @GetMapping("/api/getUserDetails/{userId}")
    public Twitter getTwitter(@PathVariable String userId) {
        return this.twitterService.getTwitter(userId);
    }
}

