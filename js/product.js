// svg
function updateFavicon() {
  const favicon = document.getElementById("favicon");
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (darkTheme) {
    favicon.href = "./image/header/logo-white.svg"; // для темної теми — біла іконка
  } else {
    favicon.href = "./image/header/logo-black.svg"; // для світлої теми — чорна іконка
  }
}

// Викликаємо одразу при завантаженні
updateFavicon();

// Слухаємо зміни теми в реальному часі
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicon);

// /* --- Header --- */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Обробка навігації (Головна, Про нас, Чому Skynetix, Контакти)
document.querySelectorAll('[data-section]').forEach(el => {
  // Перехоплюємо тільки ті, які НЕ ведуть на іншу сторінку
  const href = el.getAttribute('href');
  const isInternal = href === '#' || href === '' || href.startsWith('#');

  if (isInternal) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = el.getAttribute('data-section');
      scrollToSection(sectionId);
      closeMenus();
    });
  }
});

// Dropdown (десктоп)
const productsToggle = document.getElementById('productsToggle');
const productsDropdown = document.getElementById('productsDropdown');
let productsOpen = false;

productsToggle.addEventListener('click', () => {
  productsOpen = !productsOpen;
  productsDropdown.classList.toggle('open', productsOpen);
  productsToggle.classList.toggle('open', productsOpen);
});

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.getElementById('mobileMenu');
let mobileMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuOpen = !mobileMenuOpen;
  mobileMenu.classList.toggle('open', mobileMenuOpen);
  mobileMenuBtn.querySelector('i').className = mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line';
});

// Mobile dropdown
const mobileProductsToggle = document.getElementById('mobileProductsToggle');
const mobileProductsList = document.getElementById('mobileProductsList');
let mobileProductsOpen = false;

mobileProductsToggle.addEventListener('click', () => {
  mobileProductsOpen = !mobileProductsOpen;
  mobileProductsList.classList.toggle('open', mobileProductsOpen);
});

// Закриття всіх меню
function closeMenus() {
  if (productsOpen) {
    productsOpen = false;
    productsDropdown.classList.remove('open');
    productsToggle.classList.remove('open');
  }
  if (mobileMenuOpen) {
    mobileMenuOpen = false;
    mobileMenu.classList.remove('open');
    mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
  }
  if (mobileProductsOpen) {
    mobileProductsOpen = false;
    mobileProductsList.classList.remove('open');
  }
}

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});




