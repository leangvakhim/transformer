// Data structure defining each step of the presentation
const steps = [
    {
        title: "The Overburdened Robot 🤖",
        text: `
            <p class='text-lg'>Imagine you have built a <strong>super-smart robot</strong> that knows the answer to every question in the world.</p>
            <p class='text-lg mt-4'>But right now, the robot is a little bit too big, too heavy, and thinks a little too slowly.</p>
            <div class='mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500'>
                <p class='text-blue-800 font-medium'><strong>Optimization and Deployment</strong> is just a fancy way of saying: <br/><em>"How do we make our smart robot smaller, faster, and cheaper to run so everyone can use it?"</em></p>
            </div>
        `,
        visual: `
            <div class='flex flex-col items-center'>
                <div class='text-7xl bounce-slow mb-4'>🤖</div>
                <div class='flex space-x-2 text-4xl mt-2'>
                    <span>🧱</span><span>📦</span><span>🏋️‍♂️</span>
                </div>
                <p class='mt-4 font-mono text-sm text-slate-500'>Processing... (Very slowly)</p>
            </div>
        `,
        hasFormula: false
    },
    {
        title: "1. Quantization: The Heavy Backpack 🎒",
        text: `
            <p class='text-lg'><strong>The Problem:</strong> The robot’s brain uses really long, complicated numbers to think (like <code class="bg-gray-200 px-1 rounded text-red-600">1.23456789</code>).</p>
            <p class='text-lg mt-4'>Imagine the robot is carrying a giant, heavy backpack filled with huge math textbooks. Because the backpack is so heavy, the robot walks very slowly and gets tired easily.</p>
        `,
        visual: `
            <div class='flex flex-col items-center justify-center'>
                <div class='flex space-x-4 text-6xl mb-6'>
                    <span>🎒</span><span>📚</span><span>📚</span>
                </div>
                <div class='bg-red-100 text-red-800 px-4 py-2 rounded-lg font-mono text-sm shadow-inner w-full text-center'>
                    Weights = [0.1234, -1.9876, 3.1415]
                    <br/><span class="font-bold text-xs">DataType: FP16 (Heavy)</span>
                </div>
            </div>
        `,
        hasFormula: false
    },
    {
        title: "The Math Behind the Magic 🪄",
        text: `
            <p class='text-lg'>To shrink these heavy numbers, engineers use a mathematical trick to convert high-precision floating-point numbers into low-precision integers.</p>
            <div class='mt-6 bg-slate-50 p-4 rounded-lg border border-slate-200'>
                <ul class='space-y-3 text-gray-700 text-md'>
                    <li>$x$: The original heavy number (e.g., FP16)</li>
                    <li>$S$: Scale factor (how much we shrink it by)</li>
                    <li>$Z$: Zero-point (to align the scale properly)</li>
                    <li>$x_q$: The new, lightweight integer (e.g., INT4)</li>
                </ul>
            </div>
        `,
        visual: `
            <div class='flex flex-col items-center mb-4'>
                <span class="text-4xl">🧮</span>
                <p class="text-slate-600 mt-2 font-medium">Linear Quantization Formula</p>
            </div>
        `,
        hasFormula: true,
        formula: "x_q = \\text{round}\\left(\\frac{x}{S}\\right) + Z"
    },
    {
        title: "The Solution: Tiny Comic Books 📙",
        text: `
            <p class='text-lg'>Instead of using long, heavy numbers, we <strong>round them</strong> to small, simple numbers (like 1 or 0). We swap the giant math textbooks for tiny comic books!</p>
            <div class='mt-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg'>
                <p class='text-green-900'><strong>Real-World Example 🍼:</strong><br/> Imagine packing for a vacation. Instead of bringing exactly <em>3.142 liters</em> of water in a giant jug, you just pack <em>3 small water bottles</em>. It saves space, is lighter, and you still have what you need!</p>
            </div>
        `,
        visual: `
            <div class='flex flex-col items-center justify-center'>
                <div class='flex items-center space-x-4 text-5xl mb-6'>
                    <span class="animate-bounce">🏃‍♂️💨</span><span>🍼🍼🍼</span>
                </div>
                <div class='bg-green-100 text-green-800 px-4 py-2 rounded-lg font-mono text-sm shadow-inner w-full text-center'>
                    Weights = [0, -2, 3]
                    <br/><span class="font-bold text-xs">DataType: INT4 (Light & Fast)</span>
                </div>
            </div>
        `,
        hasFormula: false
    },
    {
        title: "2. The Single-Passenger Problem 🚶",
        text: `
            <p class='text-lg'><strong>The Problem:</strong> Imagine 10 kids want to ask the robot a question. If the robot listens to one kid, answers, then listens to the next kid... it takes a really long time.</p>
            <p class='text-lg mt-4'>It's like a parent driving one kid to school, driving all the way home, and then driving the next kid to school. Highly inefficient!</p>
        `,
        visual: `
            <div class='flex flex-col w-full h-full justify-center'>
                <div class='flex justify-between items-center w-full px-2'>
                    <div class='text-3xl flex flex-col space-y-2 opacity-50'>
                        <span>🧍‍♂️</span><span>🧍‍♀️</span><span class="opacity-100">🧍‍♂️</span>
                    </div>
                    <div class='text-2xl font-mono text-red-500 flex flex-col items-center'>
                        <span>Wait...</span>
                        <span>➡️🚗➡️</span>
                    </div>
                    <div class='text-6xl'>🤖</div>
                </div>
                <div class='mt-6 bg-red-50 text-red-700 py-2 px-4 rounded text-center text-sm font-semibold w-full'>
                    Processing 1 query at a time...
                </div>
            </div>
        `,
        hasFormula: false
    },
    {
        title: "The Inference Engine School Bus 🚌",
        text: `
            <p class='text-lg'>An <strong>Inference Engine</strong> acts like a School Bus (Batching). Instead of driving one kid at a time, the bus waits a few seconds for all 10 kids to get on board, and then drives them all to school at the exact same time!</p>
            <div class='mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg'>
                <p class='text-yellow-900'><strong>Real-World Example 🍪:</strong><br/> You don't bake one single cookie at a time that would take all day! You put 12 cookies on a tray and bake them all at once. The engine grabs a bunch of questions and answers them simultaneously.</p>
            </div>
        `,
        visual: `
            <div class='flex flex-col w-full h-full justify-center'>
                <div class='flex justify-between items-center w-full px-2 overflow-hidden'>
                    <div class='text-3xl'>👨‍👩‍👧‍👦</div>
                    <div class='text-5xl bus-drive'>🚌💨</div>
                    <div class='text-6xl'>🤖</div>
                </div>
                <div class='mt-4 flex justify-center space-x-1 text-3xl'>
                    <span>🍪</span><span>🍪</span><span>🍪</span><span>🍪</span><span>🍪</span>
                </div>
                <div class='mt-6 bg-green-100 text-green-700 py-2 px-4 rounded text-center text-sm font-semibold w-full'>
                    Batching: Processing all simultaneously!
                </div>
            </div>
        `,
        hasFormula: false
    }
];

