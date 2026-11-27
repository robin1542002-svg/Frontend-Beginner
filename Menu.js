const humbergerMenuContainerTag = document.querySelector(".hamburgerMenuContainer");
const humbergerLine1Tag = document.querySelector(".line1")
const humbergerLine2Tag = document.querySelector(".line2")
const humbergerLine3Tag = document.querySelector(".line3")
const overlayMenuTag = document.querySelector(".overlayMenu")

humbergerMenuContainerTag.addEventListener("click",()=>{
    if(humbergerMenuContainerTag.classList.contains("isOpened")){
        humbergerLine2Tag.classList.remove("hideline2");
        humbergerLine1Tag.classList.remove("crossline1");
        humbergerLine3Tag.classList.remove("crossline3");
        humbergerMenuContainerTag.classList.remove("isOpened")
        overlayMenuTag.classList.remove("showOverlayMenu")
    }else{
        overlayMenuTag.classList.add("showOverlayMenu")
        humbergerLine2Tag.classList.add("hideline2");
        humbergerLine1Tag.classList.add("crossline1");
        humbergerLine3Tag.classList.add("crossline3");
        humbergerMenuContainerTag.classList.add("isOpened");
        // console.log("hello");}
        
    
}})