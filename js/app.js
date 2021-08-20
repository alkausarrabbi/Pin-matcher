const successMsg=document.getElementById("doneMassage").style.display="none";
const errorMsg =document.getElementById("notDoneMassage").style.display="none";
function generatePin(){
    const pin=Math.round( Math.random()*10000);
    const pinString=pin+"";
    if (pinString.length == 4){
        return pin;
    }
    else {
        return generatePin();
    }
}

function getPin(){
    const newPin=generatePin();
    document.getElementById("display-pin").value=newPin;
}
document.getElementById("key-pad").addEventListener("click",function(event){
    const number=event.target.innerText;
    const numbers=document.getElementById("display-number");
    if (isNaN(number)){
        if(number == "C"){
            numbers.value="";
        }
    }
    else{
        const previousNum=numbers.value;
        const newNumber=previousNum+number;
        numbers.value=newNumber;
    }
   

})

function pinMatch(){
    const pinValue =document.getElementById('display-pin').value;
    const numberValue =document.getElementById("display-number").value;
    const successMsg=document.getElementById("doneMassage");
    const errorMsg =document.getElementById("notDoneMassage");
    if (pinValue == numberValue){
        successMsg.style.display="block";
        errorMsg.style.display="none";
    }
    else {
        successMsg.style.display="none";
        errorMsg.style.display="block";
    }
}