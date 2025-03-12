package com.min5ol.back.controller;

import com.min5ol.back.DTO.WishlistEpisodeResponse;
import com.min5ol.back.Service.WishlistEpisodeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist/episodes")
public class WishlistEpisodeController {

    private final WishlistEpisodeService wishlistEpisodeService;

    public WishlistEpisodeController(WishlistEpisodeService wishlistEpisodeService) {
        this.wishlistEpisodeService = wishlistEpisodeService;
    }

    // 찜한 에피소드 추가
    @PostMapping("/{userId}/{episodeId}")
    public ResponseEntity<String> addWishlistEpisode(@PathVariable Long userId, @PathVariable Long episodeId) {
        wishlistEpisodeService.addWishlistEpisode(userId, episodeId);
        return ResponseEntity.ok("Episode added to wishlist");
    }

    // 찜한 에피소드 삭제
    @DeleteMapping("/{userId}/{episodeId}")
    public ResponseEntity<String> removeWishlistEpisode(@PathVariable Long userId, @PathVariable Long episodeId) {
        wishlistEpisodeService.removeWishlistEpisode(userId, episodeId);
        return ResponseEntity.ok("Episode removed from wishlist");
    }

    // 사용자의 찜한 에피소드 목록 조회 (제목 및 썸네일 포함)
    @GetMapping("/{userId}")
    public ResponseEntity<List<WishlistEpisodeResponse>> getWishlistEpisodes(@PathVariable Long userId) {
        return ResponseEntity.ok(wishlistEpisodeService.getWishlistEpisodesByUserId(userId));
    }
}
