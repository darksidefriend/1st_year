/* ============================================================
   1. НАСТРОЙКИ
   ============================================================ */

/** Дата начала отношений — формат YYYY-MM-DD */
const START_DATE = "2025-02-14";

/** Красивый период для шапки */
const PERIOD_LABEL = "Всё началось 9 ноября 2025...";

/**
 * Список событий таймлайна.
 * Порядок = порядок отображения (сверху вниз).
 *
 * date  — дата или период (строка, как хочется)
 * title — заголовок события
 * place — локация
 * text  — короткое описание
 * photo — путь к фото относительно index.html (например "images/01.jpg")
 *         если фото нет — уберите поле или поставьте photo: ""
 */
const EVENTS = [
  {
    date: "9 Ноября 2025",
    title: "Начало истории",
    place: "«Coffeeshop Company» на Горьковской",
    text: "Волнительный день, когда мы решили, что можем попробовать... Первая прогулка за руки, первое волнение, первый поцелуй",
    photos: []
  },
  {
    date: "Декабрь 2025",
    title: "Первое мини-путешествие",
    place: "г. Выборг, Ленинградская область",
    text: "Ветер, теплая зима, скандинавский вайб и конечно же прекрасный согревающий рамен",
    photos: [
        "images/photo_5305385707490709428_w.jpg",
        "images/photo_5305385707490709653_y.jpg",
        "images/photo_5305385707490709654_y.jpg",
        "images/photo_5305385707490709658_y.jpg",
        "images/photo_5305385707490709663_y.jpg"
    ]
  },
  {
    date: "15 февраля 2026",
    title: "День святого Валентина",
    place: "«Тао» на Петроградской",
    text: "Пришлось сместить из-за шоу, но какая же великолепная атмосфера Азии для первого дня святого Валентина вместе!",
    photos: [
        "images/photo_5231029335286813854_w.jpg",
        "images/photo_5231445925639688805_y.jpg",
        "images/photo_5231445925639688806_y.jpg"
    ]
  },
  {
    date: "8 марта 2026",
    title: "Праздник в апартах",
    place: "«Авенью-Апарт» на Академика Павлова",
    text: "Я уехал чутка пораньше с утра, чтобы все подготовить и вернуться с букетом, а ты встретила меня самым незабываемым образом",
    photos: [
        "images/photo_5291978516104680640_y.jpg",
        "images/photo_5291978516104680639_y.jpg",
        "images/photo_5291978516104680638_y.jpg",
        "images/photo_5291978516104680480_w.jpg"
    ]
  },
  {
    date: "4 Апреля 2026",
    title: "Первый поход на Стадион!",
    place: "«Газпром-Арена», г. Санкт-Петербург",
    text: "Познакомить тебя с футболом, запечатлить момент, посмотреть на тебя в слюнявчике - идеальный день",
    photos: [
        "images/photo_5370982253376247027_y.jpg",
        "images/photo_5370982253376247031_w.jpg",
        "images/photo_5370982253376247030_y.jpg",
        "images/photo_5370982253376247025_y.jpg"

    ]
  },
  {
    date: "Апрель 2026",
    title: "А еще за корюшкой!",
    place: "«Газпром-Арена», г. Санкт-Петербург",
    text: "Ну что же может быть лучше футбола? Правильно, футбол с корюшкой!!!",
    photos: [
        "images/photo_5438248704021304545_y.jpg",
        "images/photo_5438248704021304543_y.jpg",
        "images/photo_5438248704021304542_y.jpg",
        "images/photo_5438248704021304547_y.jpg"
    ]
  },
  {
    date: "Май 2026",
    title: "Дачный первомай",
    place: "СНТ «Нива», посёлок Чаща",
    text: "Электричка, шашлык, тепло, первое путешествие на дачу!",
    photos: [
        "images/photo_5456309741580654353_y.jpg",
        "images/photo_5456309741580654358_y.jpg",
        "images/photo_5456309741580654364_y.jpg",
        "images/photo_5456309741580654365_y.jpg",
        "images/photo_5456309741580654368_y.jpg"
    ]
  },
  {
    date: "6 Июля 2026",
    title: "Твой день",
    place: "«We and I Vertical» на Лесной",
    text: "Твой праздник, который теперь стал и моим раз и навсегда, любимая",
    photos: [
        "images/photo_5362082243620314034_y.jpg"
    ]
  },
  {
    date: "11 Июля 2026",
    title: "Наш выпускной",
    place: "Парк 300-летия, г. Санкт-Петербург",
    text: "Именно наш, потому что без твоей поддержки и помощи я бы ни за что на свете не смог завершить своё обучение",
    photos: [
        "images/photo_5375146868414815625_y.jpg",
        "images/photo_5375146868414815622_y.jpg"
    ]
  },
  {
    date: "Июль 2026",
    title: "А дальше... Отпуск!",
    place: "Москва, Пекин, Шэньчжэнь, Гонконг, Макао",
    text: "Первый раз вместе увидели Москву, Китай, Гонконг и Макао. Место, которое изменило нас и влюбило не только в себя, но и нас друг в друга с новой силой",
    photos: [
        "images/photo_5390918512311736957_y.jpg",
        "images/photo_5386850332173867386_y.jpg",
        "images/photo_5388923474232942015_y.jpg",
        "images/photo_5390918512311736962_y.jpg",
        "images/photo_5390918512311736987_y.jpg",
        "images/photo_5393170312125422313_y.jpg",
        "images/photo_5397929299098147518_y.jpg",
        "images/photo_5400287291978226595_y.jpg"
    ]
  },
  {
    date: "11 Августа 2026",
    title: "Самый ветренный бадминтон эвер",
    place: "Марсово поле",
    text: "Ветер, солнце, облачка, воланчик, две ракетки, КУДА ДЕЛАСЬ ЖВАЧКА???",
    photos: [
        "images/photo_5467402473875117908_y.jpg",
        "images/photo_5467402473875117909_y.jpg",
        "images/photo_5467402473875117911_y.jpg"
    ]
  },
  {
    date: "Сентябрь 2026",
    title: "Не все спектакли одинаково полезны...",
    place: "«ДК Ленсовета» на Петроградской",
    text: "Когда обсуждения после спектакля интереснее самого спектакля, и конечно же начало бургерно-пешеходной традиции!",
    photos: [
        "images/photo_5316519985003831232_w.jpg",
        "images/photo_5316519985003831229_w.jpg"
    ]
  },
  {
    date: "Октябрь 2026",
    title: "Знакомство с твоей мамой и футбол",
    place: "г. Санкт-Петербург",
    text: "Один из самых волнительных моментов моей жизни, но и один из самых запоминающихся моментов в ней",
    photos: [
        "images/photo_5382222449077853874_w.jpg",
        "images/photo_5382222449077853870_w.jpg",
        "images/photo_5382222449077853872_w.jpg"
    ]
  },
   {
    date: "9 Ноября 2026",
    title: "Сегодняшний день",
    place: "г. Санкт-Петербург",
    text: "Я люблю тебя, милая, и любить буду всегда. С нашим днём, принцесса!",
    photos: []
  },
];

