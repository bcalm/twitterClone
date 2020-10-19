package com.twitter.repository;

import com.twitter.model.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TwitterRepository extends JpaRepository<Tweet, Long> {
}

