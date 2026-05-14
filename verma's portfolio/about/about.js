// ================= PAGE LOAD EFFECT =================
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// ================= MORE ABOUT BUTTON =================
const moreBtn = document.getElementById("morebutton");

moreBtn.addEventListener("click", () => {
  alert("Thanks for checking my portfolio 🚀(contact me to more info.) ");
});

// ================= STATS COUNTER ANIMATION =================
const stats = document.querySelectorAll(".text p");

const values = ["1+ Years (beginner)", "3+", "4+"];

window.addEventListener("load", () => {
  stats.forEach((stat, index) => {
    stat.style.opacity = "0";

    setTimeout(() => {
      stat.textContent = values[index];
      stat.style.transition = "0.5s ease";
      stat.style.opacity = "1";
    }, index * 400);
  });
});

// ================= CARD HOVER ROTATION =================
const cards = document.querySelectorAll(".stat-box");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let centerX = card.offsetWidth / 2;
    let centerY = card.offsetHeight / 2;

    let rotateX = ((y - centerY) / 20) * -1;
    let rotateY = (x - centerX) / 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

// ================= TITLE ANIMATION =================
const who = document.getElementById("who");

who.addEventListener("mouseenter", () => {
  who.style.transform = "scale(1.05)";
});

who.addEventListener("mouseleave", () => {
  who.style.transform = "scale(1)";
});