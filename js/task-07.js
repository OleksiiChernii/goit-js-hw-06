const fontSizeControl = document.querySelector('#font-size-control');

fontSizeControl.addEventListener('input', ()=>{
    document.querySelector('#text').style.fontSize = fontSizeControl.value + 'px';
})