const CONFIG = {
  site: {
    title: '김창욱 · 한진주 모바일 청첩장',
    publicUrl: 'https://windowkim.github.io/wedding-invitation/',
    heroImage: '/images/main.jpeg',
    shareImageUrl: 'https://windowkim.github.io/wedding-invitation/images/main.jpeg',
    backgroundMusic: '/bgms/the_day_we_met_first_swing_ver.mp3',
    backgroundMusicLabel: '우리가 처음 만난 날\n(김헌 님이 선물해 주신 곡)',
    heroKicker: 'Wedding Invitation',
  },
  kakao: {
    javascriptKey: 'f6d0f3d1014d5ee4dcec9f03394e8b92',
  },
  supabase: {
    url: 'https://lugeiktjewlcspivjwrd.supabase.co',
    anonKey: '',
    publishableKey: 'sb_publishable_7AdmCwZIrpK6Q4S1vGZtYA_AzA2P4vF',
    busSurveyTable: 'bus_survey_submissions',
    guestbookTable: 'guestbook_messages',
  },
  colors: {
    background: '#F8F6F4',
    accent: '#F2B8B5',
    accentStrong: '#E8A09C',
    secondary: '#B5A8B9',
    accentSoft: 'rgba(242, 184, 181, 0.22)',
    textMain: '#5E515D',
    textMuted: 'rgba(94, 81, 93, 0.74)',
    cardBg: 'rgba(255, 255, 255, 0.74)',
    cardBorder: 'rgba(181, 168, 185, 0.28)',
    contactButtonBackground: '#F2B8B5',
  },
  couple: {
    groom: {
      name: '김창욱',
      father: '김준식',
      mother: '방은정',
    },
    bride: {
      name: '한진주',
      father: '한상우',
      mother: '유은영',
    },
  },
  invitation: {
    messageLines: [
      '같은 믿음 안에서 만나',
      '같은 캠퍼스에서 꿈을 품고 걸어오며',
      '서로의 하루를 응원해 준 두 사람이',
      '이제 평생을 함께하기로 약속합니다.',
      '하나님 앞에서 맺는 이 소중한 언약의 자리에',
      '귀한 여러분을 정중히 초대합니다.',
      '오셔서 따뜻한 축복으로 함께해 주시면 감사하겠습니다.',
    ],
    verseLines: [
      '두 사람이 한 사람보다 나음은 그들이 수고함으로 좋은 상을 얻을 것임이라',
      '혹시 그들이 넘어지면 하나가 그 동무를 붙들어 일으키려니와 홀로 있어 넘어지고 붙들어 일으킬 자가 없는 자에게는 화가 있으리라',
      '또 두 사람이 함께 누우면 따뜻하거니와 한 사람이면 어찌 따뜻하랴',
      '한 사람이면 패하겠거니와 두 사람이면 맞설 수 있나니 세 겹 줄은 쉽게 끊어지지 아니하느니라',
    ],
    verseReference: '전도서 4장 9-12절',
  },
  wedding: {
    displayDate: '2026년 8월 29일 토요일 오후 3시',
    year: '2026',
    month: '8',
    day: '29',
    hour: '15',
    minute: '00',
    venueName: '인천 웨스턴팰리스웨딩 6층 팰리스홀',
    address: '인천광역시 부평구 부평대로278번길 16',
  },
  contact: {
    groomSideLabel: '신랑측',
    brideSideLabel: '신부측',
    people: {
      groom: [
        { relation: '신랑', name: '김창욱', phone: '010-9904-8791' },
        { relation: '신랑 아버지', name: '김준식', phone: '010-6730-8791' },
        { relation: '신랑 어머니', name: '방은정', phone: '010-2629-8791' },
      ],
      bride: [
        { relation: '신부', name: '한진주', phone: '010-9294-9665' },
        { relation: '신부 아버지', name: '한상우', phone: '010-4253-9665' },
        { relation: '신부 어머니', name: '유은영', phone: '010-7673-0221' },
      ],
    },
  },
  gallery: {
    images: [
      { src: '/images/gallery/0.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/1.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/2.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/3.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/4.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/5.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/6.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/7.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/8.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/9.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/10.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/12.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/13.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/14.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/15.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/16.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/17.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/18.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/19.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/20.jpeg', alt: '갤러리 사진' },
      { src: '/images/gallery/21.jpeg', alt: '갤러리 사진' },
    ],
  },
  location: {
    embedUrl: '<카카오맵 임베드 URL>',
    fallbackImage: '/images/map.jpg',
    parkingImage: '/images/map-parking.jpg',
    address: '인천광역시 부평구 부평대로278번길 16',
    naverMapUrl: 'https://naver.me/GJZ3adD7',
    kakaoMapUrl: 'https://kko.to/DD8O3ZE7Yw',
    routeUrl: 'https://kko.to/DD8O3ZE7Yw',
    parking: '부평우림 라이온스밸리 3시간 무료 (인천시 부평구 부평대로 283), 지하 2층 A동 기둥번호(A05) 주변 주차 후 갈산역 만남의광장 이동 후 갈산역 2번 출구로 나오세요.',
    subway: '인천지하철 갈산역 2번 출구로 나오세요.',
    bus: ' ',
    charterBus: [
      {
        title: '포항 → 인천',
        description: '출발 시간 및 장소: 9시 20분 효자교회 주차장, 9시 30분 포항공과대학교 동문',
        image: '/images/bus_pohang.png',
      },
      {
        title: '인천 → 포항',
        description: '출발 시간 및 장소: 18시 예식장 1층\n도착 장소: 포항공과대학교 동문 및 효자교회 주차장',
        image: '',
      },
    ],
  },
  venueGuide: {
    items: [
      { title: '예식', text: '6층 팰리스홀' },
      { title: '연회', text: '2시 30분부터 5시까지 이용 가능' },
    ],
  },
  accounts: {
    groomSideLabel: '신랑측',
    brideSideLabel: '신부측',
    groom: [
      { holder: '김창욱', bank: '<은행명>', number: '<계좌 정보>' },
      { holder: '김준식', bank: '<은행명>', number: '<계좌 정보>' },
      { holder: '방은정', bank: '<은행명>', number: '<계좌 정보>' },
    ],
    bride: [
      { holder: '한진주', bank: '<은행명>', number: '<계좌 정보>' },
      { holder: '한상우', bank: '<은행명>', number: '<계좌 정보>' },
      { holder: '유은영', bank: '<은행명>', number: '<계좌 정보>' },
    ],
  },
  busSurvey: {
    autoPopupDelayMs: 2000,
    popupDismissKey: 'wedding-bus-survey-hide-date',
    storageKey: 'wedding-bus-survey-submissions',
    sectionCopy:
      '귀한 걸음 해주시는 분들을 편하게 모시고자 좌석이 부족하지 않도록 탑승 조사를 하고 있습니다. 포항-인천 간의 대절 버스 이용 여부를 알려주시면 감사하겠습니다.',
    submitSuccessMessage: '버스 탑승 여부가 저장되었습니다.',
  },
  guestbook: {
    storageKey: 'wedding-guestbook-messages',
    sampleMessages: [],
    noteColors: ['#F8D9D6', '#F3C7C5', '#E7DCE9', '#D9D0DE', '#F7EBDD', '#EEDBDD'],
    submitSuccessMessage: '축하 메시지가 등록되었습니다.',
  },
  footer: {
    copy: '소중한 분들과 이 페이지를 함께 나눠 주세요.',
    shareTitle: '김창욱 · 한진주 결혼식에 초대합니다',
    shareText: '김창욱 · 한진주의 모바일 청첩장을 공유합니다.',
  },
};

