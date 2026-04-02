const CONFIG = {
  site: {
    title: '김창욱 · 한진주 모바일 청첩장',
    heroImage: '/images/hero.jpg',
    heroKicker: 'Wedding Invitation',
  },
  colors: {
    background: '#537551',
    accent: '#d07ca6',
    accentSoft: 'rgba(205, 148, 177, 0.18)',
    contactButtonBackground: '<배경색깔>',
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
    venueName: '웨스턴팰리스웨딩 6층 팰리스홀',
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
      { src: '/images/<갤러리 1>', alt: '<갤러리 1>' },
      { src: '/images/<갤러리 2>', alt: '<갤러리 2>' },
      { src: '/images/<갤러리 3>', alt: '<갤러리 3>' },
    ],
  },
  location: {
    embedUrl: '<카카오맵 임베드 URL>',
    fallbackImage: '/images/약도.jpg',
    address: '인천광역시 부평구 부평대로278번길 16',
    naverMapUrl: '<네이버지도 링크>',
    kakaoMapUrl: '<카카오맵 링크>',
    routeUrl: '<길찾기 링크>',
    parking: '부평우림 라이온스밸리 3시간 무료 (인천시 부평구 부평대로 283), 지하 2층 A동 기둥번호(A05) 주변 주차 후 갈산역 만남의광장 이동 후 갈산역 2번 출구로 나오세요.(에스컬레이터)',
    subway: '인천지하철 갈산역 2번 출구로 나오세요.',
    bus: '포항 ',
    charterBus:
      '포항 -> 인천\n -출발 시간 및 장소: 9시 20분 효자교회 주차장, 9시 30분 포항공과대학교 C5 앞\n\n인천 -> 포항\n -출발 시간 및 장소: 18시 예식장 1층',
  },
  venueGuide: {
    items: [
      { title: '안내 1', image: '/images/<안내1 사진>', text: '<안내1 내용>' },
      { title: '안내 2', image: '/images/<안내2 사진>', text: '<안내2 내용>' },
      { title: '안내 3', image: '/images/<안내3 사진>', text: '<안내3 내용>' },
    ],
  },
  accounts: {
    groomSideLabel: '신랑측 계좌',
    brideSideLabel: '신부측 계좌',
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
  rsvp: {
    autoPopupDelayMs: 2000,
    popupDismissKey: 'wedding-rsvp-hide-date',
    submitSuccessMessage: '참석 의사가 저장되었습니다.',
  },
  guestbook: {
    storageKey: 'wedding-guestbook-messages',
    sampleMessages: [],
    noteColors: ['#f5e28a', '#f0c8a3', '#d8e592', '#cdd9f3', '#f1c0c7', '#d8c6f2'],
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

  return `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" />`;
}

function renderHero() {
  document.title = CONFIG.site.title;
  document.documentElement.style.setProperty('--bg', CONFIG.colors.background);
  document.documentElement.style.setProperty('--accent', CONFIG.colors.accent);
  document.documentElement.style.setProperty('--accent-soft', CONFIG.colors.accentSoft);

  const heroMedia = document.getElementById('heroMedia');
  const heroTitle = document.getElementById('heroTitle');
  const heroMeta = document.getElementById('heroMeta');
  const heroKicker = document.getElementById('heroKicker');

  heroMedia.style.setProperty('--hero-image', `url('${CONFIG.site.heroImage}')`);
  heroTitle.textContent = `${CONFIG.couple.groom.name} · ${CONFIG.couple.bride.name}`;
  heroMeta.innerHTML = `${escapeHtml(CONFIG.wedding.displayDate)}<br />${escapeHtml(CONFIG.wedding.venueName)}`;
  heroKicker.textContent = CONFIG.site.heroKicker;

  const heroImage = new Image();
  heroImage.onerror = () => {
    heroMedia.style.setProperty('--hero-image', 'none');
  };
  heroImage.src = CONFIG.site.heroImage;
}

function renderInvitation() {
  const familyLineGroom = document.getElementById('familyLineGroom');
  const familyLineBride = document.getElementById('familyLineBride');
  const invitationMessage = document.getElementById('invitationMessage');
  const invitationSignature = document.getElementById('invitationSignature');

  familyLineGroom.textContent = `${CONFIG.couple.groom.father}·${CONFIG.couple.groom.mother}의 장남 ${CONFIG.couple.groom.name}`;
  familyLineBride.textContent = `${CONFIG.couple.bride.father}·${CONFIG.couple.bride.mother}의 차녀 ${CONFIG.couple.bride.name}`;
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
  const groomBadge = document.getElementById('contactBadgeGroom');
  const brideBadge = document.getElementById('contactBadgeBride');
  const modalColumns = document.getElementById('contactColumns');
  const openButton = document.getElementById('openContactModal');
  const buttonColor = safeColor(CONFIG.colors.contactButtonBackground, CONFIG.colors.accent);

  groomBadge.textContent = CONFIG.contact.groomSideLabel;
  brideBadge.textContent = CONFIG.contact.brideSideLabel;
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

  track.innerHTML = CONFIG.gallery.images
    .map((item, index) => {
      const media = createImageMarkup(item.src, item.alt, item.alt);
      return `
        <article class="gallery-item">
          ${media}
          <span class="gallery-caption">${escapeHtml(item.alt || `사진 ${index + 1}`)}</span>
        </article>
      `;
    })
    .join('');

  dots.innerHTML = CONFIG.gallery.images
    .map((_, index) => `<span class="${index === 0 ? 'is-active' : ''}"></span>`)
    .join('');

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
  });
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
  helper.textContent = weddingDate ? CONFIG.wedding.displayDate : '날짜 입력 후 하이라이트됩니다';

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
  const message = document.getElementById('countdownMessage');
  const live = document.getElementById('countdownLive');
  const weddingDate = getWeddingDate();

  const update = () => {
    if (!weddingDate) {
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

    message.textContent = `${CONFIG.couple.groom.name} ❤️ ${CONFIG.couple.bride.name}의 결혼식이 ${days}일 남았습니다`;
    live.textContent = `${CONFIG.wedding.year}년 ${CONFIG.wedding.month}월 ${CONFIG.wedding.day}일 ${CONFIG.wedding.hour}시까지 ${hours}시간 ${minutes}분 ${seconds}초`;
  };

  update();
  window.clearInterval(state.countdownTimer);
  state.countdownTimer = window.setInterval(update, 1000);
}

