package com.min5ol.back.Repository;

import com.min5ol.back.Entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
  
  Optional<User> findByUsername(String username);
  Optional<User> findByEmail(String email);
  
}
