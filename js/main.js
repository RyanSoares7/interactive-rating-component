const buttons = document.querySelectorAll(".button");
const submit = document.querySelector(".submit");
const avaliationSpan = document.querySelector(".your-avaliation");
const containerPrincipal = document.querySelector("#component-principal");
const containerThankYou = document.querySelector("#component-thank-you");

buttonChoice = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    buttons[i].classList.add("active");
    for (let j = 0; j < buttons.length; j++) {
      if (j !== i) {
        buttons[j].classList.remove("active");
      }
    }
    buttonChoice = buttons[i].textContent;
    return buttonChoice;
  });
}

submit.addEventListener("click", () => {
  if (buttonChoice) {
    containerPrincipal.style.display = "none";
    avaliationSpan.textContent = `You selected ${buttonChoice} out of ${buttons.length}`;
    containerThankYou.style.display = "flex";
  } else {
    alert("Selecione algum número de avaliação");
  }
});
