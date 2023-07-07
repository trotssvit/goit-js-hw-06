const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('li');

    console.log('Category:', title);
    console.log('Number of items:', items.length);
});