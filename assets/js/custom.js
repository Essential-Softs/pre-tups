!(function($) {
	"use strict";

// PreLoader
setTimeout(function(){
	$('.loader_bg').fadeToggle();
  }, 500);

// Sticky Navbar

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("mynavbar");
function myFunction() {
  if (window.pageYOffset >= 100) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}

// Nice Select
$(document).ready(function() {
	$('select').niceSelect();
  });

// Contact Form Validation

(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

//   VenoBox 

  $(document).ready(function() {
	$('.venobox').venobox({
		'share': false
	});
	});

//   Owl Carousel

  $("#ANYcarousel").owlCarousel({      
	pagination : false,
	loop:true,
	 dots:false,
	 margin:30,
	 nav:false,
	 center:true,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:2
		},
		500:{
			items:3
		},
		1000:{
			items:4
		}
	}
  });

})(jQuery);

$(".sidebar-dropdown > a").click(function() {
	$(".sidebar-submenu").slideUp(200);
	if (
	  $(this)
		.parent()
		.hasClass("active")
	) {
	  $(".sidebar-dropdown").removeClass("active");
	  $(this)
		.parent()
		.removeClass("active");
	} else {
	  $(".sidebar-dropdown").removeClass("active");
	  $(this)
		.next(".sidebar-submenu")
		.slideDown(200);
	  $(this)
		.parent()
		.addClass("active");
	}
  });
  
  $("#close-sidebar").click(function() {
	$(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function() {
	$(".page-wrapper").addClass("toggled");
  });
  
  