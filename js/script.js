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

// Add smooth scrolling
$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});

//Scroll back to top Buttons
mybutton = document.getElementById("topButton");
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
