package com.min5ol.back.Service;

import com.min5ol.back.DTO.GuestResponse;
import com.min5ol.back.Entity.Guest;
import com.min5ol.back.Repository.GuestRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class GuestService {

    private final GuestRepository guestRepository;

    public GuestService(GuestRepository guestRepository) {
        this.guestRepository = guestRepository;
    }

    // 📌 1. 새로운 게스트 세션 생성
    public GuestResponse createGuestSession() {
        String sessionId = UUID.randomUUID().toString(); // 랜덤 UUID 생성
        Guest guest = new Guest(sessionId);
        return new GuestResponse(guestRepository.save(guest));
    }

    // 📌 2. 기존 세션 확인
    public GuestResponse getGuestBySessionId(String sessionId) {
        Optional<Guest> guest = guestRepository.findBySessionId(sessionId);
        return guest.map(GuestResponse::new)
                .orElseThrow(() -> new RuntimeException("세션이 유효하지 않습니다."));
    }
}
