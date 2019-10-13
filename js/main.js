(function ($) {
 "use strict"; 

 /*--------------------------
 Shirnk menu
---------------------------- */ 
// $(document).on("scroll", function() {
//   if($(document).scrollTop()>100) {
//     $("header").removeClass("large").addClass("small");
//   } else {
//     $("header").removeClass("small").addClass("large");
//   }  
// });

/*---------------------------
menu with active class and smooth scroll
----------------------------*/
// https://codepen.io/eksch/pen/xwdOeK
$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 200, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //    $('nav').fadeIn("fast");
    //} else {
    //    $('nav').fadeOut("fast");
    //}
  
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.topnav a.active').removeClass('active');
            $('.topnav a').eq(i).addClass('active');
        }
    });
}).scroll();


/*--------------------------
// hambagrer menu
---------------------------- */
$( '.hamburger-menu li a' ).on("click", function(){
  $('#hamburger').click();
});

// Modal video
$('#link').on('click',function () {
    var src = 'http://www.youtube.com/v/FSi2fJALDyQ&amp;autoplay=1';
    $('#myModal').modal('show');
    $('#myModal iframe').attr('src', src);
});
$('#myModal button').on('click',function () {
    $('#myModal iframe').removeAttr('src');
});
/*--------------------------
 VenoBox
---------------------------- */
// portfolio light box
$('.lightbox').venobox({
    numeratio: true,
    infinigall: true
});
// youtube video Modal
$('.venobox_youtube').venobox({
    border: '10px',        
});
/*--------------------------
 Counter up
---------------------------- */
   $('.counter').counterUp({
    delay: 10,
    time: 1000
    });

/*----------------------------
  owl active
------------------------------ */
  $('.client-sayes').owlCarousel({
    loop:true,
    margin:50,
    items : 1,
    nav:true,
    // navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"]
    navText:["<i class='flaticon-left-arrow'></i>","<i class='flaticon-right-arrow'></i>"]
  });
  // brand
   $('.brand-carasel').owlCarousel({
    loop:true,
    margin:50,
    items : 5,
    animateIn: 'slideOutRight',
    autoplay:true,
    transitionSpeed:10000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            margin:10
        },
        600:{
            items:4,
            margin:50
        },
        1200:{
            items:5,
           margin:50
        }
    }
  });     

/*--------------------------
Load More Item
---------------------------- */
$(".load-item").slice(0, 12).show();
$(".load-more, .blog-item").on('click', function (e) {
    e.preventDefault();
    $(".load-item:hidden").slice(0, 5).slideDown();
    if ($(".load-item:hidden").length == 0) {
        $("#load").fadeOut('slow');
    }
});

/*--------------------------
google map
---------------------------- */
function initialize() {
  var mapOptions = {
    zoom: 17,
    scrollwheel: false,
    center: new google.maps.LatLng(23.754005, 90.358693)
  };
  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  var marker = new google.maps.Marker({
    position: map.getCenter(),
    icon: 'img/pin.png',
    map: map            
  });
}
google.maps.event.addDomListener(window, 'load', initialize); 

/*--------------------------
 smooth scroll
---------------------------- */
  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
    selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});

})(jQuery);
