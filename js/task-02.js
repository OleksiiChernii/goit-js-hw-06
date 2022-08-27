const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


ingredients.forEach(element => {
  let listItem = document.createElement("li");
  listItem.innerHTML = element;
  listItem.classList.add("item");
  
  document.querySelector("#ingredients").append(listItem);
})