const state = {
  guestbookMessages: [],
  countdownTimer: null,
};

const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function isPlaceholderValue(value) {
  return typeof value === 'string' && /<[^>]+>/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeHref(value) {
  return isPlaceholderValue(value) || !value ? '#' : value;
}

function safePhoneLink(value, protocol) {
  return isPlaceholderValue(value) || !value ? '#' : `${protocol}:${value.replace(/[^0-9+]/g, '')}`;
}

function safeColor(value, fallback) {
  if (isPlaceholderValue(value) || !value) {
    return fallback;
  }

  return value;
}

function resolveAssetUrl(value) {
  if (!value || isPlaceholderValue(value)) {
    return value;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  if (value.startsWith('/')) {
    return new URL(value.replace(/^\//, ''), CONFIG.site.publicUrl).toString();
  }

  return value;
}

function hasSupabaseBusConfig() {
  const publicKey = CONFIG.supabase.publishableKey || CONFIG.supabase.anonKey;
  return (
    CONFIG.supabase &&
    CONFIG.supabase.url &&
    publicKey &&
    !isPlaceholderValue(CONFIG.supabase.url) &&
    !isPlaceholderValue(publicKey)
  );
}

function getWeddingDate() {
  const { year, month, day, hour, minute } = CONFIG.wedding;
  const parts = [year, month, day, hour, minute].map((part) => Number(part));

  if (parts.some((part) => Number.isNaN(part))) {
    return null;
  }

  return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4]);
}

function getTodayKey() {
  return new Date().toLocaleDateString('sv-SE');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('is-visible');

  window.clearTimeout(showToast.timerId);
  showToast.timerId = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2000);
}

function createImageMarkup(src, alt, label, className = '') {
  if (!src || isPlaceholderValue(src)) {
    return `<div class="image-placeholder ${className}" data-label="${escapeHtml(label)}"></div>`;
  }

  return `<img class="${className}" src="${escapeHtml(resolveAssetUrl(src))}" alt="${escapeHtml(alt)}" loading="lazy" />`;
}

function renderHero() {
  document.title = CONFIG.site.title;
  document.documentElement.style.setProperty('--bg', CONFIG.colors.background);
  document.documentElement.style.setProperty('--accent', CONFIG.colors.accent);
  document.documentElement.style.setProperty('--accent-strong', CONFIG.colors.accentStrong);
  document.documentElement.style.setProperty('--secondary', CONFIG.colors.secondary);
  document.documentElement.style.setProperty('--accent-soft', CONFIG.colors.accentSoft);
  document.documentElement.style.setProperty('--text-main', CONFIG.colors.textMain);
  document.documentElement.style.setProperty('--text-muted', CONFIG.colors.textMuted);
  document.documentElement.style.setProperty('--card-bg', CONFIG.colors.cardBg);
  document.documentElement.style.setProperty('--card-border', CONFIG.colors.cardBorder);

  const heroMedia = document.getElementById('heroMedia');
  const heroTitle = document.getElementById('heroTitle');
  const heroMeta = document.getElementById('heroMeta');
  const heroKicker = document.getElementById('heroKicker');

  const heroImageUrl = resolveAssetUrl(CONFIG.site.heroImage);
  heroMedia.style.setProperty('--hero-image', `url('${heroImageUrl}')`);
  heroTitle.textContent = `${CONFIG.couple.groom.name} · ${CONFIG.couple.bride.name}`;
  heroMeta.innerHTML = `${escapeHtml(CONFIG.wedding.displayDate)}<br />${escapeHtml(CONFIG.wedding.venueName)}`;
  heroKicker.textContent = CONFIG.site.heroKicker;

  const heroImage = new Image();
  heroImage.onerror = () => {
    heroMedia.style.setProperty('--hero-image', 'none');
  };
  heroImage.src = heroImageUrl;
}

function renderBusSurveyCopy() {
  const busSectionCopy = document.getElementById('busSectionCopy');
  const busModalDescription = document.getElementById('busModalDescription');
  const charterBusMarkup = renderCharterBusMarkup('bus');

  if (busSectionCopy) {
    busSectionCopy.innerHTML = `
      <span class="bus-copy-intro">${escapeHtml(CONFIG.busSurvey.sectionCopy)}</span>
      ${charterBusMarkup}
    `;
  }

  if (busModalDescription) {
    busModalDescription.innerHTML = `
      <span class="bus-copy-intro">${escapeHtml(CONFIG.busSurvey.sectionCopy)}</span>
      ${charterBusMarkup}
    `;
  }
}

function renderInvitation() {
  const familyLineGroom = document.getElementById('familyLineGroom');
  const familyLineBride = document.getElementById('familyLineBride');
  const invitationMessage = document.getElementById('invitationMessage');
  const invitationSignature = document.getElementById('invitationSignature');

  familyLineGroom.innerHTML = `
    <strong>${escapeHtml(CONFIG.couple.groom.father)}·${escapeHtml(CONFIG.couple.groom.mother)}</strong><span>의 장남</span><strong>${escapeHtml(CONFIG.couple.groom.name)}</strong>
  `;
  familyLineBride.innerHTML = `
    <strong>${escapeHtml(CONFIG.couple.bride.father)}·${escapeHtml(CONFIG.couple.bride.mother)}</strong><span>의 차녀</span><strong>${escapeHtml(CONFIG.couple.bride.name)}</strong>
  `;
  invitationMessage.innerHTML = `
    <div class="invitation-message__body">
      ${CONFIG.invitation.messageLines.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}
    </div>
    <div class="invitation-message__verse">
      ${CONFIG.invitation.verseLines.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}
      <p class="invitation-message__reference">${escapeHtml(CONFIG.invitation.verseReference)}</p>
    </div>
  `;
  invitationSignature.textContent = `${CONFIG.couple.groom.name}·${CONFIG.couple.bride.name} 드림`;
}

function renderContacts() {
  const modalColumns = document.getElementById('contactColumns');
  const openButton = document.getElementById('openContactModal');
  const buttonColor = safeColor(CONFIG.colors.contactButtonBackground, CONFIG.colors.accent);

  openButton.style.backgroundColor = buttonColor;

  const createPeopleMarkup = (title, people) => {
    const rows = people
      .map((person) => {
        const telHref = safePhoneLink(person.phone, 'tel');
        const smsHref = safePhoneLink(person.phone, 'sms');
        const isDisabled = telHref === '#';

        return `
          <div class="contact-person">
            <strong>${escapeHtml(person.relation)}</strong>
            <p>${escapeHtml(person.name)}</p>
            <p class="contact-number">${escapeHtml(person.phone)}</p>
            <div class="contact-actions">
              <a class="icon-button ${isDisabled ? 'is-disabled' : ''}" href="${telHref}" aria-label="전화">☎</a>
              <a class="icon-button ${isDisabled ? 'is-disabled' : ''}" href="${smsHref}" aria-label="문자">✉</a>
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="contact-column">
        <h4>${escapeHtml(title)}</h4>
        ${rows}
      </div>
    `;
  };

  modalColumns.innerHTML = [
    createPeopleMarkup(CONFIG.contact.groomSideLabel, CONFIG.contact.people.groom),
    createPeopleMarkup(CONFIG.contact.brideSideLabel, CONFIG.contact.people.bride),
  ].join('');
}

function renderGallery() {
  const track = document.getElementById('galleryTrack');
  const dots = document.getElementById('galleryDots');
  const prevButton = document.getElementById('galleryPrevButton');
  const nextButton = document.getElementById('galleryNextButton');
  const galleryImages = CONFIG.gallery.images.filter((item) => item && item.src && !isPlaceholderValue(item.src));

  if (!galleryImages.length) {
    track.innerHTML = `
      <article class="gallery-item">
        <div class="image-placeholder" data-label="script.js의 CONFIG.gallery.images에 사진 경로를 넣어 주세요."></div>
        <span class="gallery-caption">갤러리 사진을 추가해 주세요</span>
      </article>
    `;
    dots.innerHTML = '';
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  track.innerHTML = galleryImages
    .map((item, index) => {
      const imageAlt = item.alt || '갤러리 사진';
      const caption = item.caption || '';
      const media = createImageMarkup(item.src, imageAlt, caption || imageAlt);
      return `
        <article class="gallery-item">
          <button
            class="gallery-item-button"
            type="button"
            data-gallery-src="${escapeHtml(resolveAssetUrl(item.src))}"
            data-gallery-alt="${escapeHtml(caption)}"
            aria-label="${escapeHtml(`갤러리 사진 ${index + 1} 크게 보기`)}"
          >
            ${media}
            ${caption ? `<span class="gallery-caption">${escapeHtml(caption)}</span>` : ''}
          </button>
        </article>
      `;
    })
    .join('');

  dots.innerHTML = galleryImages
    .map((_, index) => `<span class="${index === 0 ? 'is-active' : ''}"></span>`)
    .join('');

  const updateGalleryControls = () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    prevButton.disabled = track.scrollLeft <= 8;
    nextButton.disabled = track.scrollLeft >= maxScrollLeft - 8;
  };

  if (track.dataset.scrollBound === 'true') {
    updateGalleryControls();
    return;
  }

  track.addEventListener('scroll', () => {
    const cards = [...track.children];
    const activeIndex = cards.reduce(
      (closestIndex, card, index) => {
        const currentDistance = Math.abs(card.offsetLeft - track.scrollLeft);
        const bestDistance = Math.abs(cards[closestIndex].offsetLeft - track.scrollLeft);
        return currentDistance < bestDistance ? index : closestIndex;
      },
      0,
    );

    [...dots.children].forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeIndex);
    });

    updateGalleryControls();
  });

  const scrollGalleryBy = (direction) => {
    const cards = [...track.children];
    const firstCard = cards[0];
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width + 14;
    track.scrollBy({
      left: cardWidth * direction,
      behavior: 'smooth',
    });
  };

  prevButton.addEventListener('click', () => scrollGalleryBy(-1));
  nextButton.addEventListener('click', () => scrollGalleryBy(1));

  updateGalleryControls();
  track.dataset.scrollBound = 'true';
}

