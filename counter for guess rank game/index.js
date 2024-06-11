const rankBtn = document.querySelector(".rank-btn");
const countBtn = document.querySelector(".countBtn");
const btnAnswerPlayer = document.querySelector(".btnAnswerPlayer");

const chooseRank = document.querySelector(".choose-rank");

let counterP1 = 0;
let counterP2 = 0;
let counterP3 = 0;

const counterHTMLp1 = document.querySelector(".counter-player1");
const counterHTMLp2 = document.querySelector(".counter-player2");
const counterHTMLp3 = document.querySelector(".counter-player3");

const playerOneForm = document.querySelector(".player-one");
const playerTwoForm = document.querySelector(".player-two");
const playerThreeForm = document.querySelector(".player-three");

const container = document.querySelector(".container");

const chooseRankFirstPlayer = document.querySelector(
  ".choose-rank-first-player"
);

const chooseRankSecondPlayer = document.querySelector(
  ".choose-rank-second-player"
);

const chooseRankThirdPlayer = document.querySelector(
  ".choose-rank-third-player"
);

rankBtn.addEventListener("click", function () {
  chooseRank.classList.toggle("show");
});

chooseRank.addEventListener("click", function (event) {
  const chosenRankHTML = document.querySelector(".chosen-rank");
  if (event.target.dataset.rank === "iron") {
    chosenRankHTML.innerHTML = `
    <div class="item-container" data-rank="iron">
      <img class="item-container-img added" src="img/iron.jpg" alt="iron" />
      <p class="text added">Железо</p>
    </div>
    `;
    chooseRank.classList.remove("show");
  } else if (event.target.dataset.rank === "bronze") {
    chosenRankHTML.innerHTML = `
   <div class="item-container" data-rank="bronze">
      <img
        class="item-container-img added"
        src="img/bronze.jpg"
        alt="iron"
        data-rank="bronze"
      />
      <p data-rank="iron">Бронза</p>
    </div>
    `;
    chooseRank.classList.remove("show");
  } else if (event.target.dataset.rank === "silver") {
    chosenRankHTML.innerHTML = `
    <div class="item-container" data-rank="silver">
      <img class="item-container-img added" src="img/silver.jpg" alt="iron" />
      <p class="text added">Серебро</p>
    </div>`;
    chooseRank.classList.remove("show");
  } else if (event.target.dataset.rank === "gold") {
    chosenRankHTML.innerHTML = `
   <div class="item-container" data-rank="gold">
      <img class="item-container-img added" src="img/gold.jpg" alt="iron" />
      <p  class="text added">Золото</p>
    </div>`;
    chooseRank.classList.remove("show");
  } else if (event.target.dataset.rank === "plat") {
    chosenRankHTML.innerHTML = `
    <div class="item-container" data-rank="plat">
      <img class="item-container-img added" src="img/plat.jpg" alt="iron" />
      <p class="text added">Платина</p>
    </div>
    `;
    chooseRank.classList.remove("show");
  } else if (event.target.dataset.rank === "diamond") {
    chosenRankHTML.innerHTML = `
    <div class="item-container" data-rank="diamond">
      <img class="item-container-img added" src="img/diamond.jpg" alt="iron" />
      <p class="text added">Алмаз</p>
    </div>
    `;
    chooseRank.classList.remove("show");
  } else if (event.target.dataset.rank === "asc") {
    chosenRankHTML.innerHTML = `
    <div class="item-container" data-rank="asc">
      <img class="item-container-img added" src="img/asc.jpg" alt="iron" />
      <p class="text added">Аскендант</p>
    </div>
    `;
    chooseRank.classList.remove("show");
  } else if (event.target.dataset.rank === "immo") {
    chosenRankHTML.innerHTML = `
     <div class="item-container" data-rank="immo">
      <img class="item-container-img added" src="img/imm.jpg" alt="iron" />
        <p class="text added">Иммортал</p>
    </div>
    `;
    chooseRank.classList.remove("show");
  } else if (event.target.dataset.rank === "radiant") {
    chosenRankHTML.innerHTML = `
    <div class="item-container" data-rank="radiant">
      <img class="item-container-img added" src="img/radik.jpg" alt="iron" />
      <p class="text added">Радик</p>
    </div>
   `;
    chooseRank.classList.remove("show");
  }
});

playerOneForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstPlayerHTML = document.querySelector(".name-first-player");
  const inptOne = document.querySelector(".inptOne");
  firstPlayerHTML.innerText = inptOne.value;
  inptOne.value = "";
});

playerTwoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const secondPlayerHTML = document.querySelector(".name-second-player");
  const inptTwo = document.querySelector(".inptTwo");
  secondPlayerHTML.innerText = inptTwo.value;
  inptTwo.value = "";
});

playerThreeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const thirdPlayerHTML = document.querySelector(".name-third-player");
  const inptThree = document.querySelector(".inptThree");
  thirdPlayerHTML.innerText = inptThree.value;
  inptThree.value = "";
});

function addShow1() {
  chooseRankFirstPlayer.classList.toggle("show");
}
function addShow2() {
  chooseRankSecondPlayer.classList.toggle("show");
}
function addShow3() {
  chooseRankThirdPlayer.classList.toggle("show");
}

chooseRankFirstPlayer.addEventListener("click", function (event) {
  const chosenRankFirstPlayer = document.querySelector(
    ".chosen-rank-first-player"
  );
  if (event.target.dataset.rank === "iron") {
    chosenRankFirstPlayer.innerHTML = `
    <div  id="player1"class="item-container" data-rank="iron">
      <img class="item-container-img added" src="img/iron.jpg" alt="iron" />
      <p class="text added">Железо</p>
    </div>
    `;
    chooseRankFirstPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "bronze") {
    chosenRankFirstPlayer.innerHTML = `
   <div id="player1" class="item-container" data-rank="bronze">
      <img
        class="item-container-img added"
        src="img/bronze.jpg"
        alt="iron"
        data-rank="bronze"
      />
      <p data-rank="iron">Бронза</p>
    </div>
    `;
    chooseRankFirstPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "silver") {
    chosenRankFirstPlayer.innerHTML = `
    <div id="player1" class="item-container" data-rank="silver">
      <img class="item-container-img added" src="img/silver.jpg" alt="iron" />
      <p class="text added">Серебро</p>
    </div>`;
    chooseRankFirstPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "gold") {
    chosenRankFirstPlayer.innerHTML = `
   <div id="player1" class="item-container " data-rank="gold">
      <img class="item-container-img added" src="img/gold.jpg" alt="iron" />
      <p  class="text added">Золото</p>
    </div>`;
    chooseRankFirstPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "plat") {
    chosenRankFirstPlayer.innerHTML = `
    <div  id="player1"class="item-container" data-rank="plat">
      <img class="item-container-img added" src="img/plat.jpg" alt="iron" />
      <p class="text added">Платина</p>
    </div>
    `;
    chooseRankFirstPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "diamond") {
    chosenRankFirstPlayer.innerHTML = `
    <div id="player1" class="item-container" data-rank="diamond">
      <img class="item-container-img added" src="img/diamond.jpg" alt="iron" />
      <p class="text added">Алмаз</p>
    </div>
    `;
    chooseRankFirstPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "asc") {
    chosenRankFirstPlayer.innerHTML = `
    <div id="player1" class="item-container" data-rank="asc">
      <img class="item-container-img added" src="img/asc.jpg" alt="iron" />
      <p class="text added">Аскендант</p>
    </div>
    `;
    chooseRankFirstPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "immo") {
    chosenRankFirstPlayer.innerHTML = `
     <div id="player1" class="item-container" data-rank="immo">
      <img class="item-container-img added" src="img/imm.jpg" alt="iron" />
        <p class="text added">Иммортал</p>
    </div>
    `;
    chooseRankFirstPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "radiant") {
    chosenRankFirstPlayer.innerHTML = `
    <div id="player1" class="item-container" data-rank="radiant">
      <img class="item-container-img added" src="img/radik.jpg" alt="iron" />
      <p class="text added">Радик</p>
    </div>
   `;
    chooseRankFirstPlayer.classList.remove("show");
  }
});

