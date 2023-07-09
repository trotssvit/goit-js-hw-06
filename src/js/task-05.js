const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
// console.log(nameInput)

nameInput.addEventListener("input", () => {
    const inputValue = nameInput.value.trim();

    if (inputValue !== "") {
        nameOutput.textContent = inputValue;
    } else {
        nameOutput.textContent = "Anonymous";
    }
});