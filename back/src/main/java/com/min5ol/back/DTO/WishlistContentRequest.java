package com.min5ol.back.DTO;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class WishlistContentRequest {
    private Long userId;
    private Long contentId;
}
