const inputElement=document.querySelector(".rowInput")
const addElement=document.querySelector(".rowButton")
const tasksList=document.querySelector(".tasksList")

const addTask= ()=>{
    const newTask=inputElement.value
    if(newTask=="") alert("You most write something")
    else{
        const li=document.createElement("li")
        li.innerText=newTask;
        tasksList.appendChild(li)
        let span=document.createElement("span")
        span.innerText="\u00d7";
        li.appendChild(span)
    }
    inputElement.value=""

    saveToDatabase()
}

tasksList.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked")
        saveToDatabase()
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        saveToDatabase()
    }
})

const saveToDatabase=()=>{
    localStorage.setItem("tasks",tasksList.innerHTML)
}

const fetchTasks=()=>{
    tasksList.innerHTML=localStorage.getItem("tasks")
}

fetchTasks()
addElement.addEventListener("click",()=> addTask())