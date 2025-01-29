document.addEventListener("DOMContentLoaded", function () {
  // --- Вкладки ---
  const tabItems = document.querySelectorAll(".tab-item");
  const tabSections = document.querySelectorAll(".tab-section");

  tabItems.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Убираем класс active со всех вкладок и секций
      tabItems.forEach((item) => item.classList.remove("active"));
      tabSections.forEach((section) => section.classList.remove("active"));

      // Добавляем active к текущей вкладке и соответствующей секции
      tab.classList.add("active");
      const targetId = tab.getAttribute("data-tab");
      document.getElementById(targetId).classList.add("active");
    });
  });

  // --- Аккордеон ---
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".accordion-icon");

      // Если контент уже открыт, закрываем
      if (content.classList.contains("open")) {
        content.style.maxHeight = 0;
        content.classList.remove("open");
        header.classList.remove("active");
        return;
      }

      // Закрываем все открытые
      closeAllAccordions();

      // Открываем текущий
      content.classList.add("open");
      header.classList.add("active");
      // Устанавливаем высоту блока по содержимому
      content.style.maxHeight = content.scrollHeight + "px";
    });
  });

  function closeAllAccordions() {
    const allContents = document.querySelectorAll(".accordion-content");
    const allHeaders = document.querySelectorAll(".accordion-header");
    allContents.forEach((c) => {
      c.style.maxHeight = 0;
      c.classList.remove("open");
    });
    allHeaders.forEach((h) => {
      h.classList.remove("active");
    });
  }

  // --- Кнопка "Наверх" ---
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Появление/исчезновение кнопки
  window.addEventListener("scroll", () => {
    // Если прокрутка > 300px, показываем кнопку
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  // При клике - плавный скролл вверх
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
