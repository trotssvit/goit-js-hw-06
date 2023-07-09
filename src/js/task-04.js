let valueElement = document.querySelector('#value');
let decrement = document.querySelector('button[data-action="decrement"]');
let increment = document.querySelector('button[data-action="increment"]');
// console.log(increment);
let counterValue = 0;
valueElement.textContent = counterValue;

decrement.addEventListener("click", function() {
    let output = document.querySelector('#value');
    let counterValue = output.innerHTML - 1;
    output.innerHTML = counterValue;
    console.log(output)
});
increment.addEventListener("click", function() {
    let output = document.querySelector('#value');
    let counterValue = Number(output.innerHTML) + 1;
    output.innerHTML = counterValue;
    console.log(output)
})