function renderCalendar() {
  const weekdays = document.getElementById('calendarWeekdays');
  const grid = document.getElementById('calendarGrid');
  const title = document.getElementById('calendarTitle');
  const helper = document.getElementById('calendarHelper');
  const weddingDate = getWeddingDate();
  const activeDate = weddingDate || new Date();
  const year = activeDate.getFullYear();
  const month = activeDate.getMonth();
  const selectedDay = weddingDate ? weddingDate.getDate() : null;
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  weekdays.innerHTML = WEEK_DAYS.map((day) => `<div>${day}</div>`).join('');
  title.textContent = `${year}년 ${month + 1}월`;
  helper.textContent = weddingDate ? '' : '날짜 입력 후 하이라이트됩니다';

  const cells = [];
  for (let i = 0; i < firstDay; i += 1) {
    cells.push('<div class="calendar-cell is-muted"></div>');
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const highlightClass = selectedDay === day ? ' is-highlight' : '';
    cells.push(`<div class="calendar-cell${highlightClass}">${day}</div>`);
  }

  while (cells.length % 7 !== 0) {
    cells.push('<div class="calendar-cell is-muted"></div>');
  }

  grid.innerHTML = cells.join('');
}

function renderCountdown() {
  const date = document.getElementById('countdownDate');
  const message = document.getElementById('countdownMessage');
  const live = document.getElementById('countdownLive');
  const weddingDate = getWeddingDate();

  const update = () => {
    if (!weddingDate) {
      date.textContent = CONFIG.wedding.displayDate;
      message.textContent = `${CONFIG.couple.groom.name} ❤️ ${CONFIG.couple.bride.name}의 결혼식이 [X]일 남았습니다`;
      live.textContent = `${CONFIG.wedding.year}년 ${CONFIG.wedding.month}월 ${CONFIG.wedding.day}일 ${CONFIG.wedding.hour}시`; 
      return;
    }

    const diff = weddingDate.getTime() - Date.now();
    const safeDiff = Math.max(diff, 0);
    const days = Math.ceil(safeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((safeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((safeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((safeDiff / 1000) % 60);

    date.textContent = CONFIG.wedding.displayDate;
    message.textContent = `${CONFIG.couple.groom.name} ❤️ ${CONFIG.couple.bride.name}의 결혼식이 ${days}일 남았습니다`;
    live.textContent = `${CONFIG.wedding.year}년 ${CONFIG.wedding.month}월 ${CONFIG.wedding.day}일 ${CONFIG.wedding.hour}시까지 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
  };

  update();
  window.clearInterval(state.countdownTimer);
  state.countdownTimer = window.setInterval(update, 1000);
}

function renderLocation() {
  const mapFrame = document.getElementById('mapFrame');
  const venueName = document.getElementById('venueName');
  const venueAddress = document.getElementById('venueAddress');
  const parkingImage = document.getElementById('parkingImage');
  const parkingInfo = document.getElementById('parkingInfo');
  const transportInfo = document.getElementById('transportInfo');
  const charterBusInfo = document.getElementById('charterBusInfo');
  const linkIds = ['naverMapLink', 'kakaoMapLink', 'routeButton'];
  const linkValues = [CONFIG.location.naverMapUrl, CONFIG.location.kakaoMapUrl, CONFIG.location.routeUrl];

  venueName.textContent = CONFIG.wedding.venueName;
  venueAddress.textContent = CONFIG.location.address;
  parkingImage.innerHTML = createImageMarkup(CONFIG.location.parkingImage, '주차 안내 이미지', '주차 안내 이미지를 추가하면 표시됩니다.');
  parkingInfo.textContent = CONFIG.location.parking;
  transportInfo.textContent = [CONFIG.location.subway, CONFIG.location.bus]
    .map((item) => (typeof item === 'string' ? item.trim() : item))
    .filter(Boolean)
    .join(' / ');
  charterBusInfo.innerHTML = renderCharterBusMarkup('location');

  if (isPlaceholderValue(CONFIG.location.embedUrl)) {
    mapFrame.innerHTML = `
      <div class="map-placeholder">
        ${createImageMarkup(CONFIG.location.fallbackImage, '약도 이미지', '약도 이미지를 추가하면 표시됩니다.')}
      </div>
    `;
  } else {
    mapFrame.innerHTML = `<iframe src="${escapeHtml(CONFIG.location.embedUrl)}" title="예식장 지도" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  }

  linkIds.forEach((id, index) => {
    const link = document.getElementById(id);
    const href = safeHref(linkValues[index]);
    link.href = href;
    link.classList.toggle('is-disabled', href === '#');
  });
}

function renderCharterBusMarkup(variant = 'location') {
  if (!Array.isArray(CONFIG.location.charterBus) || !CONFIG.location.charterBus.length) {
    return '';
  }

  return `
    <div class="charter-bus-list charter-bus-list--${variant}">
      ${CONFIG.location.charterBus
        .map((item) => {
          const imageMarkup =
            item.image && !isPlaceholderValue(item.image)
              ? `
                <div class="charter-bus-item__image">
                  ${createImageMarkup(
                    item.image,
                    `${item.title} 안내 이미지`,
                    `${item.title} 안내 이미지를 추가하면 표시됩니다.`,
                  )}
                </div>
              `
              : '';

          return `
            <div class="charter-bus-item">
              <p class="charter-bus-item__title">${escapeHtml(item.title)}</p>
              <p class="charter-bus-item__description">${escapeHtml(item.description)}</p>
              ${imageMarkup}
            </div>
          `;
        })
        .join('')}
    </div>
  `;
}

function renderVenueGuide() {
  const grid = document.getElementById('guideGrid');

  grid.innerHTML = CONFIG.venueGuide.items
    .map((item) => {
      return `
        <article class="guide-card guide-card--text-only">
          <div class="guide-card__body">
            <h3 class="guide-card__title">${escapeHtml(item.title)}</h3>
            <p class="guide-card__text">${escapeHtml(item.text)}</p>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderAccounts() {
  const accordion = document.getElementById('accountAccordion');
  const groups = [
    { key: 'groom', label: CONFIG.accounts.groomSideLabel },
    { key: 'bride', label: CONFIG.accounts.brideSideLabel },
  ];

  accordion.innerHTML = groups
    .map((group) => {
      const rows = CONFIG.accounts[group.key]
        .map(
          (account, index) => `
            <div class="account-row">
              <h4>${escapeHtml(account.holder)}</h4>
              <p>${escapeHtml(account.bank)}</p>
              <p class="account-number">${escapeHtml(account.number)}</p>
              <button class="copy-button" type="button" data-copy="${escapeHtml(account.number)}">계좌 복사</button>
            </div>
          `,
        )
        .join('');

      return `
        <article class="accordion-item">
          <button class="accordion-trigger" type="button">
            <span>${escapeHtml(group.label)}</span>
            <span>+</span>
          </button>
          <div class="accordion-panel">${rows}</div>
        </article>
      `;
    })
    .join('');

  accordion.querySelectorAll('.accordion-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');
      item.classList.toggle('is-open');
      button.querySelector('span:last-child').textContent = item.classList.contains('is-open') ? '−' : '+';
    });
  });

  accordion.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const copied = await copyToClipboard(button.dataset.copy || '');
      if (copied) {
        showToast('계좌번호가 복사되었습니다.');
      }
    });
  });
}

function loadGuestbookMessages() {
  if (hasSupabaseBusConfig()) {
    const publicKey = CONFIG.supabase.publishableKey || CONFIG.supabase.anonKey;
    const endpoint = `${CONFIG.supabase.url}/rest/v1/${CONFIG.supabase.guestbookTable}?select=author,content,color_index,created_at&order=created_at.asc`;

    return fetch(endpoint, {
      method: 'GET',
      headers: {
        apikey: publicKey,
        Authorization: `Bearer ${publicKey}`,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Supabase guestbook select failed');
        }

        return response.json();
      })
      .then((rows) => {
        state.guestbookMessages = rows.map((row) => ({
          author: row.author,
          content: row.content,
          colorIndex: row.color_index,
          createdAt: new Date(row.created_at).toLocaleString('ko-KR'),
        }));
      })
      .catch((error) => {
        console.error('Guestbook load failed:', error);
        const saved = localStorage.getItem(CONFIG.guestbook.storageKey);
        let parsed = [];

        try {
          parsed = saved ? JSON.parse(saved) : [];
        } catch (parseError) {
          parsed = [];
        }

        state.guestbookMessages = [...CONFIG.guestbook.sampleMessages, ...parsed];
      });
  }

  const saved = localStorage.getItem(CONFIG.guestbook.storageKey);
  let parsed = [];

  try {
    parsed = saved ? JSON.parse(saved) : [];
  } catch (error) {
    parsed = [];
  }

  // TODO: Replace localStorage loading with Lovable Cloud / Supabase SELECT from guestbook_messages.
  // TODO: Subscribe to Realtime updates so new guestbook messages appear instantly across devices.
  state.guestbookMessages = [...CONFIG.guestbook.sampleMessages, ...parsed];
  return Promise.resolve();
}

function persistGuestbookMessages() {
  const customMessages = state.guestbookMessages.filter((message) => !message.isSample);
  localStorage.setItem(CONFIG.guestbook.storageKey, JSON.stringify(customMessages));
}

function renderGuestbook() {
  const grid = document.getElementById('guestbookGrid');
  const emptyState = document.getElementById('guestbookEmptyState');

  if (!state.guestbookMessages.length) {
    grid.innerHTML = '';
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  const columns = [
    { items: [], weight: 0 },
    { items: [], weight: 0 },
  ];

  [...state.guestbookMessages]
    .reverse()
    .forEach((message, index) => {
      const targetColumn = columns[0].weight <= columns[1].weight ? columns[0] : columns[1];
      const contentWeight = `${message.author}${message.content}`.length;

      targetColumn.items.push({ message, index });
      targetColumn.weight += contentWeight;
    });

  grid.innerHTML = columns
    .map((column) => {
      const cards = column.items
        .map(({ message, index }) => {
          const color = CONFIG.guestbook.noteColors[message.colorIndex % CONFIG.guestbook.noteColors.length];
          const rotation = index % 2 === 0 ? '-1.5deg' : '1.5deg';

          return `
            <article class="note-card" style="background:${color}; --rotate:${rotation};">
              <h4>${escapeHtml(message.author)}</h4>
              <p>${escapeHtml(message.content)}</p>
              <small>${escapeHtml(message.createdAt)}</small>
            </article>
          `;
        })
        .join('');

      return `<div class="guestbook-column">${cards}</div>`;
    })
    .join('');
}

async function submitGuestbookMessage(payload) {
  const message = {
    author: payload.author,
    content: payload.content,
    colorIndex: Math.floor(Math.random() * CONFIG.guestbook.noteColors.length),
    createdAt: new Date().toLocaleString('ko-KR'),
  };

  if (hasSupabaseBusConfig()) {
    const publicKey = CONFIG.supabase.publishableKey || CONFIG.supabase.anonKey;
    const endpoint = `${CONFIG.supabase.url}/rest/v1/${CONFIG.supabase.guestbookTable}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: publicKey,
        Authorization: `Bearer ${publicKey}`,
        Prefer: 'return=representation',
      },
      body: JSON.stringify({
        author: payload.author,
        content: payload.content,
        color_index: message.colorIndex,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Supabase guestbook insert failed');
    }

    const [insertedRow] = await response.json();
    state.guestbookMessages.push({
      author: insertedRow.author,
      content: insertedRow.content,
      colorIndex: insertedRow.color_index,
      createdAt: new Date(insertedRow.created_at).toLocaleString('ko-KR'),
    });
    renderGuestbook();
    return;
  }

  state.guestbookMessages.push(message);
  persistGuestbookMessages();
  renderGuestbook();
}

function getStoredBusSurveySubmissions() {
  let submissions = [];

  try {
    submissions = JSON.parse(localStorage.getItem(CONFIG.busSurvey.storageKey) || '[]');
  } catch (error) {
    submissions = [];
  }

  return submissions;
}

async function submitBusSurvey(payload) {
  if (hasSupabaseBusConfig()) {
    const publicKey = CONFIG.supabase.publishableKey || CONFIG.supabase.anonKey;
    const endpoint = `${CONFIG.supabase.url}/rest/v1/${CONFIG.supabase.busSurveyTable}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: publicKey,
        Authorization: `Bearer ${publicKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        side: payload.side,
        name: payload.name,
        phone: payload.phone,
        outbound_bus: payload.outbound_bus,
        outbound_guest_count: Number(payload.outbound_guest_count || 0),
        return_bus: payload.return_bus,
        return_guest_count: Number(payload.return_guest_count || 0),
        message: payload.message,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Supabase insert failed');
    }

    return;
  }

  const submissions = getStoredBusSurveySubmissions();

  // Fallback for local preview when Supabase is not configured yet.
  submissions.push({ ...payload, createdAt: new Date().toISOString() });
  localStorage.setItem(CONFIG.busSurvey.storageKey, JSON.stringify(submissions));
}

function bindForms() {
  const guestbookForm = document.getElementById('guestbookForm');
  const busForm = document.getElementById('busForm');
  const sideInput = document.getElementById('busSide');

  document.querySelectorAll('#busSideToggleGroup .toggle-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('#busSideToggleGroup .toggle-button').forEach((item) => {
        item.classList.toggle('is-selected', item === button);
      });
      sideInput.value = button.dataset.side || '신랑측';
    });
  });

  [guestbookForm, busForm].forEach((form) => {
    form.querySelectorAll('input, textarea').forEach((field) => {
      field.addEventListener('input', () => {
        field.classList.remove('is-invalid');
        if (field.value.trim()) {
          field.classList.add('is-valid');
        } else {
          field.classList.remove('is-valid');
        }
      });
    });
  });

  busForm.querySelectorAll('input[name="outbound_bus"]').forEach((field) => {
    field.addEventListener('change', () => {
      document.getElementById('outboundBusChoices')?.classList.remove('is-invalid');
    });
  });

  busForm.querySelectorAll('input[name="return_bus"]').forEach((field) => {
    field.addEventListener('change', () => {
      document.getElementById('returnBusChoices')?.classList.remove('is-invalid');
    });
  });

  guestbookForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(guestbookForm);
    const author = String(formData.get('author') || '').trim();
    const content = String(formData.get('content') || '').trim();

    if (!author || !content) {
      markInvalidFields(guestbookForm, ['guestbookAuthor', 'guestbookContent']);
      showToast('이름과 메시지를 모두 입력해 주세요.');
      return;
    }

    try {
      await submitGuestbookMessage({ author, content });
      guestbookForm.reset();
      guestbookForm.querySelectorAll('.is-valid').forEach((field) => field.classList.remove('is-valid'));
      showToast(CONFIG.guestbook.submitSuccessMessage);
    } catch (error) {
      console.error('Guestbook submission failed:', error);
      showToast('축하 메시지 저장에 실패했습니다. 설정을 확인해 주세요.');
    }
  });

  busForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(busForm);
    const payload = {
      side: sideInput.value,
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      outbound_bus: String(formData.get('outbound_bus') || '').trim(),
      outbound_guest_count: String(formData.get('outbound_guest_count') || '').trim(),
      return_bus: String(formData.get('return_bus') || '').trim(),
      return_guest_count: String(formData.get('return_guest_count') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    const missing = [];
    if (!payload.name) missing.push('busName');
    if (!payload.phone) missing.push('busPhone');
    if (!payload.outbound_bus) missing.push('outboundBusChoices');
    if (!payload.return_bus) missing.push('returnBusChoices');
    if (payload.outbound_bus === '탑승' && !payload.outbound_guest_count) missing.push('outboundGuestCount');
    if (payload.return_bus === '탑승' && !payload.return_guest_count) missing.push('returnGuestCount');

    if (payload.outbound_bus === '미탑승' && !payload.outbound_guest_count) {
      payload.outbound_guest_count = '0';
    }

    if (payload.return_bus === '미탑승' && !payload.return_guest_count) {
      payload.return_guest_count = '0';
    }

    if (missing.length) {
      markInvalidFields(busForm, missing);
      showToast('필수 항목을 모두 입력해 주세요.');
      return;
    }

    try {
      await submitBusSurvey(payload);
      if (document.getElementById('hideBusToday').checked) {
        localStorage.setItem(CONFIG.busSurvey.popupDismissKey, getTodayKey());
      }

      busForm.reset();
      sideInput.value = '신랑측';
      document.querySelectorAll('#busSideToggleGroup .toggle-button').forEach((button, index) => {
        button.classList.toggle('is-selected', index === 0);
      });
      busForm.querySelectorAll('.is-valid').forEach((field) => field.classList.remove('is-valid'));
      closeModal(document.getElementById('busModal'));
      showToast(CONFIG.busSurvey.submitSuccessMessage);
    } catch (error) {
      console.error('Bus survey submission failed:', error);
      showToast('저장에 실패했습니다. 설정을 확인해 주세요.');
    }
  });
}

