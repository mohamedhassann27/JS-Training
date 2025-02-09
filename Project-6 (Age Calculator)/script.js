let userInput=document.querySelector("#date")
let calculateBtn=document.querySelector(".calculate")
let ageResult=document.querySelector("p")
let yearsSpan=document.querySelector(".years")
let monthsSpan=document.querySelector(".months")
let daysSpan=document.querySelector(".days")

function calculateAge(){

    let today=new Date();
    let birthday=new Date(userInput.value)

    let ageYears=today.getFullYear()-birthday.getFullYear()
    let ageMonths=today.getMonth()-birthday.getMonth()
    let ageDays=today.getDate()-birthday.getDate()

    if(ageDays<0){
        ageMonths--;
        ageDays+=new Date(today.getFullYear(),today.getMonth(),0).getDate();
    }
    if(ageMonths<0){
        ageYears--;
        ageMonths+=12;
    }

    return[ageYears,ageMonths,ageDays];
}

function displayAge(){
    let [years,months,days]=calculateAge();
    ageResult.style="display:block;color:white;";
    ageResult.innerHTML=`You are <span class="years">${years}</span> years, <span class="months">${months}</span> months and <span class="days">${days}</span> days old`
    // yearsSpan.innerText=years;
    // monthsSpan.innerText=months;
    // daysSpan.innerText=days;

}
calculateBtn.addEventListener("click",()=>{
        if(!userInput.value){
            ageResult.style="display:block;color:red;"
            ageResult.innerText="Enter a valid date"
        }
        else{
            calculateAge()
            displayAge()
        }
})

userInput.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        if(!userInput.value){
            ageResult.style="display:block;color:red;"
            ageResult.innerText="Enter a valid date"
        }
        else{
            calculateAge()
            displayAge()
        }
    }
})
