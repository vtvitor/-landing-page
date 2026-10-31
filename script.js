(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation");
  const year = document.getElementById("ano");
  if (year) year.textContent = String(new Date().getFullYear());

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(willOpen));
      menuButton.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
      navigation.classList.toggle("is-open", willOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!menuButton.contains(event.target) && !navigation.contains(event.target)) closeMenu();
    });

    window.matchMedia("(min-width: 681px)").addEventListener("change", closeMenu);
  }

  const prototypeImage = document.querySelector(".prototype-img");
  if (prototypeImage) {
    const art = prototypeImage.closest(".tech-art");
    const showImage = () => art?.classList.add("has-prototype-image");
    prototypeImage.addEventListener("load", showImage);
    if (prototypeImage.complete && prototypeImage.naturalWidth > 0) showImage();
  }

  const faqs = document.querySelectorAll(".faq-list details");
  faqs.forEach((item) => item.addEventListener("toggle", () => {
    if (item.open) faqs.forEach((other) => { if (other !== item) other.open = false; });
  }));
})();
