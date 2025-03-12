package com.min5ol.back.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RatingRequest {
    private Long userId;
    private Long contentId;
    // rating 값을 문자열로 받아서 나중에 엔티티에서 Enum으로 변환
    private String rating;
}