// product 
const PRODUCTS = {
  multi: {
    title: "Багатоканальні та мобільні РЕБ",
    description: "Потужні мобільні системи радіоелектронної боротьби, встановлені на автомобілях для придушення широкого спектра сигналів.",
    heroImage: "./image/product/bg-product.webp", // загальна картинка на фоні
    items: [
      {
        title: "РЕБ Heavy",
        description: "Потужний мобільний комплекс для створення радіоелектронних завад. Працює автономно до 6 годин, підтримує до 5 діапазонів та охоплює велику кількість частот",
        image: "./image/product/reb/reb-reavy.webp",
        tag: "мобільний РЕБ",
        features: [
            "Радіус дії: до 3 км",
            "Підтримка 2.4GHz / 5.8GHz",
            "Автономна робота: до 6 год",
            "Кількість діапазонів: до 5",
            "Діапазони завад (МГц): 300–1200, 1500, 2400, 5200, 5800",
            "Живлення: 220В та/або 12–24В",
            "Вага: до 12 кг",
        ],
        technicalSpecs: [
          { name: "Радіус дії", value: "до 3 км" },
          { name: "Підтримувані частоти", value: "2.4GHz / 5.8GHz" },
          { name: "Автономність роботи", value: "до 6 год" },
          { name: "Кількість діапазонів", value: "до 5" },
          { name: "Діапазони завад (МГц)", value: "300–1200, 1500, 2400, 5200, 5800..." },
          { name: "Живлення", value: "220В та/або 12–24В" },
          { name: "Вага", value: "до 12 кг" },
        ],
        keyFeatures: [
          "Потужний мобільний комплекс",
          "Підтримка великої кількості частот",
          "Автономна робота до 6 годин",
          "Покриття до 3 км",
          "Можливість роботи у декількох діапазонах"
        ]
      },
      {
        title: "РЕБ Говерла",
        image: "./image/product/reb/reb-hoverla.webp",
        description: "Стаціонарний пристрій для створення радіоелектронних завад із розширеним охопленням частот. Працює в режимі імпульсної дії, має високу ефективність та охоплює зону до 500 м",
        tag: "стаціонарний РЕБ",
        features: [
            "Режим імпульсної дії",
            "Зона покриття: 500 м",
            "Кількість діапазонів: від 8",
            "Діапазони завад (МГц): 300–1200, 1500, 2400, 5200, 5800",
            "Живлення: 220В",
            "Вага: до 25 кг",
        ],
        technicalSpecs: [
          { name: "Режим роботи", value: "імпульсний" },
          { name: "Зона покриття", value: "500 м" },
          { name: "Кількість діапазонів", value: "від 8" },
          { name: "Діапазони завад (МГц)", value: "300–1200, 1500, 2400, 5200, 5800..." },
          { name: "Живлення", value: "220В" },
          { name: "Вага", value: "до 25 кг" },
        ],
        keyFeatures: [
          "Режим імпульсної дії",
          "Велика кількість діапазонів — від 8",
          "Зона покриття до 500 м",
          "Висока ефективність створення завад"
        ]
      },
      {
        title: "РЕБ Говерла 十十",
        image: "./image/product/reb/reb-hoverla2plus.webp",
        description: "Покращена версія системи РЕБ з розширеною кількістю діапазонів та ефективним покриттям до 500 м. Працює в режимі імпульсної дії, живлення від 220В",
        tag: "стаціонарний РЕБ",
        features: [
            "Режим імпульсної дії",
            "Зона покриття: 500 м",
            "Кількість діапазонів: від 10",
            "Діапазони завад (МГц): 300–1200, 1500, 2400, 5200, 5800...",
            "Живлення: 220В",
            "Вага: до 25 кг",
        ],
        technicalSpecs: [
          { name: "Режим роботи", value: "імпульсний" },
          { name: "Зона покриття", value: "500 м" },
          { name: "Кількість діапазонів", value: "від 10" },
          { name: "Діапазони завад (МГц)", value: "300–1200, 1500, 2400, 5200, 5800..." },
          { name: "Живлення", value: "220В" },
          { name: "Вага", value: "до 25 кг" },
        ],
        keyFeatures: [
          "Режим імпульсної дії",
          "Розширена кількість діапазонів — від 10",
          "Зона покриття до 500 м",
          "Покращена ефективність створення завад"
        ]
      },
      {
        title: "РЕБ Light v 2",
        image: "./image/product/reb/reb-lightV2.webp",
        description: "Удосконалена версія мобільної РЕБ-системи з можливістю подавлення до двох діапазонів. Підходить для швидкого розгортання в польових умовах",
        tag: "мобільний РЕБ",
        features: [
            "Режим імпульсної дії",
            "Зона покриття: 500 м",
            "Кількість діапазонів: до 2",
            "Діапазони завад (МГц): 300–1200, 1500, 2400, 5200, 5800...",
            "Живлення: 12–24В",
            "Вага: до 6 кг",
        ],
        technicalSpecs: [
          { name: "Режим роботи", value: "імпульсний" },
          { name: "Зона покриття", value: "500 м" },
          { name: "Кількість діапазонів", value: "до 2" },
          { name: "Діапазони завад (МГц)", value: "300–1200, 1500, 2400, 5200, 5800..." },
          { name: "Живлення", value: "12–24В" },
          { name: "Вага", value: "до 6 кг" },
        ],
        keyFeatures: [
          "Швидке розгортання в польових умовах",
          "Компактна та легка система",
          "Ефективне придушення до двох діапазонів"
        ]
      },
    ],
  },

  mobile: {
    title: "Персональні РЕБ",
    description: "Компактні переносні рішення для глушіння звʼязку, призначені для індивідуального використання на полі бою.",
    heroImage: "./image/product/bg-product.webp",
    items: [
      {
        title: "Skynetix 2 + АКБ",
        description: "Удосконалений модуль керування з інтеграцією Starlink, потужними радіомодулями в двох діапазонах і автономною роботою до 2 годин",
        image: "./image/product/skynetix2/skynetix-8.webp",
        tag: "платформа",
        downloadButtonText: "Переглянути додаткову інформацію",
        downloadFile: "./image/product/file/Посібник_з_експлуатації_засобу_РЕБ_SkyNetix.pdf",
        features: [
          "Новий процесор обробки польотів",
            "Розʼєм для модулів РЕБ",
            "Інтеграція зі Starlink",
            "",
            "Технічні характеристики комплекту Skynetix 2:",
            "Модуль випромінення:",
            "• Діапазон 1: 2400-2500 МГц, потужність 50 Вт",
            "• Діапазон 2: 5725-5850 МГц, потужність 30 Вт",
            "• Тип антени: спрямовані, КП ~ 10 dBi",
            "• Ефективна дальність: до 350 м",
            "• Охолодження: пасивне з захистом від перегріву та звуковою сигналізацією",
            "• Габарити (В×Ш×Т): 220×210×150 мм, вага 2,2 кг",
            "",
            "Модуль АКБ:",
            "• Акумулятор: 7s4p (21700) 560 Вт (29.4 В / 19 А)",
            "• Зарядний пристрій: 29.4 В / 5 А",
            "• Вологозахищений корпус",
            "• Час роботи: до 120 хв",
            "• Габарити (В×Ш×Т): 250×210×95 мм, вага 3 кг"
        ],
        technicalSpecs: [
          { name: "Діапазон 1 випромінення", value: "2400-2500 МГц, потужність 50 Вт" },
          { name: "Діапазон 2 випромінення", value: "5725-5850 МГц, потужність 30 Вт" },
          { name: "Тип антени", value: "спрямовані, КП ~ 10 dBi" },
          { name: "Ефективна дальність", value: "до 350 м" },
          { name: "Охолодження", value: "пасивне з захистом від перегріву та звуковою сигналізацією" },
          { name: "Габарити модуля випромінення (В×Ш×Т)", value: "220×210×150 мм" },
          { name: "Вага модуля випромінення", value: "2,2 кг" },
          { name: "Акумулятор", value: "7s4p (21700) 560 Вт (29.4 В / 19 А)" },
          { name: "Зарядний пристрій", value: "29.4 В / 5 А" },
          { name: "Корпус", value: "вологозахищений" },
          { name: "Час роботи", value: "до 120 хв" },
          { name: "Габарити модуля АКБ (В×Ш×Т)", value: "250×210×95 мм" },
          { name: "Вага модуля АКБ", value: "3 кг" }
        ],

        keyFeatures: [
          "Удосконалений модуль керування з інтеграцією Starlink",
          "Потужні радіомодулі в двох діапазонах",
          "Автономна робота до 2 годин",
          "Інтеграція з сучасними системами РЕБ",
          "Покращена ефективність охолодження",
          "Міцний та водозахищений корпус АКБ",
          "Компактні габарити для легкого транспортування",
          "Висока дальність зв’язку та надійність"
        ]
      },
      {
        title: "РЕБ Light v 1",
        image: "./image/product/reb/reb-lightV1.webp",
        description: "Компактна РЕБ-система для придушення до трьох діапазонів. Легка вага та живлення від 12–24В роблять її зручною для мобільного застосування",
        tag: "мобільний РЕБ",
        features: [
            "Режим імпульсної дії",
            "Зона покриття: 500 м",
            "Кількість діапазонів: до 3",
            "Діапазони завад (МГц): 300–1200, 1500, 2400, 5200, 5800...",
            "Живлення: 12–24В",
            "Вага: до 6 кг",
        ],
        technicalSpecs: [
          { name: "Режим роботи", value: "імпульсний" },
          { name: "Зона покриття", value: "500 м" },
          { name: "Кількість діапазонів", value: "до 3" },
          { name: "Діапазони завад (МГц)", value: "300–1200, 1500, 2400, 5200, 5800..." },
          { name: "Живлення", value: "12–24В" },
          { name: "Вага", value: "до 6 кг" },
        ],
        keyFeatures: [
          "Компактна та легка система",
          "Підходить для мобільного застосування",
          "Покращена керованість і швидке розгортання"
        ]
      },
    ],
  },

  control: {
    title: "ППРЧ та детектування",
    description: "Технології перестрибуючої частоти для надійного управління звʼязком та протидії ворожому глушінню.",
    heroImage: "./image/product/bg-product.webp",
    items: [
      {
        title: "Завадостійка система зв'язку для БПЛА",
        description: "Система: пост управління + блок керування. Варіанти: 1 діапазон (390-615 МГц) — 9.6 тис. грн; 2 діапазони (390-560 МГц, 2.2-2.5 ГГц) — 14.2 тис. грн. Додаткові блоки — 2.6 тис. грн",
        image: "./image/product/uav/uav2.webp",
        tag: "зв’язок",
        features: [
            "Матеріал корпусу: карбон",
            "Шум: < 25 дБ",
            "ІЧ-невидимість",
            "Дальність: до 50 км",
            "Частоти: 390-480 MHz, 510-615 MHz, 2200 - 2500 MHz + адаптивне ППРЧ",
            "Bitrate: до 150 Kbit/s",
            "Потужність передавача: до 500mW",
            "Модуляція: FSK/LoRa",
            "Шифрування: AES-128/256",
            "Інтерфейси: 2х UART",
            "Протоколи: CRSF, SBUS",
            "Ключові характеристики:",
            "● Нативна підтримка протоколів SBUS",
            "● Постійний аналіз ефіру та робота на вільних частотах.",
            "● AES-128/256 шифрування.",
            "● Динамічна зміна ключа.",
            "● ППРЧ шириною смуги від 50 MHz.",
            "● Дальність дії до 50 км.",
            "● Максимальна потужність передавача на модулі 500mW."
        ],
        technicalSpecs: [
          { name: "Дальність", value: "до 50 км" },
          { name: "Частоти", value: "390-480 MHz, 510-615 MHz, 2200 - 2500 MHz" },
          { name: "Потужність передавача", value: "до 500 mW" },
          { name: "Модуляція", value: "FSK/LoRa" },
          { name: "Шифрування", value: "AES-128/256" },
          { name: "Інтерфейси", value: "2х UART" },
          { name: "Протоколи", value: "CRSF, SBUS" },
        ],
        keyFeatures: [
          "Нативна підтримка протоколів SBUS",
          "Постійний аналіз ефіру та робота на вільних частотах",
          "AES-128/256 шифрування",
          "Динамічна зміна ключа",
          "ППРЧ шириною смуги від 50 MHz",
          "Дальність дії до 50 км",
          "Максимальна потужність передавача на модулі 500 mW"
        ],
        downloadButtonText: "Переглянути додаткові зображення",
        downloadFile: "./image/product/file/Додаткові-зображення-завадостійкої-системи-звʼязку-для-БПЛА.docx",
      },
      {
        title: "Детектор БПЛА",
        description: "Сучасний пристрій для надійного виявлення безпілотників на великій відстані з високою точністю та стабільною роботою у складних умовах",
        image: "./image/product/uav/detector-uav.webp",
        tag: "контррозвідка",
        features: [
            "Матеріал корпусу: карбон",
            "Шум: < 25 дБ",
            "ІЧ-невидимість",
            "Дистанція виявлення: до 10 км",
            "Частоти: 865-885 MHz, 895-928 MHz, 970-1020 MHz, 2,4-2,5 GHz",
            "Час автономної роботи: 20 годин",
            "Живлення: 3.7 В"
        ],
        technicalSpecs: [
          { name: "Дистанція виявлення", value: "до 10 км" },
          { name: "Час автономної роботи", value: "20 годин" },
          { name: "Живлення", value: "3.7 В" },
          { name: "Частоти", value: "865-885 MHz, 895-928 MHz, 970-1020 MHz, 2,4-2,5 GHz" },
        ],
        keyFeatures: [
          "Висока точність виявлення",
          "Стабільна робота в складних умовах",
          "Компактний та міцний корпус з карбону",
          "ІЧ-невидимість",
          "Низький рівень шуму (< 25 дБ)"
        ],
      },
    ],
  },
};

