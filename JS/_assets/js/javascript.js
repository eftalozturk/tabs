const btnSelect = document.querySelectorAll(".btn-tabs > button");
const text = document.querySelectorAll(".text");
btnSelect.forEach((tab, index) => {
//   if (kural = true) {
//       return
//   }
  tab.addEventListener("click", () => {
    text.forEach((text) => {
      text.classList.remove("is-active");
    });
    btnSelect.forEach((tab) => {
      tab.classList.remove("is-active");
    });
    setActive(index)
  });
});

function setActive(index) {
  text[index].classList.add("is-active");
  btnSelect[index].classList.add("is-active");
}

window.addEventListener("load", () => {
    setActive(0)
});
