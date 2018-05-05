var theBoxes = document.querySelectorAll('.box');

console.log('boxes:', theBoxes);

theBoxes[0].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theBoxes[0].classList.toggle('on');
});

theBoxes[1].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theBoxes[1].classList.toggle('on');
});

theBoxes[2].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theBoxes[2].classList.toggle('on');
});

theBoxes[3].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theBoxes[3].classList.toggle('on');
});

theBoxes[4].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theBoxes[4].classList.toggle('on');
});

theBoxes[5].addEventListener('click', function() {
  console.log('Ouch you clicked me!');
  theBoxes[5].classList.toggle('on');
});
