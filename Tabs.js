const ulTag=document.querySelector("ul")
const silderTag = document.querySelector(".slidebar")
const opentapTag= document.querySelector(".openTab")

const tabs = ["home","services","about us","contact","login"];
const tabsContent=["This Is HomeTab","This Is Serices","This Is About us","This Is contact","This Is login",]
const handleTabChange = (event) =>{
    const clickedId=event.target.id;
    const clickedLiTag= document.getElementById(clickedId)
    const clickedLiTagWidth= clickedLiTag.offsetWidth;
    const clickedLiTagOffsetleft=clickedLiTag.offsetLeft;
    
    silderTag.style.width=clickedLiTagWidth + "px"
    silderTag.style.transform=`translateX(${clickedLiTagOffsetleft}px)`
    opentapTag.classList.add("text")
    opentapTag.textContent=tabsContent[clickedId];
}
for (i = 0;i<tabs.length;i++){
    const liTag= document.createElement("li")
    liTag.append(tabs[i].toUpperCase());
    liTag.id= i;
    liTag.addEventListener("click", handleTabChange);
    ulTag.append(liTag);
    if(i===0){
        silderTag.style.width=liTag.offsetWidth + "px";
        opentapTag.textContent=tabsContent[0]
    }
}
