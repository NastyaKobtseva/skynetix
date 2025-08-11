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

updateFavicon();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", updateFavicon);

// /* --- Header --- */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

// Обробка навігації (Головна, Про нас, Чому Skynetix, Контакти)
document.querySelectorAll("[data-section]").forEach((el) => {
  // Перехоплюємо тільки ті, які НЕ ведуть на іншу сторінку
  const href = el.getAttribute("href");
  const isInternal = href === "#" || href === "" || href.startsWith("#");

  if (isInternal) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = el.getAttribute("data-section");
      scrollToSection(sectionId);
      closeMenus();
    });
  }
});

// Dropdown (десктоп)
const productsToggle = document.getElementById("productsToggle");
const productsDropdown = document.getElementById("productsDropdown");
let productsOpen = false;

productsToggle.addEventListener("click", () => {
  productsOpen = !productsOpen;
  productsDropdown.classList.toggle("open", productsOpen);
  productsToggle.classList.toggle("open", productsOpen);
});

// Mobile menu
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.getElementById("mobileMenu");
let mobileMenuOpen = false;

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuOpen = !mobileMenuOpen;
  mobileMenu.classList.toggle("open", mobileMenuOpen);
  mobileMenuBtn.querySelector("i").className = mobileMenuOpen
    ? "ri-close-line"
    : "ri-menu-line";
});

// Mobile dropdown
const mobileProductsToggle = document.getElementById("mobileProductsToggle");
const mobileProductsList = document.getElementById("mobileProductsList");
let mobileProductsOpen = false;

mobileProductsToggle.addEventListener("click", () => {
  mobileProductsOpen = !mobileProductsOpen;
  mobileProductsList.classList.toggle("open", mobileProductsOpen);
});

// Закриття всіх меню
function closeMenus() {
  if (productsOpen) {
    productsOpen = false;
    productsDropdown.classList.remove("open");
    productsToggle.classList.remove("open");
  }
  if (mobileMenuOpen) {
    mobileMenuOpen = false;
    mobileMenu.classList.remove("open");
    mobileMenuBtn.querySelector("i").className = "ri-menu-line";
  }
  if (mobileProductsOpen) {
    mobileProductsOpen = false;
    mobileProductsList.classList.remove("open");
  }
}

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* hero */
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const highlights = document.querySelectorAll("#hero .highlight");

  const slides = [
    { bg: "image/hero/bg-hero.webp", activeKeywords: [] },
    { bg: "image/hero/mobile-and-personal-bg2.webp", activeKeywords: ["mobile"] },
    { bg: "image/hero/multichannel-and-automotive-bg.webp", activeKeywords: ["multi"] },
    { bg: "image/hero/pprch-for-control-bg.webp", activeKeywords: ["ppch"] },
  ];

  let currentSlide = 0;
  const slideInterval = 2000;
  let slideTimer;

  // Підвантажуємо всі зображення
  function preloadImages(slides) {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.bg;
    });
  }

  function showSlide(index) {
    const slide = slides[index];
    const img = new Image();
    img.src = slide.bg;
    img.onload = () => {
      hero.style.backgroundImage = `url(${slide.bg})`;

      highlights.forEach(el => {
        const keyword = el.getAttribute("data-keyword");
        if (slide.activeKeywords.includes(keyword)) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    };
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Старт
  preloadImages(slides);

  // Спершу показуємо перший слайд після завантаження першого зображення
  const firstImage = new Image();
  firstImage.src = slides[0].bg;
  firstImage.onload = () => {
    showSlide(currentSlide);
    // Запускаємо автоматичне переключення слайдів
    slideTimer = setInterval(nextSlide, slideInterval);
  };

  // Анімація появи контенту
  const content = document.getElementById("heroContent");
  setTimeout(() => content.classList.add("visible"), 100);

  // Обробники кнопок
  document.getElementById("orderBtn").addEventListener("click", () =>
    scrollToSection("contact")
  );
  document.getElementById("learnBtn").addEventListener("click", () =>
    scrollToSection("about")
  );
  document.getElementById("scrollBtn").addEventListener("click", () =>
    scrollToSection("about")
  );
});
/* about */

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("aboutHeader");
  const aboutImage = document.getElementById("aboutImage");
  const aboutText = document.getElementById("aboutText");

  const observerOptions = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.add("visible");
        aboutImage.classList.add("visible");
        aboutText.classList.add("visible");

        // Відключаємо спостереження після першого появи
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(document.getElementById("about"));
});