function markInvalidFields(form, fieldIds) {
  fieldIds.forEach((id) => {
    const element = form.querySelector(`#${id}`) || document.getElementById(id);
    if (element) {
      element.classList.add('is-invalid');
    }
  });
}

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  if (!document.querySelector('.modal-overlay.is-open')) {
    document.body.classList.remove('modal-open');
  }
}

function bindModals() {
  const contactModal = document.getElementById('contactModal');
  const busModal = document.getElementById('busModal');
  const galleryModal = document.getElementById('galleryModal');
  const modalList = [contactModal, busModal, galleryModal];

  document.getElementById('openContactModal').addEventListener('click', () => openModal(contactModal));
  document.getElementById('openBusModal').addEventListener('click', () => openModal(busModal));

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.closeModal);
      if (modal && modal.id === 'busModal' && document.getElementById('hideBusToday').checked) {
        localStorage.setItem(CONFIG.busSurvey.popupDismissKey, getTodayKey());
      }
      closeModal(modal);
    });
  });

  modalList.forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalList.forEach((modal) => closeModal(modal));
    }
  });

  if (localStorage.getItem(CONFIG.busSurvey.popupDismissKey) !== getTodayKey()) {
    window.setTimeout(() => openModal(busModal), CONFIG.busSurvey.autoPopupDelayMs);
  }
}

