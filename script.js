let baseBlock = document.getElementById("baseBlock");
let random = document.getElementById('random');
let min = 1;
let max = 42;

async function fetching() {
  let data = await fetch("https://rickandmortyapi.com/api/character");
  let newData = await data.json();
  let results = await newData["results"];

  console.log(results);

for (let key in results) {
    let newElem = document.createElement("div");
    newElem.className = "newElement";
    baseBlock.appendChild(newElem);
    newElem.innerHTML = `Name: ${results[key]["name"]} </br> Status: ${results[key]["status"]} </br> Species: ${results[key]["species"]} <img src= ${results[key]["image"]}>`;
  }
}

fetching();


async function getRandom() {


  let result = await Math.floor(Math.random() * (max - min + 1) + min)
  console.log(result)

  let api = await fetch(`https://rickandmortyapi.com/api/character?page=${result}`);
  let newApi = await api.json();
  let resultsApi = await newApi['results']
  console.log(resultsApi)

  for (let key in resultsApi) {
    let newElem = document.createElement("div");
    newElem.className = "newElement";
    baseBlock.appendChild(newElem);
    newElem.innerHTML = `Name: ${resultsApi[key]["name"]} </br> Status: ${resultsApi[key]["status"]} </br> Species: ${resultsApi[key]["species"]} <img src= ${resultsApi[key]["image"]}>`;
  }
}

random.addEventListener('click', getRandom)

