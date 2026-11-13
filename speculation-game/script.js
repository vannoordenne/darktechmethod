// Card Data — The Speculation Game CORE v2.0
const cardData = {
    technology: [
        {
            title: 'Wearable Technology',
            description: 'Technology worn on or close to the body that can sense, track, display, or respond to information, such as smartwatches, smart glasses, or biometric sensors.'
        },
        {
            title: 'Ambient Surveillance',
            description: 'Technology that continuously monitors people, spaces, or behavior in the background, such as cameras, sensors, microphones, or location tracking.'
        },
        {
            title: 'Smart Devices',
            description: 'Connected physical objects that can sense, communicate, or respond to their environment, such as smart speakers or sensor-enabled objects.'
        },
        {
            title: 'Extended Reality (VR/AR)',
            description: 'Technology that creates immersive digital environments or adds digital layers to the physical world, such as VR headsets or AR filters.'
        },
        {
            title: 'Artificial Intelligence',
            description: 'Computer systems that generate, classify, predict, recommend, or make decisions based on data, such as chatbots, recommendation systems, or image recognition.'
        },
        {
            title: 'Humanoid Robots',
            description: 'Robots designed to resemble or behave like humans, such as service robots, reception robots, or humanoid assistants.'
        },
        {
            title: 'Emotion Recognition',
            description: 'Technology that claims to infer emotions from signals such as facial expressions, voice, movement, or physiological data.'
        },
        {
            title: 'Predictive Analytics',
            description: 'Technology that uses existing data to estimate what is likely to happen next, such as predicting behavior, demand, risk, or future events.'
        },
        {
            title: 'Autonomous Drones',
            description: 'Flying devices that can navigate, sense, or perform tasks with no or limited human control, such as delivery, inspection, mapping, or surveillance.'
        },
        {
            title: 'Brain-Computer Interfaces',
            description: 'Technology that enables communication between brain activity and a computer system, such as neural implants or brain-controlled assistive devices.'
        },
    ],
    target: [
        {
            title: 'Children',
            description: 'Young people with limited autonomy who may rely on adults to make decisions on their behalf, such as children at home, at school, or online.'
        },
        {
            title: 'Students',
            description: 'People taking part in formal or informal education, such as secondary school students, university students, or online learners.'
        },
        {
            title: 'Families',
            description: 'People within households with multiple generations and mixed tech literacy, for example parents with children or multi-generational households.'
        },
        {
            title: 'Older Adults',
            description: 'Older people with different levels of independence and technological experience, such as retirees or people receiving care.'
        },
        {
            title: 'Citizens',
            description: 'People affected by public services, infrastructure, policies or decisions made by governments and institutions.'
        },
        {
            title: 'Travelers',
            description: 'People moving between places temporarily, such as commuters, tourists, business travelers, or people using transport systems.'
        },
        {
            title: 'Consumers',
            description: 'People choosing, buying, or using commercial products and services, both online and offline.'
        },
        {
            title: 'Patients',
            description: 'People receiving or seeking healthcare, who may depend on professionals, institutions, or technologies for decisions about their health.'
        },
        {
            title: 'Online Communities',
            description: 'People who interact, create, share, or organize through digital platforms, such as social media groups, gaming communities, or online forums.'
        },
        {
            title: 'Workers',
            description: 'People performing paid work in different settings, such as employees, freelancers, platform workers, or remote workers.'
        },
    ],
    funding: [
        {
            title: 'Selling Personal Data',
            description: 'Generates income by selling or providing access to user data to third parties, for example advertising platforms or data brokers.'
        },
        {
            title: 'Subscription',
            description: 'Charges users recurring payments for continued access, for example streaming services, software subscriptions, or membership platforms.'
        },
        {
            title: 'Advertising',
            description: 'Generates income by showing paid promotional content, for example social media platforms, news websites, or free mobile apps.'
        },
        {
            title: 'Pay-Per-Use',
            description: 'Charges users each time they access or use the product or service, for example mobility services, cloud computing, or shared equipment.'
        },
        {
            title: 'Freemium Model',
            description: 'Offers basic access for free while charging for additional features, content, or services, for example productivity apps or online games.'
        },
        {
            title: 'Government Funding',
            description: 'Is funded through public money, grants, subsidies, or government contracts, for example public transport systems, education platforms, or civic technology.'
        },
        {
            title: 'Microtransactions',
            description: 'Generates income through small purchases for additional features, content, or advantages, for example in-game items, digital upgrades, or virtual goods.'
        },
        {
            title: 'One-Time Purchase',
            description: 'Charges a single payment for access to the product or service, for example software licenses, digital products, or physical devices.'
        },
        {
            title: 'Licensing',
            description: 'Generates income by allowing others to use the technology, software, or intellectual property for a fee, for example enterprise software or patented technology.'
        },
        {
            title: 'Marketplace Commission',
            description: 'Takes a percentage or fixed fee from transactions between buyers and sellers, for example ticket marketplaces, accommodation platforms, or freelance platforms.'
        },
    ],
    problem: [
        {
            title: 'Learning Challenges',
            description: 'People struggle to learn effectively because education may not fit their needs, pace, or circumstances, for example in classrooms, online learning, or workplace training.'
        },
        {
            title: 'Health Challenges',
            description: 'People struggle to understand, manage, or improve their physical health, for example medication, exercise, symptoms, or chronic care.'
        },
        {
            title: 'Safety Risks',
            description: 'People face risks of harm, accidents, or crime, for example at home, at work, while traveling, or in public spaces.'
        },
        {
            title: 'Workplace Productivity',
            description: 'People or organizations struggle to work efficiently, for example because of distractions, poor coordination, repetitive tasks, or limited time.'
        },
        {
            title: 'Social Isolation',
            description: 'People lack meaningful social connection or participation, for example because of distance, exclusion, loneliness, or changing social environments.'
        },
        {
            title: 'Conflicts in Public Space',
            description: 'People have competing needs or behaviors in shared spaces, for example around noise, mobility, crowds, access, or public order.'
        },
        {
            title: 'Unfair Decision-Making',
            description: 'Decisions can be inconsistent, biased, or difficult to challenge, for example in hiring, education, insurance, policing, or access to services.'
        },
        {
            title: 'Mental Health',
            description: 'People struggle with stress, anxiety, mood, or emotional well-being, for example because support is unavailable, expensive, or difficult to access.'
        },
        {
            title: 'Fraud and Deception',
            description: 'People or organizations struggle to detect misleading, dishonest, or fraudulent behavior, for example in finance, commerce, identity, or online communication.'
        },
        {
            title: 'Information Overload',
            description: 'People receive more information than they can easily understand or act on, for example through news, notifications, dashboards, recommendations, or online content.'
        },
    ],
    strategy: [
        {
            title: 'Optimize',
            description: 'Make a process, system, or behavior faster, more efficient, or more effective.'
        },
        {
            title: 'Monitor',
            description: 'Continuously observe or track people, environments, behaviors, or data.'
        },
        {
            title: 'Entertain',
            description: 'Create engaging, enjoyable, or attention-grabbing experiences.'
        },
        {
            title: 'Support',
            description: 'Help people complete tasks, cope with challenges, or meet their needs.'
        },
        {
            title: 'Connect',
            description: 'Bring people, communities, information, devices, or systems together.'
        },
        {
            title: 'Educate',
            description: 'Help people learn, understand, or develop new knowledge and skills.'
        },
        {
            title: 'Protect',
            description: 'Reduce risks, prevent harm, or keep people, information, or environments safe.'
        },
        {
            title: 'Analyze',
            description: 'Interpret information or data to identify patterns, relationships, or insights.'
        },
        {
            title: 'Automate',
            description: 'Perform tasks or make processes run with reduced human involvement.'
        },
        {
            title: 'Influence',
            description: 'Shape people’s choices, attitudes, or behavior.'
        },
    ],
    twist: [
        {
            title: 'No Opt-Out',
            description: 'People cannot choose whether to participate in or be affected by the system.'
        },
        {
            title: 'Black Box',
            description: 'People affected by the system cannot understand how it works or how its decisions are made.'
        },
        {
            title: 'Limited Access',
            description: 'Only people who meet certain conditions or criteria can use or benefit from the system.'
        },
        {
            title: 'Free to Use',
            description: 'Users cannot be charged directly for access to the product or service.'
        },
        {
            title: 'Scoring',
            description: 'People are assigned a score, ranking, or profile based on their behaviour or data.'
        },
        {
            title: 'Crisis',
            description: 'The system is introduced during an urgent social, economic, environmental, or political crisis.'
        },
        {
            title: 'Monopoly',
            description: 'One organisation gains exclusive control over the system, service, or infrastructure.'
        },
        {
            title: 'Dependency',
            description: 'The system becomes necessary for accessing an important service, opportunity, or part of everyday life.'
        },
        {
            title: 'Function Creep',
            description: 'The system is gradually used for purposes beyond what it was originally designed for.'
        },
        {
            title: 'Rule Change',
            description: 'The rules of the system change after people have already adopted or become dependent on it.'
        },
    ]
};


