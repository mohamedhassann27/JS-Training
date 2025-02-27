let stop =document.querySelector(".stop")
let start=document.querySelector(".start")
let reset=document.querySelector(".reset")
let displayTime=document.querySelector("h1")

let [hours,minuits,seconds]=[0,0,0]
let timer=null;

function stopWatch(){
    seconds++
    if(seconds==60){
        minuits++;
        seconds=0
        if(minuits==60){
            hours++
            minuits=0;
        }
    }
    let h=hours<10? '0'+hours : hours
    let m=minuits<10? '0'+minuits : minuits
    let s=seconds<10? '0'+seconds : seconds
    displayTime.innerHTML=`${h}:${m}:${s}`
}

function startWatch(){
    if(timer!==null){
        clearInterval(timer)
    }
    timer=setInterval((stopWatch),1000)
}

start.onclick=startWatch

stop.onclick=()=>clearInterval(timer)

reset.onclick=()=>{
    clearInterval(timer)
    hours=0; minuits=0; seconds=0
    displayTime.innerHTML=`00:00:00`
}
