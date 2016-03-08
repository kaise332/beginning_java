$(document).ready(function() {

//defines screen width and height
   var w = window.innerWidth;
   var h = window.innerHeight;

//used for asterik
   function shuffle(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

// hide all secondary intro elements on page
   $("#intro2").hide();
   $("#intro-button").hide();
//disabling scrolling till #intro-button or #intro-continue is pressed
   $("body").css({'overflow' : 'hidden', 'height' : 'h'});

//defines height for to allow for mobile usage
   $("#intro-continue").css({'top' : (h - 60)});
   $("#head-start").css({'margin-top' : (h + 50)});
   $("#description").css({'margin-top' : (h - 400)});

//auto scrolling functions
   $("#intro-continue").click(function() {
      $("body").animate({scrollTop: $("#head-start").offset().top}, 1000);
      $("body").css({'overflow' : 'visible'});
   });
   $("#intro-button").click(function() {
      $("body").animate({scrollTop: $("#head-start").offset().top}, 1000);
      $("body").css({'overflow' : 'visible'});
   });
//nav scrolling
   $("#link1").click(function() {
      $("body").animate({scrollTop: $("#ux-design").offset().top}, 1000);
   });
   $("#link2").click(function() {
      $("body").animate({scrollTop: $("#ui-design").offset().top}, 1000);
   });
   $("#link3").click(function() {
      $("body").animate({scrollTop: $("#resources").offset().top}, 1000);
   });
   $("#arrow").click(function() {
      $("body").animate({scrollTop: $("#description").offset().top}, 1000);
   });

//introductory asterik before entering the page
   $(".moving-ast").mouseenter(function() {
      $(this).css({'top' : shuffle(0,(h - 60)), 'left' : shuffle(0,(w - 200)), 'z-index' : '20'});
//audio for introductory asterik
      var audio1 = document.createElement('audio');
      audio1.setAttribute('src', 'sounds/audio1.mp3');
      audio1.play();

//delay of elements
      $("#intro1").delay(2000).hide(500);
      $("#intro2").delay(2000).show(300);
      $("#intro-button").delay(2000).show(300);
   });


});
