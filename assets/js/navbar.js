
var lastScrollTop = 0;
const navbar = document.querySelector('nav');

// Make navbar sticky and hide it when scrolling down, while showing it again when scrolling up.
// Navbar will always be visible at the top of the page and will reappear as soon as the user starts scrolling up.
document.addEventListener('scroll', function() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
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