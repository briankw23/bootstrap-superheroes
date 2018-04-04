console.log("superheroes");

const printToDom = (domString, divId) => {
document.getElementById(divId).innerHTML += domString;
}

function xhrload(){
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.superheroes);
};
const domString = (heroArray) =>{
    let domString= "";
    for (let i = 0; i < heroArray.length; i++) {
        domString += `<div class="col-sm-3">`;
        domString += `<div class="panel">`;
        domString += `<div class="panel-heading">`;
        domString +=`<h3 class="panel-title">${heroArray[i].name}</h3>`;
        domString += `</div>`;
        domString += `<div class="panel-body">`;
        if(heroArray[i].gender === "Female"){
            domString += `<img src="${heroArray[i].image}" class="charImg female">`;
        }
        else{
            domString += `<img src="${heroArray[i].image}" class="charImg male">`;
        };
        domString += `<p class="charD">${heroArray[i].description}</p>`;
        domString +=`</div>`;
        domString +=`</div>`;
        domString +=`</div>`;
    }
    printToDom(domString,"main")
};
function xhrfail(){
    console.log("fail");
};

const startApplication = () =>{
    let myRequest =  new XMLHttpRequest();
    myRequest.addEventListener("load", xhrload);
    myRequest.addEventListener("error", xhrfail);
    myRequest.open("GET","../db/superheroes.json");
    myRequest.send();
};
startApplication();