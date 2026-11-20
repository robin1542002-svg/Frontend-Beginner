const playlistcontainerTag=document.getElementsByClassName("playlistcontainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];

const tracks = [
        {trackId :"music/Buuny Phyo.mp3",title : "Anniversary(Bunny Phyo)"} ,       
        {trackId :"music/Han Htun.mp3" , title : "A Yin Ka Zatt lann(Han Htun)"},
        {trackId :"music/Nine One.mp3" , title : "A Yaung ma soe nae(Nine One"},
    
    ];

for (let i = 0 ; i < tracks.length ;i++){
    const trackTag= document.createElement("div");
    trackTag.addEventListener("click",() =>{
        const trackId=tracks[i].trackId;
        audioTag.src = trackId;
        audioTag.play();
    });
    trackTag.classList.add("trackItem")
    const title=(i+1).toString() + ". " + tracks[i].title;
    trackTag.textContent =title;
    playlistcontainerTag.append(trackTag);
}
