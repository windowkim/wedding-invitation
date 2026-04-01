# Korean Mobile Wedding Invitation

GitHub Pages에 바로 올릴 수 있는 정적 모바일 청첩장입니다. `index.html`, `styles.css`, `script.js`만으로 구성했고, 실제 결혼식 데이터는 모두 `script.js` 맨 위 `CONFIG` 객체에서 수정할 수 있게 만들었습니다.

## 파일 구성

- `index.html`: 원페이지 구조와 모달 컨테이너
- `styles.css`: 모바일 레이아웃, 컬러, 애니메이션, 카드/모달 스타일
- `script.js`: `CONFIG` 데이터, 섹션 렌더링, RSVP/방명록/카운트다운 로직
- `README.md`: 수정 방법, 배포 방법, 백엔드 연결 가이드

## 가장 먼저 수정할 곳

`script.js` 상단의 `CONFIG`만 수정하면 됩니다.

대표적으로 바꿔야 하는 항목:

- `CONFIG.couple`: 신랑/신부 및 부모님 이름
- `CONFIG.wedding`: 결혼 날짜, 시간, 예식장 이름, 주소
- `CONFIG.contact.people`: 연락처
- `CONFIG.gallery.images`: 갤러리 이미지 경로
- `CONFIG.location`: 지도 링크, 주차/교통 정보
- `CONFIG.venueGuide.items`: 예식장 안내 이미지와 설명
- `CONFIG.accounts`: 축의금 계좌
- `CONFIG.footer`: 공유 문구

## 이미지 넣는 방법

이미지는 `/images/` 폴더 기준으로 연결되도록 작성되어 있습니다.

권장 파일 예시:

- `/images/hero.jpg`
- `/images/gallery-1.jpg`
- `/images/gallery-2.jpg`
- `/images/gallery-3.jpg`
- `/images/guide-1.jpg`
- `/images/guide-2.jpg`
- `/images/guide-3.jpg`
- `/images/약도.jpg`

현재 `CONFIG` 안에는 일부 이미지 경로가 placeholder 상태로 들어 있습니다. 실제 파일명을 넣어 주시면 자동으로 반영됩니다.

## GitHub Pages 배포

1. 이 파일들을 GitHub 저장소 루트에 올립니다.
2. 저장소에 `images` 폴더를 만들고 이미지를 넣습니다.
3. GitHub 저장소 `Settings` > `Pages`로 이동합니다.
4. `Deploy from a branch`를 선택합니다.
5. 브랜치를 `main` 또는 원하는 브랜치의 `/root`로 설정합니다.
6. 저장 후 몇 분 뒤 배포 주소가 생성됩니다.

## RSVP / 방명록 현재 동작 방식

첫 버전에서는 UI를 완성해 두고, 실제 서버 연결 전까지는 브라우저 `localStorage`를 사용합니다.

- RSVP: 제출 시 브라우저에 임시 저장
- 방명록: 제출 시 즉시 화면 반영 + 브라우저에 저장
- RSVP 바텀시트: 접속 후 2초 뒤 자동 오픈, `오늘 하루 보지 않기` 체크 시 하루 동안 숨김

`script.js` 안에 `TODO` 주석을 넣어 두었기 때문에 나중에 Lovable Cloud / Supabase로 연결하기 쉽습니다.

## Supabase / Lovable Cloud 연결용 SQL 예시

아래 SQL은 사용자가 요청한 구조 기준입니다.

```sql
create table public.rsvp_submissions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  attendance text not null,
  guest_count integer,
  meal_preference text,
  message text
);

create table public.guestbook_messages (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  author text not null,
  content text not null,
  color_index integer not null default 0
);

alter table public.rsvp_submissions enable row level security;
alter table public.guestbook_messages enable row level security;

create policy "public select rsvp"
  on public.rsvp_submissions
  for select
  using (true);

create policy "public insert rsvp"
  on public.rsvp_submissions
  for insert
  with check (true);

create policy "public select guestbook"
  on public.guestbook_messages
  for select
  using (true);

create policy "public insert guestbook"
  on public.guestbook_messages
  for insert
  with check (true);
```

## Realtime 연결 메모

방명록 실시간 반영을 원하면 `guestbook_messages` 테이블을 Realtime에 추가한 뒤, `script.js`의 아래 TODO 지점에 구독 코드를 넣으면 됩니다.

- `loadGuestbookMessages()`
- `submitGuestbookMessage()`

## 구현된 섹션

1. 히어로 섹션
2. 초대장 카드
3. 연락처 모달
4. 가로 스크롤 갤러리
5. 날짜 & 카운트다운 + 달력
6. 오시는 길 + 지도/약도 영역
7. 예식장 안내 카드
8. 축의금 계좌 아코디언 + 복사
9. RSVP 바텀시트
10. 방명록 포스트잇 레이아웃
11. 공유 푸터

## 참고

- 데스크톱에서는 최대 너비 `480px`로 중앙 정렬되고 그림자가 적용됩니다.
- 모바일 기준으로 설계되어 있으며, 한 페이지 세로 스크롤 구조입니다.
- 실제 카카오톡 공유는 JavaScript SDK 키가 필요해서 현재는 Web Share API 또는 링크 복사로 대체해 두었습니다.