// Game State
const CORE_CATEGORIES = ['technology', 'target', 'funding', 'problem', 'strategy'];
const CATEGORY_LABELS = {
    technology: 'Technology',
    target: 'Target Group',
    funding: 'Funding Model',
    problem: 'Problem',
    strategy: 'Strategy',
    twist: 'Twist'
};

let drawnCards = {
    technology: null,
    target: null,
    funding: null,
    problem: null,
    strategy: null,
    twist: null
};

let individualMode = false;
let currentStep = 1;
let conceptText = '';

// DOM Elements
const drawAllBtn = document.getElementById('drawAllCards');
const resetBtn = document.getElementById('resetCards');
const drawIndividualBtn = document.getElementById('drawIndividual');
const drawTwistBtn = document.getElementById('drawTwist');
const cardsContainer = document.getElementById('cardsContainer');
const conceptTextArea = document.getElementById('conceptText');
const drawnHand = document.getElementById('drawnHand');
const drawnHandGrid = document.getElementById('drawnHandGrid');
const editCardsBtn = document.getElementById('editCardsBtn');

// Step Navigation Elements
const nextToStep2Btn = document.getElementById('nextToStep2');
const backToStep1Btn = document.getElementById('backToStep1');
const nextToStep3Btn = document.getElementById('nextToStep3');
const backToStep2Btn = document.getElementById('backToStep2');
const nextToStep4Btn = document.getElementById('nextToStep4');
const backToStep3Btn = document.getElementById('backToStep3');
const nextToStep5Btn = document.getElementById('nextToStep5');
const backToStep4Btn = document.getElementById('backToStep4');
const startOverBtn = document.getElementById('startOver');