function renderLocation() {
  const mapFrame = document.getElementById('mapFrame');
  const venueName = document.getElementById('venueName');
  const venueAddress = document.getElementById('venueAddress');
  const parkingInfo = document.getElementById('parkingInfo');
  const transportInfo = document.getElementById('transportInfo');
  const charterBusInfo = document.getElementById('charterBusInfo');
  const linkIds = ['naverMapLink', 'kakaoMapLink', 'routeButton'];
  const linkValues = [CONFIG.location.naverMapUrl, CONFIG.location.kakaoMapUrl, CONFIG.location.routeUrl];

  venueName.textContent = CONFIG.wedding.venueName;
  venueAddress.textContent = CONFIG.location.address;
  parkingInfo.textContent = CONFIG.location.parking;
  transportInfo.textContent = [CONFIG.location.subway, CONFIG.location.bus].filter(Boolean).join(' / ');
  charterBusInfo.textContent = CONFIG.location.charterBus;

  if (isPlaceholderValue(CONFIG.location.embedUrl)) {
    mapFrame.innerHTML = `
      <div class="map-placeholder" data-label="카카오맵 임베드 URL을 넣으면 지도가 표시됩니다.">
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

function renderVenueGuide() {
  const grid = document.getElementById('guideGrid');

  grid.innerHTML = CONFIG.venueGuide.items
    .map((item) => {
      const media = createImageMarkup(item.image, item.title, item.title);
      return `
        <article class="guide-card">
          ${media}
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
    .map((group, groupIndex) => {
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
        <article class="accordion-item ${groupIndex === 0 ? 'is-open' : ''}">
          <button class="accordion-trigger" type="button">
            <span>${escapeHtml(group.label)}</span>
            <span>${groupIndex === 0 ? '−' : '+'}</span>
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
  grid.innerHTML = [...state.guestbookMessages]
    .reverse()
    .map((message, index) => {
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
}

async function submitGuestbookMessage(payload) {
  const message = {
    author: payload.author,
    content: payload.content,
    colorIndex: Math.floor(Math.random() * CONFIG.guestbook.noteColors.length),
    createdAt: new Date().toLocaleString('ko-KR'),
  };

  // TODO: Replace localStorage write with Lovable Cloud / Supabase INSERT into guestbook_messages.
  state.guestbookMessages.push(message);
  persistGuestbookMessages();
  renderGuestbook();
}

async function submitRsvp(payload) {
  let submissions = [];

  try {
    submissions = JSON.parse(localStorage.getItem('wedding-rsvp-submissions') || '[]');
  } catch (error) {
    submissions = [];
  }

  // TODO: Replace localStorage write with Lovable Cloud / Supabase INSERT into rsvp_submissions.
  submissions.push({ ...payload, createdAt: new Date().toISOString() });
  localStorage.setItem('wedding-rsvp-submissions', JSON.stringify(submissions));
}

function bindForms() {
  const guestbookForm = document.getElementById('guestbookForm');
  const rsvpForm = document.getElementById('rsvpForm');
  const sideInput = document.getElementById('rsvpSide');

  document.querySelectorAll('#sideToggleGroup .toggle-button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('#sideToggleGroup .toggle-button').forEach((item) => {
        item.classList.toggle('is-selected', item === button);
      });
      sideInput.value = button.dataset.side || '신랑측';
    });
  });

  [guestbookForm, rsvpForm].forEach((form) => {
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

  rsvpForm.querySelectorAll('input[name="attendance"]').forEach((field) => {
    field.addEventListener('change', () => {
      document.getElementById('attendanceChoices')?.classList.remove('is-invalid');
    });
  });

  rsvpForm.querySelectorAll('input[name="meal_preference"]').forEach((field) => {
    field.addEventListener('change', () => {
      document.getElementById('mealChoices')?.classList.remove('is-invalid');
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

    await submitGuestbookMessage({ author, content });
    guestbookForm.reset();
    guestbookForm.querySelectorAll('.is-valid').forEach((field) => field.classList.remove('is-valid'));
    showToast(CONFIG.guestbook.submitSuccessMessage);
  });

  rsvpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(rsvpForm);
    const payload = {
      side: sideInput.value,
      name: String(formData.get('name') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      attendance: String(formData.get('attendance') || '').trim(),
      guest_count: String(formData.get('guest_count') || '').trim(),
      companions: String(formData.get('companions') || '').trim(),
      meal_preference: String(formData.get('meal_preference') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    const missing = [];
    if (!payload.name) missing.push('rsvpName');
    if (!payload.phone) missing.push('rsvpPhone');
    if (!payload.attendance) missing.push('attendanceChoices');
    if (!payload.guest_count) missing.push('rsvpGuestCount');
    if (!payload.meal_preference) missing.push('mealChoices');

    if (missing.length) {
      markInvalidFields(rsvpForm, missing);
      showToast('필수 항목을 모두 입력해 주세요.');
      return;
    }

    await submitRsvp(payload);
    if (document.getElementById('hideRsvpToday').checked) {
      localStorage.setItem(CONFIG.rsvp.popupDismissKey, getTodayKey());
    }

    rsvpForm.reset();
    sideInput.value = '신랑측';
    document.querySelectorAll('#sideToggleGroup .toggle-button').forEach((button, index) => {
      button.classList.toggle('is-selected', index === 0);
    });
    rsvpForm.querySelectorAll('.is-valid').forEach((field) => field.classList.remove('is-valid'));
    closeModal(document.getElementById('rsvpModal'));
    showToast(CONFIG.rsvp.submitSuccessMessage);
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
  const rsvpModal = document.getElementById('rsvpModal');

  document.getElementById('openContactModal').addEventListener('click', () => openModal(contactModal));
  document.getElementById('openRsvpModal').addEventListener('click', () => openModal(rsvpModal));

  document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.closeModal);
      if (modal && modal.id === 'rsvpModal' && document.getElementById('hideRsvpToday').checked) {
        localStorage.setItem(CONFIG.rsvp.popupDismissKey, getTodayKey());
      }
      closeModal(modal);
    });
  });

  [contactModal, rsvpModal].forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(contactModal);
      closeModal(rsvpModal);
    }
  });

  if (localStorage.getItem(CONFIG.rsvp.popupDismissKey) !== getTodayKey()) {
    window.setTimeout(() => openModal(rsvpModal), CONFIG.rsvp.autoPopupDelayMs);
  }
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

  // TODO: Add Kakao JavaScript SDK here if you want a real KakaoTalk share flow.
  shareButton.addEventListener('click', async () => {
    const shareData = {
      title: CONFIG.footer.shareTitle,
      text: CONFIG.footer.shareText,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    const copied = await copyToClipboard(window.location.href);
    if (copied) {
      showToast('공유 링크가 복사되었습니다.');
    }
  });

  copyLinkButton.addEventListener('click', async () => {
    const copied = await copyToClipboard(window.location.href);
    if (copied) {
      showToast('링크가 복사되었습니다.');
    }
  });
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

function initialize() {
  renderHero();
  renderInvitation();
  renderContacts();
  renderGallery();
  renderCalendar();
  renderCountdown();
  renderLocation();
  renderVenueGuide();
  renderAccounts();
  renderFooter();
  loadGuestbookMessages();
  renderGuestbook();
  bindForms();
  bindModals();
  bindScrollIndicator();
  bindShareButtons();
  bindRevealAnimation();
}

document.addEventListener('DOMContentLoaded', initialize);
