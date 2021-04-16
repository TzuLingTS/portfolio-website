"use strict";
var message = "Welcome to my portfolio!";
console.log(message);

// Add mobile menu
function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle" && $(window).width() < 640) {
    x.className += " responsive";
  } else {
    x.className = "navtoggle";
  }
}

//Copy Email
function copyElementText() {
  var text = document.getElementById("emailCopy").innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}


// Progress Indicator
window.addEventListener("scroll", myFunction);

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

// Scroll back to top Buttons
mybutton = document.getElementById("topButton");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
