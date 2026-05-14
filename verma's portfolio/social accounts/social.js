// ================= CARD LOAD ANIMATION =================
const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
      card.style.transition = "all 0.8s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// ================= BUTTON RIPPLE EFFECT =================
const buttons = document.querySelectorAll(".card a");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// ================= CARD 3D HOVER EFFECT =================
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let centerX = card.offsetWidth / 2;
    let centerY = card.offsetHeight / 2;

    let rotateX = ((y - centerY) / 15) * -1;
    let rotateY = (x - centerX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});