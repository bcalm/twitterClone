package com.twitter.controller;

import com.twitter.model.Tweets;
import com.twitter.repository.TwitterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping()
public class TwitterController {

    @Autowired
    private TwitterRepository twitterRepository;

    @GetMapping("/api/getTweets")
    public List<Tweets> getAllTweets(){
        return this.twitterRepository.findAll();
    }

    @PostMapping("/api/addTweet")
    public List<Tweets> addTweet(@RequestBody String content){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        System.out.println(dtf.format(now));
        Tweets tweet = new Tweets();
        tweet.setContent(content);
        tweet.setLikeCount((long) 0);
        tweet.setReplyCount((long) 0);
        tweet.setRetweetCount((long) 0);
        tweet.setUserId("bcalm");
        tweet.setUserName("Vikram Singh");
        tweet.setTimeStamp(dtf.format(now));
        this.twitterRepository.save(tweet);
        return this.twitterRepository.findAll();
    }
}

