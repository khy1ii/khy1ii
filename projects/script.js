// Portfolio Interactive JavaScript

// State Management
let currentFeature = 0;
let currentPhase = 0;
let countersAnimated = false;

// Data
const features = [
    {
        icon: '🛒',
        title: 'Smart Shopping Cart',
        description: 'AI-powered recommendations and automatic price optimization',
        image: 'https://images.unsplash.com/photo-1663153206192-6d0e4c9570dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=400',
        color: 'gradient-blue-cyan'
    },
    {
        icon: '🔍',
        title: 'Advanced Search',
        description: 'Lightning-fast search with intelligent filters and autocomplete',
        image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=400',
        color: 'gradient-purple-pink'
    },
    {
        icon: '💳',
        title: 'Secure Payments',
        description: 'Multiple payment options with bank-level security',
        image: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=400',
        color: 'gradient-green-emerald'
    },
    {
        icon: '👥',
        title: 'User Management',
        description: 'Comprehensive admin panel for user and order management',
        image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=400',
        color: 'gradient-orange-red'
    },
    {
        icon: '⚡',
        title: 'Real-time Updates',
        description: 'Live inventory tracking and instant order notifications',
        image: 'https://images.unsplash.com/photo-1663153206192-6d0e4c9570dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=400',
        color: 'gradient-yellow-orange'
    },
    {
        icon: '🛡️',
        title: 'Data Protection',
        description: 'GDPR compliant with advanced encryption and security measures',
        image: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&h=400',
        color: 'gradient-indigo-purple'
    }
];

const stats = [
    { 
        value: 50000, 
        label: 'Products', 
        suffix: '+', 
        description: 'Managed in inventory',
        color: 'gradient-blue-cyan',
        emoji: '📦'
    },
    { 
        value: 99.9, 
        label: 'Uptime', 
        suffix: '%', 
        description: 'Server reliability',
        color: 'gradient-green-emerald',
        emoji: '⚡'
    },
    { 
        value: 150, 
        label: 'Orders', 
        suffix: '/min', 
        description: 'Peak processing rate',
        color: 'gradient-purple-pink',
        emoji: '🛒'
    },
    { 
        value: 2.3, 
        label: 'Load Time', 
        suffix: 's', 
        description: 'Average page speed',
        color: 'gradient-orange-red',
        emoji: '🚀'
    }
];

const techStack = [
    {
        category: 'Frontend',
        color: 'gradient-blue-cyan',
        emoji: '🎨',
        technologies: [
            { name: 'React', description: 'Component-based UI library', experience: 'Advanced' },
            { name: 'TypeScript', description: 'Type-safe JavaScript', experience: 'Advanced' },
            { name: 'Tailwind CSS', description: 'Utility-first CSS framework', experience: 'Expert' },
            { name: 'Motion', description: 'Animation library for React', experience: 'Intermediate' }
        ]
    },
    {
        category: 'Backend',
        color: 'gradient-green-emerald',
        emoji: '⚙️',
        technologies: [
            { name: 'Node.js', description: 'JavaScript runtime environment', experience: 'Advanced' },
            { name: 'Express', description: 'Web application framework', experience: 'Advanced' },
            { name: 'PostgreSQL', description: 'Relational database', experience: 'Intermediate' },
            { name: 'Redis', description: 'In-memory data structure store', experience: 'Intermediate' }
        ]
    },
    {
        category: 'Tools & Services',
        color: 'gradient-purple-pink',
        emoji: '🛠️',
        technologies: [
            { name: 'Stripe', description: 'Payment processing platform', experience: 'Advanced' },
            { name: 'Vercel', description: 'Deployment and hosting platform', experience: 'Expert' },
            { name: 'GitHub', description: 'Version control and collaboration', experience: 'Expert' },
            { name: 'Figma', description: 'Design and prototyping tool', experience: 'Advanced' }
        ]
    }
];

