package com.min5ol.back.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EpisodeRequest {
    private String title;
    private int episodeNumber;
    private String duration;
    private String thumbnailUrl;
    private Long contentId;
}