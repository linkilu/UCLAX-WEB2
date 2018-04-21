console.log('This is only visible to us');

window.onload = function() {

  var features = document.querySelectorAll('.feature');
  var bubbles = document.querySelectorAll('.bubble');


  console.log(features);
  console.log(features[0]);
  console.log(features[1]);
  console.log(features[2]);

  console.log(bubbles);
  console.log(bubbles[0]);
  console.log(bubbles[1]);
  console.log(bubbles[2]);

/* pic1 -------------------------------*/

  features[0].addEventListener('mouseover', function() {
    console.log('Ouch you mouseovered me');
    bubbles[0].classList.toggle('on');
  });
  features[0].addEventListener('mouseout', function() {
    console.log('Ouch you mouseoutted me');
    bubbles[0].classList.toggle('on');
  });

/* pic2 -------------------------------*/

features[1].addEventListener('mouseover', function() {
  console.log('Ouch you mouseovered me');
  bubbles[1].classList.toggle('on');
});
features[1].addEventListener('mouseout', function() {
  console.log('Ouch you mouseoutted me');
  bubbles[1].classList.toggle('on');
});

/* pic3 -------------------------------*/

features[2].addEventListener('mouseover', function() {
  console.log('Ouch you mouseovered me');
  bubbles[2].classList.toggle('on');
});
features[2].addEventListener('mouseout', function() {
  console.log('Ouch you mouseoutted me');
  bubbles[2].classList.toggle('on');
});

}; // window load ends here
