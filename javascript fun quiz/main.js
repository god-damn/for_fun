const questions = [
  {
    question: "Кто такой ленька?",
    answers: ["Шахматист", "Дед", "Классный мужик", "Любовник", "Все сразу"],
    correct: 5,
  },
  {
    question: "Ебался ли никитос с полиной?",
    answers: [
      "Да я подам на него в суд",
      "Не было такого",
      "Ученые еще не выяснили",
    ],
    correct: 2,
  },
  {
    question: "Что будет если в доте винстрик больше 5+ побед",
    answers: [
      "Выиграешь 6 катку подряд",
      "Тебя выебет в очко 5 бустеров",
      "Такого не бывает",
      "Габен перечислит 1к$",
    ],
    correct: 2,
  },
  {
    question: "Викторина хуйня или нет?",
    answers: [
      "ДА",
      "Да",
      "5/10",
      "Когда уже эта хуйня закончится?",
    ],
    correct: 4,
  },
];

let questionIndex = 0;

let score = 0;

const quizHeader = document.querySelector("#quizHeader");

const quizList = document.querySelector("#quizList");

const answerBtn = document.querySelector("#btn");

clearAll();
showQuestion();
answerBtn.onclick = checkAnswer;

function clearAll() {
  quizHeader.innerHTML = "";
  quizList.innerHTML = "";
}

function showQuestion() {
  const headerHTMLTemplate = `<h2 class="title">%title%</h2>`;
  const headerTitle = headerHTMLTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );
  quizHeader.innerHTML = headerTitle;

  let answerNum = 1;

  for (answer of questions[questionIndex]["answers"]) {
    const answerTemplate = `
          <li class="quiz__list__item">
            <label>
              <input value='%num%' name="input" type="radio" />
              <span>%answer%</span>
            </label>
          </li>
    `;

    const newAnswer = answerTemplate
      .replace("%answer%", answer)
      .replace("%num%", answerNum);
    quizList.innerHTML += newAnswer;
    answerNum++;
  }
}

function checkAnswer() {
  const checkedInput = quizList.querySelector('input[type="radio"]:checked');
  if (!checkedInput) {
    return alert("вы не выбрали ни один вариант ответа");
  }

  const userAnswer = parseInt(checkedInput.value);

  if (userAnswer === questions[questionIndex]["correct"]) {
    score++;
  }

  if (questionIndex !== questions.length - 1) {
    questionIndex++;
    clearAll();
    showQuestion();
  } else {
    clearAll();
    showResult();
  }
}

function showResult() {
  const resultHTMLTemplate = `
  <h2 class="title">%title%</h2>
  <h3 class="summary">%message%</h3>
  <p class="result">%result%</p>
  `;

  let title, message;

  const result = `Правильных ответов ${score} из ${questions.length}`;

  if (score === questions.length) {
    title = "Поздравляем!";
    message = "Вы ответили на все правильно";
  } else if ((score * 100) / questions.length >= 50) {
    title = "Нот бед!";
    message = "Вы ответили на половину вопросов правильно";
  } else {
    title = "Ну ты и затупок блять";
    message = "ты вообще не в потоке";
  }

  const finalResultHTMLTemplate = resultHTMLTemplate
    .replace("%title%", title)
    .replace("%message%", message)
    .replace("%result%", result);

  quizHeader.innerHTML = finalResultHTMLTemplate;
  answerBtn.innerText = "Сыграть заново";
  answerBtn.onclick = () => history.go();
}
