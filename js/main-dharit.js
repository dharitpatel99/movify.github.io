const $ = (selector) => document.querySelector(selector);

const formData = document.querySelector('#formData');
if(formData!= null){
formData.addEventListener('submit',(e)=>{
  e.preventDefault();

  checkValidation();
})
}

function checkValidation(){
  const fullname = $('#fullname');
  const billingEmail = $('#billing-email');
  const country = $('#country');
  const state = $('#state');
  const postalCode = $('#postal-code');

  const cardNumber = $('#card-number');
  const payment = $('.payment');
  const expdate = $('#expdate');
  const expyear = $('#expyear');
  const scode = $('#scode');
  // const postalCode = $('#postal-code');

  let isValid = true;
if (fullname.value == '') {
fullname.nextElementSibling.textContent = 'Please provide a name';
isValid = false;
} else if(!/^[a-zA-Z]+$/.test(fullname.value)){
  fullname.nextElementSibling.textContent = 'name field should not contain numeric value';
} else {
fullname.nextElementSibling.textContent = '';
}

if (billingEmail.value == '') {
billingEmail.nextElementSibling.textContent = 'please provide an email';
isValid = false;
}else {
billingEmail.nextElementSibling.textContent = '';
}

if (country.value == '') {
country.nextElementSibling.textContent = 'please provide an country';
isValid = false;
} else {
country.nextElementSibling.textContent = '';
}

if (state.value == '') {
state.nextElementSibling.textContent = 'please provide an state';
isValid = false;
} else {
state.nextElementSibling.textContent = '';
}

if (postalCode.value == '') {
postalCode.nextElementSibling.textContent = 'please provide an poscal code';
isValid = false;
}else if(postalCode.value.length > 6){
  postalCode.nextElementSibling.textContent = 'postal code cannot be greater than 6 character';
  isValid = false;
} else {
postalCode.nextElementSibling.textContent = '';
}
const cardValidation = document.querySelector('input[name="payment"]:checked').value;
if(cardValidation == 'card'){


if (cardNumber.value == '') {
cardNumber.nextElementSibling.textContent = 'please provide a card number';
isValid = false;
}else if(cardNumber.value.length != 16){
  cardNumber.nextElementSibling.textContent = 'please provide a valid 16 digit card number';
  isValid = false;
} else {
cardNumber.nextElementSibling.textContent = '';
}

if (expmonth.value == '') {
  expmonth.nextElementSibling.textContent = 'please provide a month';
isValid = false;
} else {
  expmonth.nextElementSibling.textContent = '';
}

if (expyear.value == '') {
expyear.nextElementSibling.textContent = 'please provide a year';
isValid = false;
} else {
expyear.nextElementSibling.textContent = '';
}

if (scode.value == '') {
scode.nextElementSibling.textContent = 'please provide a security code';
isValid = false;
}else if(scode.value.length != 3){
  scode.nextElementSibling.textContent = 'please provide valid 3 digit security code';
  isValid = false;
} else {
scode.nextElementSibling.textContent = '';
}

}

if (isValid == true) {
$('form').submit();
alert("Order has been placed successfully");
}

}

let yearList = ['2022','2023','2024','2025','2026','2027','2028','2029','2030'];

function populateYear(){
  if(document.getElementById("expyear") != null){

  yearList.forEach((year)=>{
    document.getElementById('expyear').innerHTML += `<option value=${year}>${year}</option>`
  })
}
}

let monthList = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function populateMonth(){
  if(document.getElementById("expmonth") != null){
  monthList.forEach((month)=>{
    document.getElementById('expmonth').innerHTML += `<option value=${month}>${month}</option>`
  })
}
}

populateYear();
populateMonth();



// SEAT SELECT PAGE
const container = document.querySelector('.container');
const seats = document.querySelector('.seat:not(.sold)');
const count = document.getElementById('count');
const row = document.querySelector('.seat-select-row');


container.addEventListener('click',(e)=>{
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

function updateSelectedCount()
{
  const seatCount = document.querySelectorAll('.seat.selected');
  count.innerText = seatCount.length;

}



function showandhide(payMethod){
  if(payMethod == 'paypal'){
    document.getElementById('shownhide').style.display = 'none';
  }else{
    document.getElementById('shownhide').style.display = 'block';

  }
}



// let promotionApplied = document.querySelector('#promotion-applied');
// let discount = document.querySelector('#discount');
// promotionApplied.style.display = 'none';

function cartTotalCalculation(){

}

cartTotalCalculation();

let cartticketprice = document.querySelector('#cart-ticketprice').innerHTML;
let cartbookingfee = document.querySelector('#cart-bookingfee').innerHTML;
let carttickettax= document.querySelector('#cart-tickettax').innerHTML;
let cartticketdiscount = document.querySelector('#cart-discount').innerHTML;
// let carttotalprice = ;

carttotalprice = +cartticketprice + +cartbookingfee + +carttickettax + +cartticketdiscount;
document.querySelector('#cart-totalprice').innerHTML = carttotalprice;

function validateCode(){

  let validCode = [
    {code:"STEALDEAL20",
      value:20,
      msg:"The stealdeal20 promotion code applied"
    },
    {code:"STEALDEAL30",
    value:30,
    msg:"The stealdeal30 promotion code applied"
  },
  {code:"code30",
  value:30,
  msg:"The code30 promotion code applied"
  },
  ];

  
  let promotionCode = document.querySelector('#promotion-code');
  let promotionMsg = document.querySelector('#code-message');
  let flag = false;
  promotionMsg.style.display = 'block';
  promotionMsg.classList.remove('failure');

  validCode.forEach((code)=>{
    if(code.code == promotionCode.value){
      promotionMsg.textContent = code.msg;
      cartticketdiscount = cartticketprice*(code.value/100);
      document.querySelector('#cart-discount').innerHTML = cartticketdiscount.toFixed(2);
      document.querySelector('#cart-totalprice').innerHTML = +document.querySelector('#cart-ticketprice').innerHTML + +document.querySelector('#cart-bookingfee').innerHTML + +document.querySelector('#cart-tickettax').innerHTML - +document.querySelector('#cart-discount').innerHTML;
      promotionMsg.classList.add('success');
      flag = true;
    }
  })

  if(flag == false){
    let msg = "Invalid code";
    promotionMsg.classList.add('failure');
    promotionMsg.textContent = msg;
  }

  setTimeout(()=>{
    promotionMsg.style.display = 'none';
  },3000)
  
}






