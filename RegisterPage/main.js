'use strict';

const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
// get form controls to check for validity
const fname = $('#fname');
const email = $('#Email');
const uname = $('#uname');
const password = $('#password');
const cpassowrd = $('cpassword');

// check user entries for validity
let isValid = true;
if (fname.value == '') {
fname.nextElementSibling.textContent = 'This field is required.';
isValid = false;
} else {
fname.nextElementSibling.textContent = '';
}

if (email.value == '') {
email.nextElementSibling.textContent = 'This field is required.';
isValid = false;
} else {
email.nextElementSibling.textContent = '';
}

if (uname.value == '') {
uname.nextElementSibling.textContent = 'This field is required.';
isValid = false;
} else {
uname.nextElementSibling.textContent = '';
}

if (password.value == '') {
password.nextElementSibling.textContent = 'This field is required.';
isValid = false;
} else {
password.nextElementSibling.textContent = '';
}

if (cpassword.value == '') {
cpassword.nextElementSibling.textContent = 'This field is required.';
isValid = false;
} else {
cpassword.nextElementSibling.textContent = '';
}
// submit the form if all fields are valid
if (isValid == true) {
$('form').submit();
alert("Registration Successfully");
}
};

document.addEventListener('DOMContentLoaded', () => {
$('#Register').addEventListener('click', processEntries);
//   $('#reset_form').addEventListener('click', resetForm);
$('#Email').focus();
});
