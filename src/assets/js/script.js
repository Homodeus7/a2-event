function scrollToSection(selector) {
  console.log(window.screen.width);
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

function hideMenu() {
  document.getElementById("menu__toggle").checked = false;
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
const closeCardsPopup = Array.from(
  document.querySelectorAll(".popup_card")
).forEach((element) => {
  element.addEventListener("click", clickExit);
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
