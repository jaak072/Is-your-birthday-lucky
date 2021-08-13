// window.onload = function(){
//     alert("We don't store your data, period. We believe privacy is a fundamental human right.")
// }

const dateOfBirth = document.querySelector("#input-date");
const luckyNumber = document.querySelector("#lucky-number");
const CheckBtn = document.querySelector("#check");
const outputAnswer = document.querySelector("#answer");
const outputArea = document.querySelector(".output-area");

outputArea.style.display = "none";
function showOutput(){
    outputArea.style.display = "";
}

function checkBirthayIsLucky(){
    const vDate = dateOfBirth.value;
    const sumDateofBirth = calculateSumOfBirthday(vDate);
    if(sumDateofBirth && luckyNumber.value){
        findLucky(sumDateofBirth,luckyNumber.value);
    }  
    else{
        outputAnswer.innerText = "Please enter both fields🤔";
        showOutput();
    }
        
}

function findLucky(sumDateofBirth, luckyNumber){
    if(sumDateofBirth % luckyNumber === 0){
        outputAnswer.innerText = "Your Birthday is Lucky🤳🥳";
        showOutput();
    }
    else{
        outputAnswer.innerText = "Your Birthday is not Lucky😣";
        showOutput();
    }
}

function calculateSumOfBirthday(vDate){
    vDate = vDate.replaceAll("-","");
    let sumDateofBirth = 0;
    for(let i = 0; i < vDate.length; i++){
        sumDateofBirth = sumDateofBirth + Number(vDate.charAt(i));
    }
    return sumDateofBirth;
}

CheckBtn.addEventListener("click", checkBirthayIsLucky);




