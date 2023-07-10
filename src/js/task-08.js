// console.log(inputEmail)
// function newClass() {
//     let inputemail = document.getElements('input[type="email"]');
//     inputemail.classList.add('js-input')
//     console.log(inputemail)
// }
// let h = document.getElementsByName("input");
// for (let value of h) value.classList.add("js-input");
// console.log(value)

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields.");
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
        };

        console.log(formData);

        loginForm.reset();
    }
});
// function onFormSubmit(event) {
//     event.preventDefault();
// }

// inputEmail.onsubmit = function() {
//     let emailVal = inputEmail.value
//         // emailVal = inputPassword.value;

//     inputEmail.forEach(function(input) {
//         if (input.value === '') {
//             input.classlist.add('alert ')
//             console.log('всі поля мають бути заповнені')
//         } else {
//             input.classlist.remove('alert ')

//         }
//     })









//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         console.log('onFormSubmit -> name', name);
//         console.log('onFormSubmit -> value', value);
//     })

// }