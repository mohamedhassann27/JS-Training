let toastBox=document.querySelector(".toastBox")
// const =
function showToast(msg){
    let toast=document.createElement("div")
    if(msg.includes("Success")){
        toast.innerHTML="<i class='fa-solid fa-circle-check icon' style='color:green'></i>"+msg
        toast.classList.add("correct")
    }
    if(msg.includes("error")){
        toast.innerHTML="<i class='fa-solid fa-circle-xmark icon' style='color:red'></i>"+msg
        toast.classList.add("error")
    }
    if(msg.includes("Invalid")){
        toast.innerHTML="<i class='fa-solid fa-circle-exclamation icon' style='color:orange'></i>"+msg
        toast.classList.add("invalid")
    }
    toastBox.appendChild(toast)
    setTimeout(()=>toast.remove(),5500)
}
// toast()