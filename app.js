// Logic Model Showdown - Complete Game with Zoomable Images and Enhanced Features
class LogicModelGame {
    constructor() {
        // All 10 scenarios with sock puppet revolution FIRST as requested
        this.scenarios = [
            {
                name: "Launch a sock puppet revolution",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/05376b42-34e5-443e-9b3b-f05db74bf62f.png",
                items: [
                    {"text": "Rebel sock puppets", "icon": "🧦", "correctCategory": "inputs"},
                    {"text": "Puppet stage materials", "icon": "🎭", "correctCategory": "inputs"},
                    {"text": "Revolutionary scripts", "icon": "📜", "correctCategory": "inputs"},
                    {"text": "Puppet army volunteers", "icon": "👥", "correctCategory": "inputs"},
                    {"text": "Puppet theatre workshops", "icon": "🎪", "correctCategory": "activities"},
                    {"text": "Revolutionary training", "icon": "✊", "correctCategory": "activities"},
                    {"text": "Street performances", "icon": "🎭", "correctCategory": "activities"},
                    {"text": "Organised puppet shows", "icon": "🎬", "correctCategory": "outputs"},
                    {"text": "Entertained audiences", "icon": "👏", "correctCategory": "outputs"},
                    {"text": "Revolutionary messages spread", "icon": "📢", "correctCategory": "outputs"},
                    {"text": "Changed theatre culture", "icon": "🎭", "correctCategory": "outcomes"},
                    {"text": "Increased puppet appreciation", "icon": "❤️", "correctCategory": "outcomes"},
                    {"text": "Cultural shift to puppet democracy", "icon": "🗳️", "correctCategory": "impact"}
                ]
            },
            {
                name: "Start a city-wide hamster parade",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/e865e10f-5c1a-453e-90b7-e99cc7fe0317.png",
                items: [
                    {"text": "500 trained hamsters", "icon": "🐹", "correctCategory": "inputs"},
                    {"text": "Tiny top hats", "icon": "🎩", "correctCategory": "inputs"},
                    {"text": "Parade permits", "icon": "📋", "correctCategory": "inputs"},
                    {"text": "Mini brass band", "icon": "🎺", "correctCategory": "inputs"},
                    {"text": "Route planning meetings", "icon": "🗺️", "correctCategory": "activities"},
                    {"text": "Hamster training sessions", "icon": "🏃", "correctCategory": "activities"},
                    {"text": "Costume fittings", "icon": "👗", "correctCategory": "activities"},
                    {"text": "Organised parade formation", "icon": "📐", "correctCategory": "outputs"},
                    {"text": "Crowd of spectators", "icon": "👥", "correctCategory": "outputs"},
                    {"text": "Media coverage", "icon": "📺", "correctCategory": "outputs"},
                    {"text": "Increased community joy", "icon": "😊", "correctCategory": "outcomes"},
                    {"text": "Enhanced neighbourhood pride", "icon": "🏘️", "correctCategory": "outcomes"},
                    {"text": "Stronger community bonds", "icon": "🤝", "correctCategory": "impact"}
                ]
            },
            {
                name: "Clean the moon for space tourists",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/3cfc5099-dd04-4cbf-a830-126b4ec2a621.png",
                items: [
                    {"text": "Space-grade mops", "icon": "🧽", "correctCategory": "inputs"},
                    {"text": "Lunar cleaning solution", "icon": "🧴", "correctCategory": "inputs"},
                    {"text": "Astronaut crew", "icon": "👨‍🚀", "correctCategory": "inputs"},
                    {"text": "Cleaning spacecraft", "icon": "🚀", "correctCategory": "inputs"},
                    {"text": "Surface scrubbing operations", "icon": "🧼", "correctCategory": "activities"},
                    {"text": "Dust removal missions", "icon": "💨", "correctCategory": "activities"},
                    {"text": "Equipment maintenance", "icon": "🔧", "correctCategory": "activities"},
                    {"text": "Sparkling lunar surface", "icon": "✨", "correctCategory": "outputs"},
                    {"text": "Tourist-ready landing sites", "icon": "🛬", "correctCategory": "outputs"},
                    {"text": "Clean moon photos", "icon": "📸", "correctCategory": "outputs"},
                    {"text": "Increased space tourism", "icon": "🚀", "correctCategory": "outcomes"},
                    {"text": "Better space exploration", "icon": "🔭", "correctCategory": "outcomes"},
                    {"text": "Interplanetary cleanliness standards", "icon": "🌙", "correctCategory": "impact"}
                ]
            },
            {
                name: "Build luxury treehouses for penguins",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/399a9fcb-18cb-4bd0-95f0-9c1905ec5c55.png",
                items: [
                    {"text": "Arctic-grade lumber", "icon": "🪵", "correctCategory": "inputs"},
                    {"text": "Penguin translators", "icon": "🐧", "correctCategory": "inputs"},
                    {"text": "Construction crew", "icon": "👷", "correctCategory": "inputs"},
                    {"text": "Heating systems", "icon": "🔥", "correctCategory": "inputs"},
                    {"text": "Tree climbing lessons", "icon": "🌳", "correctCategory": "activities"},
                    {"text": "Treehouse construction", "icon": "🔨", "correctCategory": "activities"},
                    {"text": "Safety inspections", "icon": "✅", "correctCategory": "activities"},
                    {"text": "Completed luxury treehouses", "icon": "🏠", "correctCategory": "outputs"},
                    {"text": "Happy penguin residents", "icon": "😊", "correctCategory": "outputs"},
                    {"text": "Treehouse certificates", "icon": "📜", "correctCategory": "outputs"},
                    {"text": "Improved penguin housing", "icon": "🏘️", "correctCategory": "outcomes"},
                    {"text": "Better quality of life", "icon": "⭐", "correctCategory": "outcomes"},
                    {"text": "Arctic housing crisis solved", "icon": "🧊", "correctCategory": "impact"}
                ]
            },
            {
                name: "Invent edible homework for students",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/0fb3d8b0-521a-432d-acba-dc67b7474b62.png",
                items: [
                    {"text": "Food-grade ink", "icon": "🖋️", "correctCategory": "inputs"},
                    {"text": "Edible paper materials", "icon": "📄", "correctCategory": "inputs"},
                    {"text": "Nutrition scientists", "icon": "👩‍🔬", "correctCategory": "inputs"},
                    {"text": "Kitchen laboratory", "icon": "🧪", "correctCategory": "inputs"},
                    {"text": "Recipe development", "icon": "👩‍🍳", "correctCategory": "activities"},
                    {"text": "Taste testing sessions", "icon": "👅", "correctCategory": "activities"},
                    {"text": "Student focus groups", "icon": "👥", "correctCategory": "activities"},
                    {"text": "Homework-flavoured worksheets", "icon": "📝", "correctCategory": "outputs"},
                    {"text": "Satisfied student testers", "icon": "😋", "correctCategory": "outputs"},
                    {"text": "Published recipes", "icon": "📖", "correctCategory": "outputs"},
                    {"text": "Improved homework completion", "icon": "✅", "correctCategory": "outcomes"},
                    {"text": "Better student nutrition", "icon": "🥗", "correctCategory": "outcomes"},
                    {"text": "Educational system revolution", "icon": "🎓", "correctCategory": "impact"}
                ]
            },
            {
                name: "Create a time machine using kitchen appliances",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/06304de1-840a-491d-83b8-e3e2ba1b395c.png",
                items: [
                    {"text": "Modified toaster", "icon": "🍞", "correctCategory": "inputs"},
                    {"text": "Microwave capacitors", "icon": "🔌", "correctCategory": "inputs"},
                    {"text": "Blender engine", "icon": "🍹", "correctCategory": "inputs"},
                    {"text": "Physics experts", "icon": "🧑‍🔬", "correctCategory": "inputs"},
                    {"text": "Time machine assembly", "icon": "🛠️", "correctCategory": "activities"},
                    {"text": "Temporal testing", "icon": "⏳", "correctCategory": "activities"},
                    {"text": "Safety drills", "icon": "🚦", "correctCategory": "activities"},
                    {"text": "Working time portal", "icon": "🌀", "correctCategory": "outputs"},
                    {"text": "Successful time travel", "icon": "🌍", "correctCategory": "outputs"},
                    {"text": "Temporal maps", "icon": "🗺️", "correctCategory": "outputs"},
                    {"text": "Historical discoveries", "icon": "🏛️", "correctCategory": "outcomes"},
                    {"text": "Time tourism boom", "icon": "🚀", "correctCategory": "outcomes"},
                    {"text": "Scientific time understanding", "icon": "🔬", "correctCategory": "impact"}
                ]
            },
            {
                name: "Establish an underwater library for fish",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/4750fcde-1326-441b-9f9a-94d864c84b55.png",
                items: [
                    {"text": "Waterproof books", "icon": "📚", "correctCategory": "inputs"},
                    {"text": "Coral shelves", "icon": "🏖️", "correctCategory": "inputs"},
                    {"text": "Aquatic architects", "icon": "🐠", "correctCategory": "inputs"},
                    {"text": "Library staff divers", "icon": "🚤", "correctCategory": "inputs"},
                    {"text": "Library construction", "icon": "🔨", "correctCategory": "activities"},
                    {"text": "Fish reading workshops", "icon": "🦈", "correctCategory": "activities"},
                    {"text": "Aquatic storytimes", "icon": "🐟", "correctCategory": "activities"},
                    {"text": "Completed underwater library", "icon": "🏛️", "correctCategory": "outputs"},
                    {"text": "Bookish fish", "icon": "🐡", "correctCategory": "outputs"},
                    {"text": "Aquatic reading clubs", "icon": "🦑", "correctCategory": "outputs"},
                    {"text": "Increased fish literacy", "icon": "📖", "correctCategory": "outcomes"},
                    {"text": "Aquatic community enrichment", "icon": "🌊", "correctCategory": "outcomes"},
                    {"text": "Marine educational revolution", "icon": "🌏", "correctCategory": "impact"}
                ]
            },
            {
                name: "Train cats to deliver mail",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/36dc6abb-83c3-44e1-b98f-961e7b531490.png",
                items: [
                    {"text": "Cat training treats", "icon": "🐱", "correctCategory": "inputs"},
                    {"text": "Letter satchels", "icon": "📬", "correctCategory": "inputs"},
                    {"text": "Postal trainers", "icon": "👩‍🏫", "correctCategory": "inputs"},
                    {"text": "Test letters", "icon": "✉️", "correctCategory": "inputs"},
                    {"text": "Mail delivery lessons", "icon": "📮", "correctCategory": "activities"},
                    {"text": "Route practice", "icon": "🗺️", "correctCategory": "activities"},
                    {"text": "Cat teamwork exercises", "icon": "🤝", "correctCategory": "activities"},
                    {"text": "Cats carrying mail", "icon": "😺", "correctCategory": "outputs"},
                    {"text": "Delivered letters", "icon": "📫", "correctCategory": "outputs"},
                    {"text": "Fast mail cats", "icon": "🚀", "correctCategory": "outputs"},
                    {"text": "Faster postal service", "icon": "⏩", "correctCategory": "outcomes"},
                    {"text": "Happier neighbours", "icon": "😊", "correctCategory": "outcomes"},
                    {"text": "Feline employment revolution", "icon": "💼", "correctCategory": "impact"}
                ]
            },
            {
                name: "Open a restaurant for robots",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/d9500ca2-e77b-407a-b472-0eba6a876424.png",
                items: [
                    {"text": "Aluminium plates", "icon": "🍽️", "correctCategory": "inputs"},
                    {"text": "Robot chefs", "icon": "🤖", "correctCategory": "inputs"},
                    {"text": "Electronic menus", "icon": "📋", "correctCategory": "inputs"},
                    {"text": "Charging stations", "icon": "🔋", "correctCategory": "inputs"},
                    {"text": "Recipe coding", "icon": "💻", "correctCategory": "activities"},
                    {"text": "Robot cooking contests", "icon": "🎉", "correctCategory": "activities"},
                    {"text": "Customer service training", "icon": "🦾", "correctCategory": "activities"},
                    {"text": "Robot-cooked meals", "icon": "🥘", "correctCategory": "outputs"},
                    {"text": "Happy robot diners", "icon": "😁", "correctCategory": "outputs"},
                    {"text": "Verified recipes", "icon": "✅", "correctCategory": "outputs"},
                    {"text": "Expanded robot cuisine", "icon": "🧑‍🍳", "correctCategory": "outcomes"},
                    {"text": "Improved robot health", "icon": "🩺", "correctCategory": "outcomes"},
                    {"text": "Robot-human culinary harmony", "icon": "🤝", "correctCategory": "impact"}
                ]
            },
            {
                name: "Start a dance school for vegetables",
                image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/fab3d966-f951-4201-8433-f9c133c36393.png",
                items: [
                    {"text": "Vegetable dancing shoes", "icon": "🥕", "correctCategory": "inputs"},
                    {"text": "Broccoli ballet teachers", "icon": "🥦", "correctCategory": "inputs"},
                    {"text": "Studio mirrors", "icon": "🪞", "correctCategory": "inputs"},
                    {"text": "Dance floor", "icon": "🕺", "correctCategory": "inputs"},
                    {"text": "Dance classes", "icon": "💃", "correctCategory": "activities"},
                    {"text": "Vegetable auditions", "icon": "🥬", "correctCategory": "activities"},
                    {"text": "Tiny vegetable choreography", "icon": "🎶", "correctCategory": "activities"},
                    {"text": "Dancing vegetables", "icon": "🧑‍🎤", "correctCategory": "outputs"},
                    {"text": "Veggie recitals", "icon": "🎤", "correctCategory": "outputs"},
                    {"text": "Choreographed vegetable movies", "icon": "📹", "correctCategory": "outputs"},
                    {"text": "Healthier human-vegetable relationships", "icon": "🥬", "correctCategory": "outcomes"},
                    {"text": "Worldwide veggie enthusiasm", "icon": "🌎", "correctCategory": "outcomes"},
                    {"text": "Global agricultural appreciation", "icon": "🌱", "correctCategory": "impact"}
                ]
            }
        ];
        
        this.achievements = [
            {"id": "first_correct", "name": "Logic Rookie 🏆", "description": "Placed your first item correctly!", "points": 10},
            {"id": "scenario_master", "name": "Mission Master 🎯", "description": "Completed a full scenario perfectly!", "points": 50},
            {"id": "output_outcome_pro", "name": "Confusion Crusher 🧠", "description": "Mastered Output vs Outcome difference!", "points": 25},
            {"id": "sockpuppet_specialist", "name": "Puppet Master 🧦", "description": "Mastered the Sock Puppet Revolution!", "points": 30},
            {"id": "scenario_explorer", "name": "Mission Explorer 🗺️", "description": "Completed 5 different scenarios!", "points": 75},
            {"id": "perfectionist", "name": "Perfectionist ⭐", "description": "Completed a scenario without any mistakes!", "points": 100}
        ];
        
        this.currentScenario = 0;
        this.selectedItem = null;
        this.score = 0;
        this.unlockedAchievements = new Set();
        this.placedItems = new Set();
        this.masterVolume = 0.7;
        this.outputOutcomeAttempts = 0;
        this.completedScenarios = new Set();
        this.currentScenarioMistakes = 0;
        
        // Image zoom state
        this.currentImageZoom = 1.0;
        this.maxZoom = 3.0;
        this.minZoom = 0.5;
        this.zoomStep = 0.25;
        
        // Enhanced Audio System
        this.audioContext = null;
        this.initAudioContext();
        
        // Confetti system
        this.confettiParticles = [];
        this.confettiCanvas = null;
        this.confettiCtx = null;
        this.confettiAnimationId = null;
        
        this.init();
    }
    
