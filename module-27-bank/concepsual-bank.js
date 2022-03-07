

// let depositInput = document.getElementById('deposit-field');
// let depositOutput = document.getElementById('deposit-amount');
// let totalAmount = document.getElementById('total-amount');
// // withdraw 
// let withdrawInput = document.getElementById('withdraw-field');
// let withdrawOutput = document.getElementById('withdraw-amount');

// function addMoney(depositInput,depositOutput){
//     return Number(depositInput) + Number(depositOutput);
// }
// function getMoney(withdrawInput,totalBankAmount){
//     return Number(withdrawInput) - Number(totalBankAmount);
// }

// document.getElementById('deposit').addEventListener('click', function(){
//     // deposit output total 
//     const totalDepositOutput = addMoney(depositInput.value,depositOutput.innerText);
//     const totalBankAmount = addMoney(depositInput.value,totalAmount.innerText);
//     totalAmount.innerText = totalBankAmount;
//     depositOutput.innerText = totalDepositOutput
//     depositInput.value = '';
//     if (depositInput.value == '' || depositInput.value > 0) {
//         // console.log('please wrong')
//         return
//     }
// })

// document.getElementById('withdraw').addEventListener('click', function(){
//     // total withdraw output 
//    const totalWithdrawOutput = addMoney(withdrawInput.value,withdrawOutput.innerText);
//    const decreaseFromTotalBank = getMoney(totalAmount.innerText,withdrawInput.value);
//    withdrawOutput.innerText = totalWithdrawOutput;
//    totalAmount.innerText = decreaseFromTotalBank;

//     withdrawInput.value = '';
// })


let depositInput = document.getElementById('deposit-field');
let depositOutput = document.getElementById('deposit-amount')
let totalAmount = document.getElementById('total-amount');

let withdrawInput = document.getElementById('withdraw-field');
let withdrawOutput = document.getElementById('withdraw-amount');
function addMoney(depositInput,depositOutput){
    return Number(depositInput) + Number(depositOutput)
}
function getMoney(withdrawInput,totalAmount){
    return Number(withdrawInput) - Number(totalAmount);
}
document.getElementById('deposit').addEventListener('click',function(){
    const totalInput = addMoney(depositInput.value,depositOutput.innerText);
    const totalBank = addMoney(depositInput.value,totalAmount.innerText) 
    depositOutput.innerText = totalInput
    totalAmount.innerText = totalBank
    depositInput.value = '';
})
document.getElementById('withdraw').addEventListener('click',function(){
    const withdrawTotal = addMoney(withdrawInput.value,withdrawOutput.innerText);
    const bankTotal = getMoney(totalAmount.innerText,withdrawInput.value)
    withdrawOutput.innerText = withdrawTotal
    totalAmount.innerText = bankTotal
    withdrawInput.value = '';
})




// bank normally 
// deposit 
// let depositInput = document.getElementById('deposit-field');
// let depositOutput = document.getElementById('deposit-amount');
// let totalAmount = document.getElementById('total-amount');
// // withdraw 
// let withdrawInput = document.getElementById('withdraw-field');
// let withdrawOutput = document.getElementById('withdraw-amount');

// document.getElementById('deposit').addEventListener('click', function(){
//     // deposit output total 
//     let sumInputOutput = Number(depositInput.value) + Number(depositOutput.innerText);
//     depositOutput.innerText = sumInputOutput;
//     // total bank amount 
//     let sumTotalInputOutput = Number(depositInput.value) + Number(totalAmount.innerText);
//     totalAmount.innerText = sumTotalInputOutput;
//     depositInput.value = '';
// })

// document.getElementById('withdraw').addEventListener('click', function(){
//     // total withdraw output 
//     withdrawOutput.innerText = Number(withdrawInput.value) + Number(withdrawOutput.innerText)

//     // subtract from total amount 
//     totalAmount.innerText = Number(totalAmount.innerText) - Number(withdrawInput.value);
//     withdrawInput.value = '';
// })