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

// TODO: fix this formatting if needed
function formatAnchor(item){
  let formattedItem = '#';
  return formattedItem += item.toLowerCase().trim(' ');
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  const navFrag = document.createDocumentFragment();

  // TODO: add in attribute with value of section id
  for (const section of sections) {
    let navItem = document.createElement('li');
    navItem.innerText = section.dataset.nav;
    navItem.className = 'menu__link';

    navFrag.appendChild(navItem);
  }

  navBar.appendChild(navFrag);

}

// Add class 'active' to section when near top of viewport

// TODO: get scrollPos via section attribute
// Scroll to anchor ID using scrollTO event
function navClick(evt) {
  if (evt.target.nodeName.toLowerCase() === 'li') {
    const scrollPos = document.querySelector('#section3');
    scrollPos.scrollIntoView({behavior: 'smooth', block: 'start'});
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
