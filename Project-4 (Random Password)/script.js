let input=document.querySelector("input")
let generateBtn=document.querySelector("button")
let copyImg=document.getElementById("copy")

let upperCase="ABCDEFGHIJKLMNOBQRSTUVWXYZ";
let lowerCase=upperCase.toLowerCase();
let symbol="!@#$%^&*_-/\\;~"
let number="1234567890"
let allChars="ABCDEFGHIJKLMNOBQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*_-/\\;~1234567890"
let length=12;

function generatePassword(){
    let randomUpper=upperCase[Math.floor(Math.random() * upperCase.length)]
    let randomLower=lowerCase[Math.floor(Math.random() * lowerCase.length)]
    let randomSymbol=symbol[Math.floor(Math.random() * symbol.length)]
    let randomNumber=number[Math.floor(Math.random() * number.length)]

    let password= randomUpper+randomLower+randomSymbol+randomNumber;

    while(password.length<length){
        password+= allChars[Math.floor(Math.random() * allChars.length)]
    }
    return password;
}

generateBtn.addEventListener("click",()=>{
    input.value=generatePassword()
})

copyImg.addEventListener("click",()=>{
    input.select();
    document.execCommand("copy")
})


// function copy(){
//     copyImg.select();
//     copyImg.execommend("copy")
// }