package com.min5ol.back.Repository;

import com.min5ol.back.Entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {
    List<Rating> findByContent_Id(Long contentId); // 특정 컨텐츠의 평가 목록 조회
    List<Rating> findByUser_Id(Long userId); // 특정 사용자의 평가 목록 조회
}