chooseRankSecondPlayer.addEventListener("click", function (event) {
  const choosenRankSecondPlayer = document.querySelector(
    ".choosen-rank-second-player"
  );
  if (event.target.dataset.rank === "iron") {
    choosenRankSecondPlayer.innerHTML = `
    <div id="player2" class="item-container" data-rank="iron">
      <img class="item-container-img added" src="img/iron.jpg" alt="iron" />
      <p class="text added">Железо</p>
    </div>
    `;
    chooseRankSecondPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "bronze") {
    choosenRankSecondPlayer.innerHTML = `
   <div id="player2" class="item-container" data-rank="bronze">
      <img
        class="item-container-img added"
        src="img/bronze.jpg"
        alt="iron"
        data-rank="bronze"
      />
      <p data-rank="iron">Бронза</p>
    </div>
    `;
    chooseRankSecondPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "silver") {
    choosenRankSecondPlayer.innerHTML = `
    <div id="player2" class="item-container" data-rank="silver">
      <img class="item-container-img added" src="img/silver.jpg" alt="iron" />
      <p class="text added">Серебро</p>
    </div>`;
    chooseRankSecondPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "gold") {
    choosenRankSecondPlayer.innerHTML = `
   <div id="player2" class="item-container" data-rank="gold">
      <img class="item-container-img added" src="img/gold.jpg" alt="iron" />
      <p  class="text added">Золото</p>
    </div>`;
    chooseRankSecondPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "plat") {
    choosenRankSecondPlayer.innerHTML = `
    <div id="player2" class="item-container" data-rank="plat">
      <img class="item-container-img added" src="img/plat.jpg" alt="iron" />
      <p class="text added">Платина</p>
    </div>
    `;
    chooseRankSecondPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "diamond") {
    choosenRankSecondPlayer.innerHTML = `
    <div id="player2" class="item-container" data-rank="diamond">
      <img class="item-container-img added" src="img/diamond.jpg" alt="iron" />
      <p class="text added">Алмаз</p>
    </div>
    `;
    chooseRankSecondPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "asc") {
    choosenRankSecondPlayer.innerHTML = `
    <div  id="player2"class="item-container" data-rank="asc">
      <img class="item-container-img added" src="img/asc.jpg" alt="iron" />
      <p class="text added">Аскендант</p>
    </div>
    `;
    chooseRankSecondPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "immo") {
    choosenRankSecondPlayer.innerHTML = `
     <div id="player2" class="item-container" data-rank="immo">
      <img class="item-container-img added" src="img/imm.jpg" alt="iron" />
        <p class="text added">Иммортал</p>
    </div>
    `;
    chooseRankSecondPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "radiant") {
    choosenRankSecondPlayer.innerHTML = `
    <div id="player2" class="item-container " data-rank="radiant">
      <img class="item-container-img added" src="img/radik.jpg" alt="iron" />
      <p class="text added">Радик</p>
    </div>
   `;
    chooseRankSecondPlayer.classList.remove("show");
  }
});

