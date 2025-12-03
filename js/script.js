// ================================
// NAVIGATION SCROLL EFFECT + LOGO MODE
// ================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update logo mode on scroll
    updateLogoMode();
});

// ================================
// MOBILE MENU TOGGLE (WITH BODY NO-SCROLL)
// ================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const body = document.body;
    
    menu.classList.toggle('active');
    body.classList.toggle('body-no-scroll');
}
// ================================
// PAGE SWITCHING (UPDATED FOR ALL PAGES)
// ================================
function showPage(page) {
    const professionalPage = document.getElementById('professionalPage');
    const blogPage = document.getElementById('blogPage');
    const allProjectsPage = document.getElementById('allProjectsPage');
    const blogPostPage = document.getElementById('blogPostPage');
    
    // Remove active from all pages
    professionalPage.classList.remove('active');
    blogPage.classList.remove('active');
    allProjectsPage.classList.remove('active');
    if (blogPostPage) blogPostPage.classList.remove('active');
    
    // Add active to the target page after a tiny delay
    setTimeout(() => {
        if (page === 'blog') {
            blogPage.classList.add('active');
        } else if (page === 'all-projects') {
            allProjectsPage.classList.add('active');
        } else if (page === 'blog-post') {
            if (blogPostPage) blogPostPage.classList.add('active');
        } else {
            professionalPage.classList.add('active');
        }
        
        // Update logo mode after page switch
        updateLogoMode();
    }, 50);
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// ================================
// SMOOTH SCROLL TO SECTION (FIXED)
// ================================
function scrollToSection(sectionId) {
    const professionalPage = document.getElementById('professionalPage');
    const currentlyOnProfessional = professionalPage && professionalPage.classList.contains('active');
    
    // If not on professional page, switch to it first
    if (!currentlyOnProfessional) {
        professionalPage.classList.add('active');
        document.getElementById('blogPage').classList.remove('active');
        document.getElementById('allProjectsPage').classList.remove('active');
        const blogPostPage = document.getElementById('blogPostPage');
        if (blogPostPage) blogPostPage.classList.remove('active');
        
        // Update logo after page switch
        updateLogoMode();
    }
    
    // Small delay to ensure page is visible, then scroll to section
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 40;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    }, currentlyOnProfessional ? 0 : 100);
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
// SCROLL REVEAL ANIMATIONS + INITIALIZE LOGO MODE ON LOAD (NEW)
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Set initial logo mode
    updateLogoMode();
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

// ================================
// GO TO BLOG SECTION (FIXED)
// ================================
function goToBlogSection(sectionId) {
    // Switch to blog page
    showPage('blog');
    
    // Wait for page transition, then scroll to section
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 40;
            window.scrollTo({ top: sectionTop, behavior: 'smooth' });
        }
    }, 300);
}
// ================================
// UPDATE LOGO MODE (EMPTY/TEXT)
// ================================
function updateLogoMode() {
    const logo = document.querySelector('.logo');
    const professionalPage = document.getElementById('professionalPage');
    const hero = document.getElementById('hero');
    
    if (!logo || !hero) return;
    
    // Check if we're on the professional page
    const onProfessionalPage = professionalPage && professionalPage.classList.contains('active');
    
    if (onProfessionalPage) {
        // Check scroll position relative to hero
        const heroHeight = hero.offsetHeight;
        const scrollThreshold = heroHeight * 0.6;
        
        if (window.scrollY < scrollThreshold) {
            // Show empty mode (at top of professional page)
            logo.classList.remove('logo-text-mode');
            logo.classList.add('logo-empty-mode');
        } else {
            // Show text mode (scrolled past hero)
            logo.classList.remove('logo-empty-mode');
            logo.classList.add('logo-text-mode');
        }
    } else {
        // On other pages (blog, all projects, post detail), always show text
        logo.classList.remove('logo-empty-mode');
        logo.classList.add('logo-text-mode');
    }
}

