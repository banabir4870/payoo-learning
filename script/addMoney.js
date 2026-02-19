document.getElementById('btn-add-money').addEventListener('click', function(){
    // 1 get the bank name
    const bankAccount = getValueFromInput('add-money-bank');
    if(bankAccount == 'Select A Bank'){
        alert('Please Select A Bank');
        return;
    }
    // 2 get the bank account number
    const accountNumber = getValueFromInput('bank-account-number');
    if(accountNumber.length != 11){
        alert('Invalid Account Number')
        return;
    }

    // 3 get ammount to add
    const addAmount = getValueFromInput('add-money-amount');

    const newBalance = getBalance() + Number(addAmount);
    
    // 4 pin
    const addMoneyPin = getValueFromInput('add-money-pin');
    if(addMoneyPin === '1234'){
        alert(`Add Money Successful.
            From ${bankAccount}.
            At ${new Date()}`);
        setBalance(newBalance);
        // 1. history container dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. New div create korbo
        const newHistory = document.createElement('div');
        // 3. New div a innerHTML add korbo
        newHistory.innerHTML= `
        <div class="transaction-card p-3 bg-base-100 rounded-xl my-3">
            Add Money ${addAmount} Successful. From ${bankAccount}, Acc-no ${accountNumber}, At ${new Date()}
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