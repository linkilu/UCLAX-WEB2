console.log('This is only visible to us');

window.onload = function() {

  var items = document.querySelectorAll('.item');
  var texts = document.querySelectorAll('.text');
  var descs = document.querySelectorAll('.desc');

  console.log(items);
  console.log(items[0]);
  console.log(items[1]);
  console.log(items[2]);
  console.log(items[3]);
  console.log(items[4]);
  console.log(items[5]);

  console.log(texts);
  console.log(texts[0]);
  console.log(texts[1]);
  console.log(texts[2]);
  console.log(texts[3]);
  console.log(texts[4]);
  console.log(texts[5]);

  console.log(descs);
  console.log(descs[0]);
  console.log(descs[1]);
  console.log(descs[2]);
  console.log(descs[3]);
  console.log(descs[4]);
  console.log(descs[5]);

  /* Image 1 ------------------------------*/

  items[0].addEventListener('mouseover', function() {
    console.log('Ouch you mousovered me');
    texts[0].classList.toggle('on');
    descs[0].classList.toggle('on');
  });

  items[0].addEventListener('mouseout', function() {
    console.log('Ouch you mousoutted me');
    texts[0].classList.toggle('on');
    descs[0].classList.toggle('on');
  });

  /* Image 2 ------------------------------*/

  items[1].addEventListener('mouseover', function() {
    console.log('Ouch you mousovered me');
    texts[1].classList.toggle('on');
    descs[1].classList.toggle('on');
  });

  items[1].addEventListener('mouseout', function() {
    console.log('Ouch you mousoutted me');
    texts[1].classList.toggle('on');
    descs[1].classList.toggle('on');
  });

  /* Image 3 ------------------------------*/

  items[2].addEventListener('mouseover', function() {
    console.log('Ouch you mousovered me');
    texts[2].classList.toggle('on');
    descs[2].classList.toggle('on');
  });

  items[2].addEventListener('mouseout', function() {
    console.log('Ouch you mousoutted me');
    texts[2].classList.toggle('on');
    descs[2].classList.toggle('on');
  });

  /* Image 4 ------------------------------*/

  items[3].addEventListener('mouseover', function() {
    console.log('Ouch you mousovered me');
    texts[3].classList.toggle('on');
    descs[3].classList.toggle('on');
  });

  items[3].addEventListener('mouseout', function() {
    console.log('Ouch you mousoutted me');
    texts[3].classList.toggle('on');
    descs[3].classList.toggle('on');
  });

  /* Image 5 ------------------------------*/

  items[4].addEventListener('mouseover', function() {
    console.log('Ouch you mousovered me');
    texts[4].classList.toggle('on');
    descs[4].classList.toggle('on');
  });

  items[4].addEventListener('mouseout', function() {
    console.log('Ouch you mousoutted me');
    texts[4].classList.toggle('on');
    descs[4].classList.toggle('on');
  });

  /* Image 6 ------------------------------*/

  items[5].addEventListener('mouseover', function() {
    console.log('Ouch you mousovered me');
    texts[5].classList.toggle('on');
    descs[5].classList.toggle('on');
  });

  items[5].addEventListener('mouseout', function() {
    console.log('Ouch you mousoutted me');
    texts[5].classList.toggle('on');
    descs[5].classList.toggle('on');
  });

}; //window load ends here
