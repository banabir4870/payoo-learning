document.getElementById('btn-pay-bill').addEventListener('click', function(){
    // 1 get the bank name
    const billType = getValueFromInput('pay-bill-type');
    if(billType == 'Select Bill Type'){
        alert('Please Select Bill Type.');
        return;
    }
    // 2 get the bank account number
    const accountNumber = getValueFromInput('biller-account-number');
    if(accountNumber.length != 11){
        alert('Invalid Account Number.')
        return;
    }

    // 3 get ammount to add
    const payAmount = getValueFromInput('pay-bill-amount');

    const newBalance = getBalance() - Number(payAmount);
    if(newBalance < 0){
        alert('Insufficient Amount.');
        return;
    }
    
    // 4 pin
    const payBillPin = getValueFromInput('pay-bill-pin');
    if(payBillPin === '1234'){
        alert(`Pay Bill Successful.
            For ${billType}.
            At ${new Date()}`);
        setBalance(newBalance);
        // 1. history container dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. New div create korbo
        const newHistory = document.createElement('div');
        // 3. New div a innerHTML add korbo
        newHistory.innerHTML= `
        <div class="transaction-card p-3 bg-base-100 rounded-xl my-3">
            Pay Bill ${payAmount} Successful. For ${billType}, Acc-no ${accountNumber}, At ${new Date()}
        </div>
        `
        // 4. History Container a NewDiv k append korte hobe
        history.appendChild(newHistory);
    }
    else{
        alert('Invalid Pin');
        return;
    }
})