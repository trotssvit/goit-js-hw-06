const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatoes',
    'Herbs',
    'Condiments',
];
const list = document.querySelector('#ingredients')
const li = ingredients.map(name => {
    const li = document.createElement('li');
    li.classList.add('item')
    li.textContent = name;
    return li
});

console.log(li);
list.append(...li);