// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form Data:', data);
        
        // Show success message
        alert('Thank you for contacting SDC Technologies! We will get back to you shortly.');
        
        // Reset form
        contactForm.reset();
    });
}

// Header Shadow on Scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Video Play Button
const playBtn = document.querySelector('.play-btn');
if (playBtn) {
    playBtn.addEventListener('click', () => {
        alert('Video player functionality - Connect your video URL here!');
        // You can replace this with actual video player code
        // Example: Open YouTube video, Vimeo embed, etc.
    });
}

// World Map Marker Interactions
document.querySelectorAll('.map-marker').forEach(marker => {
    marker.addEventListener('click', function() {
        const city = this.getAttribute('data-city');
        const region = this.classList.contains('na') ? 'North America' : 
                      this.classList.contains('emea') ? 'EMEA' : 'APAC';
        
        // Add click animation
        this.style.transform = 'translate(-50%, -100%) scale(1.5)';
        setTimeout(() => {
            this.style.transform = 'translate(-50%, -100%) scale(1)';
        }, 300);
        
        // Show location info
        alert(`📍 ${city}\nRegion: ${region}\n\nSDC Technologies Data Center Location`);
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.glance-card, .location-card, .feature-box').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Form Input Focus Effects
const formInputs = document.querySelectorAll('.hero-form input, .hero-form select');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#0066cc';
    });
    
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#ff4444';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
});

// Parallax Effect for Hero Wave
window.addEventListener('scroll', () => {
    const heroWave = document.querySelector('.hero-wave');
    if (heroWave) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        heroWave.style.transform = `translateY(${rate}px)`;
    }
});

// Counter Animation for Stats (if you add stats later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Load Animation on Page Load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Detect if user scrolled to bottom
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    if (scrollTop + clientHeight >= scrollHeight - 50) {
        console.log('User reached bottom of page');
        // You can trigger actions here, like loading more content
    }
});

// Add loading state to form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('.form-submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call (replace with actual API call)
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Log when website is ready
console.log('🚀 SDC Technologies Website Loaded Successfully!');
console.log('📍 Features: Hero Banner, World Map, Locations, Services');
console.log('💼 Version: 1.0.0');

// Prevent default form submission for demo
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - All scripts initialized');
    
    // Add hover effect to all buttons
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Easter egg - Konami Code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            alert('🎉 Easter Egg Found! SDC Technologies - Powering the Digital Future!');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
// Video Play Button - REMOVE THIS SECTION
/*
const playBtn = document.querySelector('.play-btn');
if (playBtn) {
    playBtn.addEventListener('click', () => {
        alert('Video player functionality - Connect your video URL here!');
    });
}
*/
