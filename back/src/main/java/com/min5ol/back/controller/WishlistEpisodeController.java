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

    @PostMapping("/{userId}/{episodeId}")
    public ResponseEntity<String> addWishlistEpisode(@PathVariable Long userId, @PathVariable Long episodeId) {
        wishlistEpisodeService.addWishlistEpisode(userId, episodeId);
        return ResponseEntity.ok("Episode added to wishlist");
    }

    @DeleteMapping("/{userId}/{episodeId}")
    public ResponseEntity<String> removeWishlistEpisode(@PathVariable Long userId, @PathVariable Long episodeId) {
        wishlistEpisodeService.removeWishlistEpisode(userId, episodeId);
        return ResponseEntity.ok("Episode removed from wishlist");
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<WishlistEpisodeResponse>> getWishlistEpisodes(@PathVariable Long userId) {
        return ResponseEntity.ok(wishlistEpisodeService.getWishlistEpisodesByUserId(userId));
    }
}
