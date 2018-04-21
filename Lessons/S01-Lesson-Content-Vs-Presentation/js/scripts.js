//alert('You linked to me.');
/*---------------
|Fancy comment Heading (C2+tab)
----------------*/
//single line Comment
/*
  multiple Comment
  Look
  like
*/
console.log('This is only seen by us.'); /* visiable only to us in "Inspect" */

// wait for page to load before we try and use the orbs
window.onload = function() {

//grabbing orbs and assigning to a handle (variable)
    var orbs = document.querySelectorAll('.orb');

    console.log(orbs);
    console.log(orbs[0]);
    console.log(orbs[1]);
    console.log(orbs[2]);
    console.log(orbs[3]);

/* Orb1 Management -------------------------------------*/
    orbs[0].addEventListener('click', function(){ /* telling a browser to listen for a click */
        console.log('Ounch you clicked me');
        orbs[0].classList.toggle('on');
    });
    orbs[0].addEventListener('mouseover', function(){
        console.log('Ounch you mouseovered me');
        orbs[0].src = './img/sun.png';
    });
    orbs[0].addEventListener('mouseout', function(){
        console.log('Ounch you mouseoutted me');
        orbs[0].src = './img/moon.png';
    });

/* Orb2 Management -------------------------------------*/
    orbs[1].addEventListener('click', function(){
        console.log('Ounch you clicked me');
        orbs[1].classList.toggle('on');
    });
    orbs[1].addEventListener('mouseover', function(){
        console.log('Ounch you mouseovered me');
        orbs[1].src = './img/sun.png';
    });
    orbs[1].addEventListener('mouseout', function(){
        console.log('Ounch you mouseoutted me');
        orbs[1].src = './img/moon.png';
    });

/* Orb3 Management -------------------------------------*/
    orbs[2].addEventListener('click', function(){
        console.log('Ounch you clicked me');
        orbs[2].classList.toggle('on');
    });
    orbs[2].addEventListener('mouseover', function(){
        console.log('Ounch you mouseovered me');
        orbs[2].src = './img/sun.png';
    });
    orbs[2].addEventListener('mouseout', function(){
        console.log('Ounch you mouseoutted me');
        orbs[2].src = './img/moon.png';
    });

/* Orb3 Management -------------------------------------*/
    orbs[3].addEventListener('click', function(){
        console.log('Ounch you clicked me');
        orbs[3].classList.toggle('on');
    });
    orbs[3].addEventListener('mouseover', function(){
        console.log('Ounch you mouseovered me');
        orbs[3].src = './img/sun.png';
    });
    orbs[3].addEventListener('mouseout', function(){
        console.log('Ounch you mouseoutted me');
        orbs[3].src = './img/moon.png';
    });

}; // this is where windown load ends
