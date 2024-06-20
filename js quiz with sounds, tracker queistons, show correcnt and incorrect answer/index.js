const questions = [
  {
    question: "Какие цвета изображены на флаге России?",
    answers: [
      { text: "Белый/Синий/Красный", correct: true },
      { text: "Желтый/Зеленый/Голубой", correct: false },
      { text: "Серобуромалиновый/Фиол", correct: false },
      { text: "Сука опять училка валит", correct: false },
    ],
  },
  {
    question:
      "Что за животное является домашним животным Хагрида, Клювокрылом? (сам хз кто это) ",
    answers: [
      { text: "Сова ", correct: false },
      { text: "Феникс ", correct: false },
      { text: "Гиппогриф ", correct: true },
      { text: "Гриф", correct: false },
    ],
  },
  {
    question: "Какого цвета световые мечи ситхов?",
    answers: [
      { text: "Red", correct: true },
      { text: "Синий", correct: false },
      { text: "Фиолетовый", correct: false },
      { text: "Зеленый", correct: false },
    ],
  },
  {
    question: "Кто из этих известных композиторов был глухим?",
    answers: [
      { text: "Бетховен", correct: true },
      { text: "Моцарт", correct: false },
      { text: "Бах", correct: false },
      { text: "Гендель", correct: false },
    ],
  },
  {
    question: " Какая самая редкая группа крови?",
    answers: [
      { text: "I группа", correct: false },
      { text: "II группа", correct: false },
      { text: "III группа", correct: false },
      { text: "IV группа", correct: true },
    ],
  },
  {
    question: "При какой температуре по Фаренгейту замерзает вода?",
    answers: [
      { text: "32 градуса", correct: true },
      { text: "40 градусов", correct: false },
      { text: "-10 градусов", correct: false },
      { text: "0 градусов", correct: false },
    ],
  },
  {
    question: "Сколько еще осталось вопросов?",
    answers: [
      { text: "это последний", correct: true },
      { text: "хз ваще", correct: false },
      { text: "20", correct: false },
      { text: "3", correct: false },
    ],
  },
];

const titleQuestion = document.querySelector(".title-question");
const startBtn = document.querySelector(".start-btn");
const quiz = document.querySelector(".quiz");
const answerButtons = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector(".next-btn");
const resultText = document.querySelector(".result-text");
const result = document.querySelector(".result");
const restart = document.querySelector(".restart");
const countQuestionHTML = document.querySelector(".count-question");

let questionIndex = 0;
let score = 0;
let countQuestion = 1;

startBtn.addEventListener("click", showQuestion);

function showQuestion() {
  startBtn.classList.add("hide");
  quiz.classList.remove("hide");

  const q = questions[questionIndex];
  titleQuestion.innerText = q.question;
  countQuestionHTML.innerText = `${countQuestion}/${questions.length}`;

  answerButtons.innerHTML = "";

  q.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("answer-btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
      button.addEventListener("click", function playSoundWin() {
        const audio = new Audio("audio-win.mp3");
        audio.play();
      });
    } else {
      button.addEventListener("click", function playSoundLose() {
        const audio = new Audio("audio-lose.mp3");
        audio.play();
      });
    }
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    e.target.classList.add("correct");
    score++;
    nextBtn.style.display = "block";
  } else {
    e.target.classList.add("incorrect");
  }
}

nextBtn.addEventListener("click", () => {
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    countQuestion++;
    nextBtn.style.display = "none";
    showQuestion();
  } else {
    quiz.classList.add("hide");
    nextBtn.style.display = "none";
    result.style.display = "block";
    resultText.innerText = `Поздравляем, вы набрали ${score} баллов из ${questions.length}`;
  }
});

restart.addEventListener("click", () => {
  score = 0;
  questionIndex = 0;
  countQuestion = 1;
  showQuestion();
  result.style.display = "none";
});
