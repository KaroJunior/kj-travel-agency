var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        var isActive = this.classList.toggle("active");

        // Close all panels
        var panels = document.querySelectorAll('.panel');
        panels.forEach(function(item) {
            item.style.display = 'none';
        });

        // Open the clicked panel if it's active
        if (isActive) {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    });
}

//Header Hamburger Menu for Mobile View
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggleButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
});
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle the 'active' class
});