// Event Listeners
drawAllBtn.addEventListener('click', drawAllCards);
resetBtn.addEventListener('click', resetCards);
drawIndividualBtn.addEventListener('click', toggleIndividualMode);
if (drawTwistBtn) {
    drawTwistBtn.addEventListener('click', () => drawSingleCard('twist', { force: true }));
}

// Step Navigation Event Listeners
nextToStep2Btn.addEventListener('click', () => goToStep(2));
backToStep1Btn.addEventListener('click', () => goToStep(1));
nextToStep3Btn.addEventListener('click', () => goToStep(3));
backToStep2Btn.addEventListener('click', () => goToStep(2));
nextToStep4Btn.addEventListener('click', () => goToStep(4));
backToStep3Btn.addEventListener('click', () => goToStep(3));
nextToStep5Btn.addEventListener('click', () => goToStep(5));
backToStep4Btn.addEventListener('click', () => goToStep(4));
startOverBtn.addEventListener('click', startNewGame);
if (editCardsBtn) {
    editCardsBtn.addEventListener('click', () => goToStep(1));
}

document.querySelectorAll('.step-indicator').forEach((indicator) => {
    indicator.addEventListener('click', () => {
        if (indicator.disabled) return;
        const step = Number(indicator.dataset.step);
        if (!step || step === currentStep) return;
        if (step >= 2 && !allCoreCardsDrawn()) return;
        goToStep(step);
    });
});

// Concept text event listener
conceptTextArea.addEventListener('input', (e) => {
    conceptText = e.target.value;
    if (currentStep >= 2) {
        updateConceptNotes();
    }
});

// Add click listeners to card slots for individual / swap mode
document.querySelectorAll('.card-slot').forEach(slot => {
    slot.addEventListener('click', (e) => {
        if (!individualMode) return;
        if (e.target.closest('.swap-choice, .blank-editor, button, input, textarea, label')) return;

        const category = slot.getAttribute('data-category');
        if (!category) return;

        // Twist: redraw only (no blank)
        if (category === 'twist') {
            clearSwapOverlays();
            drawSingleCard(category, { force: true });
            return;
        }

        if (!CORE_CATEGORIES.includes(category)) return;
        openSwapChoice(category);
    });
});

