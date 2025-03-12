package com.min5ol.back.controller;

import com.min5ol.back.DTO.EpisodeRequest;
import com.min5ol.back.DTO.EpisodeResponse;
import com.min5ol.back.Service.EpisodeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/episodes")
public class EpisodeController {

    private final EpisodeService episodeService;

    public EpisodeController(EpisodeService episodeService) {
        this.episodeService = episodeService;
    }

    // 📌 1. 에피소드 추가 (관리자용)
    @PostMapping
    public ResponseEntity<EpisodeResponse> addEpisode(@RequestBody EpisodeRequest episodeRequest) {
        return ResponseEntity.ok(episodeService.addEpisode(episodeRequest));
    }

    // 📌 2. 에피소드 수정 (관리자용)
    @PutMapping("/{id}")
    public ResponseEntity<EpisodeResponse> updateEpisode(
            @PathVariable Long id, @RequestBody EpisodeRequest updatedDto) {
        return ResponseEntity.ok(episodeService.updateEpisode(id, updatedDto));
    }

    // 📌 3. 에피소드 삭제 (관리자용)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEpisode(@PathVariable Long id) {
        episodeService.deleteEpisode(id);
        return ResponseEntity.noContent().build();
    }

    // 📌 4. 특정 컨텐츠의 에피소드 전체 조회
    @GetMapping("/content/{contentId}")
    public ResponseEntity<List<EpisodeResponse>> getEpisodesByContentId(@PathVariable Long contentId) {
        return ResponseEntity.ok(episodeService.getEpisodesByContentId(contentId));
    }

    // 📌 5. 특정 에피소드 조회
    @GetMapping("/{id}")
    public ResponseEntity<EpisodeResponse> getEpisodeById(@PathVariable Long id) {
        return ResponseEntity.ok(episodeService.getEpisodeById(id));
    }
}
