let cardID = [];
let index =0;
const pageBody = document.getElementById("pagebody");


const plus =document.querySelector("#plus"); 

// add Some Information in Page 
// pageBody.innerHTML = `
//   <h1> Some Informantion : </h1>
//   <h2>Click In Button "+" To Add Card to Chage Color of Page <\h2>
//   <h2>Set Color Name In Input Field And Click In Button Change<\h2>
// `; 

pageBody.append(plus);

// Handler Button Plus 
plus.addEventListener("click",() => {
  let newCardInformation = {divId :`div${index}`,  inputId :`input${index}`, buttonx :`buttonx${index}`, buttont :`buttont${index}`};
  cardID.push(JSON.stringify(newCardInformation));
  createCard(index);
  index+=1;
});

// Create Card  
function createCard (index){
  let obj = JSON.parse(cardID[index]);
  let card = document.createElement("div");
  card.id = obj.divId;
  card.setAttribute("onclick", `chagecolor(${obj.inputId})` )
  card.innerHTML =`<input id =${obj.inputId}> <p style="display: inline;"  id =${obj.buttonx} onclick = "deleteCard(${obj.divId})" >x</p>`;
  pageBody.insertBefore(card, plus);
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
  return s.color == strColor.toLowerCase();
}