function setPageTitle(title) {
  const titleElement = document.querySelector('head title');
  if (titleElement) {
    titleElement.textContent = title;
  }
}
// отримати параметр з URL
function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function createHero(title, desc, bg) {
  return `
    <section class="hero" style="background-image: url('${bg}')">
      <div class="overlay"></div>
      <div class="hero-content">
        <h1>${title}</h1>
        <div class="underline"></div>
        <p>${desc}</p>
      </div>
    </section>
  `;
}

function createProductGrid(items) {
  return `
    <section class="drone-grid">
      ${items
        .map(
          (item, index) => `
        <div class="drone-card">
          <div class="image-wrapper">
            <span class="product-tag">${item.tag || ''}</span>
            <img src="${Array.isArray(item.images) ? item.images[0] : item.image}" alt="${item.title}" />
          </div>
          <h3>${item.title}</h3>
          <p>${item.description || ''}</p>
          <a class="price-inquiry-link" href="./index.html#contact">Звʼяжіться з нами для уточнення цін</a>
          <button onclick="showDetails(${index})">Детальніше</button>
        </div>
      `
        )
        .join("")}
    </section>
  `;
}

function createDetailsBlock(product, index) {
  const item = product.items[index];
  const imageSrc = Array.isArray(item.images) ? item.images[0] : item.image;
  const downloadButtonHTML = item.downloadFile
  ? `<a href="${item.downloadFile}" download class="download-button" aria-label="Завантажити файл">
      ${item.downloadButtonText || 'Завантажити PDF'}
    </a>`
  : '';
  const priceRequestButtonHTML = `
  <a href="./index.html#contact" class="request-price-button" aria-label="Запит цінової пропозиції">
    Запит цінової пропозиції
  </a>`;
  const technicalSpecsHTML = item.technicalSpecs
    ? `<h3 class="section-title">Технічні характеристики</h3>
       <div class="technical-specs">
         ${item.technicalSpecs
           .map(spec => `
             <div class="spec-item">
               <span class="spec-name">${spec.name}</span>
               <span class="spec-value">${spec.value}</span>
             </div>`)
           .join('')}
       </div>`
    : '';

  const keyFeaturesHTML = item.keyFeatures
    ? `<h3 class="section-title">Ключові особливості</h3>
       <ul class="key-features">
         ${item.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
       </ul>`
    : '';
  
  return `
    <section class="drone-details">
      <div class="drone-details-inner">
        <img src="${imageSrc}" alt="${item.title}" />
        <div>
          <h2>${item.title}</h2>
          <p>${item.description || ''}</p>
          ${technicalSpecsHTML}
          ${keyFeaturesHTML}
          <div class="button-row">
            ${downloadButtonHTML}
            ${priceRequestButtonHTML}
          </div>
          <button class="close-button" onclick="closeDetails()" aria-label="Закрити">&times;</button>
        </div>
      </div>
    </section>
  `;
}

