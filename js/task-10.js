function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxes = document.querySelector('#boxes');

document.querySelector('[data-create]').addEventListener('click', ()=>{
  createBoxes(document.querySelector('input').value);
})

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function createBoxes(amount){
  destroyBoxes();
  for(let i = 0; i < amount; i += 1){
    let box = document.createElement('div');
    box.style.width = 30 + i * 10 + 'px';
    box.style.height = '30px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.insertAdjacentElement('beforeend', box);
  }
}

function destroyBoxes(){
  boxes.innerHTML = "";
}