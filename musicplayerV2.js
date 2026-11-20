const playlistcontainerTag=document.getElementsByClassName("playlistcontainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentandDurationTimeTag= document.getElementsByClassName("curretnAndtotalTime")[0];
const currentProgressTag= document.getElementById("currentProgress");
const playButtonTag = document.getElementsByClassName("playBtn")[0]
const pauseButtonTag = document.getElementsByClassName("pauseBtn")[0]
const previousButtonTag = document. getElementsByClassName("previousBtn")[0];
const nextButtonTag = document. getElementsByClassName("nextBtn")[0];





const tracks = [
        {trackId :"music/Buuny Phyo.mp3",title : "Anniversary(Bunny Phyo)"} ,       
        {trackId :"music/Han Htun.mp3" , title : "A Yin Ka Zatt lann(Han Htun)"},
        {trackId :"music/Nine One.mp3" , title : "A Yaung ma soe nae(Nine One"},
    
    ];

for (let i = 0 ; i < tracks.length ;i++){
    const trackTag= document.createElement("div");
    trackTag.addEventListener("click",() =>{
        // const trackId=tracks[i].trackId;
        // audioTag.src = trackId;
        // audioTag.play();
        // isPlaying = true ;
        // updatePlayandPause();
        currentplayingindex = i;
        playSong();
    });
    trackTag.classList.add("trackItem")
    const title=(i+1).toString() + ". " + tracks[i].title;
    trackTag.textContent =title;
    playlistcontainerTag.append(trackTag);
}
let duration = 0;
let durationText = "00:00"
audioTag.addEventListener("loadeddata",()=>{
    duration=Math.floor(audioTag.duration);
    // const minutes = Math.floor(duration/60);
    // const seconds=  duration%60;
    
    // const minutesText = minutes < 10 ? "0" + minutes.toString(): minutes;
    // const secondsText = seconds < 10 ? "0" + seconds.toString(): seconds;
    // console.log(minutesText +":"+secondsText);
    durationText =createMINandSECtext(duration);
    
    
})
audioTag.addEventListener("timeupdate",()=>{
    // console.log("Time is :",audioTag.currentTime);
     const currentTime=Math.floor(audioTag.currentTime);
    // const minutes = Math.floor(currentTime/60);
    // const seconds=  currentTime%60;
    // const minutesText = minutes < 10 ? "0" + minutes.toString(): minutes;
    // const secondsText = seconds < 10 ? "0" + seconds.toString(): seconds;
    // console.log(minutesText+":"+secondsText);
    
    const currentTimetext= createMINandSECtext(currentTime);
    const currentAndDurationText= currentTimetext +" / " + durationText; 
    currentandDurationTimeTag.textContent = currentAndDurationText;
    updateCurrentProgress(currentTime);
    

})

const updateCurrentProgress = (currentTime) => {
    const updateCurrentProgressWidth = (500/duration) * currentTime;
    currentProgressTag.style.width = updateCurrentProgressWidth.toString()+ "px";
}



const createMINandSECtext = (totalSeonds) =>{
    const minutes= Math.floor(totalSeonds/60);
    const seconds = Math.floor(totalSeonds%60);
     
    const minutesText = minutes < 10 ? "0" + minutes.toString(): minutes;
    const secondsText = seconds < 10 ? "0" + seconds.toString(): seconds;
    return minutesText+":"+secondsText
}
let currentplayingindex=0;
isPlaying = false;
playButtonTag.addEventListener("click",()=>{
    isPlaying=true;
    const currentTime = Math.floor(audioTag.currentTime);
    if (currentTime === 0){
        // const songIdToPlay= tracks[currentplayingindex].trackId;
        // audioTag.src=songIdToPlay;
        // audioTag.play();
        // updatePlayandPause()
        playSong();
    }
    else{
        audioTag.play();
        updatePlayandPause();
    }
    
})
pauseButtonTag.addEventListener("click", () =>{
    isPlaying = false;
    audioTag.pause();
    updatePlayandPause()
})

const updatePlayandPause =() =>{
    if (isPlaying){
        playButtonTag.style.display="none";
        pauseButtonTag.style.display="inline";
    }
    else{
        playButtonTag.style.display="inline";
        pauseButtonTag.style.display="none";
    }
}

previousButtonTag.addEventListener("click", () =>{
    if (currentplayingindex === 0){
        return;
    }
    else{
        currentplayingindex -= 1;
        // const songIDtoPLay= tracks[currentplayingindex].trackId;
        // audioTag.src= songIDtoPLay;
        // audioTag.play();
        // isPlaying = true;
        // updatePlayandPause();
        playSong();
    }
})
 nextButtonTag.addEventListener("click", () => {
    if (currentplayingindex === tracks.length -1){
        return;
    }
    else{
        currentplayingindex += 1;
        // const songIDtoPLay= tracks[currentplayingindex].trackId;
        // audioTag.src= songIDtoPLay;
        // audioTag.play();
        // isPlaying = true;
        // updatePlayandPause();
        playSong();
    }
 })
 
 const playSong = () => {
     const songIDtoPLay= tracks[currentplayingindex].trackId;
        audioTag.src= songIDtoPLay;
        audioTag.play();
        isPlaying = true;
        updatePlayandPause();
 }