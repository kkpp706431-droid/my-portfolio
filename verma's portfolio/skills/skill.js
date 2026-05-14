// ================= CARD ANIMATION ON LOAD =================
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// ================= CTA BUTTON CLICK =================
const talkBtn = document.querySelector(".cta button");

talkBtn.addEventListener("click", () => {
  window.location.href = "/contact/contact.html";
});

// ================= PROGRESS BAR ANIMATION =================
const progressBars = document.querySelectorAll(".progress span");

window.addEventListener("load", () => {
  progressBars.forEach((bar) => {
    let finalWidth = bar.style.width;
    bar.style.width = "0%";

    setTimeout(() => {
      bar.style.transition = "width 1.5s ease";
      bar.style.width = finalWidth;
    }, 500);
  });
});

// ================= CARD HOVER SOUNDLESS EFFECT =================
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 12px 25px rgba(108,76,255,0.18)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
  });
});