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

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function dropMenu() {
  var x = document.getElementById("navbarSupportedContent");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

(function($) {
  // Begin jQuery
  $(function() {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function(e) {
      $(this)
        .siblings(".nav-dropdown")
        .toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown")
        .not($(this).siblings())
        .hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function() {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function() {
      $("nav ul").toggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function() {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
