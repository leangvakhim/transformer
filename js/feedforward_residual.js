// Data for each step of the visualization
const steps = [
    {
        title: "Welcome to the Toy Factory! 🏭",
        visual: `
            <div class="w-full conveyor-belt text-5xl">
                <div class="moving-toys">🧸 🚂 🪁 🚙 🧩 🧸 🚂 🪁</div>
            </div>
            <div class="absolute bottom-2 w-full h-4 bg-slate-800 rounded"></div>
        `,
        text: "Imagine the Transformer is a big Toy Factory. The words you type into an AI (like 'The', 'dog', 'barks') are the toys moving down the conveyor belt. Let's see how they get processed!",
        formula: "" // No formula for intro
    },
    {
        title: "1. The Original Idea ✏️",
        visual: `<div class="text-8xl grayscale opacity-70">🐶</div>`,
        text: "Imagine you draw a beautiful, simple pencil outline of a dog. This is our starting word. It has a clear meaning and shape.",
        formula: "x \\quad \\text{(Original Input Vector)}"
    },
    {
        title: "2. The Crazy Coloring (Multi-Head Attention) 🎨",
        visual: `<div class="text-8xl relative">
                    🐶
                    <div class="absolute inset-0 bg-purple-500 opacity-60 mix-blend-overlay animate-pulse rounded-full"></div>
                    <div class="absolute inset-0 bg-green-500 opacity-50 mix-blend-color animate-ping rounded-full" style="animation-duration: 2s;"></div>
                    </div>`,
        text: "You pass the drawing to your friend to color in (Multi-Head Attention, where AI connects words). Sometimes they get carried away with dark purple and green crayons! You can barely tell it's a dog anymore. The original idea might get ruined by too much context.",
        formula: "\\text{SubLayer}(x) \\quad \\text{(New Context/Colors)}"
    },
    {
        title: "3. The Residual Connection (The Safe Copy) 🖨️",
        visual: `
            <div class="flex items-center gap-8 text-7xl">
                <div class="relative">
                    <span class="absolute -top-6 text-sm font-bold text-slate-500">Crazy Colors</span>
                    🎨🌪️
                </div>
                <div class="text-4xl text-indigo-500">➕</div>
                <div class="relative p-2 border-4 border-indigo-200 rounded-lg bg-white">
                    <span class="absolute -top-8 text-sm font-bold text-indigo-500 w-full text-center left-0">Safe Copy</span>
                    🐶
                </div>
            </div>
        `,
        text: "A <b>Residual Connection</b> is like making a safe photocopy of your pencil drawing <i>before</i> you give it to your crazy coloring friend. Your friend still does their crazy coloring, but we kept the safe outline!",
        formula: "x \\xrightarrow{\\text{skips the crazy coloring}} \\text{Add}"
    },
    {
        title: "4. Add & Norm (The Perfect Blend) ✨",
        visual: `<div class="text-8xl drop-shadow-2xl">🐕</div>`,
        text: "At the end ('Add'), you lay the beautiful colors over your safe photocopy. <br><br><b>The Result:</b> You get all the pretty new colors, but you never lose the original shape of the dog! This keeps the AI stable.",
        formula: "\\text{LayerNorm}(x + \\text{SubLayer}(x))"
    },
    {
        title: "5. The Messy Pile of Clues 🧩",
        visual: `<div class="text-7xl">📝 🧶 🔍 📉</div>`,
        text: "After the Attention part finds a bunch of clues (like noticing that 'bark' connects to 'dog'), all those clues are dumped into a big, messy pile.",
        formula: "z = \\text{LayerNorm}(x + \\text{Attention}(x))"
    },
    {
        title: "6. Feed Forward Network (The Quiet Thinking Room) 🕵️‍♂️",
        visual: `
            <div class="flex items-center justify-center w-full h-full bg-slate-800 text-white rounded-xl relative">
                <div class="absolute top-2 text-sm text-slate-400">Quiet Room</div>
                <div class="text-8xl animate-bounce">🕵️‍♂️</div>
                <div class="absolute right-10 text-4xl animate-pulse">💡</div>
            </div>
        `,
        text: "The <b>Feed Forward Network</b> is a smart detective taking that messy pile of clues into a quiet room. They don't look at new clues; they just sit down, process the notes they already have, and figure out exactly what it all means.",
        formula: "\\text{FFN}(z) = \\max(0, zW_1 + b_1)W_2 + b_2"
    },
    {
        title: "Putting It All Together! 🚀",
        visual: `
            <div class="flex flex-col items-center gap-2">
                <div class="flex gap-4 text-4xl">
                    <div class="bg-blue-100 p-2 rounded">🐶 Word</div>
                    <div>➡️</div>
                    <div class="bg-purple-100 p-2 rounded">🎨 Mix (Attention)</div>
                </div>
                <div class="flex gap-4 text-4xl">
                    <div class="bg-green-100 p-2 rounded text-sm text-center flex items-center justify-center h-12 w-32">+ Safe Copy 🖨️</div>
                    <div>➡️</div>
                    <div class="bg-slate-200 p-2 rounded">🕵️‍♂️ Think (FFN)</div>
                </div>
            </div>
        `,
        text: "1. Words enter.<br>2. AI mixes them to find patterns (Attention).<br>3. A safe copy skips the line so nothing is lost (Residual).<br>4. AI takes all those new patterns into a quiet room to think hard and polish (Feed Forward).<br><i>It does this over and over until it knows exactly how to answer!</i>",
        formula: "\\text{Output} = \\text{LayerNorm}(z + \\text{FFN}(z))"
    }
];

let currentStep = 0;

// DOM Elements
const titleEl = document.getElementById('step-title');
const textEl = document.getElementById('step-text');
const visualEl = document.getElementById('visual-area');
const formulaContainer = document.getElementById('formula-container');
const mathFormulaEl = document.getElementById('math-formula');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const contentContainer = document.getElementById('content-container');
const progressBar = document.getElementById('progress-bar');
const stepCounter = document.getElementById('step-counter');

function updateUI() {
    const step = steps[currentStep];

    // Trigger reflow for animation restart
    contentContainer.classList.remove('animate-fade-in');
    void contentContainer.offsetWidth;
    contentContainer.classList.add('animate-fade-in');

    // Update text and visuals
    titleEl.innerHTML = step.title;
    textEl.innerHTML = step.text;
    visualEl.innerHTML = step.visual;

    // Handle Math Formula using KaTeX
    if (step.formula) {
        formulaContainer.classList.remove('hidden');
        // Ensure KaTeX is loaded before rendering
        if (window.katex) {
            katex.render(step.formula, mathFormulaEl, {
                displayMode: true,
                throwOnError: false
            });
        } else {
            mathFormulaEl.innerText = "$$ " + step.formula + " $$";
        }
    } else {
        formulaContainer.classList.add('hidden');
    }

    // Update Buttons State
    btnBack.disabled = currentStep === 0;
    if (currentStep === steps.length - 1) {
        btnNext.innerText = "Finish 🎉";
        btnNext.disabled = true;
    } else {
        btnNext.innerText = "Next Step →";
        btnNext.disabled = false;
    }

    // Update Progress Bar
    const progressPercentage = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    stepCounter.innerText = `Step ${currentStep + 1} of ${steps.length}`;
}

// Event Listeners
btnNext.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateUI();
    }
});

btnBack.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateUI();
    }
});

// Initialize when window loads (ensures KaTeX has time to parse script tags)
window.onload = () => {
    updateUI();
};