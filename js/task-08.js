const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { 
            email: {value: email},
            password :{value: password}
        }
      } = event.currentTarget;

    if (email === "" && password === "") {
        alert("Please fill in all the fields!");
    }
    const elements = {email, password};

    console.log(elements)
    event.currentTarget.reset();
})