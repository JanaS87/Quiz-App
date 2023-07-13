console.clear();

//Bookmark-setzen
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark-active");
});

// Show/ Hide Answer- Button

const answerButton = document.querySelector('[data-js="answer-button"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  if (
    cardAnswer.style.display === "none" &&
    answerButton.textContent == "Show Answer"
  ) {
    cardAnswer.style.display = "block";
    cardAnswer.style.backgroundColor = "#EEEEEE";
    answerButton.textContent = "Hide Answer";
  } else {
    cardAnswer.style.display = "none";
    answerButton.textContent = "Show Answer";
  }
});
