// machine id > input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine > get balance
function getBalance(){
    const currentBalanceElement = document.getElementById('balance');
    const currentBalance = currentBalanceElement.innerText;
    console.log('Current Balance: ', Number(currentBalance));
    return Number(currentBalance);
}

// machine > set balance
function setBalance(value){
    const currentBalanceElement = document.getElementById('balance');
    currentBalanceElement.innerText = value;
}

// machine id > hide all > show id
function showOption(id){
    console.log('Show Only Clicked')
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const sendMoney = document.getElementById('send-money');
    const getBonus = document.getElementById('get-bonus');
    const payBill = document.getElementById('pay-bill');
    const transaction = document.getElementById('history');
    // hide all
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    sendMoney.classList.add('hidden');
    getBonus.classList.add('hidden');
    payBill.classList.add('hidden');
    transaction.classList.add('hidden');
    // id wala element ta show koro
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}
