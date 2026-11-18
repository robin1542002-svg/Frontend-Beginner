const inputTag=document.getElementsByClassName("form-control")[0];
const orderlistTag=document.getElementsByClassName("orderlist")[0];
const handlChange =(event) =>{
 const inputValue = event.target.value;
 
 const listItem=document.createElement("li");
 listItem.classList.add("list-group-item"),
 listItem.append(inputValue);
 orderlistTag.append(listItem);
 inputTag.value="";
    
};
inputTag.addEventListener("change",handlChange);