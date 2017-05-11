package com.jecyhw.punch.repository;

import com.jecyhw.punch.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by jecyhw on 2017/4/17.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByAutoWork(Boolean autoWork);

    User findByEmail(String email);
}
