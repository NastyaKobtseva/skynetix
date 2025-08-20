// svg
document.addEventListener("DOMContentLoaded", () => {
  const favicon = document.getElementById("favicon");
  const darkThemeMedia = window.matchMedia("(prefers-color-scheme: dark)");

  function updateFavicon() {
    favicon.href = darkThemeMedia.matches 
      ? "/image/header/logo-white-png.png"
      : "/image/header/logo-black-png.png";
  }

  updateFavicon();
  darkThemeMedia.addEventListener("change", updateFavicon);
});

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



const pageData = {
  privacy: {
  title: "Політика конфіденційності",
  subtitle: "Ваша конфіденційність важлива для нас. Ця політика пояснює, як ми збираємо, використовуємо та захищаємо вашу інформацію.",
  lastUpdated: "Останнє оновлення: Грудень 2024",
  blocks: [
    {
      icon: "ri-information-line text-blue-400",
      title: "Інформація, яку ми збираємо",
      content: `
        <p>У Skynetix ми збираємо інформацію, щоб надавати кращі послуги нашим користувачам і клієнтам. Ми збираємо інформацію такими способами:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Контактна інформація:</strong> Ім’я, електронна пошта, номер телефону під час звернення чи запиту</li>
          <li><strong>Інформація про бізнес:</strong> Дані компанії, вимоги проєкту, технічні характеристики</li>
          <li><strong>Використання вебсайту:</strong> Тип браузера, IP-адреса, переглянуті сторінки, час перебування на сайті</li>
          <li><strong>Записи комунікації:</strong> Записи листування, запити до підтримки, консультаційні сесії</li>
        </ul>
      `
    },
    {
      icon: "ri-settings-line text-green-400",
      title: "Як ми використовуємо вашу інформацію",
      content: `
        <p>Ми використовуємо зібрану інформацію для таких цілей:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Надання послуг:</strong> Для надання оборонних технологічних рішень і технічної підтримки</li>
          <li><strong>Комунікація:</strong> Для відповіді на запити, надання комерційних пропозицій, підтримки зв’язку з клієнтами</li>
          <li><strong>Розробка продуктів:</strong> Для вдосконалення наших продуктів та створення нових рішень згідно з потребами клієнтів</li>
          <li><strong>Юридична відповідність:</strong> Для дотримання чинного законодавства та вимог оборонної галузі</li>
          <li><strong>Безпека:</strong> Для захисту наших систем, запобігання шахрайству та забезпечення операційної безпеки</li>
        </ul>
      `
    },
    {
      icon: "ri-share-line text-purple-400",
      title: "Поширення та розкриття інформації",
      content: `
        <p>Ми не продаємо, не обмінюємо та не передаємо вашу особисту інформацію третім особам. Ми можемо ділитися інформацією лише в таких випадках:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Постачальники послуг:</strong> З надійними партнерами, які допомагають у роботі, відповідно до угод про конфіденційність</li>
          <li><strong>Юридичні вимоги:</strong> Коли цього вимагає закон, регулювання або судовий процес</li>
          <li><strong>Захист бізнесу:</strong> Щоб захистити права, власність або безпеку Skynetix, наших клієнтів чи інших осіб</li>
          <li><strong>Державні органи:</strong> Коли це необхідно для оборонних контрактів або національної безпеки</li>
        </ul>
        <div class="bg-yellow-600/20 border border-yellow-500 p-4 rounded-lg mt-6">
          <p class="text-yellow-400">
            <i class="ri-shield-check-line mr-2"></i>
            <strong>Примітка для оборонної галузі:</strong> Враховуючи нашу діяльність у сфері оборонних технологій, певна інформація може підлягати державному нагляду та регулюванням контролю експорту.
          </p>
        </div>
      `
    },
    {
      icon: "ri-shield-keyhole-line text-red-400",
      title: "Захист даних",
      content: `
        <p>Ми впроваджуємо надійні заходи безпеки для захисту вашої інформації:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Шифрування:</strong> Уся конфіденційна інформація шифрується під час передавання та зберігання</li>
          <li><strong>Контроль доступу:</strong> Строгий контроль доступу обмежує, хто може переглядати вашу інформацію</li>
          <li><strong>Регулярні аудити:</strong> Постійні аудити безпеки та тестування на проникнення</li>
          <li><strong>Навчання працівників:</strong> Усі співробітники проходять навчання з безпеки та конфіденційності</li>
          <li><strong>Безпечна інфраструктура:</strong> Протоколи безпеки та інфраструктура на рівні галузевих стандартів</li>
        </ul>
      `
    },
    {
      icon: "ri-user-settings-line text-cyan-400",
      title: "Ваші права та вибір",
      content: `
        <p>Ви маєте такі права щодо вашої особистої інформації:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Доступ:</strong> Запит на отримання доступу до вашої особистої інформації</li>
          <li><strong>Виправлення:</strong> Запит на виправлення неточної або неповної інформації</li>
          <li><strong>Видалення:</strong> Запит на видалення вашої інформації (згідно з юридичними вимогами)</li>
          <li><strong>Портативність:</strong> Отримання копії ваших даних у структурованому форматі</li>
          <li><strong>Заперечення:</strong> Заперечення проти певного використання вашої інформації</li>
        </ul>
        <p class="mt-6">
          Щоб скористатися цими правами, зв’яжіться з нами за адресою <a href="mailto:maksym.shkvarko@gmail.com" class="text-blue-400 hover:text-blue-300 transition-colors">maksym.shkvarko@gmail.com</a>.
        </p>
      `
    },
    {
      icon: "ri-time-line text-orange-400",
      title: "Зберігання даних",
      content: `
        <p>Ми зберігаємо персональну інформацію доти, доки це необхідно для:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Надання наших послуг і підтримки зв’язку з клієнтами</li>
          <li>Дотримання юридичних зобов’язань і норм оборонної галузі</li>
          <li>Вирішення спорів та виконання угод</li>
          <li>Забезпечення безпеки та запобігання шахрайству</li>
        </ul>
        <p class="mt-4">
          Коли інформація більше не потрібна, ми безпечно видаляємо або анонімізуємо її відповідно до графіку зберігання даних і чинних норм.
        </p>
      `
    },
    {
      icon: "ri-customer-service-line text-blue-400",
      title: "Зв’яжіться з нами",
      content: `
        <p>Якщо у вас є запитання щодо цієї політики конфіденційності або нашої практики обробки даних, зв’яжіться з нами:</p>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="flex items-center space-x-3">
            <i class="ri-mail-line text-blue-400"></i>
            <div>
              <div class="font-semibold text-white">Електронна пошта</div>
              <a href="mailto:maksym.shkvarko@gmail.com" class="text-blue-400 hover:text-blue-300 transition-colors">maksym.shkvarko@gmail.com</a>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <i class="ri-phone-line text-green-400"></i>
            <div>
              <div class="font-semibold text-white">Телефон</div>
              <a href="tel:+380677593174" class="text-green-400 hover:text-green-300 transition-colors">+380 67 759 3174</a>
            </div>
          </div>
        </div>
      `
    },
    {
      icon: "ri-refresh-line text-indigo-400",
      title: "Оновлення цієї політики",
      content: `
        <p>Ми можемо періодично оновлювати цю політику конфіденційності, щоб відобразити зміни у нашій практиці або з інших операційних, юридичних чи регуляторних причин. Коли ми вносимо зміни:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Ми оновимо дату "Останнє оновлення" вгорі цієї політики</li>
          <li>У разі суттєвих змін ми повідомимо вас електронною поштою або через наш вебсайт</li>
          <li>Ми рекомендуємо періодично переглядати цю політику</li>
        </ul>
        <p class="mt-4">
          Подальше користування нашими послугами після змін означає вашу згоду з оновленою політикою конфіденційності.
        </p>
      `
    }
  ]
},

  terms: {
  title: "Умови використання",
  subtitle: "Юридичні умови та положення, що регулюють використання наших послуг у сфері оборонних технологій.",
  lastUpdated: "Останнє оновлення: Грудень 2024",
  blocks: [
    {
      icon: "ri-contract-line text-blue-400",
      title: "Прийняття умов",
      content: `
        <p>Користуючись послугами, продуктами або вебсайтом Skynetix Defense Technologies, ви погоджуєтесь з цими Умовами використання та усіма чинними законами і нормативами. Якщо ви не погоджуєтесь з будь-якою частиною цих умов, ви не маєте права користуватись нашими послугами.</p>
        <p>Ці умови застосовуються до всіх відвідувачів, користувачів, клієнтів та інших осіб, які отримують доступ або користуються нашими оборонними технологіями, зокрема дронами, системами РЕБ і продуктами Skynetix 2 + АКБ.</p>
      `
    },
    {
      icon: "ri-service-line text-green-400",
      title: "Послуги та продукти",
      content: `
        <p>Skynetix надає сучасні рішення в галузі оборонних технологій, зокрема:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Безпілотні авіаційні системи (БАС):</strong> Дрони військового класу для спостереження, розвідки та тактичних операцій</li>
          <li><strong>Системи радіоелектронної боротьби (РЕБ):</strong> Засоби радіоелектронної протидії та радіоелектронної розвідки</li>
          <li><strong>Енергосистеми:</strong> Технологія Skynetix 2 + АКБ для розширених можливостей роботи</li>
          <li><strong>Технічна підтримка:</strong> Навчання, обслуговування та операційна підтримка</li>
          <li><strong>Індивідуальні рішення:</strong> Розробка та інтеграція оборонних технологій під конкретні потреби</li>
        </ul>
        <div class="bg-red-600/20 border border-red-500 p-4 rounded-lg mt-6">
          <p class="text-red-400">
            <i class="ri-alert-line mr-2"></i>
            <strong>Повідомлення про експортний контроль:</strong> Наші продукти підпадають під дію законів і нормативів щодо експортного контролю. Міжнародні продажі потребують відповідного ліцензування та перевірки на відповідність.
          </p>
        </div>
      `
    },
    {
      icon: "ri-user-settings-line text-purple-400",
      title: "Обов’язки та обмеження для користувачів",
      content: `
        <p>Користувачі послуг Skynetix зобов’язуються:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Законне використання:</strong> Використовувати продукти та послуги виключно з дотриманням законодавства</li>
          <li><strong>Авторизований персонал:</strong> Забезпечити, щоб обладнання використовували лише навчені та уповноважені особи</li>
          <li><strong>Дотримання безпеки:</strong> Зберігати належний рівень захисту для конфіденційної або секретної інформації</li>
          <li><strong>Дотримання правил експорту:</strong> Дотримуватись законів про експортний контроль та отримувати необхідні ліцензії</li>
          <li><strong>Документація:</strong> Вести облік використання та розгортання обладнання</li>
        </ul>
        <p class="mt-6 font-semibold text-white">
          Заборонене використання:
        </p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Незаконне спостереження або порушення прав на приватність</li>
          <li>Несанкціонована передача або перепродаж забороненим особам</li>
          <li>Використання всупереч міжнародним договорам чи санкціям</li>
          <li>Зворотне проєктування або несанкціоновані зміни</li>
        </ul>
      `
    },
    {
      icon: "ri-copyright-line text-cyan-400",
      title: "Права інтелектуальної власності",
      content: `
        <p>Усі права інтелектуальної власності на продукти, програмне забезпечення, документацію та послуги Skynetix залишаються виключною власністю Skynetix Defense Technologies або наших ліцензіарів.</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Патенти:</strong> Наші продукти захищені чинними та поданими патентами</li>
          <li><strong>Комерційна таємниця:</strong> Власні технології та процеси є конфіденційними</li>
          <li><strong>Торговельні марки:</strong> Назва Skynetix і логотипи є зареєстрованими торговельними марками</li>
          <li><strong>Програмне забезпечення:</strong> Усе програмне забезпечення ліцензується, а не продається, і підпадає під дію окремих ліцензійних угод</li>
        </ul>
        <p class="mt-4">
          Користувачі отримують лише явно надані права і не можуть відтворювати, змінювати або розповсюджувати нашу інтелектуальну власність без письмового дозволу.
        </p>
      `
    },
    {
      icon: "ri-shield-check-line text-orange-400",
      title: "Гарантії та застереження",
      content: `
        <p><strong>Гарантії на продукцію:</strong></p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Апаратні продукти мають гарантію на відсутність дефектів протягом визначеного періоду</li>
          <li>Програмне забезпечення надається з обмеженими гарантіями, зазначеними в ліцензійних угодах</li>
          <li>Професійні послуги надаються з дотриманням галузевих стандартів якості</li>
        </ul>
        <p class="mt-6">
          <strong>Застереження:</strong>
        </p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Продукти надаються "як є", окрім явно вказаних гарантій</li>
          <li>Ми відмовляємось від будь-яких непрямих гарантій придатності чи відповідності</li>
          <li>Гарантія не поширюється на взаємодію з іншими системами чи обладнанням</li>
          <li>Результати можуть змінюватись залежно від умов середовища та експлуатації</li>
        </ul>
      `
    },
    {
      icon: "ri-scales-3-line text-red-400",
      title: "Обмеження відповідальності",
      content: `
        <p>У межах, дозволених законом, Skynetix Defense Technologies не несе відповідальності за:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Непрямі збитки:</strong> Побічні, випадкові або спеціальні збитки</li>
          <li><strong>Втрату прибутку:</strong> Втрату прибутку, доходу або можливостей</li>
          <li><strong>Втрату даних:</strong> Втрату даних, інформації або зв’язку</li>
          <li><strong>Позови третіх сторін:</strong> Вимоги третіх осіб у зв’язку з використанням продукції</li>
        </ul>
        <p class="mt-4">
          Загальна відповідальність не перевищує суми, сплаченої за конкретний продукт або послугу, яка спричинила претензію.
        </p>
        <div class="bg-yellow-600/20 border border-yellow-500 p-4 rounded-lg mt-6">
          <p class="text-yellow-400">
            <i class="ri-information-line mr-2"></i>
            <strong>Повідомлення для підрядників оборонної галузі:</strong> Для державних контрактів та класифікованих програм можуть діяти додаткові обмеження відповідальності.
          </p>
        </div>
      `
    },
    {
      icon: "ri-government-line text-indigo-400",
      title: "Державні контракти та безпека",
      content: `
        <p>Для контрактів з урядом і військовими діють додаткові умови:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Доступ до секретної інформації:</strong> Персонал може потребувати відповідних допусків</li>
          <li><strong>Охорона об’єктів:</strong> Операції можуть підпадати під вимоги безпеки об'єктів</li>
          <li><strong>Права на дані:</strong> Державні органи можуть мати особливі права на технічні дані</li>
          <li><strong>Аудит:</strong> Державні органи можуть проводити перевірки відповідності та якості</li>
          <li><strong>Класифікована інформація:</strong> Обробка такої інформації регулюється протоколами безпеки</li>
        </ul>
      `
    },
    {
      icon: "ri-close-circle-line text-red-400",
      title: "Припинення дії",
      content: `
        <p>Ці умови можуть бути припинені:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Будь-якою стороною:</strong> З належним повідомленням, відповідно до договору</li>
          <li><strong>У разі порушення:</strong> Негайне припинення у випадку суттєвого порушення умов</li>
          <li><strong>З міркувань безпеки:</strong> Припинення у разі порушення правил безпеки або експортного контролю</li>
          <li><strong>За законом:</strong> Якщо це передбачено змінами в законодавстві</li>
        </ul>
        <p class="mt-4">
          Після припинення користувачі повинні припинити використання продукції, повернути конфіденційну інформацію та виконати всі поточні зобов’язання.
        </p>
      `
    },
    {
      icon: "ri-hammer-line text-purple-400",
      title: "Правове регулювання та спори",
      content: `
        <p>Ці Умови використання регулюються чинним законодавством, зокрема:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Правила міжнародного контролю за торгівлею зброєю (ITAR)</li>
          <li>Правила експортного адміністрування (EAR)</li>
          <li>Додатки до положень про закупівлі Міністерства оборони США (DFARS)</li>
          <li>Місцеве та міжнародне комерційне право</li>
        </ul>
        <p class="mt-4">
          Усі спори вирішуються шляхом арбітражу або у компетентних судах, згідно з умовами окремих контрактів.
        </p>
      `
    },
    {
      icon: "ri-customer-service-line text-blue-400",
      title: "Контактна інформація",
      content: `
        <p>З питань щодо цих Умов використання або юридичних питань звертайтесь до нашого юридичного відділу:</p>
        <div class="grid md:grid-cols-2 gap-6 mt-6">
          <div class="flex items-center space-x-3">
            <i class="ri-mail-line text-blue-400"></i>
            <div>
              <div class="font-semibold text-white">Електронна пошта</div>
              <a href="mailto:maksym.shkvarko@gmail.com" class="text-blue-400 hover:text-blue-300 transition-colors">maksym.shkvarko@gmail.com</a>
            </div>
          </div>
          <div class="flex items-center space-x-3">
            <i class="ri-phone-line text-green-400"></i>
            <div>
              <div class="font-semibold text-white">Телефон</div>
              <a href="tel:+380677593174" class="text-green-400 hover:text-green-300 transition-colors">+380 67 759 3174</a>
            </div>
          </div>
        </div>
      `
    }
  ]
}
,
  security: {
    title: "Безпека",
    subtitle: "Наша всеосяжна система безпеки для захисту оборонних технологій та конфіденційної інформації.",
    lastUpdated: "Останнє оновлення: грудень 2024",
    blocks: [
        {
            icon: "ri-shield-keyhole-line text-blue-400",
            title: "Огляд системи безпеки",
            content: `
                <p>У компанії Skynetix Defense Technologies безпека є найвищим пріоритетом. Наш багаторівневий підхід до безпеки захищає:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Класифіковану інформацію:</strong> Дані урядового та військового значення</li>
                <li><strong>Інтелектуальну власність:</strong> Власні технології та комерційні таємниці</li>
                <li><strong>Дані клієнтів:</strong> Особисту та організаційну інформацію</li>
                <li><strong>Інфраструктуру:</strong> Фізичні та цифрові системи</li>
                <li><strong>Комунікації:</strong> Всі внутрішні та зовнішні повідомлення</li>
                </ul>
                <div class="bg-green-600/20 border border-green-500 p-4 rounded-lg mt-6">
                <p class="text-green-400">
                    <i class="ri-award-line mr-2"></i> 
                    <strong>Оборонні стандарти:</strong> Наші практики безпеки перевищують галузеві стандарти та відповідають вимогам підрядників оборонної галузі.
                </p>
                </div>
            `
        },
        {
            icon: "ri-building-line text-orange-400",
            title: "Фізична безпека",
            content: `
                <p>Наші об'єкти обладнані повним комплексом фізичних заходів безпеки:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Контроль доступу:</strong> Багатофакторна автентифікація та біометричні системи</li>
                <li><strong>Охорона периметру:</strong> Цілодобовий моніторинг з використанням передових систем спостереження</li>
                <li><strong>Захищені зони:</strong> Класифіковані робочі зони з обмеженим доступом</li>
                <li><strong>Управління відвідувачами:</strong> Строгий контроль та супровід відвідувачів</li>
                <li><strong>Захист обладнання:</strong> Безпечне зберігання чутливого обладнання та матеріалів</li>
                </ul>
                <div class="grid md:grid-cols-3 gap-4 mt-6">
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-camera-line text-orange-400 text-2xl mb-2"></i>
                    <div class="text-white font-semibold">Цілодобовий моніторинг</div>
                    <div class="text-gray-400 text-sm">Неперервне спостереження</div>
                </div>
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-fingerprint-line text-blue-400 text-2xl mb-2"></i>
                    <div class="text-white font-semibold">Біометричний доступ</div>
                    <div class="text-gray-400 text-sm">Сучасна автентифікація</div>
                </div>
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-shield-check-line text-green-400 text-2xl mb-2"></i>
                    <div class="text-white font-semibold">Захищені зони</div>
                    <div class="text-gray-400 text-sm">Класифіковані робочі простори</div>
                </div>
                </div>
            `
        },
        {
            icon: "ri-bug-line text-red-400",
            title: "Кібербезпека",
            content: `
                <p>Наша програма кібербезпеки забезпечує захист на рівні оборонних стандартів:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Архітектура Zero Trust:</strong> Не довіряй — завжди перевіряй</li>
                <li><strong>Шифрування "кінець-до-кінець":</strong> Дані шифруються під час передачі та зберігання</li>
                <li><strong>Сегментація мережі:</strong> Розділені мережі для різних рівнів безпеки</li>
                <li><strong>Інтелект загроз:</strong> Моніторинг та аналіз загроз у реальному часі</li>
                <li><strong>Реагування на інциденти:</strong> Оперативна команда реагування на загрози</li>
                <li><strong>Регулярна оцінка:</strong> Тестування на проникнення та оцінка вразливостей</li>
                </ul>
                <div class="bg-red-600/20 border border-red-500 p-4 rounded-lg mt-6">
                <p class="text-red-400">
                    <i class="ri-alert-line mr-2"></i> 
                    <strong>Моніторинг загроз:</strong> Наш Центр операцій безпеки (SOC) веде цілодобовий моніторинг з негайною реакцією.
                </p>
                </div>
            `
        },
        {
            icon: "ri-team-line text-purple-400",
            title: "Безпека персоналу",
            content: `
                <p>Увесь персонал проходить сувору перевірку та підготовку з безпеки:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Перевірка біографічних даних:</strong> Комплексні фонові перевірки</li>
                <li><strong>Дозволи доступу:</strong> Відповідні рівні допуску до секретної інформації</li>
                <li><strong>Навчання з безпеки:</strong> Регулярне підвищення обізнаності та навчання процедурам</li>
                <li><strong>Програма внутрішніх загроз:</strong> Виявлення та запобігання загрозам зсередини</li>
                <li><strong>Безперервний моніторинг:</strong> Постійна оцінка персоналу щодо ризиків</li>
                </ul>
                <div class="grid md:grid-cols-2 gap-6 mt-6">
                <div class="bg-gray-700 p-6 rounded-lg">
                    <div class="flex items-center mb-4">
                    <i class="ri-shield-user-line text-purple-400 text-xl mr-3"></i>
                    <h3 class="text-white font-semibold">Рівні допуску</h3>
                    </div>
                    <ul class="text-gray-400 space-y-2">
                    <li>• Рівень "Конфіденційно"</li>
                    <li>• Рівень "Таємно"</li>
                    <li>• Рівень "Цілком таємно"</li>
                    <li>• Доступ SCI</li>
                    </ul>
                </div>
                <div class="bg-gray-700 p-6 rounded-lg">
                    <div class="flex items-center mb-4">
                    <i class="ri-graduation-cap-line text-blue-400 text-xl mr-3"></i>
                    <h3 class="text-white font-semibold">Навчальні програми</h3>
                    </div>
                    <ul class="text-gray-400 space-y-2">
                    <li>• Безпекова обізнаність</li>
                    <li>• Процедури OPSEC</li>
                    <li>• Експортний контроль</li>
                    <li>• Реагування на інциденти</li>
                    </ul>
                </div>
                </div>
            `
        },
        {
            icon: "ri-file-shield-line text-cyan-400",
            title: "Інформаційна безпека",
            content: `
                <p>Наша програма захисту інформації охоплює всі форми чутливих даних:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Класифікація даних:</strong> Систематична класифікація всіх інформаційних активів</li>
                <li><strong>Контроль доступу:</strong> Рольовий доступ з принципом найменших прав</li>
                <li><strong>Запобігання втраті даних:</strong> Системи DLP для запобігання витокам</li>
                <li><strong>Захищена комунікація:</strong> Шифрування для конфіденційного обміну</li>
                <li><strong>Контроль документів:</strong> Контроль версій та журнал змін</li>
                <li><strong>Безпечне знищення:</strong> Правильна утилізація чутливих матеріалів</li>
                </ul>
                <div class="bg-blue-600/20 border border-blue-500 p-4 rounded-lg mt-6">
                <p class="text-blue-400">
                    <i class="ri-lock-line mr-2"></i> 
                    <strong>Стандарти шифрування:</strong> Ми використовуємо AES-256 і дотримуємося стандартів FIPS 140-2.
                </p>
                </div>
            `
        },
        {
            icon: "ri-medal-line text-yellow-400",
            title: "Відповідність та сертифікації",
            content: `
                <p>Компанія Skynetix дотримується всіх відповідних стандартів безпеки:</p>
                <div class="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                    <h3 class="text-white font-semibold mb-3">Оборонні стандарти</h3>
                    <ul class="space-y-2 text-gray-300">
                    <li>• DFARS 252.204-7012</li>
                    <li>• NIST SP 800-171</li>
                    <li>• Вимоги CMMC</li>
                    <li>• Стандарти DoD 8570</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-semibold mb-3">Галузеві стандарти</h3>
                    <ul class="space-y-2 text-gray-300">
                    <li>• ISO 27001</li>
                    <li>• SOC 2 Тип II</li>
                    <li>• Кіберфреймворк NIST</li>
                    <li>• FedRAMP Ready</li>
                    </ul>
                </div>
                </div>
                <div class="grid md:grid-cols-3 gap-4 mt-8">
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-award-line text-yellow-400 text-2xl mb-2"></i>
                    <div class="text-white font-semibold">ISO 27001</div>
                    <div class="text-gray-400 text-sm">Сертифіковано</div>
                </div>
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-government-line text-blue-400 text-2xl mb-2"></i>
                    <div class="text-white font-semibold">CMMC</div>
                    <div class="text-gray-400 text-sm">Готовність до рівня 3</div>
                </div>
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-shield-check-line text-green-400 text-2xl mb-2"></i>
                    <div class="text-white font-semibold">SOC 2</div>
                    <div class="text-gray-400 text-sm">Тип II</div>
                </div>
                </div>
            `
        },
        {
            icon: "ri-global-line text-indigo-400",
            title: "Контроль експорту та відповідність ITAR",
            content: `
                <p>Наша програма контролю експорту гарантує дотримання всіх нормативів:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Реєстрація ITAR:</strong> Зареєстровано в Державному департаменті (DDTC)</li>
                <li><strong>Експортні ліцензії:</strong> Отримання дозволів для міжнародних операцій</li>
                <li><strong>Передача технологій:</strong> Контрольований обмін технічними даними</li>
                <li><strong>Доступ іноземців:</strong> Жорсткий контроль доступу для іноземних громадян</li>
                <li><strong>Аудит і відповідність:</strong> Регулярні аудити та навчання щодо дотримання</li>
                </ul>
                <div class="bg-orange-600/20 border border-orange-500 p-4 rounded-lg mt-6">
                <p class="text-orange-400">
                    <i class="ri-flag-line mr-2"></i> 
                    <strong>Повідомлення ITAR:</strong> Наші оборонні технології регулюються ITAR і можуть вимагати експортної ліцензії для міжнародного використання.
                </p>
                </div>
            `
        },
        {
            icon: "ri-shield-cross-line text-pink-400",
            title: "Реагування на інциденти",
            content: `
                <p>Наша програма реагування на інциденти забезпечує швидку реакцію на події безпеки:</p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                <li><strong>Цілодобовий моніторинг:</strong> Постійне спостереження за всіма системами</li>
                <li><strong>Швидка реакція:</strong> Негайна відповідь на підтверджені інциденти</li>
                <li><strong>Форензика:</strong> Професійна цифрова криміналістика</li>
                <li><strong>Ізоляція:</strong> Швидке обмеження впливу інциденту</li>
                <li><strong>Відновлення:</strong> Систематичне відновлення після інцидентів</li>
                <li><strong>Аналіз:</strong> Вивчення інцидентів для вдосконалення процесів</li>
                </ul>
                <div class="grid md:grid-cols-4 gap-4 mt-6">
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-eye-line text-blue-400 text-xl mb-2"></i>
                    <div class="text-white text-sm font-semibold">Виявлення</div>
                    <div class="text-gray-400 text-xs">&lt; 15 хв</div>
                </div>
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-alarm-line text-orange-400 text-xl mb-2"></i>
                    <div class="text-white text-sm font-semibold">Оповіщення</div>
                    <div class="text-gray-400 text-xs">&lt; 30 хв</div>
                </div>
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-shield-line text-red-400 text-xl mb-2"></i>
                    <div class="text-white text-sm font-semibold">Ізоляція</div>
                    <div class="text-gray-400 text-xs">&lt; 1 год</div>
                </div>
                <div class="bg-gray-700 p-4 rounded-lg text-center">
                    <i class="ri-restart-line text-green-400 text-xl mb-2"></i>
                    <div class="text-white text-sm font-semibold">Відновлення</div>
                    <div class="text-gray-400 text-xs">&lt; 24 год</div>
                </div>
                </div>
            `
        },
        {
          icon: "ri-phone-line text-teal-400",
          title: "Контактна інформація з питань безпеки",
          content: `
              <p>З питань, пов’язаних із безпекою, інцидентами або вразливостями:</p>
              <div class="grid md:grid-cols-2 gap-6 mt-6">
              <div class="bg-gray-700 p-6 rounded-lg">
                  <h3 class="text-white font-semibold mb-4 flex items-center">
                  <i class="ri-mail-line text-red-400 mr-3"></i> 
                  Інциденти безпеки
                  </h3>
                  <p class="text-gray-300 mb-2">Для термінових повідомлень про інциденти безпеки:</p>
                  <a href="mailto:maksym.shkvarko@gmail.com" class="text-red-400 hover:text-red-300 transition-colors">
                  maksym.shkvarko@gmail.com
                  </a>
                  <p class="text-gray-400 text-sm mt-2">Відповідь протягом 1 години</p>
              </div>
              <div class="bg-gray-700 p-6 rounded-lg">
                  <h3 class="text-white font-semibold mb-4 flex items-center">
                  <i class="ri-customer-service-line text-blue-400 mr-3"></i> 
                  Загальні питання безпеки
                  </h3>
                  <p class="text-gray-300 mb-2">Для загальних питань з безпеки:</p>
                  <a href="tel:+380677593174" class="text-blue-400 hover:text-blue-300 transition-colors">
                  +380 67 759 3174
                  </a>
                  <p class="text-gray-400 text-sm mt-2">Пн–Пт: 9:00–18:00</p>
              </div>
              </div>
              <div class="bg-yellow-600/20 border border-yellow-500 p-4 rounded-lg mt-6">
              <p class="text-yellow-400">
                  <i class="ri-shield-flash-line mr-2"></i> 
                  <strong>Надзвичайна ситуація з безпекою:</strong> У разі критичних інцидентів негайно телефонуйте. Наша команда з безпеки доступна 24/7.
              </p>
              </div>
          `
      }
    ]
  }
};


