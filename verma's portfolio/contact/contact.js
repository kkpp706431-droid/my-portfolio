// ================= CONTACT FORM BUTTON =================
const sendBtn = document.querySelector("button");

sendBtn.addEventListener("click", () => {
  const name = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const message = document.querySelector("textarea").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields first.");
  } else {
    alert("Message sent successfully 🚀");
    
    document.querySelector('input[type="text"]').value = "";
    document.querySelector('input[type="email"]').value = "";
    document.querySelector("textarea").value = "";
  }
});

// ================= FOOTER FADE IN =================
const footerBoxes = document.querySelectorAll(".footer-box");

window.addEventListener("load", () => {
  footerBoxes.forEach((box, index) => {
    box.style.opacity = "0";
    box.style.transform = "translateY(30px)";

    setTimeout(() => {
      box.style.transition = "all 0.8s ease";
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// ================= SOCIAL ICON ROTATE EFFECT =================
const socials = document.querySelectorAll(".socials div");

socials.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "translateY(-5px) rotate(10deg)";
  });

  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "translateY(0) rotate(0)";
  });
});