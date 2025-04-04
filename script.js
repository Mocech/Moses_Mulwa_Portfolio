// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Typing effect
    const typedTextElement = document.getElementById('typed-text');
    const fullText = "UI & UX Designer";
    let index = 0;
  
    function typeText() {
      if (index < fullText.length) {
        typedTextElement.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeText, 100);
      }
    }
  
    typeText();
  
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
  
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = `${width}%`;
        }
      });
    }, { threshold: 0.1 });
  
    skillBars.forEach(bar => {
      observer.observe(bar);
    });
  
    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Show/hide projects based on filter
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 100);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  
    // Contact form validation and submission
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Get error elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const subjectError = document.getElementById('subject-error');
        const messageError = document.getElementById('message-error');
        
        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        subjectInput.classList.remove('error');
        messageInput.classList.remove('error');
        
        // Validate form
        let isValid = true;
        
        if (!nameInput.value.trim()) {
          nameError.textContent = 'Name is required';
          nameInput.classList.add('error');
          isValid = false;
        }
        
        if (!emailInput.value.trim()) {
          emailError.textContent = 'Email is required';
          emailInput.classList.add('error');
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
          emailError.textContent = 'Email is invalid';
          emailInput.classList.add('error');
          isValid = false;
        }
        
        if (!subjectInput.value.trim()) {
          subjectError.textContent = 'Subject is required';
          subjectInput.classList.add('error');
          isValid = false;
        }
        
        if (!messageInput.value.trim()) {
          messageError.textContent = 'Message is required';
          messageInput.classList.add('error');
          isValid = false;
        }
        
        if (isValid) {
          // Show loading state
          const submitBtn = contactForm.querySelector('.submit-btn');
          submitBtn.classList.add('loading');
          submitBtn.disabled = true;
          
          // Simulate form submission (would be replaced with actual AJAX in production)
          setTimeout(() => {
            // Hide loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            
            // Show success message
            formSuccess.classList.add('active');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
              formSuccess.classList.remove('active');
            }, 5000);
          }, 1500);
        }
      });
    }
  
    // Download CV functionality
    const downloadCvBtn = document.getElementById('download-cv');
    
    if (downloadCvBtn) {
      downloadCvBtn.addEventListener('click', function() {
        // Create a sample CV file for download
        const sampleCV = `
          Moses Mulwa  
Full Stack Developer  

Contact: mosesfrancis018@gmail.com  
Location: Nairobi, Kenya  

Experience:  
- Software Developer & Freelancer (2021–Present)  
- Frontend Developer using HTML, CSS, and JavaScript  
- Backend Developer with Django and Python  
- Database Management using MySQL  
- Server-Side Scripting with AJAX  

Skills:  
- Web Development: 90%  
- Backend Development: 85%  
- Database Management: 80%  
- Frontend Design: 88%  
- Full Stack Integration: 87%  

Education:  
- BSc in Information Technology, University of Embu (2022–2026)
`;
        
        const blob = new Blob([sampleCV], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Moses_mulwa_CV.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.section-title, .section-description, .about-image, .about-text, .service-card, .project-card, .contact-info, .contact-form-container');
    
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          animationObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      animationObserver.observe(element);
    });
  });



// WhatsApp direct message functionality
function setupWhatsAppMessaging() {
    // Get all WhatsApp links
    const whatsAppLinks = document.querySelectorAll('.whatsapp-link, .floating-whatsapp');
    
    whatsAppLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // You can customize the pre-filled message here
        const message = encodeURIComponent("Hi Moses, I'm interested in discussing a project with you.");
        
        // Update the href to include the message
        const baseUrl = this.getAttribute('href').split('?')[0];
        this.setAttribute('href', `${baseUrl}?text=${message}`);
      });
    });
  }
  
  // Call this function when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {

    setupWhatsAppMessaging();
  });