let currentStep = 0;

// DOM Elements
const titleEl = document.getElementById('step-title');
const descEl = document.getElementById('step-description');
const visualEl = document.getElementById('step-visual');
const formulaContainer = document.getElementById('step-formula-container');
const containerEl = document.getElementById('step-container');
const counterEl = document.getElementById('step-counter');
const progressDotsEl = document.getElementById('progress-dots');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');

function initializeDots() {
    progressDotsEl.innerHTML = '';
    steps.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `w-3 h-3 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-white' : 'bg-blue-400 opacity-50'}`;
        dot.id = `dot-${index}`;
        progressDotsEl.appendChild(dot);
    });
}

function updateDots() {
    steps.forEach((_, index) => {
        const dot = document.getElementById(`dot-${index}`);
        if (index === currentStep) {
            dot.className = 'w-3 h-3 rounded-full transition-colors duration-300 bg-white shadow-md transform scale-125';
        } else if (index < currentStep) {
            dot.className = 'w-3 h-3 rounded-full transition-colors duration-300 bg-blue-300 opacity-80';
        } else {
            dot.className = 'w-3 h-3 rounded-full transition-colors duration-300 bg-blue-900 opacity-40';
        }
    });
}

function renderStep() {
    const step = steps[currentStep];

    // Re-trigger animation
    containerEl.classList.remove('fade-enter-active');

    // Allow a tiny delay for CSS reflow to ensure animation runs smoothly
    setTimeout(() => {
        titleEl.innerHTML = step.title;
        descEl.innerHTML = step.text;
        visualEl.innerHTML = step.visual;

        // Handle Math Formula Rendering
        if (step.hasFormula && step.formula) {
            formulaContainer.classList.remove('hidden');
            katex.render(step.formula, formulaContainer, {
                displayMode: true,
                throwOnError: false
            });
        } else {
            formulaContainer.classList.add('hidden');
            formulaContainer.innerHTML = '';
        }

        // Render inline math inside the description if there is any ($x$, etc)
        renderMathInElement(descEl, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "$", right: "$", display: false }
            ],
            throwOnError: false
        });

        // Update UI state
        counterEl.innerText = `Step ${currentStep + 1} of ${steps.length}`;
        btnBack.disabled = currentStep === 0;
        btnNext.disabled = currentStep === steps.length - 1;

        if (currentStep === steps.length - 1) {
            btnNext.innerHTML = 'Finish <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>';
            btnNext.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            btnNext.classList.add('bg-green-600', 'hover:bg-green-700');
        } else {
            btnNext.innerHTML = 'Next <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
            btnNext.classList.remove('bg-green-600', 'hover:bg-green-700');
            btnNext.classList.add('bg-blue-600', 'hover:bg-blue-700');
        }

        updateDots();
        containerEl.classList.add('fade-enter-active');
    }, 50);
}

// Event Listeners
btnNext.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        renderStep();
    }
});

btnBack.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        renderStep();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentStep < steps.length - 1) {
        currentStep++;
        renderStep();
    } else if (e.key === 'ArrowLeft' && currentStep > 0) {
        currentStep--;
        renderStep();
    }
});

// Initialize application
initializeDots();
renderStep();