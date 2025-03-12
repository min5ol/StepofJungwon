package com.min5ol.back.Service;

import com.min5ol.back.DTO.WishlistResponse;
import com.min5ol.back.Entity.Content;
import com.min5ol.back.Entity.Wishlist;
import com.min5ol.back.Repository.ContentRepository;
import com.min5ol.back.Repository.WishlistRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WishlistService {

    private final WishlistRepository wishlistRepository;
    private final ContentRepository contentRepository;

    public WishlistService(WishlistRepository wishlistRepository, ContentRepository contentRepository) {
        this.wishlistRepository = wishlistRepository;
        this.contentRepository = contentRepository;
    }

    // 사용자의 찜한 콘텐츠 목록 조회 (제목, 썸네일 포함)
    public List<WishlistResponse> getWishlistByUserId(Long userId) {
        List<Wishlist> wishlists = wishlistRepository.findByUserId(userId);

        return wishlists.stream().map(wishlist -> {
            Content content = contentRepository.findById(wishlist.getContentId())
                    .orElseThrow(() -> new RuntimeException("Content not found"));

            return new WishlistResponse(wishlist, content.getTitle(), content.getThumbnailUrl());
        }).collect(Collectors.toList());
    }
}