/* ============================================================
   2. РЕНДЕР ТАЙМЛАЙНА
   ============================================================ */

const timelineEl = document.getElementById("timeline-list");

const FALLBACK_IMG =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f7e5de"/>
        <stop offset="1" stop-color="#efe4f0"/>
      </linearGradient></defs>
      <rect width="400" height="250" fill="url(#g)"/>
      <text x="200" y="140" text-anchor="middle" font-size="46">💛</text>
    </svg>`
  );

function buildGallery(photos, title) {
  const gallery = document.createElement("figure");
  gallery.className = "item__photo";

  const list = Array.isArray(photos) ? photos.filter(Boolean) : [];
  if (list.length === 0) {
    gallery.classList.add("is-empty");
    return gallery;
  }

  // трек со слайдами
  const track = document.createElement("div");
  track.className = "gallery__track";
  list.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${title} — фото ${i + 1}`;
    img.loading = "lazy";
    img.addEventListener("error", function onError() {
      img.removeEventListener("error", onError);
      img.src = FALLBACK_IMG;
    });
    track.appendChild(img);
  });
  gallery.appendChild(track);

  // для одного фото — простая галерея с плавным зумом
  if (list.length === 1) {
    gallery.classList.add("is-single");
    return gallery;
  }

  // несколько фото — добавляем управление
  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "gallery__btn gallery__btn--prev";
  prev.setAttribute("aria-label", "Предыдущее фото");
  prev.innerHTML = "‹";

  const next = document.createElement("button");
  next.type = "button";
  next.className = "gallery__btn gallery__btn--next";
  next.setAttribute("aria-label", "Следующее фото");
  next.innerHTML = "›";

  const dots = document.createElement("div");
  dots.className = "gallery__dots";
  const dotEls = list.map((_, i) => {
    const d = document.createElement("button");
    d.type = "button";
    d.className = "gallery__dot" + (i === 0 ? " is-active" : "");
    d.setAttribute("aria-label", `Фото ${i + 1}`);
    d.addEventListener("click", (e) => {
      e.stopPropagation();
      goTo(i);
    });
    dots.appendChild(d);
    return d;
  });

  const counter = document.createElement("span");
  counter.className = "gallery__counter";
  counter.textContent = `1 / ${list.length}`;

  gallery.appendChild(prev);
  gallery.appendChild(next);
  gallery.appendChild(dots);
  gallery.appendChild(counter);

  let current = 0;

  function goTo(index) {
    current = (index + list.length) % list.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotEls.forEach((d, i) => d.classList.toggle("is-active", i === current));
    counter.textContent = `${current + 1} / ${list.length}`;
  }

  prev.addEventListener("click", (e) => {
    e.stopPropagation();
    goTo(current - 1);
  });
  next.addEventListener("click", (e) => {
    e.stopPropagation();
    goTo(current + 1);
  });

  // клавиатура
  gallery.tabIndex = 0;
  gallery.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
  });

  // свайп на тач-устройствах
  let startX = 0, startY = 0, dragging = false, moved = false;
  gallery.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    dragging = true;
    moved = false;
  }, { passive: true });
  gallery.addEventListener("touchmove", (e) => {
    if (!dragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) moved = true;
  }, { passive: true });
  gallery.addEventListener("touchend", (e) => {
    if (!dragging) return;
    dragging = false;
    if (!moved) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) {
      dx < 0 ? goTo(current + 1) : goTo(current - 1);
    }
  });

  return gallery;
}

