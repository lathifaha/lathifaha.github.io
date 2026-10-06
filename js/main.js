/* =========================================================
   LATHIFAH ALFAT — PORTFOLIO JAVASCRIPT
   Minimal dependencies: none.
   ========================================================= */

(() => {
  const body = document.body;
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector(".theme-icon");
  const currentYear = document.getElementById("currentYear");

  // ---------------------------------------------------------
  // Footer year
  // ---------------------------------------------------------
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // ---------------------------------------------------------
  // Mobile navigation
  // ---------------------------------------------------------
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      body.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  // ---------------------------------------------------------
  // Theme toggle
  // Stores preference in localStorage.
  // ---------------------------------------------------------
  const savedTheme = localStorage.getItem("portfolio-theme");
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeIcon) themeIcon.textContent = "☀";
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeIcon) themeIcon.textContent = "◐";
    }
  };

  applyTheme(savedTheme || (systemDark ? "dark" : "light"));

  themeToggle?.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  });

  // ---------------------------------------------------------
  // Publication filters
  // ---------------------------------------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const publications = document.querySelectorAll(".publication-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      publications.forEach((publication) => {
        const matches = filter === "all" || publication.dataset.category === filter;
        publication.classList.toggle("hidden", !matches);
      });
    });
  });

  // ---------------------------------------------------------
  // Active navigation link on scroll
  // ---------------------------------------------------------
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".main-nav a")];

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  // ---------------------------------------------------------
  // Close mobile nav if user resizes to desktop
  // ---------------------------------------------------------
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && mainNav?.classList.contains("open")) {
      mainNav.classList.remove("open");
      body.classList.remove("nav-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
})();