chooseRankThirdPlayer.addEventListener("click", function (event) {
  const choosenRankThirdPlayer = document.querySelector(
    ".choosen-rank-third-player"
  );
  if (event.target.dataset.rank === "iron") {
    choosenRankThirdPlayer.innerHTML = `
    <div id="player3" class="item-container" data-rank="iron">
      <img class="item-container-img added" src="img/iron.jpg" alt="iron" />
      <p class="text added">Железо</p>
    </div>
    `;
    chooseRankThirdPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "bronze") {
    choosenRankThirdPlayer.innerHTML = `
   <div id="player3" class="item-container" data-rank="bronze">
      <img
        class="item-container-img added"
        src="img/bronze.jpg"
        alt="iron"
        data-rank="bronze"
      />
      <p data-rank="iron">Бронза</p>
    </div>
    `;
    chooseRankThirdPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "silver") {
    choosenRankThirdPlayer.innerHTML = `
    <div  id="player3" class="item-container" data-rank="silver">
      <img class="item-container-img added" src="img/silver.jpg" alt="iron" />
      <p class="text added">Серебро</p>
    </div>`;
    chooseRankThirdPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "gold") {
    choosenRankThirdPlayer.innerHTML = `
   <div id="player3" class="item-container" data-rank="gold">
      <img class="item-container-img added" src="img/gold.jpg" alt="iron" />
      <p  class="text added">Золото</p>
    </div>`;
    chooseRankThirdPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "plat") {
    choosenRankThirdPlayer.innerHTML = `
    <div id="player3" class="item-container" data-rank="plat">
      <img class="item-container-img added" src="img/plat.jpg" alt="iron" />
      <p class="text added">Платина</p>
    </div>
    `;
    chooseRankThirdPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "diamond") {
    choosenRankThirdPlayer.innerHTML = `
    <div id="player3" class="item-container" data-rank="diamond">
      <img class="item-container-img added" src="img/diamond.jpg" alt="iron" />
      <p class="text added">Алмаз</p>
    </div>
    `;
    chooseRankThirdPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "asc") {
    choosenRankThirdPlayer.innerHTML = `
    <div id="player3" class="item-container" data-rank="asc">
      <img class="item-container-img added" src="img/asc.jpg" alt="iron" />
      <p class="text added">Аскендант</p>
    </div>
    `;
    chooseRankThirdPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "immo") {
    choosenRankThirdPlayer.innerHTML = `
     <div id="player3" class="item-container" data-rank="immo">
      <img class="item-container-img added" src="img/imm.jpg" alt="iron" />
        <p class="text added">Иммортал</p>
    </div>
    `;
    chooseRankThirdPlayer.classList.remove("show");
  } else if (event.target.dataset.rank === "radiant") {
    choosenRankThirdPlayer.innerHTML = `
    <div id="player3" class="item-container" data-rank="radiant">
      <img class="item-container-img added" src="img/radik.jpg" alt="iron" />
      <p class="text added">Радик</p>
    </div>
   `;
    chooseRankThirdPlayer.classList.remove("show");
  }
});

