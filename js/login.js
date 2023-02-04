let yourNamber = '01642240164';
let yourPassword = 'rihad';

let number = document.getElementById('User_number')
let password  = document.getElementById('User_password')

let loginButton = document.getElementById('login_button')

loginButton.addEventListener('click', function(){
    let numvalue = number.value;
    let passvalue = password.value;
    if(yourNamber == numvalue && yourPassword == passvalue){
        window.open('pages/rocket.html')
    }
   else if(numvalue =='' && passvalue == ''){
    alert('Enter your number and password')
   }
   else if(numvalue == numvalue && passvalue == ''){
    alert('Enter your password')
    password.value = ''
   }
   else if(passvalue == passvalue && numvalue == ''){
    alert('Enter your number')
    number.value = ''
   }
   else if(numvalue == yourNamber && passvalue != yourPassword ){
    alert('Entar your correct password')
    password.value = ''
   }
   else if(numvalue != yourNamber && passvalue == yourPassword ){
    alert('Entar your correct number')
    number.value = ''
   }
    else{
        alert('you are not valid user')
        number.value =''
        password.value = ''
    }
})


