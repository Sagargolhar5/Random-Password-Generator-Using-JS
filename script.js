let inputSlider = document.getElementById("inputSlider")
let sliderValue = document.getElementById("sliderValue")

let passBox = document.getElementById("passBox")

let lowerCase = document.getElementById("lowercase")
let upperCase = document.getElementById("uppercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let copyPass = document.querySelector("#copyIcon")

let genBtn = document.getElementById("genBtn")

let upperChar = "ABCDFEGHIJKLMNOPQRSTUVWXYZ"
let lowerChar = "abcdefghijklmnopqrstuvwxyz"
let number = "0123456789"
let specialChar = "~!@#$%&*_-+=?/"


function generatePassword(){

  
  let length = inputSlider.value
  let randomChar = ""
  let allchar = ""

  allchar +=  lowerCase.checked ? lowerChar : "";
  allchar +=  upperCase.checked ? upperChar : "";
  allchar +=  numbers.checked ? number : "";
  allchar +=  symbols.checked ? specialChar : "";
  
  for(let i=0; i<length; i++){
    GenValue = allchar.charAt(Math.floor(Math.random() * allchar.length))
    randomChar += GenValue
  }
  return randomChar;
}


genBtn.addEventListener("click", (e) =>{
  passBox.value = generatePassword()
})

copyPass.addEventListener("click", () =>{
  if(passBox.value != 0 || passBox.value >=1){
    navigator.clipboard.writeText(passBox.value);
    copyPass.title = "Password Copied"
  }
})


inputSlider.addEventListener("input", () => {
    // console.log(inputSlider.value);
    sliderValue.innerText = inputSlider.value
})
