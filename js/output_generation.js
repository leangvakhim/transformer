// Define the content for each step
const steps = [
    {
        title: "The Guessing Game",
        text: `
            <p class="mb-4">Imagine the computer is a <strong>Robot Detective</strong> playing a guessing game. The robot's job is to guess the next word in a sentence.</p>
            <p class="mb-4 text-xl text-center font-bold text-indigo-700 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                "The happy dog <span class="text-slate-400 border-b-2 border-dashed border-slate-400">???</span>"
            </p>
            <p>Let's look at the three steps the robot uses to guess the missing word!</p>
        `,
        visual: `
            <div class="flex justify-center items-center h-40 mt-8 gap-6 text-6xl">
                <div class="animate-bounce">🤖</div>
                <div class="text-4xl text-slate-300">➜</div>
                <div>🔍</div>
            </div>
        `,
        math: null
    },
    {
        title: "1. The Bag of Clues (Output Vector)",
        text: `
            <p class="mb-4">Before this step, the robot read the beginning of the sentence ("The happy dog") and collected a bunch of secret clues into its backpack.</p>
            <p class="mb-4">This backpack is called a <strong>Vector</strong>. The clues tell the robot things like: <em>"The next word should be an action word,"</em> and <em>"Dogs usually do this outside."</em></p>
        `,
        visual: `
            <div class="mt-6 flex flex-col items-center">
                <div class="text-5xl mb-4">🎒</div>
                <div class="flex flex-wrap justify-center gap-2 mb-4">
                    <div class="bg-blue-100 border border-blue-300 text-blue-800 font-mono px-3 py-2 rounded-md shadow-sm">1.82</div>
                    <div class="bg-blue-100 border border-blue-300 text-blue-800 font-mono px-3 py-2 rounded-md shadow-sm">-0.55</div>
                    <div class="bg-blue-100 border border-blue-300 text-blue-800 font-mono px-3 py-2 rounded-md shadow-sm">2.41</div>
                    <div class="bg-blue-100 border border-blue-300 text-blue-800 font-mono px-3 py-2 rounded-md shadow-sm">...</div>
                </div>
                <p class="text-sm text-slate-500 italic">A vector is just a list of numbers representing clues!</p>
            </div>
        `,
        math: "v = \\begin{bmatrix} 1.82 \\\\ -0.55 \\\\ 2.41 \\\\ \\vdots \\end{bmatrix} \\in \\mathbb{R}^d"
    },
    {
        title: "2. The Giant Scoreboard (Linear Layer)",
        text: `
            <p class="mb-4">Next, the robot looks at a giant scoreboard containing every single word in the entire world! It uses its clues to give <strong>points (logits)</strong> to every word.</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li>Words like <em>"apple"</em> get negative points (makes no sense).</li>
                <li>Words like <em>"sleeps"</em> get a few points.</li>
                <li>The word <em>"jumps"</em> gets a TON of points because happy dogs love to jump!</li>
            </ul>
        `,
        visual: `
            <div class="mt-6 bg-slate-800 rounded-xl p-4 text-white font-mono text-sm sm:text-base shadow-inner">
                <div class="flex justify-between py-1 border-b border-slate-600"><span class="text-red-400">apple</span> <span>-2.1</span></div>
                <div class="flex justify-between py-1 border-b border-slate-600"><span class="text-red-400">car</span> <span>-1.5</span></div>
                <div class="flex justify-between py-1 border-b border-slate-600"><span class="text-yellow-400">sleeps</span> <span>+1.2</span></div>
                <div class="flex justify-between py-1 border-b border-slate-600"><span class="text-green-400">runs</span> <span>+3.8</span></div>
                <div class="flex justify-between py-1 text-xl font-bold bg-slate-700 rounded px-2 mt-1"><span class="text-green-300">jumps</span> <span>+8.5</span></div>
            </div>
        `,
        math: "\\text{Scores (Logits)} = W \\cdot v + b"
    },
    {
        title: "3. The Magic Math Machine (Softmax)",
        text: `
            <p class="mb-4">The robot has a bunch of points, but points can be confusing. So, it puts all the scores into a magic machine called <strong>Softmax</strong>.</p>
            <p class="mb-4">Softmax turns those confusing points into a simple chance (or percentage) out of 100%. It's like a weather forecast for words!</p>
        `,
        visual: `
            <div class="mt-6 space-y-3">
                <div>
                    <div class="flex justify-between mb-1 text-sm font-medium"><span class="w-16">jumps</span> <span>85%</span></div>
                    <div class="w-full bg-slate-200 rounded-full h-4"><div class="bg-green-500 h-4 rounded-full" style="width: 85%"></div></div>
                </div>
                <div>
                    <div class="flex justify-between mb-1 text-sm font-medium"><span class="w-16">runs</span> <span>10%</span></div>
                    <div class="w-full bg-slate-200 rounded-full h-4"><div class="bg-blue-400 h-4 rounded-full" style="width: 10%"></div></div>
                </div>
                <div>
                    <div class="flex justify-between mb-1 text-sm font-medium"><span class="w-16">sleeps</span> <span>2%</span></div>
                    <div class="w-full bg-slate-200 rounded-full h-4"><div class="bg-yellow-400 h-4 rounded-full" style="width: 2%"></div></div>
                </div>
                <div>
                    <div class="flex justify-between mb-1 text-sm font-medium"><span class="w-16 text-slate-400">apple</span> <span class="text-slate-400">~0%</span></div>
                    <div class="w-full bg-slate-200 rounded-full h-4"><div class="bg-slate-400 h-4 rounded-full" style="width: 0.1%"></div></div>
                </div>
            </div>
        `,
        math: "\\text{Softmax}(z_i) = \\frac{e^{z_i}}{\\sum_{j} e^{z_j}}"
    },
    {
        title: "The Grand Finale!",
        text: `
            <p class="mb-4">Just like picking the fastest runner in a race, the robot looks at the percentages and picks the word with the highest score.</p>
            <p class="mb-6">Since <em>"jumps"</em> won with 85%, the robot shouts out "jumps!" and finishes the sentence.</p>
            <div class="text-center p-6 bg-green-50 border-2 border-green-200 rounded-2xl shadow-sm transform hover:scale-105 transition-transform">
                <div class="text-4xl mb-3">🎉 🐕 🎉</div>
                <h2 class="text-2xl font-bold text-slate-700">"The happy dog <span class="text-green-600 underline decoration-wavy">jumps</span>."</h2>
            </div>
        `,
        visual: ``,
        math: "\\text{Output} = \\text{argmax}(\\text{Probabilities})"
    }
];

