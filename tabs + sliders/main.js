const tab = document.querySelectorAll(".tab");
const tabText = document.querySelectorAll(".tab-content");

tab.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let tab1 = item;
    let tabId = tab1.getAttribute("data-tab");
    let selectedTab = document.querySelector(tabId);

    if (!tab1.classList.contains("active")) {
      tab.forEach(function (item) {
        item.classList.remove("active");
      });

      tabText.forEach(function (item) {
        item.classList.remove("active");
      });

      tab1.classList.add("active");
      selectedTab.classList.add("active");
    }
  });
}



//----------------slide1------------------------

const slider = document.querySelector("#slider");
const sliderElements = Array.from(slider.children);

const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");

sliderElements.forEach(function (slide, index) {
  // если индекс слайда не == 0 то есть не первый то тогда скрываем нахер
  if (index !== 0) slide.classList.add("hidden");

  // задаем индексы для каждого элемента по дефолту
  slide.dataset.index = index;

  // добавляем data атрибут для первого элемента
  sliderElements[0].setAttribute("data-active", "");

  // если по слайду кликнуть то
  slide.addEventListener("click", function () {
    // скрываем текущий слайдq
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");

    // находим индекс нового слайда просто прибавляя 1 к индексу
    const nextSlideIndex = index + 1 === sliderElements.length ? 0 : index + 1;

    // получаем в константу через querySelector атрибут индекса чтобы найти слайд
    const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
    // и для него удаляем класс hidden чтобы он появился
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
  });
});

btnPrev.onclick = function () {
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;

  // скрываем текущий слайд
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // показываем предыдущий слайд убирая -1 к текущему
  const prevSlideIndex =
    currentSlideIndex == 0 ? sliderElements.length - 1 : currentSlideIndex - 1;

  const prevSlide = slider.querySelector(`[data-index='${prevSlideIndex}']`);
  prevSlide.classList.remove("hidden");
  prevSlide.setAttribute("data-active", "");
};

