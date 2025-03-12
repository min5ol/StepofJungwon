package com.min5ol.back.controller;

import com.min5ol.back.DTO.RatingRequest;
import com.min5ol.back.DTO.RatingResponse;
import com.min5ol.back.Service.RatingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    private final RatingService ratingService;

    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    // 📌 1. 평가 추가
    @PostMapping
    public ResponseEntity<RatingResponse> addRating(@RequestBody RatingRequest request) {
        return ResponseEntity.ok(ratingService.addRating(request));
    }

    // 📌 2. 평가 수정
    @PutMapping("/{id}")
    public ResponseEntity<RatingResponse> updateRating(
            @PathVariable Long id, @RequestBody RatingRequest updatedDto) {
        return ResponseEntity.ok(ratingService.updateRating(id, updatedDto));
    }

    // 📌 3. 평가 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRating(@PathVariable Long id) {
        ratingService.deleteRating(id);
        return ResponseEntity.noContent().build();
    }

    // 📌 4. 특정 컨텐츠의 평가 조회
    @GetMapping("/content/{contentId}")
    public ResponseEntity<List<RatingResponse>> getRatingsByContentId(@PathVariable Long contentId) {
        return ResponseEntity.ok(ratingService.getRatingsByContentId(contentId));
    }

    // 📌 5. 특정 사용자의 평가 조회
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<RatingResponse>> getRatingsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(ratingService.getRatingsByUserId(userId));
    }
}