// Helper Functions
function escapeHtml(text) {
    return String(text ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function getRandomCard(category) {
    const cards = cardData[category];
    return cards[Math.floor(Math.random() * cards.length)];
}

function clearSwapOverlays() {
    document.querySelectorAll('.card-slot.swap-choosing, .card-slot.blank-editing').forEach((slot) => {
        slot.classList.remove('swap-choosing', 'blank-editing');
        const category = slot.getAttribute('data-category');
        const card = drawnCards[category];
        const body = document.getElementById(`${category}Card`);
        if (!body) return;

        if (card) {
            renderCard(category, card, { skipSideEffects: true });
        } else {
            const prompt = category === 'twist' ? 'Optional' : 'Waiting…';
            body.innerHTML = `<div class="draw-prompt">${prompt}</div>`;
            slot.classList.remove('filled', 'is-custom');
        }
    });
}

function openSwapChoice(category) {
    clearSwapOverlays();

    const slot = document.querySelector(`.card-slot[data-category="${category}"]`);
    const body = document.getElementById(`${category}Card`);
    if (!slot || !body) return;

    slot.classList.add('swap-choosing', 'filled');
    body.innerHTML = `
        <div class="swap-choice">
            <p class="swap-choice-label">Replace this card</p>
            <button type="button" class="btn-ghost swap-choice-btn" data-action="redraw">Redraw</button>
            <button type="button" class="btn-primary swap-choice-btn" data-action="blank">Write your own</button>
        </div>
    `;

    body.querySelector('[data-action="redraw"]').addEventListener('click', (e) => {
        e.stopPropagation();
        slot.classList.remove('swap-choosing');
        drawSingleCard(category, { force: true });
    });

    body.querySelector('[data-action="blank"]').addEventListener('click', (e) => {
        e.stopPropagation();
        openBlankEditor(category);
    });
}

function openBlankEditor(category) {
    const slot = document.querySelector(`.card-slot[data-category="${category}"]`);
    const body = document.getElementById(`${category}Card`);
    if (!slot || !body) return;

    const existing = drawnCards[category];
    const titleValue = existing?.custom ? existing.title : '';
    const descValue = existing?.custom ? (existing.description || '') : '';

    slot.classList.remove('swap-choosing');
    slot.classList.add('blank-editing', 'filled');

    body.innerHTML = `
        <form class="blank-editor" autocomplete="off">
            <label class="blank-label" for="${category}-blank-title">Your ${CATEGORY_LABELS[category].toLowerCase()}</label>
            <input
                id="${category}-blank-title"
                class="blank-title-input"
                type="text"
                maxlength="80"
                required
                placeholder="Title"
                value="${escapeHtml(titleValue)}"
            >
            <label class="blank-label blank-label-optional" for="${category}-blank-desc">Description (optional)</label>
            <textarea
                id="${category}-blank-desc"
                class="blank-desc-input"
                maxlength="240"
                rows="3"
                placeholder="Short description"
            >${escapeHtml(descValue)}</textarea>
            <div class="blank-actions">
                <button type="button" class="btn-ghost blank-cancel" data-action="cancel">Cancel</button>
                <button type="submit" class="btn-primary blank-save">Save</button>
            </div>
        </form>
    `;

    const form = body.querySelector('.blank-editor');
    const titleInput = body.querySelector('.blank-title-input');
    titleInput.focus();
    titleInput.select();

    form.addEventListener('click', (e) => e.stopPropagation());

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        saveCustomCard(category);
    });

    body.querySelector('[data-action="cancel"]').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        cancelBlankEditor(category);
    });
}

function saveCustomCard(category) {
    const body = document.getElementById(`${category}Card`);
    const titleInput = body?.querySelector('.blank-title-input');
    const descInput = body?.querySelector('.blank-desc-input');
    if (!titleInput) return;

    const title = titleInput.value.trim();
    if (!title) {
        titleInput.focus();
        return;
    }

    const description = (descInput?.value || '').trim();
    drawnCards[category] = {
        title,
        description,
        custom: true
    };

    const slot = document.querySelector(`.card-slot[data-category="${category}"]`);
    slot?.classList.remove('blank-editing', 'swap-choosing');
    renderCard(category, drawnCards[category]);
}

function cancelBlankEditor(category) {
    const slot = document.querySelector(`.card-slot[data-category="${category}"]`);
    const body = document.getElementById(`${category}Card`);
    if (!slot || !body) return;

    slot.classList.remove('blank-editing', 'swap-choosing');
    const card = drawnCards[category];
    if (card) {
        renderCard(category, card);
    } else {
        body.innerHTML = `<div class="draw-prompt">Waiting…</div>`;
        slot.classList.remove('filled', 'is-custom');
        checkCanProceed();
    }
}

