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

function setActive(elem, active) {
  const isActive = elem.classList.contains('your-active-class');

  if (active) {
    elem.classList.add('your-active-class');
  } else {
    elem.classList.remove('your-active-class');
  }
}

function hideAndShow() {
  //hide the nav bar when scrolling
  navBar.parentElement.classList.remove('navbar_show');
  navBar.parentElement.classList.add('navbar_hide');
  //check to see if user is scrolling and unhide navbar
  setTimeout(() => {
    navBar.parentElement.classList.remove('navbar_hide');
    navBar.parentElement.classList.add('navbar_show');
  }, 800);
}

function highlightActiveNav(elem) {
  const navItems = document.querySelectorAll('.menu__link');
  
  for (let navItem of navItems) {
    if (navItem.dataset.anchor === elem) {
      navItem.setAttribute('style', 'background: #cc1');
    } else {
      navItem.removeAttribute('style');
    }
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

//collapse / open section text
function collapseSection(evt) {
  const textTarget = evt.target.parentElement.nextElementSibling;
  //grab the section tag to reduce in height
  const containerTarget = textTarget.parentElement.parentElement;
  //if section has been collapsed already then open up and display text else
  // collapse and hide text
  if (evt.target.nodeName.toLowerCase() === 'span' && containerTarget.hasAttribute('style')) {
    containerTarget.removeAttribute('style');
    textTarget.style.cssText = 'display: block';
  } else {
    textTarget.style.cssText = 'display: none';
    containerTarget.setAttribute('style', 'min-height: 20vh');
  }
}

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
  const topBound = navBar.offsetHeight;

  for (const section of sections) {
    const bounding = section.getBoundingClientRect();

    if (bounding.bottom > topBound && bounding.top <= topBound) {
      setActive(section, true);
      highlightActiveNav(section.id);
    } else {
      setActive(section, false);
    }
  }
    //show or hide the nav based on scrolling
    hideAndShow();
}

// Scroll to anchor ID using scrollTO event
function navClick(evt) {
  if (evt.target.nodeName.toLowerCase() === 'li') {
    //get elements yPos to scroll to
    const scrollPos = document.getElementById(evt.target.dataset.anchor).offsetTop;
    window.scrollTo({top: scrollPos - navBar.offsetHeight, left: 0, behavior: 'smooth'});
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

//listen for click to collapse section
const mainTag = document.querySelector('main');
mainTag.addEventListener('click', collapseSection);
