package com.min5ol.back.controller;

import com.min5ol.back.DTO.ContentRequest;
import com.min5ol.back.DTO.ContentResponse;
import com.min5ol.back.Service.ContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/content")
public class ContentController {

    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    // 📌 1. 컨텐츠 추가 (관리자용)
    @PostMapping
    public ResponseEntity<ContentResponse> addContent(@RequestBody ContentRequest contentDto) {
        return ResponseEntity.ok(contentService.addContent(contentDto));
    }

    // 📌 2. 컨텐츠 수정 (관리자용)
    @PutMapping("/{id}")
    public ResponseEntity<ContentResponse> updateContent(
            @PathVariable Long id, @RequestBody ContentRequest updatedDto) {
        return ResponseEntity.ok(contentService.updateContent(id, updatedDto));
    }

    // 📌 3. 컨텐츠 삭제 (관리자용)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContent(@PathVariable Long id) {
        contentService.deleteContent(id);
        return ResponseEntity.noContent().build();
    }

    // 📌 4. 전체 컨텐츠 조회
    @GetMapping
    public ResponseEntity<List<ContentResponse>> getAllContent() {
        return ResponseEntity.ok(contentService.getAllContent());
    }

    // 📌 5. 특정 컨텐츠 조회
    @GetMapping("/{id}")
    public ResponseEntity<ContentResponse> getContentById(@PathVariable Long id) {
        return ResponseEntity.ok(contentService.getContentById(id));
    }
}
