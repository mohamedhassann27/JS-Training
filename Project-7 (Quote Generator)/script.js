let generateBtn=document.querySelector("#generate")
let tweetBtn=document.getElementById("tweet")
let quote=document.querySelector(".quote")
let author=document.querySelector(".author")

const apiUrl="https://fakestoreapi.com/products"

async function generateQuote(url){
    try{
        let response=await fetch(url)
        if(!response.ok){
            console.error(response.status)
        }
        let data= await response.json();
        let dataArr=[...data]
        quote.innerText=dataArr[Math.floor(Math.random()*dataArr.length)].title
        author.innerText=dataArr[Math.floor(Math.random()*dataArr.length)].category
    }
    catch(error){
        console.log(error);
    }
}

generateQuote(apiUrl)
generateBtn.addEventListener("click",()=>generateQuote(apiUrl))

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerText}` ,"Tweet Window" ,"width=600, height=400")
}
tweetBtn.addEventListener("click",tweet)
