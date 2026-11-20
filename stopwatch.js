const stopwatchtTag=document.getElementsByClassName("stopwatch")[0];
const startBtnTag=document.getElementsByClassName("startBtn")[0];
const stopBtnTag= document.getElementsByClassName("stopBtn")[0];
const continueTag=document.getElementsByClassName("continueBtn")[0];
const restartTag= document.getElementsByClassName("restartBtn")[0];


let seconds=0; minute=0; hours=0;

const startTime=()=>{
    seconds += 1;
    if (seconds===60){
        seconds =0;
        minute += 1;
        if (minute===60){
            minute=0;
            hours+=1;
        }
    }
    const secText = seconds<10 ? "0" + seconds.toString() : seconds;
    const minText = minute<10 ? "0" + minute.toString() : minute;
    const hourText = hours<10 ? "0" + hours.toString() : hours;
    stopwatchtTag.textContent =hourText + ":" +minText + ":" + secText
    // console.log(hours,minute,seconds);
    
    
}
continueTag.addEventListener("click", () =>{
    clearInterval(intervelID);
    intervelID = setInterval(startTime,1000);

})
let intervelID;
startBtnTag.addEventListener("click", () =>{
    intervelID = setInterval(startTime,1000);
})


stopBtnTag.addEventListener("click",()=>{
    clearInterval(intervelID);
})
restartTag.addEventListener("click", () =>{
    clearInterval(intervelID);
    hours=0;
    seconds=0;
    minute=0;
    intervelID = setInterval(startTime,1000);
})

// const pauseTime=("click",()=>{
//     clearInterval(intervelID);
// });

  
