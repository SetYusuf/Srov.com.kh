// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle mobile menu with animation
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Toggle body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth scrolling for navigation links with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80; // Height of your fixed header
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Contact Form Submission - Sends email to setyusuf236@gmail.com
const contactForm = document.getElementById('contactForm');

// Debug function to check if EmailJS is loaded
function checkEmailJS() {
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded!');
        return false;
    }
    return true;
}

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check if EmailJS is loaded
    if (!checkEmailJS()) {
        alert('Error: EmailJS is not loaded. Please check your internet connection.');
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim()
    };
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    try {
        // Update button to show loading
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        console.log('Sending email with data:', {
            service_id: 'service_57uuv1o',
            template_id: 'template_471132s',
            user_id: 'gmMxuH5UTdYeQouzf',
            template_params: {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'setyusuf236@gmail.com'
            }
        });
        
        // Send email using EmailJS
        const response = await emailjs.send(
            'service_57uuv1o', 
            'template_471132s', 
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'setyusuf236@gmail.com'
            }
        );
        
        console.log('Email sent successfully!', response);
        
        // Success message
        alert('Thank you for your message! We will get back to you soon at setyusuf236@gmail.com');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        console.error('Error details:', {
            name: error.name,
            message: error.message,
            status: error.status,
            text: error.text,
            stack: error.stack
        });
        
        let errorMessage = 'Sorry, there was an error sending your message. ';
        errorMessage += 'Please try again or email us directly at setyusuf236@gmail.com';
        
        if (error.status === 0) {
            errorMessage = 'Network error. Please check your internet connection.';
        } else if (error.status === 400) {
            errorMessage = 'Invalid request. Please check your form data.';
        } else if (error.status === 401) {
            errorMessage = 'Authentication failed. Please check your EmailJS configuration.';
        }
        
        alert(errorMessage);
    } finally {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
    }
});

// Log when the script loads
console.log('Contact form script loaded');
console.log('EmailJS is defined:', typeof emailjs !== 'undefined');

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Display success message
        alert('Thank you for subscribing!');
        
        // Reset form
        newsletterForm.reset();
        
        // 💬 Add your newsletter subscription logic here
        // Example: Send to backend API
        // fetch('/api/newsletter', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email })
        // });
    });
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .step-item, .about-text, .contact-form');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

