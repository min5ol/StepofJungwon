package com.min5ol.back.Service;

import com.min5ol.back.DTO.ContentRequest;
import com.min5ol.back.DTO.ContentResponse;
import com.min5ol.back.Entity.Content;
import com.min5ol.back.Repository.ContentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ContentService {

    private final ContentRepository contentRepository;

    public ContentService(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }

    // 📌 1. 컨텐츠 추가 (관리자용) - DTO 사용
    public ContentResponse addContent(ContentRequest contentDto) {
        Content content = new Content(
                contentDto.getTitle(),
                contentDto.getDescription(),
                contentDto.getGenre(), // ✅ category → genre 변경
                contentDto.getReleaseDate(),
                contentDto.getThumbnailUrl()
        );
        Content savedContent = contentRepository.save(content);
        return new ContentResponse(savedContent);
    }

    // 📌 2. 컨텐츠 수정 (관리자용) - DTO 사용
    public ContentResponse updateContent(Long id, ContentRequest updatedDto) {
        Optional<Content> existingContent = contentRepository.findById(id);
        if (existingContent.isPresent()) {
            Content content = existingContent.get();
            content.setTitle(updatedDto.getTitle());
            content.setDescription(updatedDto.getDescription());
            content.setGenre(updatedDto.getGenre()); // ✅ category → genre 변경
            content.setReleaseDate(updatedDto.getReleaseDate());
            content.setThumbnailUrl(updatedDto.getThumbnailUrl());
            return new ContentResponse(contentRepository.save(content));
        } else {
            throw new RuntimeException("해당 컨텐츠가 존재하지 않습니다.");
        }
    }

    // 📌 3. 컨텐츠 삭제 (관리자용)
    public void deleteContent(Long id) {
        contentRepository.deleteById(id);
    }

    // 📌 4. 전체 컨텐츠 조회 (DTO 변환)
    public List<ContentResponse> getAllContent() {
        return contentRepository.findAll().stream()
                .map(ContentResponse::new) // Entity → DTO 변환
                .collect(Collectors.toList());
    }

    // 📌 5. 특정 컨텐츠 상세 조회 (DTO 변환)
    public ContentResponse getContentById(Long id) {
        Content content = contentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("해당 컨텐츠가 존재하지 않습니다."));
        return new ContentResponse(content);
    }
}
