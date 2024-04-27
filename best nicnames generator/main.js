const nicknames = [
  "ПуЛи_От_БаБуЛи",
  "ПрИвЕт_В_ПрИцЕлЕ_AwP ",
  "4ekHyTbIu*",
  "FapToBbIu^ ",
  "oXoTHUK_3A_HACKAMU  ",
  "ОбкуренныйКоТe4Ka  ",
  "БаБуШкИн_ак-47",
  "3a4eM_MHE_HuK  ",
  "VIP Sex Energy VIP",
  "Пульку_В_Попульку ",
  "3aMy4y_c_keM_3axo4y",
  "Ho4Hou_BoJl4apa",
  "roBopuTb_He_DeJlaTb",
  "TTpaBblu_HoCoK",
  "Лохматая Волчица",
  "BJIacTeJIuH_KpeBeToK",
  "DeTka_TToB3pocJleJla",
  "Я королева,а вы простите кто?",
  "я_не_трус_но_я_боюсь",
  "Ежик на скутере",
  "EcJLu CEKCA B }|{u3Hu HET, CgEJLau CAM Ce6E MuHeT",
  "Xo4y_o6paTHo_B_wkoJly ",
  "eM_KapToLLLKy c_4ecHoKoM",
  "Девчонка в наушниках",
  "3JIou_4uTeP",
  "Следующая остановка – сердце",
  "I’m XupypГ @ from RUSSIA.",
  "Носок Судьбы",
  "VIP【Lifeboy】",
  "ПоцелуйДемона",
  "々 YOUR BAD 々 I am your Dad 々",
  "Gо в PоSteльKy?",
  "сын автобусной остановки",
  "ваша мама фантастика xD",
  "zxcын богини 𓆩 𓆪",
  "[SтRоGo По}{yЙ нА ФsЁ]",
  "ВсЕ УмРуТ а Я гРеЙфРуКт",
  "₡₳Х₳₱Ǿ₭",
  "♛ĂʟӍάƷ♛ツ",
  "Сын пенсии",
];

const getBtn = document.getElementById("getNicknameBtn");
const outputNickname = document.getElementById("outputNickname");

getBtn.onclick = () => {
  const randomNum = Math.floor(Math.random() * nicknames.length);
  const randomNickname = nicknames[randomNum];

  outputNickname.innerText = randomNickname;
};
