package com.min5ol.back.controller;

import com.min5ol.back.DTO.WishlistResponse;
import com.min5ol.back.Service.WishlistService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/wishlist")
public class WishlistController {

    private final WishlistService wishlistService;

    public WishlistController(WishlistService wishlistService) {
        this.wishlistService = wishlistService;
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<WishlistResponse>> getWishlistByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(wishlistService.getWishlistByUserId(userId));
    }
}
