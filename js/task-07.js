const fontSizeControl = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

textRef.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input', ()=>{
    textRef.style.fontSize = fontSizeControl.value + 'px';
})