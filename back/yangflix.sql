
CREATE TABLE Content
(
  id          INT          NOT NULL DEFAULT AUTO_INCREMENT,
  title       VARCHAR(255) NOT NULL COMMENT '컨텐츠 제목',
  description TEXT         NOT NULL COMMENT '컨텐츠 설명',
  year        YEAR         NOT NULL COMMENT '제작연도',
  genre       VARCHAR(255) NOT NULL COMMENT '장르',
  created_at  DATETIME     NOT NULL COMMENT '컨텐츠 등록일',
  updated_at  DATETIME     NOT NULL COMMENT '컨텐츠 수정일',
  PRIMARY KEY (id)
) COMMENT '컨텐츠 테이블';

CREATE TABLE Episode
(
  id             INT          NOT NULL DEFAULT AUTO_INCREMENT,
  content_id     INT          NOT NULL COMMENT '컨텐츠 ID',
  title          VARCHAR(255) NOT NULL COMMENT '에피소드 제목',
  description    TEXT         NOT NULL COMMENT '에피소드 설명',
  episode_number INT          NOT NULL COMMENT '에피소드 번호',
  release_date   DATE         NOT NULL COMMENT '방영일',
  created_at     DATETIME     NOT NULL COMMENT '에피소드 등록일',
  updated_at     DATETIME     NOT NULL COMMENT '에피소드 수정일',
  PRIMARY KEY (id)
) COMMENT '에피소드 테이블';

CREATE TABLE Guest
(
  id            int          NOT NULL DEFAULT AUTO_INCREMENT,
  user_id       INT          NOT NULL,
  session_token VARCHAR(255) NULL     COMMENT '세션 토큰',
  created_at    DATETIME     NOT NULL COMMENT '세션 생성 날짜',
  PRIMARY KEY (id)
) COMMENT '비회원 테이블';

CREATE TABLE Rating
(
  id         INT      NOT NULL DEFAULT AUTO_INCREMENT,
  user_id    INT      NOT NULL COMMENT '사용자 ID',
  content_id INT      NOT NULL COMMENT '평가 대상 컨텐츠 ID',
  rating     INT      NOT NULL COMMENT '평점 (1~5 사이의 값)',
  created_at DATETIME NOT NULL COMMENT '평가 날짜',
  updated_at DATETIME NOT NULL COMMENT '평가 수정 날짜',
  PRIMARY KEY (id)
) COMMENT '평가 테이블';

CREATE TABLE Social_Login
(
  id           INT                               NOT NULL DEFAULT AUTO_INCREMENT,
  user_id      INT                               NOT NULL COMMENT '사용자 ID',
  provider     ENUM('kakao', 'naver', 'twitter') NOT NULL COMMENT '소셜 로그인 제공자',
  social_id    VARCHAR(255)                      NOT NULL COMMENT '소셜 로그인에서 제공한 고유 ID',
  access_token VARCHAR(255)                      NOT NULL COMMENT '소셜 로그인 액세스 토큰',
  created_at   DATETIME                          NOT NULL COMMENT '연동 날짜',
  updated_at   DATETIME                          NOT NULL COMMENT '연동 정보 수정 날짜',
  PRIMARY KEY (id)
) COMMENT '소셜 로그인 테이블';

CREATE TABLE User
(
  id         INT                  NOT NULL DEFAULT AUTO_INCREMENT,
  username   VARCHAR(255)         NOT NULL COMMENT '사용자 아이디',
  password   VARCHAR(255)         NOT NULL COMMENT '사용자 비밀번호',
  nickname   VARCHAR(255)         NOT NULL COMMENT '닉네임',
  email      VARCHAR(255)         NOT NULL COMMENT '사용자 이메일',
  role       ENUM('USER','ADMIN') NOT NULL COMMENT '관리자모드 분할',
  created_at DATETIME             NOT NULL COMMENT '가입날짜',
  updated_at DATETIME             NOT NULL COMMENT '정보 수정 날짜',
  last_login DATETIME             NOT NULL COMMENT '마지막 로그인 시간',
  PRIMARY KEY (id)
) COMMENT '사용자 테이블';

CREATE TABLE Wishlist
(
  id         INT      NOT NULL DEFAULT AUTO_INCREMENT,
  user_id    INT      NOT NULL COMMENT '사용자 ID',
  content_id INT      NULL     COMMENT '찜한 컨텐츠 ID',
  episode_id INT      NULL     COMMENT '찜한 에피소드 ID',
  created_at DATETIME NOT NULL COMMENT '찜한 날짜',
  PRIMARY KEY (id)
) COMMENT '찜 목록 테이블';

ALTER TABLE Episode
  ADD CONSTRAINT FK_Content_TO_Episode
    FOREIGN KEY (content_id)
    REFERENCES Content (id);

ALTER TABLE Rating
  ADD CONSTRAINT FK_User_TO_Rating
    FOREIGN KEY (user_id)
    REFERENCES User (id);

ALTER TABLE Wishlist
  ADD CONSTRAINT FK_User_TO_Wishlist
    FOREIGN KEY (user_id)
    REFERENCES User (id);

ALTER TABLE Rating
  ADD CONSTRAINT FK_Content_TO_Rating
    FOREIGN KEY (content_id)
    REFERENCES Content (id);

ALTER TABLE Guest
  ADD CONSTRAINT FK_User_TO_Guest
    FOREIGN KEY (user_id)
    REFERENCES User (id);

ALTER TABLE Social_Login
  ADD CONSTRAINT FK_User_TO_Social_Login
    FOREIGN KEY (user_id)
    REFERENCES User (id);
