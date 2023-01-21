let arrayId = [];
let index =0;
const pageBody = document.getElementById("pagebody");
let contener = document.createElement("div");
contener.id = "contener";
const plus =document.querySelector("#plus"); 

// add Some Information in Page 

pageBody.innerHTML = `<h1> Some Informantion : </h1>
<h2>Click In Button "+" To Add Card to Chage Color of Page <\h2>
<h2>Set Color Name In Input Field And Click In Button Change<\h2>`; 

pageBody.append(contener);
pageBody.append(plus);

// Handler Button Plus 
plus.addEventListener("click",createElement);
function createElement(){
  index+=1;
  let temp = {divId :`div${index}`,  inputId :`input${index}`, buttonx :`buttonx${index}`, buttont :`buttont${index}`};
  arrayId.push(JSON.stringify(temp));
    createCard(index-1);
}

// Create Card  
function createCard (index){
  let obj = JSON.parse(arrayId[index]);
  let card = document.createElement("div");
  card.id = obj.divId;
  card.innerHTML =  `<input id =${obj.inputId}> <button id =${obj.buttont} onclick = "chagecolor(${obj.inputId})">change</button><button id =${obj.buttonx} onclick = "deleteCard(${obj.divId})" >x</button>`;
  contener.append(card);
}


function chagecolor(element){
  let inputfind = document.getElementById(`${element.id}`);
  if(inputfind.value === "") {
    alert ("pleas Enter color ");
  }else { if(isValidColor(inputfind.value)){
    inputfind.style.color = `${inputfind.value}`;
  document.getElementById(`pagebody`).style.backgroundColor = `${inputfind.value}` ;
    
  }else {
    alert("this is not color");
  }
  
  }

} 
function deleteCard (element){
  
  let card = document.getElementById(`${element.id}`);
    card.remove();
  
}
function isValidColor(strColor) {
  var s = new Option().style;
  s.color = strColor;

  // return 'false' if color wasn't assigned
  return s.color == strColor.toLowerCase();
}