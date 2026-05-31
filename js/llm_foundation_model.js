const stepsData = [
    {
        title: "The Lego Baseplate Analogy",
        visual: `
            <div class="grid grid-cols-4 gap-2 p-4 bg-yellow-400 rounded-lg shadow-inner w-48 h-48 transform rotate-x-12 rotate-z-12">
                ${Array(16).fill('<div class="w-8 h-8 rounded-full bg-yellow-500 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)]"></div>').join('')}
            </div>
        `,
        content: `
            <p class="text-lg text-slate-700 mb-4 leading-relaxed">Imagine you are building a giant, amazing Lego castle. Before you can build the tall towers or the cool drawbridge, you need a large, strong flat Lego baseplate to build everything on top of.</p>
            <p class="text-lg text-slate-700 leading-relaxed">In the world of Artificial Intelligence, a <strong>Foundation Model</strong> (also called a Base LLM) is exactly like that Lego baseplate. It’s the essential starting point for all modern AI assistants.</p>
        `
    },
    {
        title: "The Giant Library",
        visual: `
            <div class="flex items-center justify-center space-x-8 w-full">
                <div class="flex flex-col space-y-2 relative">
                    <div class="w-16 h-4 bg-slate-400 rounded-t-sm"></div>
                    <div class="w-16 h-4 bg-slate-400"></div>
                    <div class="w-16 h-4 bg-slate-400"></div>
                    <div class="w-16 h-4 bg-slate-400 rounded-b-sm"></div>
                    <span class="absolute -bottom-6 text-xs font-bold text-slate-500 w-full text-center">Terabytes of Text</span>
                </div>

                <div class="text-slate-300 text-4xl animate-pulse">&rarr;</div>

                <div class="w-24 h-24 bg-blue-100 rounded-full border-4 border-blue-500 flex items-center justify-center shadow-lg relative">
                    <svg class="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    <span class="absolute -bottom-6 text-xs font-bold text-blue-600 w-full text-center">Robot Brain</span>
                </div>
            </div>
        `,
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">Feeding the Model</h3>
            <p class="text-slate-700 mb-4 leading-relaxed">Imagine a robot that wants to learn how humans talk. To teach it, you give it millions of books, websites, articles, and stories (a stack of hard drives).</p>
            <p class="text-slate-700 leading-relaxed">It’s basically giving the robot the biggest library in the whole world to read so it can learn all the words we use and how sentences fit together.</p>
        `
    },
    {
        title: "The 'Guess the Next Word' Game",
        visual: `
            <div class="flex flex-col items-center">
                <div class="mb-2">
                    <span class="typing-box">Twinkle</span>
                    <span class="typing-box">twinkle</span>
                    <span class="typing-box">little</span>
                    <span class="typing-box guessing-box">?</span>
                </div>
                <div class="text-slate-400 text-sm mt-4 italic">Next Token Predictor in action...</div>
            </div>
        `,
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">Next Token Prediction</h3>
            <p class="text-slate-700 mb-3 leading-relaxed">As the robot reads all those books, it plays a game called "Guess the Next Word" (a <strong>Next Token Predictor</strong>).</p>
            <p class="text-slate-700 mb-3 leading-relaxed">Let's play: <em>"It's raining cats and..."</em> Your brain guessed <strong>dogs</strong> because you've heard it before.</p>
            <p class="text-slate-700 leading-relaxed">The Base LLM does exactly this! Because it read the whole internet, it is a world champion at guessing the next word.</p>
        `
    },
    {
        title: "The Math Behind the Magic",
        visual: `
            <div class="w-full text-center overflow-x-auto p-4">
                <div id="math-formula-1" class="text-2xl md:text-3xl text-slate-800 mb-4">
                    $$P(w_t | w_1, w_2, \\dots, w_{t-1})$$
                </div>
                <div class="text-sm text-slate-500 bg-white p-3 rounded-lg border border-slate-200 inline-block shadow-sm">
                    <span class="text-blue-600 font-bold">$w_t$</span> = Next Word &nbsp;&nbsp;|&nbsp;&nbsp;
                    <span class="text-green-600 font-bold">$w_1 \\dots w_{t-1}$</span> = Previous Words
                </div>
            </div>
        `,
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">Calculating Probabilities</h3>
            <p class="text-slate-700 mb-3 leading-relaxed">Underneath the hood, it's all statistics. The formula above represents the core task: finding the Probability ($P$) of a specific next word ($w_t$), given all the words that came before it in the sentence.</p>
            <p class="text-slate-700 leading-relaxed">The model calculates this score for <em>every possible word</em> in its vocabulary and usually selects the one with the highest probability to output next.</p>
        `
    },
    {
        title: "Why is it just a 'Foundation'?",
        visual: `
            <div class="w-full max-w-sm flex flex-col space-y-4">
                <div class="self-end bg-blue-100 text-blue-800 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm border border-blue-200">
                    "Tell me a joke..."
                </div>
                <div class="self-start bg-slate-200 text-slate-700 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border border-slate-300 relative">
                    "...about a chicken that crossed the road."
                    <div class="absolute -top-3 -right-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full border border-red-200 font-bold transform rotate-12">Just continuing!</div>
                </div>
            </div>
        `,
        content: `
            <h3 class="text-xl font-bold text-slate-800 mb-3">The Limitation</h3>
            <p class="text-slate-700 mb-3 leading-relaxed">Right now, this giant robot brain <strong>only knows how to guess the next word</strong>. It knows a ton about language, but it doesn't actually know how to follow your instructions or help with homework.</p>
            <p class="text-slate-700 leading-relaxed">If you said "tell me a joke," it might just guess the next word and say "about a chicken" instead of actually telling a funny story. To make it a helpful assistant, engineers have to take this Baseplate and teach it manners (Step 2: Fine-Tuning!).</p>
        `
    }
];

let currentStep = 0;

// DOM Elements
const visualContainer = document.getElementById('visual-container');
const textContainer = document.getElementById('text-container');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const stepIndicator = document.getElementById('step-indicator');
const dotsContainer = document.getElementById('dots-container');

// Initialize dots
function initDots() {
    dotsContainer.innerHTML = '';
    stepsData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `w-2 h-2 rounded-full transition-colors duration-300 ${index === currentStep ? 'bg-indigo-600' : 'bg-slate-300'}`;
        dotsContainer.appendChild(dot);
    });
}

// Render specific step
function renderStep(index) {
    const step = stepsData[index];

    // Add fade animation class
    visualContainer.classList.remove('fade-in');
    textContainer.classList.remove('fade-in');

    // Trigger reflow to restart animation
    void visualContainer.offsetWidth;

    visualContainer.classList.add('fade-in');
    textContainer.classList.add('fade-in');

    // Inject Content
    visualContainer.innerHTML = step.visual;

    // If it's the title step, don't show the h3 title again to save space,
    // but for others, we have embedded the h3 in the content block.
    textContainer.innerHTML = step.content;

    // Render LaTeX Math if KaTeX is loaded
    if (window.renderMathInElement) {
        renderMathInElement(visualContainer, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
        renderMathInElement(textContainer, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
    }

    // Update Controls
    btnBack.disabled = index === 0;

    if (index === stepsData.length - 1) {
        btnNext.innerHTML = "Finish &#10003;";
        btnNext.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
        btnNext.classList.add('bg-green-600', 'hover:bg-green-700');
    } else {
        btnNext.innerHTML = "Next &rarr;";
        btnNext.classList.remove('bg-green-600', 'hover:bg-green-700');
        btnNext.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
    }

    stepIndicator.textContent = `Step ${index + 1} / ${stepsData.length}`;

    // Update dots
    Array.from(dotsContainer.children).forEach((dot, i) => {
        dot.className = `w-2 h-2 rounded-full transition-colors duration-300 ${i === index ? 'bg-indigo-600' : 'bg-slate-300'}`;
    });
}

// Event Listeners
btnNext.addEventListener('click', () => {
    if (currentStep < stepsData.length - 1) {
        currentStep++;
        renderStep(currentStep);
    } else {
        // Optional action on finish
        // alert("You've completed Step 1! The next phase would be Fine-Tuning.");
    }
});

btnBack.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        renderStep(currentStep);
    }
});

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    initDots();
    renderStep(currentStep);

    // Re-render math once fonts/scripts are fully loaded just in case
    setTimeout(() => {
        if (window.renderMathInElement) {
            renderMathInElement(document.body, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ]
            });
        }
    }, 500);
});