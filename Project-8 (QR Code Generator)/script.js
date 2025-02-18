let input=document.querySelector("input")
let button=document.querySelector("button")
let imgBox=document.querySelector(".imgBox")
let qrImg=document.querySelector("img")

let generateURL=()=>{
    if(input.value.length>0){
        qrImg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
        imgBox.classList.add("showImg")
        input.classList.remove("error")
    }else{
        input.classList.remove("error")
        setTimeout(()=>input.classList.add("error"),100)
        setTimeout(() => {
            imgBox.classList.remove("showImg")
        }, 1000);
    }
}

button.addEventListener("click",generateURL)
input.addEventListener("keyup",(e)=>{
    e.key=="Enter" && generateURL()
})