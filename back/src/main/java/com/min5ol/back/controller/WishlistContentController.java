package com.min5ol.back.controller;

import com.min5ol.back.DTO.WishlistContentResponse;
import com.min5ol.back.Service.WishlistContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/wishlist")
public class WishlistContentController {

    private final WishlistContentService wishlistService;

    public WishlistContentController(WishlistContentService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<WishlistContentResponse>> getWishlistByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(wishlistService.getWishlistByUserId(userId));
    }
}
