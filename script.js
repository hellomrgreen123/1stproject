const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');
console.log(username.parentElement);
function showError(input, message){
   const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const  small = formControl.querySelector('small');
    small.innerText = message;


}
function showSuccess(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const  small = formControl.querySelector('small');
    small.innerText = message;


}
function getFieldName(input){
     return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}
function checkEmail(input){var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(re.test(input.value.trim())){
    showSuccess(input)}

else{
    showError(input,'Email is not valid');
}
}
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if (input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    });
}
function checkLength(input,min,max){
    if(input.value.length < min ){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
   
    }
    else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(password ,password2){
    if (password.value !==password2.value){
        showError(password2, 'Passwords do not match')
    }

}

form.addEventListener('submit', function(e){
    e.preventDefault();
   checkRequired([username,email,password,password2]);
   checkLength(username,3,15);
   checkLength(password,6,20);
   checkEmail(email);
   checkPasswordsMatch(password, password2);
 }
)