function bindGalleryLightbox() {
  const galleryModal = document.getElementById('galleryModal');
  const galleryModalImage = document.getElementById('galleryModalImage');
  const galleryModalCaption = document.getElementById('galleryModalCaption');
  const galleryTrack = document.getElementById('galleryTrack');

  galleryTrack.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-gallery-src]');
    if (!trigger) return;

    galleryModalImage.src = trigger.dataset.gallerySrc || '';
    galleryModalImage.alt = trigger.dataset.galleryAlt || '갤러리 이미지';
    galleryModalCaption.textContent = trigger.dataset.galleryAlt || '';
    openModal(galleryModal);
  });
}

function bindScrollIndicator() {
  document.querySelectorAll('[data-scroll-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.querySelector(button.dataset.scrollTarget);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

async function copyToClipboard(text) {
  if (!text || isPlaceholderValue(text)) {
    showToast('복사할 내용을 먼저 입력해 주세요.');
    return false;
  }

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const helper = document.createElement('textarea');
  helper.value = text;
  document.body.appendChild(helper);
  helper.select();
  document.execCommand('copy');
  document.body.removeChild(helper);
  return true;
}

function bindShareButtons() {
  const shareButton = document.getElementById('shareButton');
  const copyLinkButton = document.getElementById('copyLinkButton');
  const shareUrl = CONFIG.site.publicUrl || window.location.href;

  shareButton.addEventListener('click', async () => {
    const kakao = window.Kakao;
    const kakaoKey = CONFIG.kakao.javascriptKey;

    if (kakao && !isPlaceholderValue(kakaoKey) && kakaoKey) {
      try {
        if (!kakao.isInitialized()) {
          kakao.init(kakaoKey);
        }

        kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: CONFIG.footer.shareTitle,
            description: CONFIG.footer.shareText,
            imageUrl: CONFIG.site.shareImageUrl,
            link: {
              mobileWebUrl: shareUrl,
              webUrl: shareUrl,
            },
          },
          buttons: [
            {
              title: '청첩장 보기',
              link: {
                mobileWebUrl: shareUrl,
                webUrl: shareUrl,
              },
            },
          ],
        });
        return;
      } catch (error) {
        console.error('Kakao share failed:', error);
      }
    }

    const shareData = {
      title: CONFIG.footer.shareTitle,
      text: CONFIG.footer.shareText,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    const copied = await copyToClipboard(shareUrl);
    if (copied) {
      showToast('공유 링크가 복사되었습니다.');
    }
  });

  copyLinkButton.addEventListener('click', async () => {
    const copied = await copyToClipboard(shareUrl);
    if (copied) {
      showToast('링크가 복사되었습니다.');
    }
  });
}

