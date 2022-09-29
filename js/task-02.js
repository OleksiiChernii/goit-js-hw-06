const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsElements = ingredients.map(ingredient => {
  let element = document.createElement("li");
  element.innerHTML = ingredient;
  element.classList.add("item");
  
  return element;
})

document.querySelector("#ingredients").append(...ingredientsElements);