    // Fisher-Yates shuffle algorithm for randomizing item order
    shuffleArray(array) {
        const shuffled = [...array]; // Create a copy to avoid mutating original
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    async initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.log('Audio context not supported:', error);
        }
    }
    
    async resumeAudioContext() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }
    }
    
    // Enhanced sound generation with Web Audio API
    playSound(type) {
        if (!this.audioContext || this.masterVolume === 0) return;
        
        this.resumeAudioContext().then(() => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            const now = this.audioContext.currentTime;
            
            switch (type) {
                case 'tap':
                    oscillator.frequency.setValueAtTime(800, now);
                    gainNode.gain.setValueAtTime(0.4 * this.masterVolume, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
                    oscillator.start(now);
                    oscillator.stop(now + 0.15);
                    break;
                    
                case 'correct':
                    this.playChord([800, 1200, 900], 0.3, 0.5 * this.masterVolume);
                    break;
                    
                case 'wrong':
                    this.playChord([400, 300, 250], 0.25, 0.3 * this.masterVolume);
                    break;
                    
                case 'achievement':
                    this.playMelody([800, 1000, 1200], 0.6, 0.4 * this.masterVolume);
                    break;
                    
                case 'complete':
                    this.playMelody([523, 659, 784, 1047], 1.0, 0.4 * this.masterVolume);
                    break;
                    
                case 'zoom':
                    oscillator.frequency.setValueAtTime(600, now);
                    oscillator.frequency.exponentialRampToValueAtTime(900, now + 0.1);
                    gainNode.gain.setValueAtTime(0.3 * this.masterVolume, now);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                    oscillator.start(now);
                    oscillator.stop(now + 0.1);
                    break;
            }
        });
    }
    
    playChord(frequencies, duration, volume) {
        if (!this.audioContext) return;
        
        frequencies.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            const now = this.audioContext.currentTime;
            oscillator.frequency.setValueAtTime(freq, now);
            gainNode.gain.setValueAtTime(volume / frequencies.length, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
            
            oscillator.start(now + index * 0.05);
            oscillator.stop(now + duration);
        });
    }
    
    playMelody(frequencies, duration, volume) {
        if (!this.audioContext) return;
        
        const noteDuration = duration / frequencies.length;
        
        frequencies.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            const startTime = this.audioContext.currentTime + index * noteDuration * 0.8;
            oscillator.frequency.setValueAtTime(freq, startTime);
            gainNode.gain.setValueAtTime(volume, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + noteDuration);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + noteDuration);
        });
    }
    
    // Image zoom functionality
    zoomImage(direction) {
        const scenarioImage = document.getElementById('scenario-image');
        if (!scenarioImage) return;
        
        this.playSound('zoom');
        
        switch(direction) {
            case 'in':
                this.currentImageZoom = Math.min(this.currentImageZoom + this.zoomStep, this.maxZoom);
                break;
            case 'out':
                this.currentImageZoom = Math.max(this.currentImageZoom - this.zoomStep, this.minZoom);
                break;
            case 'reset':
                this.currentImageZoom = 1.0;
                break;
        }
        
        scenarioImage.style.transform = `scale(${this.currentImageZoom})`;
        
        if (this.currentImageZoom > 1.0) {
            scenarioImage.classList.add('zoomed');
        } else {
            scenarioImage.classList.remove('zoomed');
        }
    }
    
    // Open full-screen zoom modal
    openZoomModal() {
        const scenario = this.scenarios[this.currentScenario];
        const zoomModal = document.getElementById('zoom-modal');
        const zoomImage = document.getElementById('zoom-image');
        const zoomTitle = document.getElementById('zoom-modal-title');
        
        zoomImage.src = scenario.image;
        zoomTitle.textContent = scenario.name;
        zoomModal.classList.remove('hidden');
        
        this.playSound('tap');
    }
    
    // Zoom controls for modal
    zoomModalImage(direction) {
        const zoomImage = document.getElementById('zoom-image');
        if (!zoomImage) return;
        
        this.playSound('zoom');
        
        let currentScale = parseFloat(zoomImage.style.transform.replace(/scale\(|\)/g, '')) || 1;
        
        switch(direction) {
            case 'in':
                currentScale = Math.min(currentScale + this.zoomStep, this.maxZoom);
                break;
            case 'out':
                currentScale = Math.max(currentScale - this.zoomStep, this.minZoom);
                break;
            case 'reset':
                currentScale = 1.0;
                break;
        }
        
        zoomImage.style.transform = `scale(${currentScale})`;
    }
    
    // Image sharing functionality
    shareCurrentImage() {
        const scenario = this.scenarios[this.currentScenario];
        const imageShareModal = document.getElementById('image-share-modal');
        const sharedImagePreview = document.getElementById('shared-image-preview');
        
        sharedImagePreview.src = scenario.image;
        imageShareModal.classList.remove('hidden');
        
        this.playSound('tap');
    }
    
    // Copy image link to clipboard
    async copyImageLink() {
        const scenario = this.scenarios[this.currentScenario];
        const shareText = `🎨 Check out this adorable scenario from Logic Model Showdown: "${scenario.name}"!

These delightful isometric illustrations make learning logic models so much fun! 🎯

Image: ${scenario.image}

Play the full game: ${window.location.href}

Created by Meaningful Measures Lab
#LogicModels #Education #IsometricArt`;
        
        try {
            await navigator.clipboard.writeText(shareText);
            document.getElementById('image-copy-feedback').classList.remove('hidden');
            this.playSound('correct');
            setTimeout(() => {
                document.getElementById('image-copy-feedback').classList.add('hidden');
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            document.getElementById('image-copy-feedback').classList.remove('hidden');
            this.playSound('correct');
            setTimeout(() => {
                document.getElementById('image-copy-feedback').classList.add('hidden');
            }, 2000);
        }
    }
    
    // Download image functionality
    downloadCurrentImage() {
        const scenario = this.scenarios[this.currentScenario];
        const link = document.createElement('a');
        link.href = scenario.image;
        link.download = `logic-model-showdown-${scenario.name.toLowerCase().replace(/\s+/g, '-')}.png`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.playSound('correct');
    }
    
    // Confetti Animation System
    initConfetti() {
        this.confettiCanvas = document.getElementById('confetti-canvas');
        if (!this.confettiCanvas) return;
        
        this.confettiCtx = this.confettiCanvas.getContext('2d');
        this.resizeConfettiCanvas();
    }
    
    resizeConfettiCanvas() {
        if (!this.confettiCanvas || !this.confettiCtx) return;
        
        const rect = this.confettiCanvas.parentElement.getBoundingClientRect();
        this.confettiCanvas.width = rect.width;
        this.confettiCanvas.height = rect.height;
    }
    
    createConfettiParticles() {
        const colors = ['#FFD700', '#FFA500', '#FF7F50', '#FF6347', '#FF4500', '#FFEAA7', '#FDCB6E', '#E17055'];
        this.confettiParticles = [];
        
        for (let i = 0; i < 100; i++) {
            this.confettiParticles.push({
                x: Math.random() * this.confettiCanvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 6,
                vy: Math.random() * 3 + 2,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 8 + 4,
                gravity: 0.1,
                life: 1.0,
                decay: Math.random() * 0.02 + 0.005
            });
        }
    }
    
    updateConfetti() {
        if (!this.confettiCtx || !this.confettiParticles) return;
        
        this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
        
        for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
            const particle = this.confettiParticles[i];
            
            // Update physics
            particle.vy += particle.gravity;
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.rotation += particle.rotationSpeed;
            particle.life -= particle.decay;
            
            // Remove dead particles
            if (particle.life <= 0 || particle.y > this.confettiCanvas.height + 50) {
                this.confettiParticles.splice(i, 1);
                continue;
            }
            
            // Draw particle
            this.confettiCtx.save();
            this.confettiCtx.translate(particle.x, particle.y);
            this.confettiCtx.rotate(particle.rotation * Math.PI / 180);
            this.confettiCtx.globalAlpha = particle.life;
            this.confettiCtx.fillStyle = particle.color;
            this.confettiCtx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
            this.confettiCtx.restore();
        }
        
        // Continue animation if particles exist
        if (this.confettiParticles.length > 0) {
            this.confettiAnimationId = requestAnimationFrame(() => this.updateConfetti());
        } else {
            this.confettiAnimationId = null;
        }
    }
    
    startConfetti() {
        if (!this.confettiCanvas) {
            this.initConfetti();
        }
        
        if (this.confettiAnimationId) {
            cancelAnimationFrame(this.confettiAnimationId);
        }
        
        this.resizeConfettiCanvas();
        this.createConfettiParticles();
        this.updateConfetti();
    }
    
    stopConfetti() {
        if (this.confettiAnimationId) {
            cancelAnimationFrame(this.confettiAnimationId);
            this.confettiAnimationId = null;
        }
        this.confettiParticles = [];
        if (this.confettiCtx && this.confettiCanvas) {
            this.confettiCtx.clearRect(0, 0, this.confettiCanvas.width, this.confettiCanvas.height);
        }
    }
    
    init() {
        this.setupEventListeners();
        this.loadScenario();
        this.updateScore();
        this.updateAchievements();
        this.initConfetti();
    }
    
    setupEventListeners() {
        // Volume control
        document.getElementById('volume-slider').addEventListener('input', (e) => {
            this.masterVolume = e.target.value / 100;
        });
        
        // Scenario controls
        document.getElementById('next-scenario').addEventListener('click', () => {
            this.nextScenario();
        });
        
        // Image controls
        document.getElementById('zoom-in').addEventListener('click', () => {
            this.zoomImage('in');
        });
        
        document.getElementById('zoom-out').addEventListener('click', () => {
            this.zoomImage('out');
        });
        
        document.getElementById('reset-zoom').addEventListener('click', () => {
            this.zoomImage('reset');
        });
        
        document.getElementById('share-image').addEventListener('click', () => {
            this.shareCurrentImage();
        });
        
        // Make scenario image clickable for zoom modal
        document.getElementById('scenario-image').addEventListener('click', () => {
            this.openZoomModal();
        });
        
        // Zoom modal controls
        document.getElementById('close-zoom').addEventListener('click', () => {
            document.getElementById('zoom-modal').classList.add('hidden');
        });
        
        document.getElementById('zoom-in-modal').addEventListener('click', () => {
            this.zoomModalImage('in');
        });
        
        document.getElementById('zoom-out-modal').addEventListener('click', () => {
            this.zoomModalImage('out');
        });
        
        document.getElementById('reset-zoom-modal').addEventListener('click', () => {
            this.zoomModalImage('reset');
        });
        
        document.getElementById('share-zoom-image').addEventListener('click', () => {
            document.getElementById('zoom-modal').classList.add('hidden');
            this.shareCurrentImage();
        });
        
        // Image share modal controls
        document.getElementById('copy-image-share').addEventListener('click', () => {
            this.copyImageLink();
        });
        
        document.getElementById('download-image').addEventListener('click', () => {
            this.downloadCurrentImage();
        });
        
        document.getElementById('close-image-share').addEventListener('click', () => {
            document.getElementById('image-share-modal').classList.add('hidden');
        });
        
        // Share buttons
        document.getElementById('share-btn').addEventListener('click', () => {
            this.showShareModal();
        });
        
        document.getElementById('share-complete').addEventListener('click', () => {
            this.showShareModal();
        });
        
        // Modal controls
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeFeedbackModal();
        });
        
        document.getElementById('new-mission').addEventListener('click', () => {
            this.closeCompletionModal();
            this.nextScenario();
        });
        
        document.getElementById('close-share').addEventListener('click', () => {
            this.closeShareModal();
        });
        
        document.getElementById('copy-share').addEventListener('click', () => {
            this.copyShareText();
        });
        
        // Logic slot clicks
        document.querySelectorAll('.logic-slot').forEach(slot => {
            slot.addEventListener('click', (e) => {
                if (this.selectedItem) {
                    this.attemptPlacement(slot.dataset.category);
                }
            });
        });
        
        // Window resize handler for confetti canvas
        window.addEventListener('resize', () => {
            this.resizeConfettiCanvas();
        });
        
        // Enable audio context on first interaction
        document.addEventListener('click', () => {
            this.resumeAudioContext();
        }, { once: true });
        
        // ESC key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.add('hidden');
                });
                this.stopConfetti();
            }
        });
    }
    
    loadScenario() {
        const scenario = this.scenarios[this.currentScenario];
        
        // Update scenario display
        document.getElementById('scenario-name').textContent = scenario.name;
        
        // Load scenario image with proper loading handling
        const scenarioImage = document.getElementById('scenario-image');
        scenarioImage.classList.remove('loaded');
        scenarioImage.src = scenario.image;
        
        // Reset image zoom
        this.currentImageZoom = 1.0;
        scenarioImage.style.transform = 'scale(1)';
        scenarioImage.classList.remove('zoomed');
        
        // Add load event listener to show image when loaded
        scenarioImage.addEventListener('load', () => {
            scenarioImage.classList.add('loaded');
        }, { once: true });
        
        // Handle image error gracefully
        scenarioImage.addEventListener('error', () => {
            console.warn('Failed to load scenario image:', scenario.image);
            scenarioImage.style.display = 'none';
        }, { once: true });
        
        // Apply special styling for sock puppet revolution (now scenario index 0)
        const scenarioCard = document.querySelector('.scenario-card');
        if (this.currentScenario === 0) {
            scenarioCard.setAttribute('data-scenario', '0');
        } else {
            scenarioCard.removeAttribute('data-scenario');
        }
        
        // Clear previous items and slots
        this.clearGameBoard();
        
        // Shuffle items before loading them - KEY FEATURE UPDATE
        const shuffledItems = this.shuffleArray(scenario.items);
        this.loadItems(shuffledItems);
        
        // Reset game state
        this.selectedItem = null;
        this.placedItems.clear();
        this.outputOutcomeAttempts = 0;
        this.currentScenarioMistakes = 0;
        
        // Stop any running confetti
        this.stopConfetti();
    }
    
    clearGameBoard() {
        // Clear item pool
        document.getElementById('item-container').innerHTML = '';
        
        // Clear logic slots
        ['inputs', 'activities', 'outputs', 'outcomes', 'impact'].forEach(category => {
            document.getElementById(`${category}-slot`).innerHTML = '';
        });
    }
    
    loadItems(items) {
        const container = document.getElementById('item-container');
        
        items.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'game-item';
            itemElement.dataset.index = index;
            itemElement.dataset.category = item.correctCategory;
            
            itemElement.innerHTML = `
                <span class="item-icon">${item.icon}</span>
                <span class="item-text">${item.text}</span>
            `;
            
            itemElement.addEventListener('click', (e) => {
                this.selectItem(itemElement, item);
            });
            
            container.appendChild(itemElement);
        });
    }
    
    selectItem(element, item) {
        if (element.classList.contains('placed')) return;
        
        this.playSound('tap');
        
        // Clear previous selection
        document.querySelectorAll('.game-item').forEach(el => {
            el.classList.remove('selected');
        });
        
        // Select new item
        element.classList.add('selected');
        this.selectedItem = {
            element: element,
            data: item,
            index: element.dataset.index
        };
        
        // Highlight logic slots
        this.highlightCompatibleSlots();
    }
    
    highlightCompatibleSlots() {
        document.querySelectorAll('.logic-slot').forEach(slot => {
            slot.classList.remove('highlight');
        });
        
        if (this.selectedItem) {
            // Highlight all slots for educational purposes - let them learn!
            document.querySelectorAll('.logic-slot').forEach(slot => {
                slot.classList.add('highlight');
            });
        }
    }
    
    attemptPlacement(category) {
        if (!this.selectedItem) return;
        
        const correct = this.selectedItem.data.correctCategory === category;
        const slot = document.querySelector(`[data-category="${category}"] .slot-items`);
        
        if (correct) {
            this.playSound('correct');
            this.placeItemCorrectly(slot);
            this.checkOutputOutcomeMastery(category);
            this.checkFirstCorrect();
        } else {
            this.currentScenarioMistakes++;
            this.playSound('wrong');
            this.showEducationalFeedback(category, this.selectedItem.data.correctCategory);
            this.trackOutputOutcomeAttempts(category, this.selectedItem.data.correctCategory);
        }
        
        this.clearSelection();
    }
    
    placeItemCorrectly(slot) {
        const placedItem = document.createElement('div');
        placedItem.className = 'game-item placed';
        placedItem.innerHTML = this.selectedItem.element.innerHTML;
        
        slot.appendChild(placedItem);
        this.selectedItem.element.classList.add('placed');
        this.selectedItem.element.style.opacity = '0.5';
        
        this.placedItems.add(this.selectedItem.index);
        this.score += 10;
        this.updateScore();
        
        // Check scenario completion
        if (this.placedItems.size === this.scenarios[this.currentScenario].items.length) {
            setTimeout(() => {
                this.completeScenario();
            }, 500);
        }
    }
    
    showEducationalFeedback(attemptedCategory, correctCategory) {
        const feedbackTitle = document.getElementById('feedback-title');
        const feedbackText = document.getElementById('feedback-text');
        
        let title = "Not quite right! 🤔";
        let message = this.getEducationalMessage(attemptedCategory, correctCategory);
        
        feedbackTitle.textContent = title;
        feedbackText.textContent = message;
        
        document.getElementById('feedback-modal').classList.remove('hidden');
    }
    
    getEducationalMessage(attempted, correct) {
        const messages = {
            'outputs_outcomes': "Remember: Outputs are what you directly produce (like reports or events), while Outcomes are the changes that happen as a result (like increased knowledge or improved health). Think of outputs as 'what' and outcomes as 'so what?'",
            'outcomes_outputs': "Outcomes are the changes that happen because of your activities, whilst Outputs are the direct products you create. Outcomes answer 'what difference did it make?' whilst outputs answer 'what did we produce?'",
            'inputs_activities': "Inputs are the resources you need (people, money, materials), whilst Activities are the actions you take using those resources.",
            'activities_inputs': "Activities are what you do, whilst Inputs are what you need to do them.",
            'activities_outputs': "Activities are the processes and actions, whilst Outputs are the direct results of those activities.",
            'outputs_activities': "Outputs are the products of your activities, not the activities themselves.",
            'outcomes_impact': "Outcomes are shorter-term changes, whilst Impact represents longer-term, broader transformational change.",
            'impact_outcomes': "Impact is the long-term, systemic change, whilst Outcomes are the more immediate changes you see."
        };
        
        const key = `${attempted}_${correct}`;
        const reverseKey = `${correct}_${attempted}`;
        
        return messages[key] || messages[reverseKey] || 
               `This item belongs in ${this.getCategoryName(correct)}, not ${this.getCategoryName(attempted)}. Think about the logic model flow: Inputs → Activities → Outputs → Outcomes → Impact.`;
    }
    
    getCategoryName(category) {
        const names = {
            'inputs': 'Inputs (resources)',
            'activities': 'Activities (what you do)',
            'outputs': 'Outputs (what you produce)',
            'outcomes': 'Outcomes (changes that happen)',
            'impact': 'Impact (long-term transformation)'
        };
        return names[category] || category;
    }
    
    trackOutputOutcomeAttempts(attempted, correct) {
        if ((attempted === 'outputs' && correct === 'outcomes') || 
            (attempted === 'outcomes' && correct === 'outputs')) {
            this.outputOutcomeAttempts++;
        }
    }
    
    checkOutputOutcomeMastery(category) {
        if ((category === 'outputs' || category === 'outcomes') && 
            this.outputOutcomeAttempts >= 2 && 
            !this.unlockedAchievements.has('output_outcome_pro')) {
            this.unlockAchievement('output_outcome_pro');
        }
    }
    
    checkFirstCorrect() {
        if (this.placedItems.size === 1 && !this.unlockedAchievements.has('first_correct')) {
            this.unlockAchievement('first_correct');
        }
    }
    
    clearSelection() {
        document.querySelectorAll('.game-item').forEach(el => {
            el.classList.remove('selected');
        });
        document.querySelectorAll('.logic-slot').forEach(slot => {
            slot.classList.remove('highlight');
        });
        this.selectedItem = null;
    }
    
    completeScenario() {
        this.playSound('complete');
        this.completedScenarios.add(this.currentScenario);
        
        // Check for special achievements
        this.unlockAchievement('scenario_master');
        
        if (this.currentScenario === 0 && !this.unlockedAchievements.has('sockpuppet_specialist')) {
            this.unlockAchievement('sockpuppet_specialist');
        }
        
        if (this.completedScenarios.size === 5 && !this.unlockedAchievements.has('scenario_explorer')) {
            this.unlockAchievement('scenario_explorer');
        }
        
        if (this.currentScenarioMistakes === 0 && !this.unlockedAchievements.has('perfectionist')) {
            this.unlockAchievement('perfectionist');
        }
        
        this.score += 50; // Completion bonus
        this.updateScore();
        this.showCompletionModal();
        
        // Start confetti animation
        setTimeout(() => {
            this.startConfetti();
        }, 200);
    }
    
    unlockAchievement(achievementId) {
        if (this.unlockedAchievements.has(achievementId)) return;
        
        const achievement = this.achievements.find(a => a.id === achievementId);
        if (achievement) {
            this.unlockedAchievements.add(achievementId);
            this.score += achievement.points;
            this.playSound('achievement');
            this.updateScore();
            this.updateAchievements();
            
            // Show achievement notification
            setTimeout(() => {
                alert(`🏆 Achievement Unlocked!\n\n${achievement.name}\n${achievement.description}\n\n+${achievement.points} points!`);
            }, 100);
        }
    }
    
    updateScore() {
        document.getElementById('current-score').textContent = this.score;
        document.getElementById('final-score').textContent = this.score;
    }
    
    updateAchievements() {
        const container = document.getElementById('achievements-list');
        container.innerHTML = '';
        
        this.unlockedAchievements.forEach(id => {
            const achievement = this.achievements.find(a => a.id === id);
            if (achievement) {
                const element = document.createElement('div');
                element.className = 'achievement';
                element.textContent = achievement.name;
                element.title = achievement.description;
                container.appendChild(element);
            }
        });
        
        document.getElementById('achievements-count').textContent = this.unlockedAchievements.size;
    }
    
    nextScenario() {
        this.currentScenario = (this.currentScenario + 1) % this.scenarios.length;
        this.loadScenario();
    }
    
    showCompletionModal() {
        document.getElementById('completion-modal').classList.remove('hidden');
    }
    
    closeCompletionModal() {
        document.getElementById('completion-modal').classList.add('hidden');
        this.stopConfetti();
    }
    
    closeFeedbackModal() {
        document.getElementById('feedback-modal').classList.add('hidden');
    }
    
    showShareModal() {
        const scenario = this.scenarios[this.currentScenario];
        const shareText = document.querySelector('.share-text');
        
        shareText.textContent = `🎯 I just mastered the logic model for "${scenario.name}" in Logic Model Showdown! 
        
Score: ${this.score} points
Achievements: ${this.unlockedAchievements.size}

Check out this engaging way to learn evaluation fundamentals and the difference between outputs and outcomes!`;
        
        document.getElementById('share-modal').classList.remove('hidden');
    }
    
    closeShareModal() {
        document.getElementById('share-modal').classList.add('hidden');
    }
    
    async copyShareText() {
        const scenario = this.scenarios[this.currentScenario];
        const shareText = `🎯 Logic Model Showdown Challenge Complete!

Mission: "${scenario.name}"
Score: ${this.score} points
Achievements: ${this.unlockedAchievements.size}

I just mastered logic models through this brilliant educational game! Learn the difference between outputs and outcomes whilst having fun with adorable isometric illustrations.

Created by Meaningful Measures Lab
Play at: ${window.location.href}

#LogicModels #Evaluation #EducationalGames #MeaningfulMeasures`;
        
        try {
            await navigator.clipboard.writeText(shareText);
            document.getElementById('copy-feedback').classList.remove('hidden');
            this.playSound('correct');
            setTimeout(() => {
                document.getElementById('copy-feedback').classList.add('hidden');
            }, 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = shareText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            document.getElementById('copy-feedback').classList.remove('hidden');
            this.playSound('correct');
            setTimeout(() => {
                document.getElementById('copy-feedback').classList.add('hidden');
            }, 2000);
        }
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new LogicModelGame();
    
    // Add loading state management
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});