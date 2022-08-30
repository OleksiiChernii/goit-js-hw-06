function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColor = document.querySelector('.change-color');
buttonColor.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  document.querySelector('.color').textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
})