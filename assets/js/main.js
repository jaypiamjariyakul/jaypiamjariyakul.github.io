
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {

    // // Allows for expand bio functionality.
    // var expandBtn = document.getElementById("expand-bio");
    // var shortBio = document.getElementById("short-bio");
    // var fullBio = document.getElementById("full-bio");

    // expandBtn.addEventListener("click", function() {
    //     if (fullBio.style.display === "none") {
    //         fullBio.style.display = "block";
    //         shortBio.style.display = "none";
    //         expandBtn.textContent = "Read Less";
    //     } else {
    //         fullBio.style.display = "none";
    //         shortBio.style.display = "block";
    //         expandBtn.textContent = "Read More";
    //     }
    // });

    // // Page load animation
    // setTimeout(function() {
    //     document.querySelector('.fade-in').style.opacity = '0';
    //     document.querySelector('.fade-in').style.animation = 'none';
    //     setTimeout(function() {
    //         document.querySelector('.fade-in').style.opacity = '1';
    //         document.querySelector('.fade-in').style.animation = '';
    //     }, 10);
    // }, 100);

    // Function: scrollToSection
    // When clicked, scrolls to section specified in nav's links.
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Add fade-out effect
            document.body.classList.add('fade-out');

            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // Remove fade-out class and add fade-in class
                document.body.classList.remove('fade-out');
                document.body.classList.add('fade-in');

                // Remove fade-in class after animation completes
                setTimeout(() => {
                    document.body.classList.remove('fade-in');
                }, 1000);
            }, 500);
        }
    }
    // 1. Adds a 'fade-out' class to the body when a nav link is clicked.
    // 2. Scrolls to the target section after a short delay (to allow the fade-out animation to complete).
    // 3. Removes the 'fade-out' class and adds a 'fade-in' class to fade the content back in.
    // 4. Finally, removes the 'fade-in' class after the animation completes.

    // Add event listeners to all navbar links.
    const navLinks = document.querySelectorAll('nav a.section');
    navLinks.forEach(link => {
        // When clicked, calls "scrollToSection()".
        link.addEventListener('click', scrollToSection);
    });
});
