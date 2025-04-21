const toggleMode=document.querySelector(".icon");

let localTheme=localStorage.getItem("theme");
if(localTheme=="dark"){
    document.body.classList.add("darkMode")
    toggleMode.classList.replace("fa-moon","fa-sun")
}else if(localTheme==null){
    localStorage.setItem("theme","light")
}

toggleMode.addEventListener("click",(e)=>{
    document.body.classList.toggle("darkMode");
    e.target.classList.toggle("fa-moon");
    e.target.classList.toggle("fa-sun");
    if(document.body.classList.contains("darkMode")){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")
    }
})


// localStorage.clear()