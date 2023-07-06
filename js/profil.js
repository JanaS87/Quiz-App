console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const toggleMode = document.querySelector('[data-js="toggle-button"]');

toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
