// ==============================
// HAMBURGER MENU FUNCTIONALITY
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("nav ul");
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    hamburger.innerHTML = "&#9776;"; // ☰ icon

    // Insert hamburger before nav links
    const logo = document.querySelector("nav img");
    logo.parentNode.insertBefore(hamburger, nav);

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        hamburger.classList.toggle("active");
    });

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("nav-active");
            hamburger.classList.remove("active");
        });
    });
});

// ==============================
// FORM VALIDATION (Login & Contact)
// ==============================
document.addEventListener("submit", (e) => {
    const form = e.target;

    // CONTACT FORM
    if (form.querySelector("#message")) {
        e.preventDefault();
        const name = form.querySelector("#name");
        const email = form.querySelector("#email");
        const message = form.querySelector("#message");

        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    }

    // LOGIN FORM
    if (form.id === "loginForm") {
        e.preventDefault();
        const email = form.querySelector("input[name='email']");
        const password = form.querySelector("input[name='password']");

        if (!email.value.trim() || !password.value.trim()) {
            alert("Please enter both email and password.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("✅ Login successful!");
        form.reset();
        
    }
});

// ==============================
// SEARCH FUNCTIONALITY (NAVIGATION-BASED)
// ==============================
function searchFunction() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var searchButton = document.querySelector('.btn'); 

    var pages = {
        "about us": "about.html",
        "news": "news.html",
        "product": "product.html",
        "contact": "contact.html"
    };

    if (pages[searchTerm]) {
        window.location.href = pages[searchTerm];
    } else {
        alert("No matching results found for: " + searchTerm);
        searchButton.setAttribute('disabled', 'true');
    }

    if (searchTerm === "about us" || searchTerm === "news" || searchTerm === "product" || searchTerm === "contact") {
        searchButton.removeAttribute('disabled');
    }
}

document.getElementById('searchInput').addEventListener('input', function() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var searchButton = document.querySelector('.btn');

    if (searchTerm === "home"||searchTerm=== "about us" || searchTerm === "news" || searchTerm === "product" || searchTerm === "contact" || searchTerm ==="gallery") {
        searchButton.removeAttribute('disabled');
    } else {
        searchButton.setAttribute('disabled', 'true');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const images = [
        { src: 'images/10.jpg', caption: 'Soccer Image' },
        { src: 'images/20.jpg', caption: 'Basketball Clinics Image' },
        { src: 'images/30.jpg', caption: 'Atletics Image' },
        { src: 'images/40.jpg', caption: 'Tracks Image' }
    ];

    let currentIndex = 0; // Current index of the displayed image

    // Function to open the lightbox
    function openLightbox(index) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');

        currentIndex = index; // Set the current index based on clicked image

        // Show the lightbox with smooth transition by adding the 'show' class
        lightbox.classList.add('show');  // Add 'show' to display the lightbox

        lightboxImg.src = images[currentIndex].src; // Set the image source
        lightboxCaption.textContent = images[currentIndex].caption; // Set the image caption
    }

    // Function to close the lightbox
    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('show');  // Remove the 'show' class to hide the lightbox
    }

    // Function to change the image (next/prev)
    function changeImage(direction) {
        currentIndex += direction;

        if (currentIndex < 0) currentIndex = images.length - 1; // Loop to last image
        if (currentIndex >= images.length) currentIndex = 0; // Loop to first image

        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');

        lightboxImg.src = images[currentIndex].src; // Update the image source
        lightboxCaption.textContent = images[currentIndex].caption; // Update the caption
    }

    // Event listeners for gallery images
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    // Expose the closeLightbox and changeImage functions globally
    window.closeLightbox = closeLightbox;
    window.changeImage = changeImage;
});
