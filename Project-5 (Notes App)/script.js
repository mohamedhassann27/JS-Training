const createBtn=document.querySelector("button")
const notesContainer=document.querySelector(".notesContainer")
let notes=document.querySelectorAll("p")

if(localStorage.getItem("notes")){
    notesContainer.innerHTML=localStorage.getItem("notes")
}

function createNote(){
    let note=`
        <div class="note">
            <p class="inputBox" contenteditable="true"></p>
            <img src="./delete.png" alt="delete" class="deleteImg">
        </div>
    `
    document.createRange().createContextualFragment(note)
    notesContainer.insertAdjacentHTML("beforeend",note)
    updateStorage()
}

createBtn.addEventListener("click", ()=>{
    createNote();
    updateStorage();
}
)

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName=="IMG"){
        e.target.parentElement.remove(); 
        updateStorage();
    }
    else if(e.target.tagName=="P"){
        e.target.onkeyup=()=>updateStorage();
    }
})

notesContainer.addEventListener("keyup",(e)=>{
    if(e.target.tagName==="P"){
        updateStorage()
    }
})


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}