function buildItem(event, index) {
  const side = index % 2 === 0 ? "left" : "right";

  const item = document.createElement("article");
  item.className = `item item--${side}`;
  item.style.transitionDelay = `${Math.min(index, 5) * 70}ms`;

  const placeHtml = event.place
    ? `<p class="item__place">📍 ${event.place}</p>`
    : "";
  const textHtml = event.text
    ? `<p class="item__text">${event.text}</p>`
    : "";

  item.innerHTML = `
    <span class="item__dot" aria-hidden="true"></span>
    <div class="item__card">
      <div class="item__body">
        <span class="item__date">${event.date}</span>
        <h3 class="item__title">${event.title}</h3>
        ${placeHtml}
        ${textHtml}
      </div>
    </div>
  `;

  // Вставляем галерею перед телом карточки
  const card = item.querySelector(".item__card");
  const body = item.querySelector(".item__body");
  card.insertBefore(buildGallery(event.photos, event.title), body);

  return item;
}

function renderTimeline() {
  const fragment = document.createDocumentFragment();
  EVENTS.forEach((event, i) => fragment.appendChild(buildItem(event, i)));
  timelineEl.appendChild(fragment);
}

/* ============================================================
   3. ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ
   ============================================================ */

function observeItems() {
  const items = document.querySelectorAll(".item");

  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ============================================================
   4. СЧЁТЧИК ДНЕЙ
   ============================================================ */

function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

function renderCounter() {
  const el = document.getElementById("days-counter");
  if (!el) return;

  const start = new Date(START_DATE + "T00:00:00");
  const diffMs = Date.now() - start.getTime();
  const days = Math.max(0, Math.floor(diffMs / 86400000));

  el.textContent = `${days} ${plural(days, "день", "дня", "дней")} вместе`;
}

/* ============================================================
   5. СТАРТ
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const periodEl = document.getElementById("hero-period");
  if (periodEl) periodEl.textContent = PERIOD_LABEL;

  renderCounter();
  renderTimeline();
  observeItems();
});