
var lastScrollTop = 0;
const navbar = document.querySelector('header');
const nav_menu = navbar.querySelector('ul#menu');


//=================================================
// Sticky navbar
//=================================================
// Make navbar sticky & hide it when scrolling down - shows it again when scrolling up.
// Navbar will always be visible at top of page - reappears when user starts scrolling up.
document.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop;
  var is_menu_shown = nav_menu.classList.contains('show');

  // // If screen size is non-mobile, disable force-showing of nav-menu.
  // if ((screen.width > 850)){ // && nav_menu.classList.contains('show')) {
  //   console.log("screen.width = " + screen.width);
  // }
  // navbar.classList.remove('show');

  // Only hide iff menu is NOT showing!
  // NOTE: always visible in desktop view
  if ((scrollTop > lastScrollTop) && !is_menu_shown) {
    // Scrolling down
    navbar.classList.add('hide');
    // navbar.style.top='-80px';
  } else {
    // Scrolling up
    navbar.classList.remove('hide');
    // navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
});

// document.addEventListener("DOMContentLoaded", function() {
//   function is_nav_link_active(event) {
//     const href_target = event.target.getAttribute('href');
//     console.log("href_target = " + href_target);
//     const href_this = this.href;
//     console.log("href_this = " + href_this);

//     if (href_this in href_target) {
//       event.target.classList.add('active');
//       console.log("Page " + href_target + " is now active");
//     } else {
//       event.target.classList.remove('active');
//     }
//   }

//   // Add event listeners to all navbar links.
//   const navLinks = document.querySelectorAll('nav ul#menu li a');
//   navLinks.forEach(link => {
//       link.addEventListener('click', is_nav_link_active);
//   });
// });