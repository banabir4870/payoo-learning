document.getElementById('btn-login').addEventListener('click', function(){
    // 1. get the mobile number input
    const mobileNumber = document.getElementById('mobile-number').value;
    console.log(mobileNumber);
    // 2. get the pin input
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);
    // 3. match number and pin
    if(mobileNumber == '01630143142' && pinNumber == '1234'){

        // 3-1. true:::>> alert > homepage
        alert('Login Success');
        // window.location.replace('/home.html');
        window.location.assign('home.html');
    }
    else{

        // 3-2. false:::>> alert > return
        alert('Login Failed. Please Try Again.');
        return;
    }

})