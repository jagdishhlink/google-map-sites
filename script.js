/* ═══════════════════════════════════════════════════════
   GOOGLE MAP SITES — INTERACTIVE JS
   ═══════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  // ─── NAVBAR SCROLL ─────────────────────────────────
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // ─── MOBILE MENU ───────────────────────────────────
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    // Close menu on link click
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  // ─── SCROLL REVEAL ─────────────────────────────────
  const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right, .glass-card, .service-card, .feature-card, .testimonial-card"
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translate(0)";
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  revealElements.forEach((el, idx) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.08}s`;
    revealObserver.observe(el);
  });

  // ─── HERO PARTICLES ────────────────────────────────
  const particleContainer = document.getElementById("particles");

  if (particleContainer) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 6 + "s";
      particle.style.animationDuration = 4 + Math.random() * 4 + "s";
      particleContainer.appendChild(particle);
    }
  }

  // ─── SMOOTH SCROLL ─────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  // ─── ACTIVE NAV HIGHLIGHT ──────────────────────────
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.style.color = "#fff";
        } else {
          link.style.color = "";
        }
      }
    });
  });

  // ─── TILT EFFECT ON CARDS ──────────────────────────
  const cards = document.querySelectorAll(".glass-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});
