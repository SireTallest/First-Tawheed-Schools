document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuClose = document.getElementById("mobileMenuClose");
  const mobileOverlay = document.getElementById("mobileOverlay");

  function openMenu() {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    mobileMenuBtn.classList.add("open");
    mobileMenuBtn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    mobileMenuBtn.classList.remove("open");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  }

  mobileMenuBtn.addEventListener("click", openMenu);
  mobileMenuClose.addEventListener("click", closeMenu);
  mobileOverlay.addEventListener("click", closeMenu);
  mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeMenu();
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});


