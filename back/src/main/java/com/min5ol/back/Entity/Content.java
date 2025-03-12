package com.min5ol.back.Entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Content {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title; // 컨텐츠 제목
  private String description; // 컨텐츠 설명 
  private String genre;  // 장르

  @Column(nullable = false)
  private LocalDate releaseDate; // 출시일자

  private String thumbnailUrl;
}

