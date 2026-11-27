const transitionBtntag = document.querySelector(".transitionBtn");
const transitionDivTag = document.querySelector(".transition")
transitionBtntag.addEventListener("click", () =>{
    
    transitionDivTag.classList.add("startTransition")
})

const transformTag = document.querySelector(".transform");
const transformBtnTag = document.querySelector(".transformBtn");

transformBtnTag.addEventListener("click", () => {
    transformTag.classList.add("startTransform")
})