const categories = document.querySelectorAll(".item");

console.log("Number of categories: ", categories.length);

categories.forEach(element =>{
    let categoryName = element.querySelector("h2").textContent;
    let elements = element.querySelectorAll("li");

    console.log("Category: ", categoryName);
    console.log("Elements: ", elements.length);
});