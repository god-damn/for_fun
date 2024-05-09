const quizContainer = document.querySelector(".quiz-container");
const titleQuestion = document.querySelector(".title-question");
const questionsList = document.querySelector(".questions-list");

const result = document.querySelector(".result");
const resultOutput = document.querySelector(".result-output");
const btnRestart = document.querySelector(".btnRestart");

let questionsIndex = 0;
let score = 0;

const questions = [
  {
    title: "Когда в доте выйдет патч",
    answers: ["Никогда", "Завтра"],
    correctAnswer: "Никогда",
  },
  {
    title: "Как пел егор крид?",
    answers: [
      "Это кто?",
      "Ты будибуди буди пока крутишь бигуди",
      "тупая сука будто питикантроп",
      "Прости я не слушаю бразильнский фонк",
    ],
    correctAnswer: "Ты будибуди буди пока крутишь бигуди",
  },
  {
    title: "Сосал?",
    answers: ["Нет", "Да", "Автор ты долбаеб?"],
    correctAnswer: "Автор ты долбаеб?",
  },
  {
    title:
      "Я крч уже устал если честно вопросы придумывать это сложнее чем сделать саму викторину",
    answers: [
      "Понимаю",
      "Мне похуй",
      "Буду знать",
      "А КАК ПОНЯТЬ ГДЕ ТУТ ПРАВИЛЬНЫЙ ОТВЕТ",
    ],
    correctAnswer: "А КАК ПОНЯТЬ ГДЕ ТУТ ПРАВИЛЬНЫЙ ОТВЕТ",
  },
  {
    title: "я иду такая вся в Дольче Габбана кто спел?",
    answers: [
      "я сам не знаю если честно",
      "Жана Киске",
      "я иду такая вся на сердце рана",
      "Верка Сердюч",
    ],
    correctAnswer: "Верка Сердюч",
  },
];

function displayQuestion() {
  const q = questions[questionsIndex];
  titleQuestion.innerText = q.title;
  questionsList.innerHTML = "";

  q.answers.forEach((asnwer) => {
    const li = document.createElement("li");
    li.classList.add("questions-list-item");
    li.textContent = asnwer;
    li.addEventListener("click", () => selectAnswer(asnwer));
    questionsList.appendChild(li);
  });
}

function selectAnswer(asnwer) {
  const q = questions[questionsIndex];
  if (asnwer === q.correctAnswer) {
    score++;
  }
  questionsIndex++;

  if (questionsIndex < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  quizContainer.style.display = "none";
  result.style.display = "block";
  resultOutput.innerText = `ЕБАТЬ ТЫ ГЕНИЙ ТЫ НАБРАЛ - ${score} БАЛЛОВ ИЗ ${questions.length}`;
}

btnRestart.addEventListener("click", restart);

function restart() {
  questionsIndex = 0;
  score = 0;
  quizContainer.style.display = "block";
  result.style.display = "none";
  displayQuestion();
}

displayQuestion();
