console.clear();

//Bookmark-setzen
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

console.log(bookmarkButton);
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark-active");
});

// Show/ Hide Answer- Button

/* 
const cardAnswer = document.querySelector('[data-js="card-answer"]');

answerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle
}) */
const answerButton = document.querySelector('[data-js="answer-button"]');

function showAnswer(element) {
  var x = document.getElementById(element);
  if (x.style.display != "block") {
    x.style.display = "block";
    answerButton.textContent = "Hide Answer";
  } else {
    x.style.display = "none";
    answerButton.textContent = "Show Answer";
  }
}
