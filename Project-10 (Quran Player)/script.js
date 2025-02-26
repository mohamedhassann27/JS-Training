let song=document.querySelector("audio")
let progress=document.querySelector(".progress")
let ctrlIcon=document.querySelector(".ctrlIcon")

song.onloadedmetadata=()=>{
    progress.max=song.duration
    progress.value=song.currentTime
}

function playPause(){
    if(ctrlIcon.classList.contains("fa-play")){
        song.play()
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }else{
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }

}
ctrlIcon.onclick=playPause

if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime
    },500)
}

progress.onchange=()=>{
    song.currentTime=progress.value
    ctrlIcon.classList.remove("fa-play")
    ctrlIcon.classList.add("fa-pause")
    song.play()
}