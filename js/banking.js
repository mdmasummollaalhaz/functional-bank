/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const seocnt = doubleIt(7); */


function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // Clear input number
    inputField.value = '';
    
    return amountValue;
    
}
function updateTotalField(totalFieldId, amount){
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const depositeTotalText = totalElement.innerText;
    const previousTotal = parseFloat(depositeTotalText);
    totalElement.innerText = previousTotal + amount;

}
function updateBalance(depositeAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositeAmount;
    }
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    
    /*  
    const depositeInput = document.getElementById('deposit-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    */
    // console.log(depositeAmount);


    // get and update deposit total
    /*
    const depositTotal = document.getElementById('deposit-total');
    const depositeTotalText = depositTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositTotal.innerText = previousDepositeTotal + depositeAmount;
    */
    // console.log(depositeTotalText);


    // Update balange
    /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositeAmount;
    */
   
    const depositeAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositeAmount);
    updateBalance(depositeAmount, true);
    
});


// Handle withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function(){

    /*
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const widthdrawAmount = parseFloat(withdrawAmountText);
    */

    // Update withdraw total
    /*
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + widthdrawAmount;
    */


    // update balance after withdraw
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - widthdrawAmount;
    */

    const widthdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', widthdrawAmount);
    updateBalance(widthdrawAmount, false);
    
    
});


