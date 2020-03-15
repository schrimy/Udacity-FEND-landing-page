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

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function createNavItems(sections) {

  const navFrag = document.createDocumentFragment();

  for (const section of sections) {
    let navItem = document.createElement('li');
    navItem.innerText = section.dataset.nav;
    navItem.className = 'menu__link';

    navFrag.appendChild(navItem);
  }

  return navFrag;

}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const navBar = document.querySelector('#navbar__list');
const pageSections = document.querySelectorAll('section');

const navContent = createNavItems(pageSections);
navBar.appendChild(navContent);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
