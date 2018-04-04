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
        domString += `<li>`;
        domString += `<a href="#" data-hero-id"${heroArray[i].id}">${heroArray[i].name}</a></li>`;
        domString += `</li>`;
    }
    printToDom(domString,"awesome")
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