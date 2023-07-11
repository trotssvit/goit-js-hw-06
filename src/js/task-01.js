// const categoriesList = document.querySelector('#categories');
// const categories = categoriesList.querySelectorAll('li.item');

// console.log('Number of categories:', categories.length);

// categories.forEach(category => {
//     const title = category.querySelector('h2').textContent;
//     const items = category.querySelectorAll('li');

//     console.log('Category:', title);
//     console.log('Number of items:', items.length);
// });
const categoriesList = document.querySelector("#categories");
const categories = categoriesList.children;

console.log("Number of categories:", categories.length);


Array.from(categories).forEach((category) => {
    const categoryTitle = category.firstElementChild.textContent;
    const categoryElements = category.lastElementChild.children;

    console.log("Category:", categoryTitle);
    console.log("Elements:", categoryElements.length);
});