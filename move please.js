document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    // Toggle the menu display on click
    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("active"); // Toggles the 'active' class
    });

    // Add hover effect for the menu icon
    menuIcon.addEventListener("mouseover", function() {
        menuIcon.style.color = "#007BFF"; // Changes color on hover
    });

    menuIcon.addEventListener("mouseout", function() {
        menuIcon.style.color = ""; // Resets color when not hovering
    });

    // Add active class on hover
    const menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            item.classList.add("active");
        });

        item.addEventListener("mouseout", function() {
            item.classList.remove("active");
        });

        // Optional: If you want to make the active item stay highlighted
        item.addEventListener("click", function() {
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });

    // Smooth fade-in effect on scroll
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
            if (sectionPos < screenPos) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    });

    // Initialize section animations
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    // Random rotation of profile image
    const profileImage = document.querySelector('.profile-image');

    function randomRotateImage() {
        const randomDeg = Math.floor(Math.random() * 10 - 5); // between -5 and +5 degrees
        profileImage.style.transform = `rotate(${randomDeg}deg)`;

        const randomDelay = Math.floor(Math.random() * 5000) + 3000; // 3s–8s delay
        setTimeout(randomRotateImage, randomDelay);
    }

    randomRotateImage(); // Start it off
});
