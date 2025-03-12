package com.min5ol.back.DTO;

import com.min5ol.back.Entity.Episode;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class EpisodeResponse {
    private Long id;
    private Long contentId;
    private String title;
    private String description;
    private LocalDate releaseDate;
    private String duration;
    private String thumbnailUrl; // ✅ Thumbnail 추가

    public EpisodeResponse(Episode episode) {
        this.id = episode.getId();
        this.contentId = episode.getContent().getId();
        this.title = episode.getTitle();
        this.description = episode.getDescription();
        this.releaseDate = episode.getReleaseDate();
        this.duration = episode.getDuration();
        this.thumbnailUrl = episode.getThumbnailUrl();  // ✅ 추가
    }
}
