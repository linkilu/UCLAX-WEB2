var theDrawers = document.querySelectorAll('.drawer');

console.log('drawers:', theDrawers);

theDrawers[0].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theDrawers[0].classList.toggle('on');
});

theDrawers[1].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theDrawers[1].classList.toggle('on');
});

theDrawers[2].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theDrawers[2].classList.toggle('on');
});

theDrawers[3].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theDrawers[3].classList.toggle('on');
});
