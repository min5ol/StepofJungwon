package com.min5ol.back.Service;

import com.min5ol.back.DTO.EpisodeRequest;
import com.min5ol.back.DTO.EpisodeResponse;
import com.min5ol.back.Entity.Content;
import com.min5ol.back.Entity.Episode;
import com.min5ol.back.Repository.ContentRepository;
import com.min5ol.back.Repository.EpisodeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EpisodeService {

    private final EpisodeRepository episodeRepository;
    private final ContentRepository contentRepository;

    public EpisodeService(EpisodeRepository episodeRepository, ContentRepository contentRepository) {
        this.episodeRepository = episodeRepository;
        this.contentRepository = contentRepository;
    }

    // 에피소드 추가 (관리자용)
    public EpisodeResponse addEpisode(EpisodeRequest request) {
        Content content = contentRepository.findById(request.getContentId())
                .orElseThrow(() -> new RuntimeException("해당 컨텐츠가 존재하지 않습니다."));
        Episode episode = Episode.builder()
                .content(content)
                .title(request.getTitle())
                .episodeNumber(request.getEpisodeNumber())
                .releaseDate(request.getReleaseDate())
                .thumbnail(request.getThumbnailUrl())
                .build();
        Episode savedEpisode = episodeRepository.save(episode);
        return new EpisodeResponse(savedEpisode);
    }

    // 에피소드 수정 (관리자용)
    public EpisodeResponse updateEpisode(Long id, EpisodeRequest updatedDto) {
        Episode episode = episodeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("해당 에피소드가 존재하지 않습니다."));
        episode.setTitle(updatedDto.getTitle());
        episode.setEpisodeNumber(updatedDto.getEpisodeNumber());
        episode.setReleaseDate(updatedDto.getReleaseDate());
        episode.setThumbnail(updatedDto.getThumbnailUrl());
        Episode updatedEpisode = episodeRepository.save(episode);
        return new EpisodeResponse(updatedEpisode);
    }

    // 에피소드 삭제 (관리자용)
    public void deleteEpisode(Long id) {
        Episode episode = episodeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("해당 에피소드가 존재하지 않습니다."));
        episodeRepository.delete(episode);
    }

    // 특정 컨텐츠의 에피소드 전체 조회
    public List<EpisodeResponse> getEpisodesByContentId(Long contentId) {
        return episodeRepository.findByContent_Id(contentId).stream()
                .map(EpisodeResponse::new)
                .collect(Collectors.toList());
    }

    // 특정 에피소드 조회
    public EpisodeResponse getEpisodeById(Long id) {
        Episode episode = episodeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("해당 에피소드가 존재하지 않습니다."));
        return new EpisodeResponse(episode);
    }
}
