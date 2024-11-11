document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); 

   
    const searchInput = document.querySelector(".form-control").value.trim();
    if (searchInput) {
        fetchFood(searchInput);
    }
});

const fetchFood = (query) => {
   
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => {
            displayProduct(data); 
        });
};

const displayProduct = (foods) => {
    const container = document.getElementById("main-container");
    container.innerHTML = ""; 

    if (foods.meals) { 
        foods.meals.forEach(food => {
            const div = document.createElement("div");
            div.className = "product";
            div.innerHTML = `
                <img class="food-img" src="${food.strMealThumb}" alt="${food.strMeal}">
                <h2>${food.strMeal}</h2>
            `;
            container.appendChild(div);
        });
    } else {
        // container.innerHTML = "<p>No meals found</p>";
        const h1 = document.createElement("h1");
        h1.className = "h1-con"
        h1.textContent = "No meals found"
        container.appendChild(h1);
    }
};
