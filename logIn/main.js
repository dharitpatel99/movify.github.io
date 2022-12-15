
'use strict';

const $ = (selector) => document.querySelector(selector);
const loginForm = document.querySelector('#loginForm');
if(document.querySelector('#loginForm') != null){
loginForm.addEventListener('submit',(e)=>{
e.preventDefault();
processEntries();
})
}

const processEntries = () => {
// get form controls to check for validity
const email = $('#email');
const password = $('#password');


let validLogin = [
{
email:"nishasoni123@gmail.com",
password:"nisha123"
},
{
email:"bdharit99@gmail.com",
password:"dharit99"
},
{
email:"aditi420@gmail.com",
password:"aditi420"
}
];

// check user entries for validity
let isValid = true;
if (email.value == '') {
email.nextElementSibling.textContent = 'This field is required.';
isValid = false;
} else {
email.nextElementSibling.textContent = '';
}

if (password.value == '') {
password.nextElementSibling.textContent = 'This field is required.';
isValid = false;
} else {
password.nextElementSibling.textContent = '';
}


// submit the form if all fields are valid
if (isValid == true) {
// $('form').submit();
for(let i=0;i<validLogin.length;i++){
if(email.value == validLogin[i].email && password.value == validLogin[i].password){
location.href = '../homepage1/index.html';

}
}
}
};

document.addEventListener('DOMContentLoaded', () => {
$('#emailbutt').addEventListener('click', processEntries);
//   $('#reset_form').addEventListener('click', resetForm);
// $('#email_address').focus();
});
