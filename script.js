const year = document.querySelector("#year");
const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", document.body.classList.contains("dark") ? "dark" : "light");
});
