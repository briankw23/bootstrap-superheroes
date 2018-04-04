let selectedHero = "";

const printToDom = (domString, divId) => {
document.getElementById(divId).innerHTML += domString;
}

function xhrload(){
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.superheroes);
    addheroSelectionEventListeners();
};
const domString = (heroArray) =>{
    let domString= "";
    for (let i = 0; i < heroArray.length; i++) {
        domString += `<li id="target">`;
        domString += `<a class="hero-name" data-hero-id="${heroArray[i].id}">${heroArray[i].name}</a></li>`;
        domString += `</li>`;
    }
    printToDom(domString,"awesome")
};

const selectHero = (e) => {
    console.log("clicked",e.target.dataset.heroId);
    selectedHero= e.target.dataset.heroId;
    document.getElementById("awesome-button").classList.add("hide");
    genericHeroRequest(loadFileforsingleHero);
}
const addheroSelectionEventListeners = () => {
    const heroName = document.getElementsByClassName("hero-name");
    for (let m = 0; m < heroName.length; m++) {
        heroName[m].addEventListener("click", selectHero);
        
    }
};

const displaySuperhero = heroes => {
    let domString = "";
    heroes.forEach(hero => {
      if (hero.id === selectedHero) {
        domString += `<div class="row">`;
        domString += `<div class="col-sm-4">`;
        if (hero.gender === "Male") {
          domString += `<img class="charImg male" src="${
            hero.image
          }">`;
        } else {
          domString += `<img class="charImg female" src="${
            hero.image
          }">`;
        }
        domString += `</div>`;
        domString += `<div class="col-sm-6">`;
        domString += `<h2>Selected Hero: ${hero.name}</h2>`;
        domString +=     `<p class='charD'>${hero.description}</p>`;
        domString += `</div>`;
      }
    });
    printToDom(domString, "selected-hero");
  };

function loadFileforsingleHero(){
    const data = JSON.parse(this.responseText);
    displaySuperhero(data.superheroes);
}

function xhrfail(){
    console.log("fail");
};
const genericHeroRequest = (successfunction) => {
    let myRequest =  new XMLHttpRequest();
    myRequest.addEventListener("load", successfunction);
    myRequest.addEventListener("error", xhrfail);
    myRequest.open("GET","../db/superheroes.json");
    myRequest.send();
}
const startApplication = () => {
genericHeroRequest(xhrload);

};

startApplication();