document.addEventListener('DOMContentLoaded', () => {
  const mainTitle = document.getElementById('main-title');
  const mainSubtitle = document.getElementById('main-subtitle');
  const lastUpdated = document.getElementById('last-updated');
  const mainContentBlocks = document.getElementById('main-content-blocks');
  function setPageTitle(title) {
    const titleElement = document.querySelector('head title');
    if (titleElement) {
      titleElement.textContent = title;
    }
  }
  const renderContent = (pageKey) => {
    const data = pageData[pageKey];
    if (!data) {
      console.error('Page not found:', pageKey);
      return;
    }

    // Встановлюємо текст і додаємо клас для анімації
    mainTitle.textContent = data.title;
    mainTitle.classList.add('fade-up');
    setPageTitle(data.title);
    mainSubtitle.textContent = data.subtitle;
    mainSubtitle.classList.add('fade-up');

    lastUpdated.textContent = data.lastUpdated;
    lastUpdated.classList.add('fade-up');

    // Очищуємо попередній контент блоків
    mainContentBlocks.innerHTML = '';

    // Створюємо блоки контенту з анімацією
    data.blocks.forEach(block => {
      const blockDiv = document.createElement('div');
      blockDiv.className = "bg-gray-800 rounded-xl p-8 border border-gray-700 fade-up";

      const titleElement = document.createElement('h2');
      titleElement.className = "text-2xl font-bold text-white mb-6 flex items-center";
      titleElement.innerHTML = `<i class="${block.icon} mr-3 w-8 h-8 flex items-center justify-center"></i> ${block.title}`;

      const contentDiv = document.createElement('div');
      contentDiv.className = "space-y-4 text-gray-300 leading-relaxed";
      contentDiv.innerHTML = block.content;

      blockDiv.appendChild(titleElement);
      blockDiv.appendChild(contentDiv);
      mainContentBlocks.appendChild(blockDiv);
    });

    setupScrollAnimation();
  };

  // Функція для відслідковування появи елементів у вікні
  const setupScrollAnimation = () => {
    const animatedElements = document.querySelectorAll('.fade-up');

    const onScroll = () => {
      animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // Запускаємо одразу при завантаженні сторінки
  };

  // Вибираємо сторінку (за замовчуванням "privacy")
  const urlParams = new URLSearchParams(window.location.search);
  const page = urlParams.get('page') || 'privacy';

  renderContent(page);
});