/* products */
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: "multi-channel-vehicle-reb",
      title: "Авто / Багатоканальний РЕБ",
      description:
        "Потужні мобільні системи радіоелектронної боротьби, встановлені на автомобілях для придушення широкого спектра сигналів.",
      image: "./image/our-products/multichannel-and-automotive-ew.webp",
      link: "./product.html?product=multi",
      icon: "ri-truck-line",
    },
    {
      id: "mobile-personal-reb",
      title: "Мобільні / персональні РЕБ",
      description:
        "Компактні переносні рішення для глушіння звʼязку, призначені для індивідуального використання на полі бою.",
      image: "./image/our-products/mobile-and-personal-ew.webp",
      link: "./product.html?product=mobile",
      icon: "ri-user-settings-line",
    },
    {
      id: "frequency-hopping-control",
      title: "ППРЧ для керування",
      description:
        "Технології перестрибуючої частоти для надійного управління звʼязком та протидії ворожому глушінню.",
      image: "./image/our-products/pprch-for-control.webp",
      link: "./product.html?product=control",
      icon: "ri-wifi-line",
    },
  ];
  
  const productsGrid = document.getElementById("productsGrid");

  // Додаємо продуктові карточки
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    // Додаємо затримку появи по індексу
    card.style.transitionDelay = `${index * 0.2 + 0.3}s`;

    card.innerHTML = `
        <div class="product-image-wrapper" style="height: 20rem;">
          <img src="${product.image}" alt="${product.title}" />
          <div class="product-image-overlay"></div>
          <div class="product-overlay">
            <i class="${product.icon}"></i>
            <p>${product.description}</p>
            <a href="${product.link}">Деталі</a>
          </div>
        </div>
        <div class="product-content">
            <h3><i class="${product.icon}"></i>${product.title}</h3>
            <p>Професійні рішення у сфері оборонних технологій</p>
            <a class="learn-more" href="${product.link}">
                <span>Дізнатися більше</span>
                <i class="ri-arrow-right-line"></i>
            </a>
        </div>
      `;

    productsGrid.appendChild(card);
  });

  // Intersection Observer для появи секції
  const header = document.getElementById("productsHeader");
  const footer = document.getElementById("productsFooter");
  const cards = document.querySelectorAll(".product-card");

  const observerOptions = { threshold: 0.3 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.add("visible");
        footer.classList.add("visible");
        cards.forEach((card) => card.classList.add("visible"));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(document.getElementById("products"));
});

