// ========================= PAGE LOAD ANIMATION =========================
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ========================= ACTIVE NAV LINK =========================
const navLinks = document.querySelectorAll(".linkpage");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// ========================= HIRE ME BUTTON =========================
const hireBtn = document.getElementById("hire");

hireBtn.addEventListener("click", () => {
  window.location.href = "/contact/contact.html";
});

// ========================= FRONTEND BADGE CLICK =========================
const frontendBtn = document.getElementById("frontend");

frontendBtn.addEventListener("click", () => {
  alert("Frontend Developer | HTML • CSS • JavaScript");
});

// ========================= IMAGE PARALLAX EFFECT =========================
const myImg = document.getElementById("myimg");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  myImg.style.transform = `translate(${x}px, ${y}px)`;
});

// ========================= SCROLL REVEAL =========================
const revealElements = document.querySelectorAll(
  "#leftcontent, #myimage, #frontend"
);

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});