btnNext.onclick = function () {
  const currentSlide = slider.querySelector("[data-active]");
  const currentSlideIndex = +currentSlide.dataset.index;

  // скрываем текущий слайд
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // показываем след слайд добавляя +1 к текущему
  const nextSlideIndex =
    currentSlideIndex + 1 === sliderElements.length ? 0 : currentSlideIndex + 1;
  const nextSlide = slider.querySelector(`[data-index='${nextSlideIndex}']`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
};


//--------------------slider2------------------------------

const slider2 = document.querySelector("#slider2");
const sliderElements2 = Array.from(slider2.children);

const btnPrev2 = document.getElementById("btnPrev2");
const btnNext2 = document.getElementById("btnNext2");

sliderElements2.forEach(function (slide, index) {
  // если индекс слайда не == 0 то есть не первый то тогда скрываем нахер
  if (index !== 0) slide.classList.add("hidden");

  // задаем индексы для каждого элемента по дефолту
  slide.dataset.index = index;

  // добавляем data атрибут для первого элемента
  sliderElements2[0].setAttribute("data-active", "");

  // если по слайду кликнуть то
  slide.addEventListener("click", function () {
    // скрываем текущий слайдq
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");

    // находим индекс нового слайда просто прибавляя 1 к индексу
    const nextSlideIndex2 = index + 1 === sliderElements2.length ? 0 : index + 1;

    // получаем в константу через querySelector атрибут индекса чтобы найти слайд
    const nextSlide2 = slider2.querySelector(`[data-index='${nextSlideIndex2}']`);
    // и для него удаляем класс hidden чтобы он появился
    nextSlide2.classList.remove("hidden");
    nextSlide2.setAttribute("data-active", "");
  });
});

btnPrev2.onclick = function () {
  const currentSlide2 = slider2.querySelector("[data-active]");
  const currentSlideIndex2 = +currentSlide2.dataset.index;

  // скрываем текущий слайд
  currentSlide2.classList.add("hidden");
  currentSlide2.removeAttribute("data-active");

  // показываем предыдущий слайд убирая -1 к текущему
  const prevSlideIndex2 =
    currentSlideIndex2 == 0 ? sliderElements2.length - 1 : currentSlideIndex2 - 1;

  const prevSlide2 = slider2.querySelector(`[data-index='${prevSlideIndex2}']`);
  prevSlide2.classList.remove("hidden");
  prevSlide2.setAttribute("data-active", "");
};

btnNext2.onclick = function () {
  const currentSlide2 = slider2.querySelector("[data-active]");
  const currentSlideIndex2 = +currentSlide2.dataset.index;

  // скрываем текущий слайд
  currentSlide2.classList.add("hidden");
  currentSlide2.removeAttribute("data-active");

  // показываем след слайд добавляя +1 к текущему
  const nextSlideIndex2 =
    currentSlideIndex2 + 1 === sliderElements2.length ? 0 : currentSlideIndex2 + 1;
  const nextSlide2 = slider2.querySelector(`[data-index='${nextSlideIndex2}']`);
  nextSlide2.classList.remove("hidden");
  nextSlide2.setAttribute("data-active", "");
};

//--------------------slider3------------------------------

const slider3 = document.querySelector("#slider3");
const sliderElements3 = Array.from(slider3.children);

const btnPrev3 = document.getElementById("btnPrev3");
const btnNext3 = document.getElementById("btnNext3");

sliderElements3.forEach(function (slide, index) {
  // если индекс слайда не == 0 то есть не первый то тогда скрываем нахер
  if (index !== 0) slide.classList.add("hidden");

  // задаем индексы для каждого элемента по дефолту
  slide.dataset.index = index;

  // добавляем data атрибут для первого элемента
  sliderElements3[0].setAttribute("data-active", "");

  // если по слайду кликнуть то
  slide.addEventListener("click", function () {
    // скрываем текущий слайдq
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");

    // находим индекс нового слайда просто прибавляя 1 к индексу
    const nextSlideIndex3 = index + 1 === sliderElements3.length ? 0 : index + 1;

    // получаем в константу через querySelector атрибут индекса чтобы найти слайд
    const nextSlide3 = slider3.querySelector(`[data-index='${nextSlideIndex3}']`);
    // и для него удаляем класс hidden чтобы он появился
    nextSlide3.classList.remove("hidden");
    nextSlide3.setAttribute("data-active", "");
  });
});

btnPrev3.onclick = function () {
  const currentSlide3 = slider3.querySelector("[data-active]");
  const currentSlideIndex3 = +currentSlide3.dataset.index;

  // скрываем текущий слайд
  currentSlide3.classList.add("hidden");
  currentSlide3.removeAttribute("data-active");

  // показываем предыдущий слайд убирая -1 к текущему
  const prevSlideIndex3 =
    currentSlideIndex3 == 0 ? sliderElements3.length - 1 : currentSlideIndex3 - 1;

  const prevSlide3 = slider3.querySelector(`[data-index='${prevSlideIndex3}']`);
  prevSlide3.classList.remove("hidden");
  prevSlide3.setAttribute("data-active", "");
};

btnNext3.onclick = function () {
  const currentSlide3 = slider3.querySelector("[data-active]");
  const currentSlideIndex3 = +currentSlide3.dataset.index;

  // скрываем текущий слайд
  currentSlide3.classList.add("hidden");
  currentSlide3.removeAttribute("data-active");

  // показываем след слайд добавляя +1 к текущему
  const nextSlideIndex3 =
    currentSlideIndex3 + 1 === sliderElements3.length ? 0 : currentSlideIndex3 + 1;
  const nextSlide3 = slider3.querySelector(`[data-index='${nextSlideIndex3}']`);
  nextSlide3.classList.remove("hidden");
  nextSlide3.setAttribute("data-active", "");
};
