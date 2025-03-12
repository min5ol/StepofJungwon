package com.min5ol.back.DTO;

import com.min5ol.back.Entity.Rating;
import lombok.Getter;

@Getter
public class RatingResponse {
    private Long id;
    private Long userId;
    private Long contentId;
    private String rating;
    private String review;

    public RatingResponse(Rating rating) {
        this.id = rating.getId();
        this.userId = rating.getUser().getId();
        this.contentId = rating.getContent().getId();
        this.rating = rating.getRating().name(); // ENUM 값 변환
        this.review = rating.getReview();
    }
}
