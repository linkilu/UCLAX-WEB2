/*-------------------------------------
| Grab some assets (create variables)
-------------------------------------*/
var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var theSections = document.querySelectorAll('.tabbed section');

//console.log(tabLinks);
//console.log(theSections);

/*-------------------------------------
| Creating a functions to Rule All
-------------------------------------*/
// function declaration
function switchSection(whichSection) { //switchSection can be renamed
whichSection = whichSection -1;
  console.log(whichSection);

/*-------------------------------------
| Sections
-------------------------------------*/
  //hide them all by default
for(var i = 0; i < theSections.length; i++) {
  theSections[i].style.display = 'none';
}

/*theSections[1].style.display = 'none';
theSections[2].style.display = 'none';
theSections[3].style.display = 'none';*/

  // show the chosen none
theSections[whichSection].style.display = 'block';


/*-------------------------------------
| Links
-------------------------------------*/
tabLinks.forEach(function(theLink){
   theLink.classList.remove('chosen');
});

tabLinks[whichSection].classList.add('chosen');

}

// function call
switchSection(2);


/*-------------------------------------
| Manage Event Listeners on tabLinks
-------------------------------------*/
tabLinks.forEach(function(currentLink) {
  currentLink.addEventListener('click', function(event) {

      event.preventDefault(); // stop jumping
      // we will do this instead
    var theSection = this.dataset.section;
    switchSection(theSection);
  });
});
