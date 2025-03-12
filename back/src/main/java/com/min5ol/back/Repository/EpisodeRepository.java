package com.min5ol.back.Repository;

import com.min5ol.back.Entity.Episode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EpisodeRepository extends JpaRepository<Episode, Long> {
    List<Episode> findByContentId(Long contentId); // 특정 컨텐츠의 모든 에피소드 조회
}