// ================================
// OPEN BLOG POST DETAIL
// ================================
function openBlogPost(postId) {
    // Blog post data
    const posts = {
        'post-1': {
            title: 'The Power of Minimal Design',
            date: 'January 15, 2025',
            content: `
                <p>In a world saturated with visual noise, minimal design stands as a powerful statement of intentionality. Every element that remains on the page has earned its place through careful consideration and purpose.</p>
                
                <p>The philosophy of minimalism in design isn't about removing elements arbitrarily—it's about distilling an experience down to its essential components. When we strip away the unnecessary, what remains carries more weight and communicates more clearly.</p>
                
                <h2>The Psychology of Space</h2>
                
                <p>Negative space, often called white space, is not empty space. It's an active element of design that gives breathing room to content and guides the eye through a visual hierarchy. In minimal design, this space becomes a crucial tool for creating emphasis and directing attention.</p>
                
                <p>Users don't just see minimal design—they feel it. The calm, uncluttered interface reduces cognitive load and allows visitors to focus on what truly matters. This psychological benefit translates directly into better user experiences and higher engagement.</p>
                
                <h2>Practical Applications</h2>
                
                <p>Implementing minimal design requires discipline. It means saying no to trends that don't serve the core purpose. It means testing ruthlessly and removing anything that doesn't actively contribute to the user's goals.</p>
                
                <p>The results speak for themselves: faster load times, clearer communication, and interfaces that age gracefully. Minimal design isn't a style—it's a commitment to clarity and user-centered thinking.</p>
            `
        },
        'post-2': {
            title: 'Notes from Tokyo',
            date: 'January 10, 2025',
            content: `
                <p>Tokyo presents a fascinating paradox: a city where centuries-old temples sit alongside cutting-edge architecture, where traditional craftsmanship coexists with technological innovation.</p>
                
                <p>Walking through the streets of Shibuya and then finding yourself in the quiet gardens of Meiji Shrine, you experience a culture that has mastered the art of honoring its past while embracing its future.</p>
                
                <h2>Design Lessons from Japanese Culture</h2>
                
                <p>The Japanese concept of "ma" (間)—the appreciation of negative space and intervals—is visible everywhere. From the careful arrangement of a traditional kaiseki meal to the layout of a modern apartment, space itself is treated as a design element.</p>
                
                <p>Attention to detail is not just a practice here; it's a cultural value. Every interaction, from the way receipts are handed to you with both hands to the precise folding of packaging, reflects a deep respect for the experience of others.</p>
                
                <h2>Modern Minimalism</h2>
                
                <p>Tokyo's design scene shows that minimalism doesn't mean cold or sterile. The city's approach combines restraint with warmth, simplicity with depth. Materials are chosen thoughtfully, textures are varied, and the result is spaces that feel both refined and human.</p>
                
                <p>These observations have deeply influenced my approach to design: respecting tradition while innovating, paying attention to details that others might overlook, and always considering the full experience of the user.</p>
            `
        },
        'post-3': {
            title: 'Building Design Systems That Scale',
            date: 'December 28, 2024',
            content: `
                <p>A design system is more than a collection of components—it's a shared language that enables teams to build consistently and efficiently at scale. But creating one that actually works requires careful planning and ongoing maintenance.</p>
                
                <h2>Foundation First</h2>
                
                <p>Before diving into components, establish your foundations: typography scales, color palettes, spacing systems, and grid structures. These fundamental elements inform everything else and ensure consistency across all touchpoints.</p>
                
                <p>Documentation is crucial from day one. If team members can't easily understand how to use the system, it won't be adopted. Clear examples, usage guidelines, and accessibility standards should be part of every component.</p>
                
                <h2>Living Systems</h2>
                
                <p>Design systems must evolve. As products grow and user needs change, the system should adapt. Build in processes for proposing changes, versioning updates, and deprecating outdated patterns.</p>
                
                <p>The most successful design systems I've worked with treat their components as products themselves, with dedicated teams, user feedback loops, and regular iterations based on real-world usage.</p>
                
                <h2>Adoption Strategies</h2>
                
                <p>Technical excellence means nothing if people don't use your system. Focus on developer experience, provide clear migration paths, and celebrate teams that adopt the system successfully.</p>
                
                <p>Remember: a design system's value isn't measured by how comprehensive it is, but by how well it empowers teams to build great products faster.</p>
            `
        },
        'post-4': {
            title: 'On Creative Process',
            date: 'December 20, 2024',
            content: `
                <p>Creative work isn't about waiting for inspiration to strike—it's about developing sustainable practices that allow consistent output while maintaining quality and preventing burnout.</p>
                
                <h2>Structure Enables Creativity</h2>
                
                <p>Paradoxically, constraints and structure often lead to more creative outcomes than complete freedom. Setting clear boundaries for a project forces you to think creatively within those limits.</p>
                
                <p>I've found that establishing regular working rhythms—specific times for deep work, breaks, and reflection—creates a foundation that allows creativity to flourish rather than relying on unpredictable bursts of inspiration.</p>
                
                <h2>The Role of Iteration</h2>
                
                <p>First drafts are rarely perfect, and that's okay. The creative process is iterative. Each version builds on the last, refining ideas and discovering solutions that weren't visible at the start.</p>
                
                <p>Embrace the messy middle. The period between initial concept and final polish is where real creative work happens—where problems are solved and ideas are transformed into reality.</p>
                
                <h2>Knowing When to Stop</h2>
                
                <p>Perhaps the hardest skill in creative work is knowing when something is finished. Perfectionism can become a trap that prevents shipping. Learn to recognize when additional iterations yield diminishing returns.</p>
                
                <p>A sustainable creative practice means balancing the pursuit of excellence with the necessity of completion, always keeping in mind that done is better than perfect.</p>
            `
        },
        'post-5': {
            title: 'Wandering Through Copenhagen',
            date: 'December 5, 2024',
            content: `
                <p>Copenhagen embodies the Danish concept of "hygge"—a sense of coziness and contentment—not just in its cafes and homes, but in its approach to urban design and public spaces.</p>
                
                <h2>Human-Centered Urbanism</h2>
                
                <p>The city's design prioritizes people over cars. Wide bike lanes, pedestrian-only streets, and abundant public seating create a urban environment that feels welcoming and livable.</p>
                
                <p>Every detail seems considered: the subtle slope of building facades that maximizes natural light, the careful selection of materials that age beautifully, the integration of green spaces throughout the urban fabric.</p>
                
                <h2>Scandinavian Design Philosophy</h2>
                
                <p>Visiting design studios and museums here revealed a consistent thread: functionality and beauty aren't opposing forces. Good design serves a purpose while being aesthetically pleasing.</p>
                
                <p>The emphasis on natural materials—wood, wool, leather—combined with clean lines and thoughtful proportions creates spaces that feel both sophisticated and approachable. There's an honesty to the design that resonates.</p>
                
                <h2>Lessons for Digital Design</h2>
                
                <p>Walking through Copenhagen's streets offered numerous insights applicable to digital design: the importance of clear wayfinding, the value of consistent patterns, and the power of restraint.</p>
                
                <p>The city reminded me that the best design often goes unnoticed—it simply works, creating experiences that feel natural and effortless, supporting people's activities without demanding attention for itself.</p>
            `
        }
    };
    
    const post = posts[postId];
    if (!post) return;
    
    // Update post content
    document.querySelector('.post-title').textContent = post.title;
    document.querySelector('.post-date').textContent = post.date;
    document.querySelector('.post-body').innerHTML = post.content;
    
    // Switch to blog post page
    showPage('blog-post');
}