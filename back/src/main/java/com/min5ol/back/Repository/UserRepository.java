package com.min5ol.back.Repository;

import com.min5ol.back.Entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);

    // ✅ 관리자 계정 생성 시 중복 확인용
    boolean existsByEmail(String email);
}
