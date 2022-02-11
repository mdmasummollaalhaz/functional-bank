/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const seocnt = doubleIt(7); */


function getInputValue(){
    const depositeInput = document.getElementById('deposit-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);

    // Clear input number
    depositeInput.value = '';
    
    return depositeAmount;
    
}




document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('Clicked');

/*     const depositeInput = document.getElementById('deposit-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText); */
    const depositeAmount = getInputValue();
    // console.log(depositeAmount);


    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositeTotalText = depositTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositTotal.innerText = previousDepositeTotal + depositeAmount;
    // console.log(depositeTotalText);


    // Update balange
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositeAmount;

    
    
});


// Handle withdraw 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // console.log('Clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawAmountText);
    const widthdrawAmount = parseFloat(withdrawAmountText);

    // Update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + widthdrawAmount;


    // update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - widthdrawAmount;

    // Clear widthdraw input field
    withdrawInput.value = '';
    
});