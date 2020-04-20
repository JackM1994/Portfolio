var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

var pat = document.querySelector('.card-pat');
pat.addEventListener( 'click', function() {
  pat.classList.toggle('is-flipped');
  console.log('flipped');
});

var college = document.querySelector('.card-college');
college.addEventListener( 'click', function() {
  college.classList.toggle('is-flipped');
  console.log('flipped');
});