// головна функція
function renderPage() {
  const productKey = getQueryParam("product");
  const product = PRODUCTS[productKey];

  if (!product) {
    document.getElementById("app").innerHTML = "<h2 style='padding: 20px'>Product not found</h2>";
    setPageTitle("Продукт не знайдено");
    return;
  }

  setPageTitle(product.title); 

  const content = `
    ${createHero(product.title, product.description, product.heroImage)}
    ${createProductGrid(product.items)}
    <div id="details-container"></div>
  `;

  document.getElementById("app").innerHTML = content;
}

function setupAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.drone-card, .drone-details').forEach(el => {
    observer.observe(el);
  });
}

// Запускаємо після рендеру сторінки і після відкриття деталей
document.addEventListener('DOMContentLoaded', () => {
  setupAnimations();
});
function showDetails(index) {
  const productKey = getQueryParam("product");
  const product = PRODUCTS[productKey];

  if (!product) {
    console.error("Product not found:", productKey);
    alert("Вибраний продукт не знайдено.");
    return;
  }

  const modalHTML = createDetailsBlock(product, index);

  const existingModal = document.querySelector(".drone-details");
  if (existingModal) existingModal.remove();

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  const modal = document.querySelector(".drone-details");
  if (!modal) {
    console.error("Не вдалося створити модальне вікно");
    return;
  }
  document.body.classList.add("modal-open");

  requestAnimationFrame(() => {
    modal.classList.add("visible");
  });
}

function closeDetails() {
  const modal = document.querySelector(".drone-details");
  if (!modal) return;

  modal.classList.remove("visible");
  document.body.classList.remove("modal-open");

  setTimeout(() => {
    modal.remove();
  }, 600);
}
window.showDetails = showDetails;
window.closeDetails = closeDetails;


renderPage();




