let myTimeout;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    myTimeout = setTimeout(changeBackgroundColor, 1000);
}

document.querySelector("[data-start]").addEventListener("click", () => {
    document.querySelector("[data-start]").disabled = true;
    document.querySelector("[data-stop]").disabled = false;
    changeBackgroundColor()
  });

document.querySelector("[data-stop]").addEventListener("click", () => {
    document.querySelector("[data-stop]").disabled = true;
    document.querySelector("[data-start]").disabled = false;
    clearTimeout(myTimeout);
  });