let currentStep = 0;

const contentArea = document.getElementById('content-area');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const stepIndicators = document.getElementById('step-indicators');

function init() {
    // Create dots
    steps.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `w-3 h-3 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-indigo-600' : 'bg-slate-300'}`;
        dot.id = `dot-${index}`;
        stepIndicators.appendChild(dot);
    });

    // Event Listeners
    btnBack.addEventListener('click', () => changeStep(-1));
    btnNext.addEventListener('click', () => changeStep(1));

    // Initial render
    renderStep();
}

function changeStep(direction) {
    if (direction === 1 && currentStep < steps.length - 1) {
        currentStep++;
    } else if (direction === -1 && currentStep > 0) {
        currentStep--;
    }
    renderStep();
}

function renderStep() {
    const step = steps[currentStep];

    // Build content HTML
    let html = `
        <div class="fade-in" id="step-container-${currentStep}">
            <h2 class="text-2xl font-bold text-indigo-900 mb-4">${step.title}</h2>
            <div class="text-lg text-slate-700 leading-relaxed mb-6">
                ${step.text}
            </div>

            ${step.math ? `
                <div class="math-container shadow-inner">
                    <span id="math-element-${currentStep}">$$${step.math}$$</span>
                </div>
            ` : ''}

            <div class="mt-4">
                ${step.visual}
            </div>
        </div>
    `;

    contentArea.innerHTML = html;

    // Render math if exists
    if (step.math) {
        const mathEl = document.getElementById(`math-element-${currentStep}`);
        // Use KaTeX to render the string directly into the element
        katex.render(step.math, mathEl, {
            throwOnError: false,
            displayMode: true
        });
    }

    // Update Buttons
    btnBack.disabled = currentStep === 0;
    if (currentStep === steps.length - 1) {
        btnNext.disabled = true;
        btnNext.innerHTML = "Finish 🏆";
    } else {
        btnNext.disabled = false;
        btnNext.innerHTML = "Next &rarr;";
    }

    // Update Dots
    steps.forEach((_, index) => {
        const dot = document.getElementById(`dot-${index}`);
        if (index === currentStep) {
            dot.classList.replace('bg-slate-300', 'bg-indigo-600');
            dot.classList.replace('bg-indigo-200', 'bg-indigo-600');
        } else if (index < currentStep) {
            dot.classList.replace('bg-slate-300', 'bg-indigo-200');
            dot.classList.replace('bg-indigo-600', 'bg-indigo-200');
        } else {
            dot.classList.replace('bg-indigo-600', 'bg-slate-300');
            dot.classList.replace('bg-indigo-200', 'bg-slate-300');
        }
    });
}

// Initialize the app on load
window.addEventListener('DOMContentLoaded', init);