document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('Clicked');

    const depositeInput = document.getElementById('deposit-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
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

    // Clear input number
    depositeInput.value = '';
    
});