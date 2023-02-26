const getMeal = (searchMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showGetMealData(data.meals));
};

const showGetMealData = (meal) => {
  let getId = document.getElementById("show-data");
  getId.innerText = "";
  meal.map((newMeal) => {
    let createDiv = document.createElement("div");
    createDiv.innerHTML = `
    <div class="col">
      <div class="card">
        <img src="${newMeal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${newMeal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>

        <!-- Button trigger modal -->
<button onclick = "loadDetails(${newMeal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#meal-details">
  Food Details
</button>
      </div>

    </div>

    
   
        `;
    getId.appendChild(createDiv);
  });
};

const searchButton = () => {
  let getValue = document.getElementById("input-value").value;

  getMeal(getValue);
};

const loadDetails = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.meals[0]));
};

const displayDetails = (meal) => {
  document.getElementById("exampleModalLabel").innerText = meal.strMeal;
  let mealBody = document.getElementById("meal-body");
  mealBody.innerHTML = `
    <img class = "img-fluid" src="${meal.strMealThumb}"/>
    <p>Category:${meal.strCategory}</p>
    <p>Area:${meal.strArea}</p>
    
    `;
};

getMeal("fish");
