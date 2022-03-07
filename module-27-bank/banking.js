// function getInputValue(InputId){
//     const inputField = document.getElementById(InputId);
//     const inputAmountText = inputField.value;
//     const amountValue = parseFloat(inputAmountText);
//     inputField.value = '';
//     return amountValue;
// }

// function updateTotalField(totalField,amount){
//     debugger;
//     const totalElement = document.getElementById(totalField);
//     const totalText = totalElement.innerText;
//     const previousTotal = parseFloat(totalText)
//     totalElement.innerText = previousTotal + amount;
// }

// function getCurrentBalance(){
//     const balanceTotal = document.getElementById('total-amount');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     return previousBalanceTotal
// }

// function updateBalance(amount,isAdd){
//     const balanceTotal = document.getElementById('total-amount'); 
//     // const balanceTotalText = balanceTotal.innerText;
//     // const previousBalanceTotal = parseFloat(balanceTotalText);
//     const previousBalanceTotal = getCurrentBalance()
//     if (isAdd == true) {
//     balanceTotal.innerText = previousBalanceTotal + amount;
//     }else{
//     balanceTotal.innerText = previousBalanceTotal - amount;
//     }
// }

// deposit button 
// document.getElementById('deposit').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-field');
    if (depositAmount > 0) {
        updateTotalField('deposit-amount',depositAmount)
        updateBalance(depositAmount,true)
    }

// withdraw button 
// document.getElementById("withdraw").addEventListener('click', function(){
    
    // const withdrawAmount = getInputValue('withdraw-field')
    // const currentBalance = getCurrentBalance();
    // if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    // updateTotalField('withdraw-amount', withdrawAmount)
    // updateBalance(withdrawAmount,false)
    // }
    // if (withdrawAmount > currentBalance) {
    //     alert("please try again later !!!")
    // }
    document.getElementById('deposit').addEventListener('click', function(){

    // const depositInput = document.getElementById('deposit-field');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    
    // // get current deposit 
    // const depositTotal = document.getElementById('deposit-amount');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText)
    // depositTotal.innerText = previousDepositTotal + depositAmount;

    // // update balance 
    // const balanceTotal = document.getElementById('total-amount');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // depositInput.value = '';
    ale
})

document.getElementById('withdraw').addEventListener('click', function(){


    const withdrawInput = document.getElementById('withdraw-field');

    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText)

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-amount');

    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // update balance after withdraw 
    const balanceTotal = document.getElementById('total-amount');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

})