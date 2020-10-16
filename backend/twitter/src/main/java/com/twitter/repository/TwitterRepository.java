package com.twitter.repository;

import com.twitter.model.Tweets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TwitterRepository extends JpaRepository<Tweets, Long> {

}