countBtn.addEventListener("click", function () {
  const chosenRank = document.querySelector(".item-container");
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  const player3 = document.getElementById("player3");

  /*-------player1-------*/

  if (chosenRank.dataset.rank === "iron" && player1.dataset.rank === "iron") {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  } else if (
    chosenRank.dataset.rank === "bronze" &&
    player1.dataset.rank === "bronze"
  ) {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  } else if (
    chosenRank.dataset.rank === "silver" &&
    player1.dataset.rank === "silver"
  ) {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  } else if (
    chosenRank.dataset.rank === "gold" &&
    player1.dataset.rank === "gold"
  ) {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  } else if (
    chosenRank.dataset.rank === "plat" &&
    player1.dataset.rank === "plat"
  ) {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  } else if (
    chosenRank.dataset.rank === "diamond" &&
    player1.dataset.rank === "diamond"
  ) {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  } else if (
    chosenRank.dataset.rank === "asc" &&
    player1.dataset.rank === "asc"
  ) {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  } else if (
    chosenRank.dataset.rank === "immo" &&
    player1.dataset.rank === "immo"
  ) {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  } else if (
    chosenRank.dataset.rank === "radiant" &&
    player1.dataset.rank === "radiant"
  ) {
    counterP1 = counterP1 + 2;
    counterHTMLp1.innerText = counterP1;
  }

  if (
    (chosenRank.dataset.rank === "radiant" &&
      player1.dataset.rank === "immo") ||
    (chosenRank.dataset.rank === "immo" && player1.dataset.rank === "radiant")
  ) {
    counterP1++;
    counterHTMLp1.innerText = counterP1;
  } else if (
    (chosenRank.dataset.rank === "immo" && player1.dataset.rank === "asc") ||
    (chosenRank.dataset.rank === "asc" && player1.dataset.rank === "immo")
  ) {
    counterP1++;
    counterHTMLp1.innerText = counterP1;
  } else if (
    (chosenRank.dataset.rank === "asc" && player1.dataset.rank === "diamond") ||
    (chosenRank.dataset.rank === "diamond" && player1.dataset.rank === "asc")
  ) {
    counterP1++;
    counterHTMLp1.innerText = counterP1;
  } else if (
    (chosenRank.dataset.rank === "diamond" &&
      player1.dataset.rank === "plat") ||
    (chosenRank.dataset.rank === "plat" && player1.dataset.rank === "diamond")
  ) {
    counterP1++;
    counterHTMLp1.innerText = counterP1;
  } else if (
    (chosenRank.dataset.rank === "plat" && player1.dataset.rank === "gold") ||
    (chosenRank.dataset.rank === "gold" && player1.dataset.rank === "plat")
  ) {
    counterP1++;
    counterHTMLp1.innerText = counterP1;
  } else if (
    (chosenRank.dataset.rank === "gold" && player1.dataset.rank === "silver") ||
    (chosenRank.dataset.rank === "silver" && player1.dataset.rank === "gold")
  ) {
    counterP1++;
    counterHTMLp1.innerText = counterP1;
  } else if (
    (chosenRank.dataset.rank === "siver" &&
      player1.dataset.rank === "bronze") ||
    (chosenRank.dataset.rank === "bronze" && player1.dataset.rank === "silver")
  ) {
    counterP1++;
    counterHTMLp1.innerText = counterP1;
  } else if (
    (chosenRank.dataset.rank === "bronze" && player1.dataset.rank === "iron") ||
    (chosenRank.dataset.rank === "iron" && player1.dataset.rank === "bronze")
  ) {
    counterP1++;
    counterHTMLp1.innerText = counterP1;
  }

  /*-------player1 end-------*/
  /*-------player2-------*/

  if (chosenRank.dataset.rank === "iron" && player2.dataset.rank === "iron") {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  } else if (
    chosenRank.dataset.rank === "bronze" &&
    player2.dataset.rank === "bronze"
  ) {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  } else if (
    chosenRank.dataset.rank === "silver" &&
    player2.dataset.rank === "silver"
  ) {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  } else if (
    chosenRank.dataset.rank === "gold" &&
    player2.dataset.rank === "gold"
  ) {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  } else if (
    chosenRank.dataset.rank === "plat" &&
    player2.dataset.rank === "plat"
  ) {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  } else if (
    chosenRank.dataset.rank === "diamond" &&
    player2.dataset.rank === "diamond"
  ) {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  } else if (
    chosenRank.dataset.rank === "asc" &&
    player2.dataset.rank === "asc"
  ) {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  } else if (
    chosenRank.dataset.rank === "immo" &&
    player2.dataset.rank === "immo"
  ) {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  } else if (
    chosenRank.dataset.rank === "radiant" &&
    player2.dataset.rank === "radiant"
  ) {
    counterP2 = counterP2 + 2;
    counterHTMLp2.innerText = counterP2;
  }

  if (
    (chosenRank.dataset.rank === "radiant" &&
      player2.dataset.rank === "immo") ||
    (chosenRank.dataset.rank === "immo" && player2.dataset.rank === "radiant")
  ) {
    counterP2++;
    counterHTMLp2.innerText = counterP2;
  } else if (
    (chosenRank.dataset.rank === "immo" && player2.dataset.rank === "asc") ||
    (chosenRank.dataset.rank === "asc" && player2.dataset.rank === "immo")
  ) {
    counterP2++;
    counterHTMLp2.innerText = counterP2;
  } else if (
    (chosenRank.dataset.rank === "asc" && player2.dataset.rank === "diamond") ||
    (chosenRank.dataset.rank === "diamond" && player2.dataset.rank === "asc")
  ) {
    counterP2++;
    counterHTMLp2.innerText = counterP2;
  } else if (
    (chosenRank.dataset.rank === "diamond" &&
      player2.dataset.rank === "plat") ||
    (chosenRank.dataset.rank === "plat" && player2.dataset.rank === "diamond")
  ) {
    counterP2++;
    counterHTMLp2.innerText = counterP2;
  } else if (
    (chosenRank.dataset.rank === "plat" && player2.dataset.rank === "gold") ||
    (chosenRank.dataset.rank === "gold" && player2.dataset.rank === "plat")
  ) {
    counterP2++;
    counterHTMLp2.innerText = counterP2;
  } else if (
    (chosenRank.dataset.rank === "gold" && player2.dataset.rank === "silver") ||
    (chosenRank.dataset.rank === "silver" && player2.dataset.rank === "gold")
  ) {
    counterP2++;
    counterHTMLp2.innerText = counterP2;
  } else if (
    (chosenRank.dataset.rank === "siver" &&
      player2.dataset.rank === "bronze") ||
    (chosenRank.dataset.rank === "bronze" && player2.dataset.rank === "silver")
  ) {
    counterP2++;
    counterHTMLp2.innerText = counterP2;
  } else if (
    (chosenRank.dataset.rank === "bronze" && player2.dataset.rank === "iron") ||
    (chosenRank.dataset.rank === "iron" && player2.dataset.rank === "bronze")
  ) {
    counterP2++;
    counterHTMLp2.innerText = counterP2;
  }

  /*-------player2 end-------*/

  /*-------player3-------*/

  if (chosenRank.dataset.rank === "iron" && player3.dataset.rank === "iron") {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  } else if (
    chosenRank.dataset.rank === "bronze" &&
    player3.dataset.rank === "bronze"
  ) {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  } else if (
    chosenRank.dataset.rank === "silver" &&
    player3.dataset.rank === "silver"
  ) {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  } else if (
    chosenRank.dataset.rank === "gold" &&
    player3.dataset.rank === "gold"
  ) {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  } else if (
    chosenRank.dataset.rank === "plat" &&
    player3.dataset.rank === "plat"
  ) {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  } else if (
    chosenRank.dataset.rank === "diamond" &&
    player3.dataset.rank === "diamond"
  ) {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  } else if (
    chosenRank.dataset.rank === "asc" &&
    player3.dataset.rank === "asc"
  ) {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  } else if (
    chosenRank.dataset.rank === "immo" &&
    player3.dataset.rank === "immo"
  ) {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  } else if (
    chosenRank.dataset.rank === "radiant" &&
    player3.dataset.rank === "radiant"
  ) {
    counterP3 = counterP3 + 2;
    counterHTMLp3.innerText = counterP3;
  }

  if (
    (chosenRank.dataset.rank === "radiant" &&
      player3.dataset.rank === "immo") ||
    (chosenRank.dataset.rank === "immo" && player3.dataset.rank === "radiant")
  ) {
    counterP3++;
    counterHTMLp3.innerText = counterP3;
  } else if (
    (chosenRank.dataset.rank === "immo" && player3.dataset.rank === "asc") ||
    (chosenRank.dataset.rank === "asc" && player3.dataset.rank === "immo")
  ) {
    counterP3++;
    counterHTMLp3.innerText = counterP3;
  } else if (
    (chosenRank.dataset.rank === "asc" && player3.dataset.rank === "diamond") ||
    (chosenRank.dataset.rank === "diamond" && player3.dataset.rank === "asc")
  ) {
    counterP3++;
    counterHTMLp3.innerText = counterP3;
  } else if (
    (chosenRank.dataset.rank === "diamond" &&
      player3.dataset.rank === "plat") ||
    (chosenRank.dataset.rank === "plat" && player3.dataset.rank === "diamond")
  ) {
    counterP3++;
    counterHTMLp3.innerText = counterP3;
  } else if (
    (chosenRank.dataset.rank === "plat" && player3.dataset.rank === "gold") ||
    (chosenRank.dataset.rank === "gold" && player3.dataset.rank === "plat")
  ) {
    counterP3++;
    counterHTMLp3.innerText = counterP3;
  } else if (
    (chosenRank.dataset.rank === "gold" && player3.dataset.rank === "silver") ||
    (chosenRank.dataset.rank === "silver" && player3.dataset.rank === "gold")
  ) {
    counterP3++;
    counterHTMLp3.innerText = counterP3;
  } else if (
    (chosenRank.dataset.rank === "siver" &&
      player3.dataset.rank === "bronze") ||
    (chosenRank.dataset.rank === "bronze" && player3.dataset.rank === "silver")
  ) {
    counterP3++;
    counterHTMLp3.innerText = counterP3;
  } else if (
    (chosenRank.dataset.rank === "bronze" && player3.dataset.rank === "iron") ||
    (chosenRank.dataset.rank === "iron" && player3.dataset.rank === "bronze")
  ) {
    counterP3++;
    counterHTMLp3.innerText = counterP3;
  }

  /*-------player3 end-------*/
});
