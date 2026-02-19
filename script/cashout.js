document.getElementById('btn-cashout').addEventListener('click', function () {
    //1 get the agent number and validate
    const agentNumber = getValueFromInput('cashout-number');
    if (agentNumber.length != 11) {
        alert('Agent Number Invalid')
        return;
    }
    //2 get the amount and validate and convert to number
    const cashoutAmount = getValueFromInput('cashout-amount')
    //3 get the current balance and validate and convert to number
    const currentBalance = getBalance();
    //4 calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Insufficient Amount');
        return
    }
    //5 get the pin and verify
    const cashoutPin = getValueFromInput('cashout-pin');
    if (cashoutPin === '1234') {
        alert('Cashout Successful');
        setBalance(newBalance);
        // 1. history container dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. New div create korbo
        const newHistory = document.createElement('div');
        // 3. New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-3 bg-base-100 rounded-xl my-3">
            Cash Out ${cashoutAmount} Successful. To ${agentNumber}, At ${new Date()}
        </div>
        `
        // 4. History Container a NewDiv k append korte hobe
        history.appendChild(newHistory);
    }
    else {
        alert('Invalid Pin')
        return;
    }
})








// document.getElementById('btn-cashout').addEventListener('click', function(){
//     //1 get the agent number and validate
//     const agentNumber = document.getElementById('cashout-number').value;
//     if(agentNumber.length != 11){
//         alert('Invalid Agent Number');
//         return;
//     }
//     //2 get the amount and validate and convert to number
//     const cashoutAmount = document.getElementById('cashout-amount').value;
//     //3 get the current balance and validate and convert to number
//     const currentBalanceElement = document.getElementById('balance');
//     const currentBalance = currentBalanceElement.innerText;
//     //4 calculate new balance
//     const newBalance = Number(currentBalance) - Number(cashoutAmount);
//     if(newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }
//     //5 get the pin and verify
//     const cashoutPin = document.getElementById('cashout-pin').value;
//     if(cashoutPin === '1234'){
//         //5-1 if true:: show an alert > set balance
//         alert('Cashout $'+ cashoutAmount + ' Successful.'+ 'Current Balance: $' + newBalance);
//         currentBalanceElement.innerText = newBalance;

//     }
//     else{
//         // 5-2 if false:: show an error alert > return
//         alert('Invalid Pin');
//         return;
//     }
// })