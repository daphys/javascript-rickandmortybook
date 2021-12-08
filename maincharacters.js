let baseBlock = document.getElementById("baseBlock");

async function mainc(){
    let data = await fetch('https://rickandmortyapi.com/api/character')
    let respData = await data.json();
    let results = await respData["results"];

    let sdata = await fetch('https://rickandmortyapi.com/api/character')
    let srespData = await sdata.json();
    let sresults = await srespData["results"];

    console.log(sresults)

    let a = [results[0] , results[1], results[2], results[3], results[4]];
    console.log(a)



    for(let key in a){
        let newElem = document.createElement("div");
        newElem.className = "newElement";
        baseBlock.appendChild(newElem);
        newElem.innerHTML = `Name: ${results[key]["name"]} </br> Status: ${results[key]["status"]} </br> Species: ${results[key]["species"]} <img src= ${results[key]["image"]}>`;
    
    }
    
}

mainc()