const phases = [
    {
        icon: '🎨',
        title: 'Design Phase',
        duration: 'Week 1-2',
        date: 'Jan 2024',
        description: 'Created wireframes, user personas, and interactive prototypes',
        achievements: [
            'User research and competitive analysis',
            'Created 15+ wireframe screens',
            'Developed interactive Figma prototype',
            'Gathered feedback from 20+ potential users'
        ],
        color: 'gradient-purple-pink',
        bgColor: 'bg-purple-50'
    },
    {
        icon: '💻',
        title: 'Development Sprint 1',
        duration: 'Week 3-6',
        date: 'Jan-Feb 2024',
        description: 'Built core infrastructure and basic user interface',
        achievements: [
            'Set up React + TypeScript project structure',
            'Implemented authentication system',
            'Created reusable UI component library',
            'Built product catalog and search functionality'
        ],
        color: 'gradient-blue-cyan',
        bgColor: 'bg-blue-50'
    },
    {
        icon: '👥',
        title: 'Development Sprint 2',
        duration: 'Week 7-10',
        date: 'Feb-Mar 2024',
        description: 'Added advanced features and user management',
        achievements: [
            'Integrated Stripe payment processing',
            'Built admin dashboard with analytics',
            'Implemented real-time inventory management',
            'Added order tracking and history'
        ],
        color: 'gradient-green-emerald',
        bgColor: 'bg-green-50'
    },
    {
        icon: '🧪',
        title: 'Testing & QA',
        duration: 'Week 11-12',
        date: 'Mar 2024',
        description: 'Comprehensive testing and performance optimization',
        achievements: [
            'Conducted user acceptance testing',
            'Performed security audits and penetration testing',
            'Optimized performance (2.3s average load time)',
            'Fixed 50+ bugs and edge cases'
        ],
        color: 'gradient-orange-red',
        bgColor: 'bg-orange-50'
    },
    {
        icon: '🚀',
        title: 'Launch & Deployment',
        duration: 'Week 13-14',
        date: 'Apr 2024',
        description: 'Production deployment and go-live preparation',
        achievements: [
            'Deployed to Vercel with CI/CD pipeline',
            'Set up monitoring and error tracking',
            'Created comprehensive documentation',
            'Launched with 99.9% uptime target'
        ],
        color: 'gradient-indigo-purple',
        bgColor: 'bg-indigo-50'
    },
    {
        icon: '📅',
        title: 'Post-Launch',
        duration: 'Week 15+',
        date: 'Apr 2024 - Present',
        description: 'Ongoing maintenance and feature improvements',
        achievements: [
            'Maintained 99.9% uptime',
            'Added 10+ new features based on user feedback',
            'Scaled to handle 150+ orders per minute',
            'Expanded payment options and integrations'
        ],
        color: 'gradient-yellow-orange',
        bgColor: 'bg-yellow-50'
    }
];

const funFacts = [
    {
        icon: '☕',
        title: '127 Cups of Coffee',
        description: 'Consumed during development',
        color: 'gradient-yellow-orange',
        emoji: '☕'
    },
    {
        icon: '💻',
        title: '15,847 Lines of Code',
        description: 'Written across all components',
        color: 'gradient-blue-cyan',
        emoji: '💻'
    },
    {
        icon: '⏰',
        title: '342 Hours',
        description: 'Total development time',
        color: 'gradient-purple-pink',
        emoji: '⏰'
    },
    {
        icon: '💡',
        title: '23 Eureka Moments',
        description: 'Breakthrough solutions found',
        color: 'gradient-yellow-orange',
        emoji: '💡'
    },
    {
        icon: '❤️',
        title: 'Infinite Passion',
        description: 'For creating great user experiences',
        color: 'gradient-orange-red',
        emoji: '❤️'
    },
    {
        icon: '🌙',
        title: '7 All-Nighters',
        description: 'Pulling through tough debugging sessions',
        color: 'gradient-green-emerald',
        emoji: '🌙'
    }
];

// Utility Functions
function createElement(tag, className = '', content = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content) element.innerHTML = content;
    return element;
}

function animateNumber(element, start, end, duration, decimals = 0) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (end - start) * easeOutQuart(progress);
        const value = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toLocaleString();
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Initialize Interactive Features
function initFeatures() {
    const featuresContainer = document.getElementById('features-list');
    const displayContainer = document.getElementById('feature-display');
    
    // Create feature list
    features.forEach((feature, index) => {
        const featureCard = createElement('div', `feature-card p-6 rounded-2xl transition-all bg-gray-50 hover:bg-white hover:shadow-md ${index === 0 ? 'active bg-white shadow-lg border-2 border-blue-200' : ''}`);
        
        featureCard.innerHTML = `
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-xl">${feature.icon}</span>
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold mb-2">${feature.title}</h3>
                    <p class="text-sm text-muted-foreground">${feature.description}</p>
                </div>
            </div>
        `;
        
        featureCard.addEventListener('mouseenter', () => setActiveFeature(index));
        featuresContainer.appendChild(featureCard);
    });
    
    // Initialize display
    updateFeatureDisplay();
}

