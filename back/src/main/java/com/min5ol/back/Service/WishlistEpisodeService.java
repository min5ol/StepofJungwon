package com.min5ol.back.Service;

import com.min5ol.back.DTO.WishlistEpisodeResponse;
import com.min5ol.back.Entity.WishlistEpisode;
import com.min5ol.back.Entity.Episode;
import com.min5ol.back.Repository.WishlistEpisodeRepository;
import com.min5ol.back.Repository.EpisodeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class WishlistEpisodeService {

    private final WishlistEpisodeRepository wishlistEpisodeRepository;
    private final EpisodeRepository episodeRepository;

    public WishlistEpisodeService(WishlistEpisodeRepository wishlistEpisodeRepository, EpisodeRepository episodeRepository) {
        this.wishlistEpisodeRepository = wishlistEpisodeRepository;
        this.episodeRepository = episodeRepository;
    }

    // 📌 찜한 에피소드 추가
    public void addWishlistEpisode(Long userId, Long episodeId) {
        if (!wishlistEpisodeRepository.existsByUserIdAndEpisodeId(userId, episodeId)) {
            WishlistEpisode wishlistEpisode = WishlistEpisode.builder()
                    .userId(userId)
                    .episodeId(episodeId)
                    .build();
            wishlistEpisodeRepository.save(wishlistEpisode);
        }
    }

    // 📌 찜한 에피소드 삭제
    public void removeWishlistEpisode(Long userId, Long episodeId) {
        wishlistEpisodeRepository.deleteByUserIdAndEpisodeId(userId, episodeId);
    }

    // 📌 사용자의 찜한 에피소드 목록 조회 (제목 & 썸네일 포함)
    public List<WishlistEpisodeResponse> getWishlistEpisodesByUserId(Long userId) {
        List<WishlistEpisode> wishlistEpisodes = wishlistEpisodeRepository.findByUserId(userId);

        return wishlistEpisodes.stream().map(wishlistEpisode -> {
            Episode episode = episodeRepository.findById(wishlistEpisode.getEpisodeId())
                    .orElseThrow(() -> new RuntimeException("Episode not found"));

            return new WishlistEpisodeResponse(wishlistEpisode, episode);
        }).collect(Collectors.toList());
    }
}
