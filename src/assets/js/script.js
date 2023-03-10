function scrollToSection(selector) {
  let yOffset;
  if (window.screen.width < 780) {
    yOffset = -30;
  } else {
    yOffset = -58.5;
  }
  const element = document.querySelector(selector);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

// setTimeout(() => {
//     document.getElementById('loader').remove()
// }, 5100);

function openPopup(id) {
  document.body.style.overflow = "hidden";
  document.querySelector(`#${id}`).classList.remove("hidden");
}

const servicesItems = document.querySelectorAll(".popup2_content .popup_card");
servicesItems.forEach((item) =>
  item.addEventListener("click", () => {
    closePopup(true);
    scrollToSection(".section6");
  })
);

const menuMobileItems = document.querySelectorAll(".menu__item");
menuMobileItems.forEach((item) =>
  item.addEventListener("click", () => {
    hideMenu();
  })
);

function hideMenu() {
  document.getElementById("menu__toggle").checked = false;
}

function closePopup(force) {
  if (
    event.target.classList[0] !== "popup_body" &&
    event.target.tagName.toLowerCase() !== "button" &&
    !force
  ) {
    return;
  }
  document.body.style.overflow = "";
  document
    .querySelectorAll(".popup")
    .forEach((elem) => elem.classList.add("hidden"));
}

const clickExit = (evt) => {
  closePopup(evt.target.closest(".popup"));
};
const exit = Array.from(document.querySelectorAll(".popup__exit")).forEach(
  (element) => {
    element.addEventListener("click", clickExit);
  }
);

const closePopupOnBtn = Array.from(
  document.querySelectorAll(".popup_btn")
).forEach((element) => {
  element.addEventListener("click", clickExit);
});

const closeCardsPopup = Array.from(
  document.querySelectorAll(".popup_card")
).forEach((element) => {
  element.addEventListener("click", clickExit);
});

//validation to form
const input = document.body.querySelector(".phone");

input.addEventListener("keypress", (evt) => {
  if (evt.keyCode < 47 || evt.keyCode > 57) {
    evt.preventDefault();
  }
});
input.addEventListener("focus", () => {
  if (input.value.length === 0) {
    input.value = "+7\u00A0";
    input.selectionStart = input.value.length;
  }
});
let old = 0;
input.onkeydown = function () {
  let curLen = input.value.length;
  if (curLen < old) {
    old--;
    return;
  }
  if (curLen == 3) input.value = input.value + "(";
  if (curLen == 7) input.value = input.value + ")\u00A0";
  if (curLen == 12) input.value = input.value + "-";
  if (curLen == 15) input.value = input.value + "-";
  old++;
};
input.addEventListener("click", (evt) => {
  if (input.selectionStart < 2) {
    input.selectionStart = input.value.length;
  }
  if (evt.key === "Backspace" && input.value.length <= 2) {
    evt.preventDefault();
  }
});
input.addEventListener("blur", () => {
  if (input.value === "+7") {
    input.value = "";
  }
});
input.addEventListener("keydown", (evt) => {
  if (evt.key === "Backspace" && input.value.length <= 2) {
    evt.preventDefault();
  }
});

let inputs = document.querySelectorAll(".input__file");
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector(".input-file-btn").innerText;
  input.addEventListener("change", function (e) {
    let countFiles = "";
    if (this.files && this.files.length >= 1) countFiles = this.files.length;

    if (countFiles)
      label.querySelector(".input-file-btn").innerText =
        "Выбрано файлов: " + countFiles;
    else label.querySelector(".input-file-btn").innerText = labelVal;
  });
});

const fileName = document.querySelector(".file_name");
const inputFile = document.querySelector('input[type="file"]');
const textarea = document.querySelector("textarea");
const inputText = document.querySelector('input[type="text"]');
const inputEmail = document.querySelector('input[type="email"]');
const inputTel = document.querySelector('input[type="tel"]');

function clearForm() {
  fileName.innerText = "";
  inputFile.value = "";
  textarea.value = "";
  inputText.value = "";
  inputText.value = "";
  inputEmail.value = "";
  inputTel.value = "";
}

// let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
// let popup = document.querySelector('.popup'); // Само окно
// let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
// let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

// openPopupButtons.forEach((button) => { // Перебираем все кнопки
//   button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//       e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//       popupBg.classList.add('active'); // Добавляем класс 'active' для фона
//       popup.classList.add('active'); // И для самого окна
//   })
// });

// document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//   if(e.target === popupBg) { // Если цель клика - фот, то:
//       popupBg.classList.remove('active'); // Убираем активный класс с фона
//       popup.classList.remove('active'); // И с окна
//   }
// });
