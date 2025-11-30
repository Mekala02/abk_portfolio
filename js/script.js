// ================================
// NAVIGATION SCROLL EFFECT
// ================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================================
// MOBILE MENU TOGGLE
// ================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

// ================================
// PAGE SWITCHING
// ================================
function showPage(page) {
    const professionalPage = document.getElementById('professionalPage');
    const blogPage = document.getElementById('blogPage');
    const currentPage = professionalPage.classList.contains('active') ? professionalPage : blogPage;
    const nextPage = page === 'blog' ? blogPage : professionalPage;
    
    // Only proceed if switching to a different page
    if (currentPage === nextPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    // Hide current page immediately
    currentPage.classList.remove('active');
    
    // Small delay to ensure display:none takes effect
    setTimeout(() => {
        // Show and animate next page
        nextPage.classList.add('active');
        // Force reflow to trigger animation
        void nextPage.offsetWidth;
    }, 10);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================================
// SMOOTH SCROLL TO SECTION
// ================================
function scrollToSection(sectionId) {
    // Make sure we're on the professional page
    showPage('professional');
    
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 40;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    }, 100);
}

// ================================
// BLOG FILTER
// ================================
function filterPosts(category) {
    const posts = document.querySelectorAll('.post-preview');
    const buttons = document.querySelectorAll('.filters button');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    posts.forEach(post => {
        if (category === 'all' || post.dataset.category === category) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// ================================
// BLOG SEARCH
// ================================
function searchPosts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const posts = document.querySelectorAll('.post-preview');
    
    posts.forEach(post => {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const content = post.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}

// ================================
// LIGHTBOX FUNCTIONALITY
// ================================
let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('.gallery-item img');

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    lightboxImg.src = galleryImages[index].src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    document.getElementById('lightboxImg').src = galleryImages[currentImageIndex].src;
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    document.getElementById('lightboxImg').src = galleryImages[currentImageIndex].src;
}

// ================================
// KEYBOARD NAVIGATION FOR LIGHTBOX
// ================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    }
});

// ================================
// SCROLL REVEAL ANIMATIONS
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements that should reveal on scroll
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    // Create intersection observer
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class when element enters viewport
                    entry.target.classList.add('visible');
                    // Stop observing this element (animate only once)
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );
    
    // Observe all reveal elements
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});