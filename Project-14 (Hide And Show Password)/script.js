let input=document.querySelector("input")
let eyeIcon=document.querySelector(".icon");

eyeIcon.addEventListener("click",()=>{
    if(input.type=="password"){
        input.type="text";
        eyeIcon.className="fa-solid fa-eye icon";
    }else{
        input.type="password";
        eyeIcon.className="fa-solid fa-eye-slash icon";
    }
})
