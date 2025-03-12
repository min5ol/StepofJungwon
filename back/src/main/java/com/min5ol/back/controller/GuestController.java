package com.min5ol.back.controller;

import com.min5ol.back.DTO.GuestResponse;
import com.min5ol.back.Service.GuestService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/guests")
public class GuestController {

    private final GuestService guestService;

    public GuestController(GuestService guestService) {
        this.guestService = guestService;
    }

    // 📌 1. 새로운 게스트 세션 생성
    @PostMapping("/create")
    public ResponseEntity<GuestResponse> createGuestSession() {
        return ResponseEntity.ok(guestService.createGuestSession());
    }

    // 📌 2. 기존 세션 확인
    @GetMapping("/{sessionId}")
    public ResponseEntity<GuestResponse> getGuestBySessionId(@PathVariable String sessionId) {
        return ResponseEntity.ok(guestService.getGuestBySessionId(sessionId));
    }
}