function renderCard(category, card, { skipSideEffects = false } = {}) {
    const cardElement = document.getElementById(`${category}Card`);
    const slot = document.querySelector(`.card-slot[data-category="${category}"]`);
    
    if (!cardElement || !slot) return;
    
    const customMark = card.custom
        ? '<div class="card-custom-mark">Custom</div>'
        : '';
    let html = `${customMark}<div class="card-title">${escapeHtml(card.title)}</div>`;
    if (card.description) {
        html += `<div class="card-description">${escapeHtml(card.description)}</div>`;
    }
    
    cardElement.innerHTML = html;
    slot.classList.add('filled');
    slot.classList.toggle('is-custom', Boolean(card.custom));

    if (!skipSideEffects) {
        checkCanProceed();
        updateHandStrip();
    }
}

function drawSingleCard(category, { force = false } = {}) {
    // In individual mode (or forced, e.g. Twist / Swap), allow redrawing
    if (drawnCards[category] && !individualMode && !force) return;
    
    const card = getRandomCard(category);
    drawnCards[category] = card;
    const slot = document.querySelector(`.card-slot[data-category="${category}"]`);
    slot?.classList.remove('swap-choosing', 'blank-editing', 'is-custom');
    renderCard(category, card);
}

function drawAllCards() {
    clearSwapOverlays();
    const redraw = allCoreCardsDrawn();

    CORE_CATEGORIES.forEach((category, index) => {
        setTimeout(() => {
            if (redraw || !drawnCards[category]) {
                drawSingleCard(category, { force: redraw });
            }
        }, index * 200);
    });

    if (individualMode) {
        toggleIndividualMode();
    }

    setTimeout(() => {
        cardsContainer?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, CORE_CATEGORIES.length * 200 + 100);
}

function resetCards() {
    clearSwapOverlays();

    drawnCards = {
        technology: null,
        target: null,
        funding: null,
        problem: null,
        strategy: null,
        twist: null
    };
    
    document.querySelectorAll('.card-body').forEach(content => {
        const category = content.id.replace('Card', '');
        const prompt = category === 'twist' ? 'Optional' : 'Waiting…';
        content.innerHTML = `<div class="draw-prompt">${prompt}</div>`;
    });
    
    document.querySelectorAll('.card-slot').forEach(slot => {
        slot.classList.remove('filled', 'is-custom', 'swap-choosing', 'blank-editing');
    });
    
    if (individualMode) {
        toggleIndividualMode();
    }
    
    checkCanProceed();
    updateHandStrip();
}

function toggleIndividualMode() {
    individualMode = !individualMode;

    if (individualMode) {
        cardsContainer.classList.add('individual-mode');
        drawIndividualBtn.textContent = 'Done';
        drawIndividualBtn.title = 'Exit swap mode';
        drawAllBtn.disabled = true;

        if (!document.querySelector('.individual-instruction')) {
            const instruction = document.createElement('div');
            instruction.className = 'individual-instruction';
            instruction.textContent = 'Click a card: redraw, or write your own.';
            cardsContainer.parentNode.insertBefore(instruction, cardsContainer);
        }
        const hint = document.getElementById('controlsHint');
        if (hint) hint.textContent = 'Click a card to redraw or write your own.';
    } else {
        clearSwapOverlays();
        cardsContainer.classList.remove('individual-mode');
        drawIndividualBtn.textContent = 'Swap one';
        drawIndividualBtn.title = 'Redraw a card or write your own';
        drawAllBtn.disabled = false;

        const instruction = document.querySelector('.individual-instruction');
        if (instruction) instruction.remove();
        updateDrawControls();
    }
}

// Step Progression Functions
function goToStep(step) {
    document.querySelector('.step-content.active').classList.remove('active');
    document.getElementById(`step${step}`).classList.add('active');
    updateStepIndicators(step);
    currentStep = step;

    if (drawnHand) {
        drawnHand.hidden = step < 2 || !allCoreCardsDrawn();
    }
    updateHandStrip();
    updateConceptNotes();

    if (step === 2 && conceptTextArea) {
        conceptTextArea.value = conceptText;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepIndicators(activeStep) {
    const indicators = document.querySelectorAll('.step-indicator');

    indicators.forEach((indicator, index) => {
        const stepNumber = index + 1;
        indicator.classList.remove('active', 'completed');

        if (stepNumber === activeStep) {
            indicator.classList.add('active');
        } else if (stepNumber < activeStep) {
            indicator.classList.add('completed');
        }
    });
    updateStepLocks();
}

function updateStepLocks() {
    document.querySelectorAll('.step-indicator').forEach((indicator) => {
        const stepNumber = Number(indicator.dataset.step);
        const coreReady = allCoreCardsDrawn();
        const canGo = stepNumber === 1
            || (coreReady && stepNumber <= currentStep)
            || (coreReady && stepNumber === currentStep + 1);
        indicator.disabled = !canGo;
    });
}

function updateHandStrip() {
    if (!drawnHandGrid) return;

    const categories = [...CORE_CATEGORIES, 'twist'];
    let html = '';
    let count = 0;

    categories.forEach((category) => {
        const card = drawnCards[category];
        if (!card) return;
        count += 1;
        const customClass = card.custom ? ' is-custom' : '';
        const customMark = card.custom ? '<span class="hand-chip-custom">Custom</span>' : '';
        const tip = card.description
            ? escapeHtml(card.description)
            : escapeHtml(card.title);
        html += `
            <article class="hand-chip${customClass}" data-category="${category}" title="${tip}">
                <span class="hand-chip-cat">${CATEGORY_LABELS[category]}${customMark}</span>
                <span class="hand-chip-title">${escapeHtml(card.title)}</span>
            </article>
        `;
    });

    drawnHandGrid.innerHTML = html;
    drawnHandGrid.dataset.count = String(count);
    if (drawnHand) {
        drawnHand.hidden = currentStep < 2 || !allCoreCardsDrawn();
    }
}

function updateConceptNotes() {
    const text = conceptText
        ? conceptText
        : 'No concept written yet. Go back to Design to add one.';

    [3, 4, 5].forEach((step) => {
        const el = document.getElementById(`conceptNote${step}`);
        if (!el) return;
        if (step === 3 && !conceptText) {
            el.innerHTML = `<p class="concept-text muted">Optional: add a written concept in Design, or prototype directly.</p>`;
        } else {
            el.innerHTML = `
                <p class="note-label">Your concept</p>
                <p class="concept-text">${conceptText || text}</p>
            `;
        }
    });
}

function allCoreCardsDrawn() {
    return CORE_CATEGORIES.every(category => drawnCards[category] !== null);
}

function updateDrawControls() {
    const hint = document.getElementById('controlsHint');
    const complete = allCoreCardsDrawn();

    if (individualMode) {
        if (hint) hint.textContent = 'Click a card to redraw or write your own.';
        nextToStep2Btn.hidden = !complete;
        nextToStep2Btn.disabled = !complete;
        return;
    }

    if (complete) {
        drawAllBtn.textContent = 'Draw again';
        drawAllBtn.title = 'Redraw all five core cards';
        drawAllBtn.classList.remove('btn-primary');
        drawAllBtn.classList.add('btn-ghost');
        nextToStep2Btn.hidden = false;
        nextToStep2Btn.disabled = false;
        if (hint) hint.textContent = 'Ready. Continue to design, or tweak your cards.';
    } else {
        const count = CORE_CATEGORIES.filter(c => drawnCards[c]).length;
        drawAllBtn.textContent = 'Draw cards';
        drawAllBtn.title = 'Draw one card from each core category';
        drawAllBtn.classList.add('btn-primary');
        drawAllBtn.classList.remove('btn-ghost');
        nextToStep2Btn.hidden = true;
        nextToStep2Btn.disabled = true;
        if (hint) {
            hint.textContent = count
                ? `${count} of 5 cards drawn`
                : 'Draw all five cards to continue.';
        }
    }
}

function checkCanProceed() {
    const complete = allCoreCardsDrawn();
    nextToStep2Btn.title = complete
        ? 'Continue to design'
        : 'Draw all five cards to continue';
    updateDrawControls();
    updateStepLocks();
    updateHandStrip();
}

function startNewGame() {
    // Reset all game state
    resetCards();
    
    // Reset concept text
    conceptText = '';
    if (conceptTextArea) {
        conceptTextArea.value = '';
    }
    
    // Go back to step 1
    goToStep(1);
    
    // Reset individual mode if active
    if (individualMode) {
        toggleIndividualMode();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkCanProceed();
});