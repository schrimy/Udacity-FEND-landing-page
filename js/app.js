/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// TODO: maybe change these two functions to one switch
function setActive(elem) {
  const isActive = elem.classList.contains('your-active-class');

  if (!isActive) {
    elem.classList.add('your-active-class');
  }
}

function deactivate(elem) {
  const isActive = elem.classList.contains('your-active-class');

  if (isActive) {
    elem.classList.remove('your-active-class');
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  const navFrag = document.createDocumentFragment();

  for (const section of sections) {
    let navItem = document.createElement('li');
    navItem.setAttribute('data-anchor', section.id);
    navItem.innerText = section.dataset.nav;
    navItem.className = 'menu__link';

    navFrag.appendChild(navItem);
  }

  navBar.appendChild(navFrag);

}

// Add class 'active' to section when near top of viewport
function checkActive() {
  const bottomBound = window.innerHeight + navBar.offsetHeight;
  const topBound = -navBar.offsetHeight;

  for (const section of sections) {
    const bounding = section.getBoundingClientRect();

    if(bounding.bottom < bottomBound && bounding.top >= topBound){
      setActive(section);
    }else{
      deactivate(section);
    }
  }
}

// Scroll to anchor ID using scrollTO event
function navClick(evt) {
  if (evt.target.nodeName.toLowerCase() === 'li') {
    const scrollPos = document.getElementById(evt.target.dataset.anchor);
    scrollPos.scrollIntoView({behavior: 'smooth', block: 'end'});
  }
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click
navBar.addEventListener('click', navClick);

// Set sections as active
document.addEventListener('scroll', checkActive);
