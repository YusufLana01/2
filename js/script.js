tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#64748b",
      },
    },
  },
};
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("welcome-modal").style.display = "flex";
});

function submitName() {
  const name = document.getElementById("modal-name-input").value;
  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  document.getElementById("welcome-user").innerText = name;
  document.getElementById("welcome-modal").style.display = "none";
}

function validateForm() {
  const name = document.getElementById("name-input").value.trim();
  const email = document.getElementById("email-input").value.trim();
  const message = document.getElementById("message-input").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  document.getElementById(
    "message-output"
  ).innerText = `Thank you, ${name}!\nEmail: ${email}\nMessage: ${message}`;

  document.getElementById("name-input").value = "";
  document.getElementById("email-input").value = "";
  document.getElementById("message-input").value = "";
}

const toggle = document.getElementById("toggle-dark");
const html = document.documentElement;
const icon = document.getElementById("toggle-icon");

function setIcon(isDark) {
  icon.innerHTML = isDark
    ? '<i class="fas fa-moon text-blue-400 text-[12px]"></i>'
    : '<i class="fas fa-sun text-yellow-500 text-[12px]"></i>';
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.classList.add("dark");
  toggle.checked = true;
  setIcon(true);
} else {
  html.classList.remove("dark");
  toggle.checked = false;
  setIcon(false);
}

toggle.addEventListener("change", () => {
  const isDark = toggle.checked;
  html.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  setIcon(isDark);
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
