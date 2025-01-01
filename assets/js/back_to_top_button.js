
// Go to top button functionality
const goTopBtn = document.getElementById("goTopBtn");

// Function: check_button_scroll
// Determines whether the back-to-top button should be hidden.
function check_button_scroll() {
    goTopBtn.style.display = "none";
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    }
}

// At start, check if button should be hidden.
document.addEventListener("DOMContentLoaded", check_button_scroll());
// When page scrolled, check if button should be hidden.
window.onscroll = function() {
    check_button_scroll()
};

// If clicked, go right to top of page.
goTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});