console.log("hello 2wosrld");
//DOM CRUD
// C = Create

const divElement =document.createElement("div");
const divtestNode = document.createTextNode("Welcome to my woooorld");
divElement.appendChild(divtestNode) // <div>"Welcome to my woooorld"<div> [Element+Text ]
const tagCollectin= document.getElementsByTagName("body");
const bodyelement =tagCollectin[0];
bodyelement.appendChild(divElement);

//R = read

const readEle=document.getElementsByTagName("div")[0];
console.log("DIV is ", readEle.textContent);

//U =update

readEle.textContent ="hey you fools";
console.log("Text is now ", readEle.textContent);

//D=delete

// // readEle.remove();
 