function setActiveFeature(index) {
    if (currentFeature === index) return;
    
    currentFeature = index;
    
    // Update active states
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, i) => {
        if (i === index) {
            card.className = 'feature-card p-6 rounded-2xl transition-all active bg-white shadow-lg border-2 border-blue-200';
        } else {
            card.className = 'feature-card p-6 rounded-2xl transition-all bg-gray-50 hover:bg-white hover:shadow-md';
        }
    });
    
    updateFeatureDisplay();
}

function updateFeatureDisplay() {
    const displayContainer = document.getElementById('feature-display');
    const feature = features[currentFeature];
    
    displayContainer.className = `feature-display ${feature.color} animate-scale-in`;
    displayContainer.innerHTML = `
        <img src="${feature.image}" alt="${feature.title}" class="w-full h-64 object-cover rounded-lg mb-4">
        <div class="text-white">
            <h3 class="text-xl font-bold">${feature.title}</h3>
            <p class="text-white/80 mt-2">${feature.description}</p>
        </div>
    `;
}

// Initialize Animated Stats
function initStats() {
    const statsContainer = document.getElementById('stats-container');
    
    stats.forEach((stat, index) => {
        const statCard = createElement('div', 'stat-card bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all transform-gpu');
        
        statCard.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <span class="text-2xl">${stat.emoji}</span>
                <div class="w-2 h-2 ${stat.color} rounded-full"></div>
            </div>
            <div class="space-y-2">
                <div class="flex items-baseline gap-1">
                    <span class="stat-number text-2xl font-bold">0</span>
                    <span class="text-lg font-semibold text-muted-foreground">${stat.suffix}</span>
                </div>
                <div class="text-sm font-medium text-gray-700">${stat.label}</div>
                <div class="text-xs text-muted-foreground">${stat.description}</div>
            </div>
        `;
        
        // Add hover effect
        const overlay = createElement('div', `absolute inset-0 ${stat.color} rounded-2xl opacity-0 transition-opacity`);
        statCard.style.position = 'relative';
        statCard.appendChild(overlay);
        
        statCard.addEventListener('mouseenter', () => {
            overlay.style.opacity = '0.1';
        });
        
        statCard.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });
        
        statsContainer.appendChild(statCard);
    });
    
    // Animate numbers when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateStats();
            }
        });
    });
    
    observer.observe(statsContainer);
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((element, index) => {
        const stat = stats[index];
        const decimals = stat.value % 1 !== 0 ? 1 : 0;
        
        setTimeout(() => {
            animateNumber(element, 0, stat.value, 2000, decimals);
        }, index * 200);
    });
}

// Initialize Tech Stack
function initTechStack() {
    const container = document.getElementById('tech-stack-container');
    
    techStack.forEach((category, categoryIndex) => {
        const categoryCard = createElement('div', 'bg-white rounded-2xl p-6 shadow-sm border animate-fade-in-up');
        categoryCard.style.animationDelay = `${categoryIndex * 0.2}s`;
        
        const header = createElement('div', 'flex items-center gap-3 mb-6');
        header.innerHTML = `
            <div class="w-10 h-10 ${category.color} rounded-xl flex items-center justify-center">
                <span class="text-lg">${category.emoji}</span>
            </div>
            <h3 class="text-xl font-bold">${category.category}</h3>
        `;
        
        const techGrid = createElement('div', 'grid md:grid-cols-2 lg:grid-cols-4 gap-4');
        
        category.technologies.forEach((tech, techIndex) => {
            const techCard = createElement('div', 'tech-card relative p-4 rounded-xl bg-gray-50 hover:bg-white border cursor-pointer transition-all');
            
            techCard.innerHTML = `
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <h4 class="font-semibold">${tech.name}</h4>
                        <div class="w-2 h-2 experience-${tech.experience.toLowerCase()} rounded-full"></div>
                    </div>
                    <p class="text-sm text-muted-foreground">${tech.description}</p>
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-medium px-2 py-1 bg-gray-200 rounded-full">
                            ${tech.experience}
                        </span>
                    </div>
                </div>
            `;
            
            const overlay = createElement('div', `tech-card-overlay ${category.color}`);
            techCard.appendChild(overlay);
            
            techGrid.appendChild(techCard);
        });
        
        categoryCard.appendChild(header);
        categoryCard.appendChild(techGrid);
        container.appendChild(categoryCard);
    });
}

// Initialize Timeline
function initTimeline() {
    const navigation = document.getElementById('timeline-navigation');
    const details = document.getElementById('timeline-details');
    
    // Create navigation
    phases.forEach((phase, index) => {
        const timelineCard = createElement('div', `timeline-card p-4 rounded-2xl transition-all ${index === 0 ? 'active bg-purple-50 border-2 border-opacity-50 shadow-lg' : 'bg-gray-50 hover:bg-white hover:shadow-md'}`);
        
        timelineCard.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl ${phase.color} flex items-center justify-center flex-shrink-0">
                    <span class="text-white text-xl">${phase.icon}</span>
                </div>
                <div class="flex-1">
                    <div class="flex items-center gap-2 mb-1">
                        <h3 class="font-semibold">${phase.title}</h3>
                        <span class="text-xs bg-gray-200 px-2 py-1 rounded-full">${phase.duration}</span>
                    </div>
                    <p class="text-sm text-muted-foreground">${phase.date}</p>
                </div>
                ${index === 0 ? '<div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>' : ''}
            </div>
        `;
        
        timelineCard.addEventListener('click', () => setActivePhase(index));
        navigation.appendChild(timelineCard);
    });
    
    // Initialize details
    updateTimelineDetails();
}

