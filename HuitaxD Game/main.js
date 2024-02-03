function gameWithRandomNum() {
  const randomNumber = Math.ceil(Math.random() * 3);
  const checkRandomNumber = prompt(
    "Угадай рандомное число от 1 до 3 или ты лох попуск и чмо"
  );

  if (randomNumber == checkRandomNumber) {
    alert("поздравляю, ты угадал мой чемпион сукин сын");
  } else if (checkRandomNumber < 1 || checkRandomNumber > 3) {
    alert("еблан, я же сказал от 1 до 3");
  } else if (checkRandomNumber == "иди нахуй") {
    alert("сам иди");
  } else if (checkRandomNumber == "хуй") {
    alert("пизда");
  } else {
    alert("лооох, пииидр, но попробуй еще раз");
  }
}
