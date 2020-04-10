
$("#slideshow-css> div:gt(0)").hide();

setInterval(function() {
  $('#slideshow-css > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow-css');
}, 3000);

$("#slideshow-gallery> div:gt(0)").hide();

setInterval(function() {
  $('#slideshow-gallery > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow-gallery');
}, 3000);

$("#slideshow-friends> div:gt(0)").hide();

setInterval(function() {
  $('#slideshow-friends > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow-friends');
}, 3000);