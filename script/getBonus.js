document.getElementById('btn-get-bonus').addEventListener('click', function () {
    // 1. get the bonus coupon code
    const coupon = getValueFromInput('bonus-coupon-number');
    if (coupon == 'Bana050') {
        alert('Congratulations, You Got $50 Bonus.');
        setBalance(getBalance() + 50);
        // 1. history container dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. New div create korbo
        const newHistory = document.createElement('div');
        // 3. New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-3 bg-base-100 rounded-xl my-3">
            Get Bonus $50 Successfully. At ${new Date()}
        </div>
        `
        // 4. History Container a NewDiv k append korte hobe
        history.appendChild(newHistory);
    }
    else if(coupon == 'Bana100'){
        alert('Congratulations, You Got $100 Bonus.');
        setBalance(getBalance() + 100);
        // 1. history container dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. New div create korbo
        const newHistory = document.createElement('div');
        // 3. New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-3 bg-base-100 rounded-xl my-3">
            Get Bonus $100 Successfully. At ${new Date()}
        </div>
        `
        // 4. History Container a NewDiv k append korte hobe
        history.appendChild(newHistory);
    }
    else if(coupon == 'Bana200'){
        alert('Congratulations, You Got $200 Bonus.');
        setBalance(getBalance() + 200);
        // 1. history container dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. New div create korbo
        const newHistory = document.createElement('div');
        // 3. New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-3 bg-base-100 rounded-xl my-3">
            Get Bonus $200 Successfully. At ${new Date()}
        </div>
        `
        // 4. History Container a NewDiv k append korte hobe
        history.appendChild(newHistory);
    }
    else if(coupon == 'Bana300'){
        alert('Congratulations, You Got $300 Bonus.');
        setBalance(getBalance() + 300);
        // 1. history container dhore niye ashbo
        const history = document.getElementById('history-container');
        // 2. New div create korbo
        const newHistory = document.createElement('div');
        // 3. New div a innerHTML add korbo
        newHistory.innerHTML = `
        <div class="transaction-card p-3 bg-base-100 rounded-xl my-3">
            Get Bonus $300 Successfully. At ${new Date()}
        </div>
        `
        // 4. History Container a NewDiv k append korte hobe
        history.appendChild(newHistory);
    }
    else{
        alert('Invalid Coupon');
        return;
    }
})