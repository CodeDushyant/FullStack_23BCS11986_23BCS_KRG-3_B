let deposite=document.getElementById('deposite')
let withdraw=document.getElementById('withdraw')

let ammount=document.getElementById('rupees');
let pop=document.getElementById('pop')
let pop2=document.getElementById('pop2')

console.log(newValue);

function getVal(){
    let input=parseFloat(document.getElementById("inp-rupees").value);
    let newValue=parseFloat(ammount.textContent);
    if(isNaN(input)||input<=0){
        pop.textContent="";
        pop2.textContent="⚠ Please enter valid Rupees";
    }else{
        ammount.textContent=newValue+input;
        pop2.textContent="";
        pop.textContent="Deposite: Rs "+input;
    }
}

function getVal2(){
    let input=parseFloat(document.getElementById("inp-rupees").value);
    let newValue=parseFloat(ammount.textContent);
    if(isNaN(input)){
        pop.textContent="";
        pop2.textContent="Enter Valid Amount! ";
    }
    else if(input>newValue){
        pop.textContent="";
        pop2.textContent="⚠ insufficient Balance: ";
    }else{
        ammount.textContent=newValue-input;
        pop2.textContent="";
        pop.textContent="Withdraw: Rs "+input;
    }

}