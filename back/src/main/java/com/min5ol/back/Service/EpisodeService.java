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

    // 📌 1. 에피소드 추가 (관리자용)
    public EpisodeResponse addEpisode(EpisodeRequest request) {
        Content content = contentRepository.findById(request.getContentId())
                .orElseThrow(() -> new RuntimeException("해당 컨텐츠가 존재하지 않습니다."));

        Episode episode = new Episode(
                content,
                request.getTitle(),
                request.getEpisodeNumber(), // ✅ description → episodeNumber로 수정
                request.getDuration(),
                request.getThumbnailUrl()
        );

        Episode savedEpisode = episodeRepository.save(episode);
        return new EpisodeResponse(savedEpisode);
    }

    // 📌 2. 전체 에피소드 조회 (DTO 변환)
    public List<EpisodeResponse> getAllEpisodes() {
        return episodeRepository.findAll().stream()
                .map(EpisodeResponse::new)
                .collect(Collectors.toList());
    }
}
