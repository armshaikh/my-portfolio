/**
 * Arman Shaikh R - Portfolio Website
 * Interactive JavaScript for a responsive personal portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('home');
    const heroHeight = heroSection.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight * 0.8) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button visibility
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', formValues);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .skill-category, .education-card, .certification-card, .achievement-card, .timeline-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.75) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.project-card, .skill-category, .education-card, .certification-card, .achievement-card, .timeline-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run once on load
    animateOnScroll();
    
    // Then run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Tech icons animation in hero section
    const techIcons = document.querySelectorAll('.tech-icons i');
    
    if (techIcons.length > 0) {
        techIcons.forEach((icon, index) => {
            // Random initial position and delay for animation
            const randomX = (Math.random() * 40) - 20; // -20 to 20
            const randomY = (Math.random() * 40) - 20;
            const delay = index * 0.1;
            
            icon.style.transform = `translate(${randomX}px, ${randomY}px)`;
            icon.style.transition = `transform 0.5s ease ${delay}s`;
            
            // After a short delay, animate to final position
            setTimeout(() => {
                icon.style.transform = 'translate(0, 0)';
            }, 100);
        });
    }

    // Project card hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const header = card.querySelector('.project-header');
        
        card.addEventListener('mousemove', (e) => {
            const x = e.clientX - card.getBoundingClientRect().left;
            const y = e.clientY - card.getBoundingClientRect().top;
            
            const centerX = card.offsetWidth / 2;
            const centerY = card.offsetHeight / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            header.style.transform = `translateZ(30px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0)';
            header.style.transform = 'translateZ(0)';
        });
    });

    // Skill category hover effect
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            const randomHue = Math.floor(Math.random() * 60) + 200; // Blue/purple range
            this.style.setProperty('--primary', `hsl(${randomHue}, 80%, 60%)`);
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.setProperty('--primary', '#2563eb');
        });
    });
});

// Chatbot
const chatbotLaunch = document.querySelector('.chatbot-launch');
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotClose = document.querySelector('.chatbot-close');
const chatInput = document.querySelector('.chatbot-input input');
const chatSendBtn = document.querySelector('.chatbot-input button');
const chatMessages = document.querySelector('.chatbot-messages');

chatbotLaunch.addEventListener('click', () => {
  chatbotContainer.classList.toggle('active');
});

chatbotClose.addEventListener('click', () => {
  chatbotContainer.classList.remove('active');
});

// Chatbot responses
const chatbotKnowledge = {
  who: "I'm Arman Shaikh R - AI developer & data scientist building practical ML solutions. MSc CS grad with  hands-on experience in NLP and predictive systems.",
  skills: "Python, SQL, TensorFlow | NLP, LLMs, Data Engineering | Docker, GCP | Full project details on my GitHub.",
  education: "I hold a Master's and Bachelor's in Computer Science from Periyar University, both with First Class Distinction.",
  projects: "Top 3: 1) Atlas AI (offline LLM) 2) Customer Churn Predictor 3) WriteRight AI. All projects are available in github repos.",
  contact: "Best via email: r.armshaikh@gmail.com | Phone: +91 9597980764 | LinkedIn/GitHub in footer."
};

function addChatMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('chat-message', sender);
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatInput() {
  const message = chatInput.value.trim();
  if (message) {
    addChatMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate typing indicator
    setTimeout(() => {
      const response = generateChatResponse(message);
      addChatMessage(response, 'bot');
    }, 800);
  }
}

function generateChatResponse(message) {
  const cleanMsg = message.toLowerCase().trim();
  
  if (/who|arman|you/.test(cleanMsg)) return chatbotKnowledge.who;
  if (/skill|tech|python|ml|ai/.test(cleanMsg)) return chatbotKnowledge.skills;
  if (/project|build|github|demo/.test(cleanMsg)) return chatbotKnowledge.projects;
  if (/educat|degree|study|thesis|univ/.test(cleanMsg)) return chatbotKnowledge.education;
  if (/contact|email|reach|hire/.test(cleanMsg)) return chatbotKnowledge.contact;
  
  return "Ask me about: 1) Who I am 2) Skills 3) Projects 4) Education 5) Contact";
}

chatSendBtn.addEventListener('click', handleChatInput);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleChatInput();
});

// Initial bot message
setTimeout(() => {
  addChatMessage("Hi! I'm Arman's AI assistant. Ask me about his skills, projects, or experience!", 'bot');
}, 1500);

// Confetti Effect
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext('2d');
  const pieces = [];
  const colors = ['#2563eb', '#7c3aed', '#f8fafc', '#e2e8f0'];

  // Create confetti pieces
  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 15 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncrement: (Math.random() * 0.07) + 0.05,
      tiltAngle: 0
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < pieces.length; i++) {
      const p = pieces[i];
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    }

    update();
    requestAnimationFrame(draw);
  }

  function update() {
    for (let i = 0; i < pieces.length; i++) {
      const p = pieces[i];
      p.tiltAngle += p.tiltAngleIncrement;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.d);
      p.tilt = Math.sin(p.tiltAngle - i / 3) * 15;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    }
  }

  draw();

  // Optional: Stop confetti after 5 seconds
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 5000);
}
// ===== Project Filtering =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
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



// Certifications Data
const certDetails = {
  cert1: {
    "title": "AI for Impact - APAC Hackathon 2024",
 	 "issuer": "Google Cloud & Hack2Skill",
 	 "date": "2024",
 	 "description": "Awarded for successfully submitting an idea to the AI for Impact Hackathon 2024, a social-first initiative by Google Cloud in collaboration with Hack2Skill. This certificate recognizes participation and innovation in applying AI to address impactful social problems.",
 	 "skills": ["AI Ideation", "Hackathon Participation", "Social Impact", "Innovation", "Google Cloud Awareness"],
  	  link: "https://certificate.hack2skill.com/user/aifparticipation/2024H2S10AFI-P001679"
  },
  cert2: {
    title: "i.mobilothon 4.0 Participation",
    issuer: "Unstop",
    date: "January 2025",
    description: "Participated in a 48-hour hackathon focused on mobile application development. Collaborated with a team to build a prototype for a social good application using React Native and Firebase.",
    skills: ["React Native", "Firebase", "Teamwork", "Problem Solving"],
    link: "https://unstop.com/certificate-preview/49061edf-54f3-4342-9059-02c9673db49c"
  },
  cert3: {
    title: "ReactJS Basics",
    issuer: "Pantechelearning",
    date: "November 2024",
    description: "Fundamental ReactJS concepts including components, state management, hooks, and routing. Built several projects including a task manager and e-commerce product listing.",
    skills: ["React", "JavaScript", "State Management", "Component Architecture"],
    link: "#"
  },
  cert4: {
    title: "Data Analysis with Python",
    issuer: "freeCodeCamp",
    date: "October 2024",
    description: "Comprehensive training in data analysis using Python libraries like Pandas, NumPy, and Matplotlib. Covered data cleaning, visualization, and basic statistical analysis.",
    skills: ["Python", "Pandas", "NumPy", "Data Visualization", "Data Cleaning"],
    link: "https://www.freecodecamp.org/certification/arschycode/data-analysis-with-python-v7"
  },
  cert5: {
    title: "Fundamentals of Cybersecurity",
    issuer: "upGrad",
    date: "October 2024",
    description: "Introduction to cybersecurity concepts including threats, vulnerabilities, cryptography, and network security. Hands-on labs with penetration testing tools.",
    skills: ["Cybersecurity", "Network Security", "Cryptography", "Ethical Hacking"],
    link: "#"
  },
  cert6: {
    title: "Master Microsoft Power BI",
    issuer: "Alison",
    date: "October 2024",
    description: "Learned to create interactive dashboards, data models, and reports in Power BI. Covered DAX formulas, data transformation, and visualization best practices.",
    skills: ["Power BI", "Data Visualization", "DAX", "Business Intelligence"],
    link: "#"
  },
  cert7: {
    title: "Prompt Engineering for Developers",
    issuer: "Infosys Springboard",
    date: "October 2024",
    description: "Techniques for crafting effective prompts for AI models. Learned to optimize outputs for various use cases including code generation and content creation.",
    skills: ["AI", "Prompt Engineering", "LLMs", "Natural Language Processing"],
    link: "https://github.com/armanshaikh-2001/CERTIFICATIONS/blob/main/Prompt%20Engineering%20for%20Developers.pdf"
  },
  cert8: {
    title: "PyTorch for AI",
    issuer: "Infosys Springboard",
    date: "October 2024",
    description: "Hands-on course covering deep learning with PyTorch. Built neural networks for image classification and natural language processing tasks.",
    skills: ["PyTorch", "Deep Learning", "Neural Networks", "Computer Vision"],
    link: "#"
  },
  cert9: {
    title: "Cybersecurity Awareness",
    issuer: "HP LIFE",
    date: "July 2024",
    description: "Fundamental cybersecurity awareness training covering common threats, password security, phishing identification, and safe browsing practices.",
    skills: ["Security Awareness", "Phishing", "Password Security", "Online Safety"],
    link: "#"
  },
  cert10: {
    title: "Full Stack Web Development",
    issuer: "Edunet Foundation",
    date: "July 2023",
    description: "Comprehensive full-stack development program covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB. Built several full-stack applications.",
    skills: ["HTML/CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/armanshaikh-2001/CERTIFICATIONS/blob/main/Full%20Stack%20Web%20Development.pdf"
  },
  cert11: {
    title: "Python Essentials Bootcamp",
    issuer: "LetsUpgrade",
    date: "July 2023",
    description: "Intensive Python programming course covering syntax, data structures, algorithms, and object-oriented programming concepts.",
    skills: ["Python", "Data Structures", "Algorithms", "OOP"],
    link: ""
  }
};

// Modal Functions
function openCertModal(certId) {
  const cert = certDetails[certId];
  if (!cert) return;
  
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <h3>${cert.title}</h3>
    <div class="modal-meta">
      <p><i class="fas fa-building"></i> ${cert.issuer}</p>
      <p><i class="fas fa-calendar-alt"></i> ${cert.date}</p>
    </div>
    <div class="modal-description">
      <p>${cert.description}</p>
    </div>
    <div class="modal-skills">
      <h4>Skills & Technologies:</h4>
      <ul>
        ${cert.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
    <a href="${cert.link}" target="_blank" class="modal-link">
      <i class="fas fa-external-link-alt"></i> View Credential
    </a>
  `;
  
  document.getElementById('certModal').classList.add('active');
  document.body.classList.add('modal-open');
}

function closeCertModal() {
  document.getElementById('certModal').classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Add click events to all cert cards
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      const certId = card.getAttribute('data-cert');
      openCertModal(certId);
    });
  });
  
  // Close modal when clicking X or outside
  document.querySelector('.modal .close').addEventListener('click', closeCertModal);
  document.getElementById('certModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('certModal')) {
      closeCertModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCertModal();
    }
  });
});
// 3D Tilt Effect for Project Cards (Enhanced)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
    card.querySelector('.project-header').style.transform = `translateZ(30px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    card.querySelector('.project-header').style.transform = 'translateZ(0)';
  });
});

// Typewriter Effect for Hero Section (Optional)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const originalText = heroTitle.textContent;
  heroTitle.textContent = '';
  
  let i = 0;
  const typing = setInterval(() => {
    if (i < originalText.length) {
      heroTitle.textContent += originalText.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 100);
}


