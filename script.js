window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("mobileMenuOverlay");
const closeBtn = document.getElementById("closeMenu");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenuFunc() {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  hamburger.classList.remove("rotate-90");
}

function openMenuFunc() {
  mobileMenu.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
  hamburger.classList.add("rotate-90");
}

// Toggle menu
hamburger.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("translate-x-full");
  if (isOpen) {
    closeMenuFunc();
  } else {
    openMenuFunc();
  }
});

// Close via close button
closeBtn.addEventListener("click", closeMenuFunc);

// Close via click overlay
overlay.addEventListener("click", closeMenuFunc);

// Close menu if link clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenuFunc();
  });
});


// Typed.js
const typed = new Typed("#typed", {
  strings: ["Selamat Datang di Dalil Pediaa", "Hosting Server Terbaik!"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
  showCursor: false
});

// Highlight menu aktif saat scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active-link");
    }
  });
});

 // Show/hide scroll-to-top button
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});

// Scroll-to-top button
document.getElementById("scrollTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// FAQ toggle
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    const p = item.querySelector("p");
    if (p.classList.contains("hidden")) {
      p.classList.remove("hidden");
      p.style.maxHeight = p.scrollHeight + "px";
    } else {
      p.style.maxHeight = "0px";
      setTimeout(() => p.classList.add("hidden"), 300);
    }
  });
});


// Countdown timer
function startCountdown(deadline) {
  const countdown = document.getElementById("countdown");

  function update() {
    const now = new Date().getTime();
    const distance = deadline - now;

    if (distance < 0) {
      countdown.innerHTML = "Promo Berakhir!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(update, 1000);
}

const deadline = new Date().getTime() + 3 * 24 * 60 * 60 * 1000; // 3 days from now
startCountdown(deadline);

// Partikel Bintang
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function createParticles() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();

// Email validation
(function() {
    emailjs.init("6ua4mKAB6T_5apebO"); 
  })();

  document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_5ehee3i', 'template_fyoclxp', this)
      .then(function() {
        document.getElementById("success-message").classList.remove("hidden");
        document.getElementById("emailForm").reset();
      }, function(error) {
        alert("Gagal mengirim: " + error.text);
      });
  });

// dropdown menu
// Desktop dropdown
  const dropdownBtn = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const dropdownArrow = document.getElementById('dropdownArrow');
  let isOpen = false;

  dropdownBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    dropdownMenu.classList.toggle('hidden', !isOpen);
    requestAnimationFrame(() => {
      if (isOpen) {
        dropdownMenu.classList.remove('opacity-0', 'scale-95');
        dropdownMenu.classList.add('opacity-100', 'scale-100');
        dropdownArrow.classList.add('rotate-180');
      } else {
        dropdownMenu.classList.remove('opacity-100', 'scale-100');
        dropdownMenu.classList.add('opacity-0', 'scale-95');
        dropdownArrow.classList.remove('rotate-180');
        setTimeout(() => dropdownMenu.classList.add('hidden'), 300);
      }
    });
  });

  // Mobile dropdown
  const mobileDropdownBtn = document.getElementById('mobileDropdownButton');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');
  const mobileDropdownArrow = document.getElementById('mobileDropdownArrow');
  let mobileOpen = false;

  mobileDropdownBtn.addEventListener('click', () => {
    mobileOpen = !mobileOpen;
    mobileDropdownMenu.classList.toggle('hidden', !mobileOpen);
    requestAnimationFrame(() => {
      if (mobileOpen) {
        mobileDropdownMenu.classList.remove('opacity-0', 'scale-95');
        mobileDropdownMenu.classList.add('opacity-100', 'scale-100');
        mobileDropdownArrow.classList.add('rotate-180');
      } else {
        mobileDropdownMenu.classList.remove('opacity-100', 'scale-100');
        mobileDropdownMenu.classList.add('opacity-0', 'scale-95');
        mobileDropdownArrow.classList.remove('rotate-180');
        setTimeout(() => mobileDropdownMenu.classList.add('hidden'), 300);
      }
    });
  });