const feedback = document.querySelector("#feedback");
const btn = document.getElementById("submit-answer");

function checkAnswer() {
  const choice = document.querySelector("input[name='quiz']:checked");
  let correctAnswer = "4";
  let userAnswer = choice.value;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

btn.addEventListener("click", checkAnswer);
