const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
    const enteredValue = validationInput.value;
    const requiredLength = Number(validationInput.getAttribute("data-length"));

    if (enteredValue.length === requiredLength) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    } else {
        validationInput.classList.remove("valid");
        validationInput.classList.add("invalid");
    }
});