//   why
document.addEventListener("DOMContentLoaded", () => {
  const features = [
    {
      icon: "ri-lightbulb-line",
      title: "Інновації",
      subtitle: "Провідні дослідження та власні технології",
      description:
        "Наша команда досліджень і розробок постійно розширює межі можливого в оборонних технологіях. Ми інвестуємо у власні розробки, які забезпечують нашим клієнтам тактичну перевагу.",
      color: "text-blue",
      bgColor: "bg-blue",
      borderColor: "border-blue",
    },
    {
      icon: "ri-shield-check-line",
      title: "Надійність",
      subtitle: "Рішення, перевірені в польових умовах",
      description:
        "Кожен продукт Skynetix проходить жорстке тестування в реальних умовах. Наші рішення довели свою ефективність у найвибагливіших операційних середовищах.",
      color: "text-green",
      bgColor: "bg-green",
      borderColor: "border-green",
    },
    {
      icon: "ri-globe-line",
      title: "Цивільне та військове застосування",
      subtitle: "Універсальне використання для обох сфер",
      description:
        "Наші технології однаково ефективні у цивільних та військових сферах: від рятувальних операцій до тактичного застосування в обороні.",
      color: "text-purple",
      bgColor: "bg-purple",
      borderColor: "border-purple",
    },
  ];

  const grid = document.querySelector(".feature-grid");

  features.forEach((f, i) => {
    const div = document.createElement("div");
    div.className = `feature-card ${f.borderColor}`;
    div.innerHTML = `
      <div class="icon-box ${f.bgColor}">
        <i class="${f.icon} ${f.color} text-3xl"></i>
      </div>
      <h3>${f.title}</h3>
      <p class="subtitle" style="color: ${
        f.borderColor === "border-blue"
          ? "#3b82f6"
          : f.borderColor === "border-green"
          ? "#22c55e"
          : "#a855f7"
      }">${f.subtitle}</p>
      <p>${f.description}</p>
      <div class="track">Доведена ефективність</div>
    `;
    div.style.transitionDelay = `${i * 200 + 300}ms`;
    grid.appendChild(div);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".section-header, .feature-card").forEach((el) => {
    observer.observe(el);
  });
});


// contact
document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("category");
  const subcategoryContainer = document.getElementById("subcategory-container");
  const subcategorySelect = document.getElementById("subcategory");

  const subcategoryOptions = {
    "Авто / Багатоканальний РЕБ": [
      { value: "Завадостійка система зв'язку для БПЛА", label: "Завадостійка система зв'язку для БПЛА" },
      { value: "Детектор БПЛА", label: "Детектор БПЛА" },
    ],
    "Мобільні та персональні РЕБ": [
      { value: "РЕБ Heavy", label: "РЕБ Heavy" },
      { value: "РЕБ Говерла", label: "РЕБ Говерла" },
      { value: "РЕБ Говерла 十十", label: "РЕБ Говерла 十十" },
      { value: "РЕБ Light v 2", label: "РЕБ Light v 2" },
    ],
    "ППРЧ для керування": [
      { value: "Skynetix 2 + АКБ", label: "Skynetix 2 + АКБ" },
      { value: "РЕБ Light v 1", label: "РЕБ Light v 1" },
    ],
  };

  categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;

  if (subcategoryOptions[selected]) {
    subcategorySelect.innerHTML = '<option value="" disabled selected hidden>Оберіть продукт</option>';
    subcategoryOptions[selected].forEach(({ value, label }) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      subcategorySelect.appendChild(option);
    });
    subcategoryContainer.style.display = "block";
    subcategorySelect.required = true;
  } else {
    subcategoryContainer.style.display = "none";
    subcategorySelect.innerHTML = "";
    subcategorySelect.required = false;
  }

  validateForm();
});

subcategorySelect.addEventListener("change", () => {
  validateForm();
});
});

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const charCount = document.getElementById("charCount");
const formMessage = document.getElementById("formMessage");

const phoneInput = document.getElementById("phone");
const prefix = "+380 ";

const errorPhone = document.getElementById("error-phone");
const errorEmail = document.getElementById("error-email");
const errorComment = document.getElementById("error-comment");

// Початкове значення поля з префіксом
phoneInput.value = prefix;

// Форматування номера під час вводу
phoneInput.addEventListener("input", () => {
  let raw = phoneInput.value;

  if (!raw.startsWith(prefix)) {
    phoneInput.value = prefix;
    return;
  }

  const rest = raw.slice(prefix.length).replace(/[^\d]/g, "");
  let formatted = "";

  if (rest.length > 0) formatted += rest.slice(0, 2);
  if (rest.length >= 3) formatted += " " + rest.slice(2, 5);
  if (rest.length >= 6) formatted += " " + rest.slice(5, 9);

  phoneInput.value = prefix + formatted;

  if (validatePhone(phoneInput.value.trim())) {
    setError(errorPhone, "", false);
  }
  validateForm();
});

phoneInput.addEventListener("keydown", (e) => {
  if (
    phoneInput.selectionStart <= prefix.length &&
    (e.key === "Backspace" || e.key === "Delete")
  ) {
    e.preventDefault();
  }
});

phoneInput.addEventListener("focus", () => {
  setTimeout(() => {
    if (phoneInput.selectionStart < prefix.length) {
      phoneInput.setSelectionRange(
        phoneInput.value.length,
        phoneInput.value.length
      );
    }
  }, 0);
});
phoneInput.addEventListener("click", () => {
  if (phoneInput.selectionStart < prefix.length) {
    phoneInput.setSelectionRange(
      phoneInput.value.length,
      phoneInput.value.length
    );
  }
});

// Валідаційні функції
function validatePhone(value) {
  const phoneRegex = /^\+380\s\d{2}\s\d{3}\s\d{4}$/;
  return phoneRegex.test(value);
}

