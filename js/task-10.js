function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');

document.querySelector('[data-create]').addEventListener('click', () => insertBoxes(inputRef.value));

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function insertBoxes(amount){
  destroyBoxes();
  boxesRef.insertAdjacentHTML('beforeend', createBoxes(amount));
}

function createBoxes(amount){
  const boxesArray = [];
  for(let i = 0; i < amount; i += 1){
    let box = document.createElement('div');
    box.style.width = 30 + i * 10 + 'px';
    box.style.height = '30px';
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
  }
  return boxesArray.map(b => b.outerHTML).join('');
}

function destroyBoxes(){
  boxes.innerHTML = "";
}