$(window).on("load", function() {
  //lance toutes nos actions, quand toutes les ressources externes sont chargées

  ("use strict");

  // * STICKY HEADER *

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {
    myFunction();
  };

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});
