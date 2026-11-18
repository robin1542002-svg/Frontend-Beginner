const BodyTag=document.getElementsByClassName("container")[0];
const TitleDiv=document.createElement("div");
TitleDiv.classList.add("Title")
TitleDiv.append("Welcoome");
BodyTag.prepend(TitleDiv);

let productID=1;


const inputTag=document.getElementsByClassName("form-control")[0];
const shoppinglistTag=document.getElementsByClassName("shoppinglistcontainer")[0];
const handlChange =(event) =>{
 const inputValue = event.target.value;
 const productContainer=document.createElement("div");
 productContainer.classList.add("productcontainer")
 const parentDiv=document.createElement("div");
 parentDiv.classList.add("productname")

 parentDiv.addEventListener("click", () =>{
    const classexit= parentDiv.classList.contains("purched");
    if (classexit == true){
        parentDiv.classList.remove("purched");
    }
    else{
        parentDiv.classList.add("purched")
    }
    
    
 }
);
//<i class="fa-regular fa-trash-can"></i>
 const spanTag=document.createElement("span");
 const trashIcon=document.createElement("i");
 trashIcon.classList.add("fa-regular" ,"fa-trash-can")
 spanTag.id=productID;
 const productid= productID.toString() +". "+ inputValue;
spanTag.append(productid);
parentDiv.append(spanTag);
productContainer.append(parentDiv,trashIcon);
 shoppinglistTag.append(productContainer);
 inputTag.value="";
 productID += 1;
    
};
inputTag.addEventListener("change",handlChange);

// const InputTAG= document.createElement("input")
// BodyTag.appendChild(InputTAG)