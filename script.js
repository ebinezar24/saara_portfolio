// ===================================
// SAARAAL MARY - PORTFOLIO JAVASCRIPT
// ===================================

// Video Modal Functions
function openVideo(url) {
    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    videoFrame.src = url;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeVideo() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "none";
    document.getElementById("videoFrame").src = "";
    document.body.style.overflow = "auto";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("videoFrame").src = "";
        document.body.style.overflow = "auto";
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById("videoModal");
        if (modal.style.display === "block") {
            closeVideo();
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Username Popup Functions
function showUsernamePopup() {
    const popup = document.getElementById("usernamePopup");
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeUsernamePopup() {
    const popup = document.getElementById("usernamePopup");
    popup.style.display = "none";
    document.body.style.overflow = "auto";
}

// Show popup immediately on page load and hide after 3 seconds
window.addEventListener('load', function() {
    showUsernamePopup();
    setTimeout(closeUsernamePopup, 3000);
});

// Close popup when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    const popup = document.getElementById("usernamePopup");
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("videoFrame").src = "";
        document.body.style.overflow = "auto";
    }
    if (event.target == popup) {
        closeUsernamePopup();
    }
}

// Add scroll animation to sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for scroll animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});
