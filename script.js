

let inputString = document.getElementById("input-box");
let button = document.getElementById("check-button");
let output = document.getElementById("output");

//check that string is long enough

function checkStringLength(string) {
  if (string.length > 5){
    return true;
  }
  return false;
}

//check that string has at least one lowercase, at least one uppercase character and at least one number

function checkCaseMixture (string) {
  let lowerCaseCounter = 0;
  let upperCaseCounter = 0;
  let numberCounter = 0;
  for (i=0; i<string.length; i++){
    if (string[i] === string[i].toUpperCase()){
      upperCaseCounter++;
    }
    if (string[i] === string[i].toLowerCase()){
      lowerCaseCounter++;
    } 
    if (Number.isInteger(parseInt(string[i]))){
      numberCounter++;
    }
    }  
  if (upperCaseCounter > 0 && lowerCaseCounter > 0 && numberCounter > 0){
    return true;
  }
  return false;
}



//combines functions and feeds in inputString

function combinedUsernameFunction () {
if (checkStringLength(inputString.value) == true && checkCaseMixture(inputString.value) == true) {
    output.innerHTML = "Valid codename";
  }
  else{
    output.innerHTML = "Invalid codename";
  }
}

//button

button.addEventListener("click", combinedUsernameFunction);

