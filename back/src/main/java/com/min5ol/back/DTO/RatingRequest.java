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
    private String rating; // ENUM('LOW', 'MEDIUM', 'HIGH')
    private String review;
}
