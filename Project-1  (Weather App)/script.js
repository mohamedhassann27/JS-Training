const apiKey="08e37ea34ad40e45e034f25064c6dc92"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let checkWeather= async function(city){ 

    try{
        let response= await fetch(apiUrl + city + `&appid=${apiKey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block"
            document.querySelector(".weather").style.display="none"
        }
        else{
            let data=await response.json()
            console.log(data);
    
            document.querySelector(".city").innerText=data.name;
            document.querySelector(".temp").innerText=Math.round(data.main.temp)+"℃"
            document.querySelector(".humidity").innerText=data.main.humidity+"%"
            document.querySelector(".wind").innerText=data.wind.speed+ " km/h"
            document.querySelector(".weatherIcon").src=`./images/${data.weather[0].main}.png`
            document.querySelector(".weather").style.display="block"
            document.querySelector(".error").style.display="none"
        }
    }
    catch(error){
        console.log(error);
    }
    
}

document.forms[0].addEventListener("submit",(e)=>e.preventDefault())

document.querySelector(".searchButton").addEventListener("click",()=>{
    let cityName=document.querySelector("#searchInput").value;
    checkWeather(cityName)
})

document.querySelector("#searchInput").addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        let cityName=document.querySelector("#searchInput").value;
        checkWeather(cityName)
    }
})
