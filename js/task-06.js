const validationInput = document.querySelector('#validation-input');
const dataLength = validationInput.getAttribute('data-length');

console.log(dataLength)

validationInput.addEventListener('blur', () => {
    (validationInput.value.length >= dataLength)
        ? validClasses(validationInput)
        : invalidClasses(validationInput);
});

function validClasses(input){
    input.classList.add('valid');
    input.classList.remove('invalid');
}

function invalidClasses(input){
    input.classList.add('invalid');
    input.classList.remove('valid');
}