function bindAudioControls() {
  const audio = document.getElementById('bgmAudio');
  const muteButton = document.getElementById('audioMuteButton');
  const playButton = document.getElementById('audioPlayButton');
  const pauseButton = document.getElementById('audioPauseButton');
  const restartButton = document.getElementById('audioRestartButton');
  const audioTitle = document.getElementById('audioTitle');
  const audioStatus = document.getElementById('audioStatus');

  audio.src = resolveAssetUrl(CONFIG.site.backgroundMusic);
  audio.volume = 0.6;
  audio.muted = true;
  audioTitle.textContent = CONFIG.site.backgroundMusicLabel || '배경음악';

  const updateAudioStatus = (message) => {
    audioStatus.textContent = message;
    muteButton.textContent = audio.muted ? '🔇' : '🔊';
  };

  const tryAutoPlay = async () => {
    try {
      audio.muted = false;
      await audio.play();
      updateAudioStatus('배경음악이 자동으로 재생 중이에요.');
      return;
    } catch (error) {
      try {
        audio.muted = true;
        await audio.play();
        updateAudioStatus('배경음악이 자동 재생 중이에요. 음소거를 해제해 주세요.');
      } catch (mutedError) {
        audio.pause();
        audio.currentTime = 0;
        audio.muted = true;
        updateAudioStatus('배경음악을 준비하고 있어요.');
      }
    }
  };

  playButton.addEventListener('click', async () => {
    try {
      audio.muted = false;
      await audio.play();
      updateAudioStatus('배경음악이 재생 중이에요.');
    } catch (error) {
      updateAudioStatus('재생 버튼을 한 번 더 눌러 주세요.');
    }
  });

  pauseButton.addEventListener('click', () => {
    audio.pause();
    updateAudioStatus('배경음악을 잠시 멈췄어요.');
  });

  muteButton.addEventListener('click', () => {
    audio.muted = !audio.muted;
    updateAudioStatus(audio.muted ? '배경음악이 음소거되어 있어요.' : '배경음악 소리를 켰어요.');
  });

  restartButton.addEventListener('click', async () => {
    try {
      audio.currentTime = 0;
      audio.muted = false;
      await audio.play();
      updateAudioStatus('처음부터 다시 재생하고 있어요.');
    } catch (error) {
      updateAudioStatus('재생 버튼을 눌러 음악을 시작해 주세요.');
    }
  });

  audio.addEventListener('ended', () => updateAudioStatus('배경음악이 끝났어요.'));
  updateAudioStatus('배경음악을 준비하고 있어요.');
  tryAutoPlay();
}

function bindRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function renderFooter() {
  document.getElementById('footerCopy').textContent = CONFIG.footer.copy;
}

async function initialize() {
  renderHero();
  renderBusSurveyCopy();
  renderInvitation();
  renderContacts();
  renderGallery();
  renderCalendar();
  renderCountdown();
  renderLocation();
  renderVenueGuide();
  renderAccounts();
  renderFooter();
  await loadGuestbookMessages();
  renderGuestbook();
  bindForms();
  bindModals();
  bindGalleryLightbox();
  bindScrollIndicator();
  bindShareButtons();
  bindAudioControls();
  bindRevealAnimation();

  window.weddingInvitation = {
    getBusSurveySubmissions: () => getStoredBusSurveySubmissions(),
  };
}

document.addEventListener('DOMContentLoaded', initialize);
