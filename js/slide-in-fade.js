// Code goes here
jQuery(function ($) {

    $('#css-about-section').hover(
      function() {
        $('.repo').fadeIn();
        $('.live-demo').fadeIn();
      },function() {
        $('.repo').fadeOut();
        $('.live-demo').fadeOut();
      } 
    );

    $('#gallery-about-section').hover(
        function() {
          $('.repo').fadeIn();
          $('.live-demo').fadeIn();
        },function() {
          $('.repo').fadeOut();
          $('.live-demo').fadeOut();
        } 
      );
    
      $('#friends-about-section').hover(
        function() {
          $('.repo').fadeIn();
          $('.live-demo').fadeIn();
        },function() {
          $('.repo').fadeOut();
          $('.live-demo').fadeOut();
        } 
      );
    
    
  
  });