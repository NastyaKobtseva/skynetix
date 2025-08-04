// svg
function updateFavicon() {
  const favicon = document.getElementById("favicon");
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (darkTheme) {
    favicon.href = "./image/header/logo-skynetix-white.svg"; // для темної теми — біла іконка
  } else {
    favicon.href = "./image/header/logo-skynetix.svg"; // для світлої теми — чорна іконка
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
  const content = document.getElementById("heroContent");
  const gridOverlay = document.querySelector("#hero .grid-overlay");
  const drone = document.querySelector("#hero .drone");

  // Показуємо контент з анімацією
  setTimeout(() => {
    content.classList.add("visible");
  }, 100);

  // Кнопки скролу
  document
    .getElementById("orderBtn")
    .addEventListener("click", () => scrollToSection("contact"));
  document
    .getElementById("learnBtn")
    .addEventListener("click", () => scrollToSection("about"));
  document
    .getElementById("scrollBtn")
    .addEventListener("click", () => scrollToSection("about"));
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
      id: "drones",
      title: "Сучасні дрони",
      description:
        "Передові безпілотні літальні апарати для розвідки, спостереження та тактичних операцій.",
      image: "./image/our-products/drone.webp",
      link: "./product.html?product=drones",
      icon: "ri-flight-takeoff-line",
    },
    {
      id: "reb-systems",
      title: "Системи РЕБ",
      description:
        "Рішення для радіоелектронної боротьби: глушіння сигналів, електронна протидія та порушення звʼязку.",
      image: "./image/our-products/reb.webp",
      link: "./product.html?product=reb",
      icon: "ri-radar-line",
    },
    {
      id: "skynetix-battery",
      title: "Skynetix 2 + АКБ",
      description:
        "Високопродуктивні енергосистеми та передові акумулятори для тривалої роботи.",
      image: "./image/our-products/skynetix2.webp",
      link: "./product.html?product=skynetix2",
      icon: "ri-battery-charge-line",
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
        <div class="product-image-wrapper">
          <img src="${product.image}" alt="${product.title}" />
          <div class="product-image-overlay"></div>
          <div class="product-overlay">
            <i class="${product.icon}"></i>
            <p>${product.description}</p>
            <a href="${product.link}">Подивитися "${product.title}"</a>
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
      stats: "50+ патентів",
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
      stats: "99.8% безвідмовності",
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
      stats: "40+ країн",
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
      <div class="stats-wrapper">
        <div class="stats" style="color: ${
          f.borderColor === "border-blue"
            ? "#3b82f6"
            : f.borderColor === "border-green"
            ? "#22c55e"
            : "#a855f7"
        }">${f.stats}</div>
        <div class="track">Доведена ефективність</div>
      </div>
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
phoneInput.addEventListener("input", (e) => {
  const raw = phoneInput.value;

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

  // Якщо зараз валідно — сховати помилку
  if (validatePhone(phoneInput.value.trim())) {
    setError(errorPhone, "", false);
  }

  validateForm();
});

// Забороняємо стерти префікс
phoneInput.addEventListener("keydown", (e) => {
  if (
    phoneInput.selectionStart <= prefix.length &&
    (e.key === "Backspace" || e.key === "Delete")
  ) {
    e.preventDefault();
  }
});

// Забороняємо ставити курсор всередині префіксу
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

// Валідація форми для контролю кнопки (без показу помилок телефону та емейлу тут)
function validateForm() {
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const comment = form.comment.value;

  const phoneValid = validatePhone(phone);
  const emailValid = validateEmail(email);
  // Прибрали перевірку довжини коментаря для помилки
  const commentValid = validateCommentLength(comment);
  const nameValid = name !== "";

  const isFormValid = nameValid && phoneValid && emailValid && commentValid;
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

// Обробка input для телефону — ховаємо помилку, якщо валідно
phoneInput.addEventListener("input", () => {
  const val = phoneInput.value.trim();
  if (validatePhone(val)) {
    setError(errorPhone, "", false);
  }
});

// Обробка blur для емейлу
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

// Обробка input для емейлу — ховаємо помилку, якщо валідно
form.email.addEventListener("input", () => {
  const val = form.email.value.trim();
  if (validateEmail(val)) {
    setError(errorEmail, "", false);
  }
});

// Для textarea коментаря просто оновлюємо лічильник, помилок не показуємо
form.comment.addEventListener("input", (e) => {
  const val = e.target.value;
  charCount.textContent = `${val.length}/500 символів`;
  validateForm();
});

// Валідація і кнопка при зміні імені
form.name.addEventListener("input", validateForm);

// Обробка відправки форми
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  phoneInput.dispatchEvent(new Event("blur"));
  form.email.dispatchEvent(new Event("blur"));

  if (submitBtn.disabled) {
    formMessage.textContent =
      "Будь ласка, виправте помилки у формі перед відправкою.";
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

      validateForm();
    } else {
      const text = await res.text();
      console.error("Помилка відповіді:", text);
      formMessage.textContent =
        "Не вдалося надіслати повідомлення. Спробуйте пізніше.";
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