function setActivePhase(index) {
    if (currentPhase === index) return;
    
    currentPhase = index;
    
    // Update active states
    const timelineCards = document.querySelectorAll('.timeline-card');
    timelineCards.forEach((card, i) => {
        if (i === index) {
            const phase = phases[i];
            card.className = `timeline-card p-4 rounded-2xl transition-all active ${phase.bgColor} border-2 border-opacity-50 shadow-lg`;
            card.innerHTML = card.innerHTML.replace(/<div class="w-3 h-3 bg-blue-500 rounded-full.*?<\/div>/, '') + '<div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>';
        } else {
            card.className = 'timeline-card p-4 rounded-2xl transition-all bg-gray-50 hover:bg-white hover:shadow-md';
            card.innerHTML = card.innerHTML.replace(/<div class="w-3 h-3 bg-blue-500 rounded-full.*?<\/div>/, '');
        }
    });
    
    updateTimelineDetails();
}

function updateTimelineDetails() {
    const details = document.getElementById('timeline-details');
    const phase = phases[currentPhase];
    
    details.className = `timeline-details ${phase.bgColor} animate-fade-in`;
    
    const achievementsList = phase.achievements.map((achievement, index) => `
        <div class="flex items-start gap-3 animate-slide-in-left" style="animation-delay: ${index * 0.1}s">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span class="text-sm">${achievement}</span>
        </div>
    `).join('');
    
    details.innerHTML = `
        <div class="space-y-6">
            <div>
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl ${phase.color} flex items-center justify-center">
                        <span class="text-white text-xl">${phase.icon}</span>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold">${phase.title}</h3>
                        <p class="text-sm text-muted-foreground">${phase.date}</p>
                    </div>
                </div>
                <p class="text-muted-foreground">${phase.description}</p>
            </div>

            <div>
                <h4 class="font-semibold mb-3">Key Achievements</h4>
                <div class="space-y-2">
                    ${achievementsList}
                </div>
            </div>

            <div class="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div class="text-sm font-medium">Duration:</div>
                <div class="text-sm bg-white px-3 py-1 rounded-full">${phase.duration}</div>
            </div>
        </div>
    `;
}

// Initialize Fun Facts
function initFunFacts() {
    const container = document.getElementById('fun-facts-container');
    
    funFacts.forEach((fact, index) => {
        const factCard = createElement('div', 'fun-fact-card bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all relative overflow-hidden transform-gpu animate-fade-in-up');
        factCard.style.animationDelay = `${index * 0.1}s`;
        
        factCard.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-xl ${fact.color} flex items-center justify-center">
                    <span class="text-white text-xl">${fact.icon}</span>
                </div>
                <span class="text-2xl">${fact.emoji}</span>
            </div>
            <h3 class="font-bold text-lg mb-2">${fact.title}</h3>
            <p class="text-sm text-muted-foreground">${fact.description}</p>
        `;
        
        // Add progress bar
        const progressBar = createElement('div', `fun-fact-progress ${fact.color}`);
        progressBar.style.animationDelay = `${index * 0.1 + 0.5}s`;
        factCard.appendChild(progressBar);
        
        container.appendChild(factCard);
    });
}

// Initialize all sections
function init() {
    // Add staggered animations to sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Initialize all interactive components
    initFeatures();
    initStats();
    initTechStack();
    initTimeline();
    initFunFacts();
    
    console.log('Portfolio initialized successfully! 🚀');
}

// Start everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);