document.getElementById('btn-send-money').addEventListener('click', function () {
    // 1. get receiver account number and verify
    const sendMoneyNumber = getValueFromInput('send-money-number');
    if (sendMoneyNumber.length != 11) {
        alert('Invalid Number');
        return;
    }
    // 2. get amount to send and verify
    const sendMoneyAmount = getValueFromInput('send-money-amount');
    const Balance = getBalance();
    const newBalance = Balance - Number(sendMoneyAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    // 3. get pin and verify
    const pin = getValueFromInput('send-money-pin');
    if (pin === '1234') {
        alert('Send Money Successful');
        setBalance(newBalance);
        // 1. history container dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. New div create korbo
        const newHistory = document.createElement('div');
        // 3. New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-3 bg-base-100 rounded-xl my-3">
            Send Money ${sendMoneyAmount} Successful. To ${sendMoneyNumber}, At ${new Date()}
        </div>
        `
        // 4. History Container a NewDiv k append korte hobe
        history.appendChild(newHistory);
    }
    else {
        alert('Invalid Pin');
        return;
    }
})