const dob = document.querySelector("#dob");
const inputNum = document.querySelector("#input-num");
const btnCheck = document.querySelector("#check-num");
const result = document.querySelector("#result");

function compareNumbs(sumDate,userInput){
     if(sumDate%userInput === 0){
        result.innerText = "Yes That's the lucky Number";
     }else{
        result.innerText = "Sorry its not";        
     }
}

function checkNumber(){    
     
     if(dob.value === ""){
        result.innerText = "Enter Your Birth Date";
     }else if(inputNum.value === ""){
        result.innerText = "Enter Your Lucky Number";
     }else{
        sum = Number(getSum(dob.value));
        userInput = Number(inputNum.value);
        compareNumbs(sum,userInput);
     }
     
}

function getSum(bDate){
    let sum = 0;
    let bithDate = bDate.replaceAll("-","");
        for(let i=0; i< bithDate.length ; i++){
            sum = sum + Number(bithDate[i]);
        }
        return sum;
}

btnCheck.addEventListener('click', checkNumber)