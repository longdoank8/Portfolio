const selectElement = (element) => document.querySelector(element);
// Call selectElement function then values into variables
const header = selectElement("header");
const mainContent = selectElement("main");
//Click event on Hamburger menu to trigger the .active state
selectElement(".menu-toggler").addEventListener("click", () => {
  header.classList.toggle("active");
  //mainContent.classList.toggle("active");
});

//close sidebar when clicking outside of it
window.onclick = (event) => {
  if(event.target.matches(".active")){
    if(header.classList.contains("active")){
      header.classList.remove("active");
      // mainContent.classList.remove("active");
      $('.menu-toggler').removeClass("open");
    }
  }
};

const linkFade = () => { //declare unknown function

    const menu = document.querySelector('.menu-toggler')
    const nav = document.querySelector('.nav-list');
    const navList = document.querySelectorAll('.nav-list li')

    menu.addEventListener('Click', () => {
      nav.classList.toggle('nav-active');
    });

    //Animate navLinks
    navList.forEach((list, index) => {
        list.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        console.log(index / 7);
    });
}

linkFade();

$(document).ready(function () {

  $('.menu-toggler').on('click',  function() {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on("click",  function() {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
  });

  $('nav a[href *= "#" ]').on('click',  function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 90
     }, 1000);
  });

  $('#up').on('click',  function() {
    $('html, body').animate({
          scrollTop: 0
       }, 500);
  });

  AOS.init({
    easing: 'ease',
    duration: 1800,
    // once: true

  });

});


// TYPINGEFFECT

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["22 years old.", "EE student at TU Berlin.", "Passionate programmer."];
const typingDelay =  100; // in millisekunden
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    // erase
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(charIndex > 0){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 100);
  }
}


document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 100); // verzögert Aufruf der function
});
