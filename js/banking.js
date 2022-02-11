document.getElementById('deposit-btn').addEventListener('click', function(){
    // console.log('Clicked');

    const depositeInput = document.getElementById('deposit-input');
    const depositeAmount = depositeInput.value;
    // console.log(depositeAmount);

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositeTotalText = depositTotal.innerText;
    depositTotal.innerText = depositeAmount;
    console.log(depositeTotalText);

    // Clear input number
    depositeInput.value = '';
    
    
    
})