package com.twitter.repository;

import com.twitter.model.UserTweetActions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserActionRepository extends JpaRepository<UserTweetActions, Long> {
}
