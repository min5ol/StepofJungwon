package com.min5ol.back.Service;

import com.min5ol.back.DTO.RatingRequest;
import com.min5ol.back.DTO.RatingResponse;
import com.min5ol.back.Entity.Content;
import com.min5ol.back.Entity.Rating;
import com.min5ol.back.Entity.User;
import com.min5ol.back.Repository.ContentRepository;
import com.min5ol.back.Repository.RatingRepository;
import com.min5ol.back.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RatingService {

    private final RatingRepository ratingRepository;
    private final UserRepository userRepository;
    private final ContentRepository contentRepository;

    public RatingService(RatingRepository ratingRepository, UserRepository userRepository, ContentRepository contentRepository) {
        this.ratingRepository = ratingRepository;
        this.userRepository = userRepository;
        this.contentRepository = contentRepository;
    }

    // 📌 1. 평가 추가
    public RatingResponse addRating(RatingRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("해당 유저가 존재하지 않습니다."));
        Content content = contentRepository.findById(request.getContentId())
                .orElseThrow(() -> new RuntimeException("해당 컨텐츠가 존재하지 않습니다."));

        Rating rating = new Rating(
                user, content, Rating.RatingType.valueOf(request.getRating()), request.getReview() // ✅ int → ENUM 변환
        );

        return new RatingResponse(ratingRepository.save(rating));
    }

    // 📌 2. 평가 수정
    public RatingResponse updateRating(Long id, RatingRequest updatedDto) {
        Optional<Rating> existingRating = ratingRepository.findById(id);

        if (existingRating.isPresent()) {
            Rating rating = existingRating.get();
            rating.setRating(Rating.RatingType.valueOf(updatedDto.getRating())); // ✅ int → ENUM 변환
            rating.setReview(updatedDto.getReview());
            return new RatingResponse(ratingRepository.save(rating));
        } else {
            throw new RuntimeException("해당 평가가 존재하지 않습니다.");
        }
    }

    // 📌 3. 평가 삭제
    public void deleteRating(Long id) {
        ratingRepository.deleteById(id);
    }

    // 📌 4. 특정 컨텐츠의 평가 목록 조회
    public List<RatingResponse> getRatingsByContentId(Long contentId) {
        return ratingRepository.findByContent_Id(contentId).stream() // ✅ findByContentId → findByContent_Id 변경
                .map(RatingResponse::new)
                .collect(Collectors.toList());
    }

    // 📌 5. 특정 사용자의 평가 목록 조회
    public List<RatingResponse> getRatingsByUserId(Long userId) {
        return ratingRepository.findByUser_Id(userId).stream() // ✅ findByUserId → findByUser_Id 변경
                .map(RatingResponse::new)
                .collect(Collectors.toList());
    }
}
