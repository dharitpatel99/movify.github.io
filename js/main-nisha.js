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
      email:"dharitpatel99@gmail.com",
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
    // alert("Login Successfully");

    for(let i=0;i<validLogin.length;i++){
      if(email.value == validLogin[i].email && password.value == validLogin[i].password){
        location.href = 'homepage.html';
      }
    }
  }
};



// document.addEventListener('click', () => {
//   $('#emailbutt').addEventListener('click', processEntries);
// });

const movieList = [
{
  image:"images/movie-1.png",
  name:"Sonic 2"
},
{
  image:'images/movie-2.png',
  name:"Morbius"
},
{
  image:'images/movie-3.png',
  name:"Adam Project"
},
{
  image:'images/movie-4.png',
  name:"Free Guy"
},
{
  image:'images/movie-5.png',
  name:"The Batman"
},
]



// populateMovie();

class Movies {
  async movieData(){
    let result = await fetch('Film.json');
    let data = await result.json();
    let movies = data.movies;
    movies = movies.map(movie =>{
      const {Title,Year,Images} = movie;
      return {Title,Year,Images}
    })
    return movies;
    console.log(data);
    }
}

class UI{

   populateMovie(movie){
    console.log(movie);
    if(document.getElementsByClassName("movie") != null){
      movie.forEach((movie)=>{
      document.querySelector('.movie').innerHTML +=   ` <div  class="recommended-movie">
      <img class="recommended-movie-img" src=${movie.Images[0]} alt="">
      <p>${movie.Title}</p>
  </div>`
    })
  }
  }
  
}



// movieData();

document.addEventListener("DOMContentLoaded",()=>{
  const ui = new UI();
  const movieObj = new Movies();
  movieObj.movieData().then(movies => ui.populateMovie(movies));
})

