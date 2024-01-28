$("#showbtn").on("click", function () {
  $(".menu").toggleClass("d-none")
});

async function GetData() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    ); 
    data = await response.json()
    console.log(data)
    DisplayData()
}
GetData()
let content = document.getElementById("body")

function DisplayData() {
    let div = ``
    for (let i = 0; i < data.meals.length; i++){
        div += `<div class="col-lg-3">
        <div class="position-relative layer1 ">
        <img src="${data.meals[i].strMealThumb}" class="w-100 rounded-2" alt="">
        <div class="position-absolute start-0 top-0 end-0 bottom-0 bg-offwhite d-flex layer justify-content-center align-items-center   " onclick="getmealdeatalis(${data.meals[i].idMeal})">
            <p class="fw-bold">${data.meals[i].strMeal}</p>
        </div>

        </div>

    </div>`;
    }
    content.innerHTML=div
    
}

async function getmealdeatalis(mealid) {
let response2 =
  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}
`);
    data2 = await response2.json()
    console.log(data2)


displaymealdetalis()


}

function displaymealdetalis() {
    
let div2 = `    <div class="col-lg-6 ">
        <h1 class="float-end">${data2.meals[0].strMeal}</h1>
        <img src="${data2.meals[0].strMealThumb}" alt="" class="w-100">
        

    </div>
    <div class="col-lg-6">
        <h2>Instructions</h2>
        <p>${data2.meals[0].strInstructions}</p>
        <h3>Area:${data2.meals[0].strArea}</h3>
        <button type="button" class="btn btn-primary">${data2.meals[0].strIngredient1}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient2}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient3}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient4}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient5}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient6}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient7}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient8}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient9}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient10}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient11}</button>
<button type="button" class="btn btn-primary m-1">${data2.meals[0].strIngredient12}</button>
<button type="button" class="btn btn-success m-1"><a href="${data2.meals[0].strSource}" class="text-decoration-none text-light">Source</a></button>
<button type="button" class="btn btn-danger m-1"><a href="${data2.meals[0].strYoutube}" class="text-decoration-none text-light">Youtube</a></button>

 
    </div>`;
    content.innerHTML = div2;

}
let namesearch = document.getElementById("namesearch");
let lettersearch = document.getElementById("lettersearch");

function diplaysearch() {
    div3 = `    `;
    content.innerHTML = div3
    $("#search").removeClass("d-none")
}


async function mealname(name) {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    data = await response.json()
    DisplayData()
 }

namesearch.addEventListener("keyup", function () {
    mealname(namesearch.value)
})

async function mealletter(letter) {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    data = await response.json();
    DisplayData()
}
lettersearch.addEventListener("keyup", function () {
    mealletter(lettersearch.value)
})

function displayarea() {
 let div = ` `
    content.innerHTML = div
    areadata()
}

async function areadata() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    dataarea = await response.json()
    console.log(dataarea)
    displayareadata()
   
}


function displayareadata() {
    let div=``
    for (let i = 0; i < dataarea.meals.length; i++){
        div += `    <div class="col-lg-3" onclick="areameals(${dataarea.meals[i].strArea})">
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h3 class="text-light">${dataarea.meals[i].strArea}</h3>
    </div>
</div>`;
    }
        content.innerHTML = div;

}

function displaying() {
    let div = ``
    content.innerHTML = div
    ingdata()
}
async function ingdata() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    data = await response.json()
    console.log(data)
    displaydataing()
   
}
function displaydataing() {
    let div = ``
    for (let i = 0; i < 21; i++){
        div += `    <div  class="col-lg-3 text-light text-center onclick="getIngredientsMeals(${data.meals[i].strIngredient})"">
<i class="fa-solid fa-drumstick-bite fa-4x" style="color: #ffffff;"></i>
    <h3>${data.meals[i].strIngredient}</h3>
    <p>${data.meals[i].strDescription}</p>
</div>`;
    }
    content.innerHTML=div
}
async function getIngredientsMeals(ing) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`
  );
  response = await response.json();
  alert("1111");
}

function contact() {
    let div = `<div class="col-lg-6 d-flex flex-column">
        <input type="text" placeholder="Enter your Name" class="form-control m-1">
        <input type="number" placeholder="Enter your phone" class="form-control m-1">
        <input type="password" placeholder=" Enter your Password" class="form-control m-1">
    </div>
    <div class=" col-lg-6 d-flex flex-column">
     <input type="email" placeholder="Enter your mail" class=" form-control m-1">
     <input type="number" placeholder="Enter your age" class="form-control m-1">
     <input type="password" placeholder="ReEnter your password" class="form-control m-1">   
    </div>
    <button type="button" class="btn btn-danger">Submit</button>
`;
    content.innerHTML=div
}

function diplaaycat() {
    div = ``
    content.innerHTML = div
    catdata()
}
async function catdata() {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    data = await response.json()
    console.log(data)
    showingcat()
}
catdata()
function showingcat() {
    let div = `` 
    for (let i = 0; i < data.categories.length; i++){
        div += `<div class="col-lg-3 text-dark">
        <div class="position-relative layer1 overflow-hidden">
        <img src="${data.categories[i].strCategoryThumb}" class="w-100 rounded-2" alt="">
        <div class="position-absolute start-0 top-0 end-0 bottom-0 bg-offwhite d-flex justify-content-center layer overflow-hidden align-items-center" >
            <h3>${data.categories[i].strCategory}</h3>
            <br>
        <p >${data.categories[i].strCategoryDescription}</p>
        </div>

        </div>
        </div>`;
    }
    content.innerHTML=div
}
