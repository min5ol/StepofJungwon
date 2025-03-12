package com.min5ol.back.Service;

import com.min5ol.back.DTO.WishlistContentResponse;
import com.min5ol.back.Entity.Content;
import com.min5ol.back.Repository.ContentRepository;
import com.min5ol.back.Repository.WishlistContentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WishlistContentService {

    private final WishlistContentRepository wishlistContentRepository;
    private final ContentRepository contentRepository;

    public WishlistContentService(WishlistContentRepository wishlistContentRepository, ContentRepository contentRepository) {
        this.wishlistContentRepository = wishlistContentRepository;
        this.contentRepository = contentRepository;
    }

    // 사용자의 찜한 컨텐츠 목록 조회 (제목 및 썸네일 포함)
    public List<WishlistContentResponse> getWishlistByUserId(Long userId) {
        return wishlistContentRepository.findByUser_Id(userId).stream()
                .map(wishlist -> {
                    // wishlist 인스턴스의 getContent()를 통해 Content 객체를 얻습니다.
                    Content content = contentRepository.findById(wishlist.getContent().getId())
                            .orElseThrow(() -> new RuntimeException("Content not found"));
                    // WishlistContentResponse 생성 시, WishlistContent와 Content 객체를 전달합니다.
                    return new WishlistContentResponse(wishlist, content);
                }).collect(Collectors.toList());
    }
}
