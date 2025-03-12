package com.min5ol.back.DTO;

import com.min5ol.back.Entity.Content;
import lombok.Getter;
import java.time.LocalDate;

@Getter
public class ContentResponse {
    private Long id;
    private String title;
    private String description;
    private String genre;
    private LocalDate releaseDate;
    private String thumbnailUrl;

    // Entity -> DTO 변환
    public ContentResponse(Content content) {
        this.id = content.getId();
        this.title = content.getTitle();
        this.description = content.getDescription();
        this.genre = content.getGenre();
        this.releaseDate = content.getReleaseDate();
        this.thumbnailUrl = content.getThumbnailUrl();
    }
}
