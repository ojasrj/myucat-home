// Timeline data
const timelineSteps = [
    {
        number: 1,
        title: "GCSEs & A Levels",
        description: "Expert-led support from our experienced team of A* tutors and qualified teachers.",
        icon: "graduation-cap",
        align: "left",
        buttons: [
            { label: "1-1 Tutoring", href: "https://www.guessandflag.co.uk/a-level-1-1" },
            { label: "A Level Course", href: "https://www.guessandflag.co.uk/a-level-tuition" },
        ]
    },
    {
        number: 2,
        title: "UCAT",
        description: "Our proven-strategies and 3400+ tutors: updated to the new UCAT format for 2025!",
        icon: "clipboard-check",
        align: "right",
        buttons: [
            { label: "UCAT Course", href: "https://www.guessandflag.co.uk/ucat-resources" },
            { label: "1-1 Tutoring", href: "https://www.guessandflag.co.uk/ucat-1-1" },
            { label: "Score Calculator", href: "https://www.guessandflag.co.uk/score-converter" },
        ]
    },
    {
        number: 3,
        title: "UCAS Applications",
        description: "Support with the new UCAS statement & with applying strategically in 2025.",
        icon: "target",
        align: "left",
        buttons: [
            { label: "Strategic Applications", href: "https://www.guessandflag.co.uk/strategic-applications" },
            { label: "Personal Statement", href: "https://www.guessandflag.co.uk/personal-statements" },
        ]
    },
    {
        number: 4,
        title: "Interviews",
        description: "University-specific support for Oxbridge, MMI & traditional panel format by our mentoring team of doctors, dentists & experienced medical/dental interview tutors.",
        icon: "handshake",
        align: "right",
        buttons: [
            { label: "1-1 Interviews", href: "https://www.guessandflag.co.uk/interviews" },
            { label: "Dental Course", href: "https://www.guessandflag.co.uk/dental-interview-programme" },
            { label: "Medical Course", href: "https://www.guessandflag.co.uk/medical-interview-programme" },
        ]
    }
];

// Initialize Lucide icons
lucide.createIcons();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Generate timeline items
function createTimelineItems() {
    const timelineContent = document.querySelector('.timeline-content');
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
        timelineContent.innerHTML = `
            <div class="timeline-line"></div>
            ${timelineSteps.map((step, index) => `
                <div class="timeline-item ${step.align}" style="animation-delay: ${index * 0.1}s">
                    <div class="timeline-number">
                        <span>${step.number}</span>
                    </div>
                    <div class="timeline-card">
                        <h3>${step.title}</h3>
                        <p>${step.description}</p>
                        <div class="timeline-buttons">
                            ${step.buttons.map(button => `
                                <button onclick="window.open('${button.href}', '_blank')" class="outline-btn">
                                    ${button.label}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                    <div class="timeline-icon">
                        <i data-lucide="${step.icon}"></i>
                    </div>
                </div>
            `).join('')}
        `;
    } else {
        timelineContent.innerHTML = `
            ${timelineSteps.map((step, index) => `
                <div class="timeline-item" style="animation-delay: ${index * 0.1}s">
                    <div class="timeline-number">
                        <span>${step.number}</span>
                    </div>
                    <div class="timeline-card">
                        <h3>${step.title}</h3>
                        <p>${step.description}</p>
                        <div class="timeline-buttons">
                            ${step.buttons.map(button => `
                                <button onclick="window.open('${button.href}', '_blank')" class="outline-btn">
                                    ${button.label}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
        `;
    }
    
    // Reinitialize icons after adding them to the DOM
    lucide.createIcons();
}

// Toggle FAQ answers
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('[data-lucide="chevron-down"]');
    
    answer.classList.toggle('active');
    icon.style.transform = answer.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
}

// Initialize timeline on load and resize
window.addEventListener('load', createTimelineItems);
window.addEventListener('resize', createTimelineItems);
