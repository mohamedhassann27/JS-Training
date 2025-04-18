let submitBtn=document.querySelector('button[type="submit"]')
let okBtn=document.getElementById("ok")
let popus=document.querySelector(".popus")

submitBtn.addEventListener("click",()=>{
    popus.classList.add("display");
})
okBtn.onclick=()=>{
    popus.classList.remove("display")
}