function validateEmail(value) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

function validateCommentLength(value) {
  return value.length <= 500;
}

function setError(element, message, show) {
  if (show) {
    element.textContent = message;
    element.classList.add("active");
  } else {
    element.textContent = "";
    element.classList.remove("active");
  }
}

// Оновлена функція валідації форми, з перевіркою category і subcategory
function validateForm() {
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const comment = form.comment.value;
  const category = form.category.value;
  const subcategory = form.subcategory ? form.subcategory.value : "";

  const phoneValid = validatePhone(phone);
  const emailValid = validateEmail(email);
  const commentValid = validateCommentLength(comment);
  const nameValid = name !== "";
  const categoryValid = category !== "";
  const subcategoryValid = !form.subcategory.required || (form.subcategory.required && subcategory !== "");

  const isFormValid = nameValid && phoneValid && emailValid && commentValid && categoryValid && subcategoryValid;

  submitBtn.disabled = !isFormValid;

  if (isFormValid) {
    formMessage.textContent = "";
    formMessage.classList.remove("error");
  }
}

// Обробка blur для телефону
phoneInput.addEventListener("blur", () => {
  const val = phoneInput.value.trim();
  if (val.length > prefix.length) {
    const valid = validatePhone(val);
    setError(errorPhone, "Некоректний номер", !valid);
  } else {
    setError(errorPhone, "", false);
  }
  validateForm();
});

phoneInput.addEventListener("input", () => {
  const val = phoneInput.value.trim();
  if (validatePhone(val)) {
    setError(errorPhone, "", false);
  }
});

form.email.addEventListener("blur", () => {
  const val = form.email.value.trim();
  if (val.length > 0) {
    const valid = validateEmail(val);
    setError(errorEmail, "Некоректний email", !valid);
  } else {
    setError(errorEmail, "", false);
  }
  validateForm();
});

form.email.addEventListener("input", () => {
  const val = form.email.value.trim();
  if (validateEmail(val)) {
    setError(errorEmail, "", false);
  }
});

form.comment.addEventListener("input", (e) => {
  const val = e.target.value;
  charCount.textContent = `${val.length}/500 символів`;
  validateForm();
});

form.name.addEventListener("input", validateForm);

// Обробка відправки форми з перевіркою category та subcategory
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  phoneInput.dispatchEvent(new Event("blur"));
  form.email.dispatchEvent(new Event("blur"));

  const category = form.category.value;
  const subcategory = form.subcategory ? form.subcategory.value : "";

  if (
    submitBtn.disabled ||
    category === "" ||
    (form.subcategory.required && subcategory === "")
  ) {
    formMessage.textContent = "Будь ласка, заповніть усі обов’язкові поля.";
    formMessage.classList.add("error");
    return;
  }

  submitBtn.disabled = true;
  formMessage.textContent = "Надсилаємо...";
  formMessage.classList.remove("error");

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    category: category,
    subcategory: subcategory,
    comment: form.comment.value,
  };

  try {
    const res = await fetch("https://formspree.io/f/mqallyab", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      formMessage.textContent = "Повідомлення надіслано успішно!";
      formMessage.classList.remove("error");

      form.name.value = "";
      phoneInput.value = prefix;
      form.email.value = "";
      form.comment.value = "";
      charCount.textContent = "0/500 символів";

      setError(errorPhone, "", false);
      setError(errorEmail, "", false);
      setError(errorComment, "", false);

      // Приховуємо підкатегорію, якщо вона була показана
      const subcategoryContainer = document.getElementById("subcategory-container");
      const subcategorySelect = document.getElementById("subcategory");
      subcategoryContainer.style.display = "none";
      subcategorySelect.innerHTML = "";
      subcategorySelect.required = false;

      validateForm();
    } else {
      const text = await res.text();
      console.error("Помилка відповіді:", text);
      formMessage.textContent = "Не вдалося надіслати повідомлення. Спробуйте пізніше.";
      formMessage.classList.add("error");
    }
  } catch (err) {
    console.error("Помилка запиту:", err);
    formMessage.textContent = "Сталася помилка. Спробуйте ще раз пізніше.";
    formMessage.classList.add("error");
  } finally {
    submitBtn.disabled = false;
  }
});