let timeoutVariable;
//let counterColorChange = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  timeoutVariable = setTimeout(changeBackgroundColor, 1000);
  //counterColorChange += 1;
  //console.log(counterColorChange);
}

document.querySelector('[data-start]').addEventListener('click', () => {
  document.querySelector('[data-start]').disabled = true;
  document.querySelector('[data-stop]').disabled = false;
  changeBackgroundColor();
});

document.querySelector('[data-stop]').addEventListener('click', () => {
  document.querySelector('[data-stop]').disabled = true;
  document.querySelector('[data-start]').disabled = false;
  clearTimeout(timeoutVariable);
  //counterColorChange = 0;
});
