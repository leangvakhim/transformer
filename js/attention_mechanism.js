// Data for the visualization steps
const steps = [
    {
        title: "1. The Input & The Problem",
        description: "Imagine the phrase <strong>\"bank of the river\"</strong>. The word \"bank\" has multiple meanings (a financial institution or land alongside a river). How does the AI know which one it is? It needs to look at the <em>surrounding words</em>.",
        render: () => `
            <div class="flex-1 flex flex-col items-center justify-center gap-8 step-container">
                <div class="flex gap-4 items-center flex-wrap justify-center">
                    <div class="px-6 py-4 rounded-xl border-2 border-indigo-500 bg-indigo-50 text-indigo-700 font-bold text-xl shadow-sm relative">
                        bank
                        <div class="absolute -top-3 -right-3 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full shadow">Focus</div>
                    </div>
                    <div class="px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium text-xl shadow-sm">of</div>
                    <div class="px-6 py-4 rounded-xl border border-gray-200 bg-white text-gray-600 font-medium text-xl shadow-sm">the</div>
                    <div class="px-6 py-4 rounded-xl border border-gray-200 bg-emerald-50 text-emerald-700 font-medium text-xl shadow-sm">river</div>
                </div>
                <div class="bg-blue-50 text-blue-800 p-4 rounded-lg max-w-2xl text-center text-sm border border-blue-100 mt-4">
                    In Self-Attention, every word looks at every other word in the sequence to gather context. Right now, let's see how <strong>"bank"</strong> gathers context from its neighbors.
                </div>
            </div>
        `
    },
    {
        title: "2. Creating Queries, Keys, and Values (Q, K, V)",
        description: "Every word is converted into three distinct vectors (lists of numbers). Think of a filing cabinet system:",
        render: () => `
            <div class="flex-1 flex flex-col gap-6 step-container h-full justify-center">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-amber-50 border border-amber-200 p-5 rounded-xl text-center">
                        <div class="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-sm">Q</div>
                        <h3 class="font-bold text-amber-800 mb-2">Query</h3>
                        <p class="text-sm text-amber-700 text-left">"What kind of context am I looking for?"<br><br>(E.g., "I am 'bank', I need words related to finance or nature.")</p>
                    </div>
                    <div class="bg-sky-50 border border-sky-200 p-5 rounded-xl text-center">
                        <div class="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-sm">K</div>
                        <h3 class="font-bold text-sky-800 mb-2">Key</h3>
                        <p class="text-sm text-sky-700 text-left">"What information do I contain?"<br><br>(E.g., "I am 'river', I contain information about water and nature.")</p>
                    </div>
                    <div class="bg-purple-50 border border-purple-200 p-5 rounded-xl text-center">
                        <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 shadow-sm">V</div>
                        <h3 class="font-bold text-purple-800 mb-2">Value</h3>
                        <p class="text-sm text-purple-700 text-left">"What is my actual underlying meaning?"<br><br>(The actual content that will be passed along if selected.)</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "3. Calculating Attention Scores",
        description: "We calculate how much \"bank\" should care about the other words. We do this by multiplying the <strong>Query (Q)</strong> of \"bank\" with the <strong>Keys (K)</strong> of all words (Dot Product).",
        render: () => `
            <div class="flex-1 flex flex-col gap-4 step-container items-center justify-center">
                <div class="w-full max-w-xl space-y-3">
                    <div class="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-lg shadow-sm">
                        <span class="font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Q (bank)</span>
                        <span class="text-gray-400">×</span>
                        <span class="font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded">K (bank)</span>
                        <div class="flex-1 border-b-2 border-dashed border-gray-200"></div>
                        <span class="font-mono font-bold text-gray-700">110</span>
                    </div>
                    <div class="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-lg shadow-sm opacity-60">
                        <span class="font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Q (bank)</span>
                        <span class="text-gray-400">×</span>
                        <span class="font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded">K (of)</span>
                        <div class="flex-1 border-b-2 border-dashed border-gray-200"></div>
                        <span class="font-mono font-bold text-gray-700">10</span>
                    </div>
                    <div class="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-lg shadow-sm opacity-60">
                        <span class="font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Q (bank)</span>
                        <span class="text-gray-400">×</span>
                        <span class="font-bold text-sky-600 bg-sky-50 px-2 py-1 rounded">K (the)</span>
                        <div class="flex-1 border-b-2 border-dashed border-gray-200"></div>
                        <span class="font-mono font-bold text-gray-700">5</span>
                    </div>
                    <div class="flex items-center gap-4 bg-emerald-50 border border-emerald-200 p-3 rounded-lg shadow-md transform scale-105 transition-transform">
                        <span class="font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">Q (bank)</span>
                        <span class="text-gray-400">×</span>
                        <span class="font-bold text-sky-600 bg-sky-100 px-2 py-1 rounded">K (river)</span>
                        <div class="flex-1 border-b-2 border-emerald-300"></div>
                        <span class="font-mono font-bold text-emerald-700 text-lg">150</span>
                        <span class="text-xs text-emerald-600 font-bold ml-2">High Match!</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "4. Softmax (Turning Scores into Weights)",
        description: "Raw scores can be huge or tiny. We pass them through a <strong>Softmax function</strong>. This converts the scores into percentages (0.0 to 1.0) that all add up to 100%.",
        render: () => `
            <div class="flex-1 flex flex-col gap-6 step-container items-center justify-center">
                <div class="w-full max-w-2xl bg-white border-2 border-gray-100 rounded-xl p-6 shadow-sm relative overflow-hidden">

                    <!-- Visualization Bars -->
                    <div class="space-y-4 relative z-10">
                        <div class="flex items-center gap-4">
                            <div class="w-16 font-medium text-gray-600 text-right">bank</div>
                            <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-300 w-[15%] rounded-full transition-all duration-1000"></div>
                            </div>
                            <div class="w-12 text-sm font-mono text-gray-500">15%</div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-16 font-medium text-gray-600 text-right">of</div>
                            <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-200 w-[2%] rounded-full transition-all duration-1000"></div>
                            </div>
                            <div class="w-12 text-sm font-mono text-gray-500">2%</div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-16 font-medium text-gray-600 text-right">the</div>
                            <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-100 w-[1%] rounded-full transition-all duration-1000"></div>
                            </div>
                            <div class="w-12 text-sm font-mono text-gray-500">1%</div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-16 font-bold text-emerald-600 text-right">river</div>
                            <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                <div class="h-full bg-emerald-500 w-[82%] rounded-full transition-all duration-1000 shadow-sm"></div>
                            </div>
                            <div class="w-12 text-sm font-mono font-bold text-emerald-600">82%</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "5. The Context Vector (Final Output)",
        description: "Finally, we multiply these percentages by the <strong>Values (V)</strong> of each word and add them all together. This creates a new, context-rich representation of the word \"bank\".",
        render: () => `
            <div class="flex-1 flex flex-col gap-6 step-container items-center justify-center">
                <div class="flex gap-4 items-center w-full max-w-3xl">

                    <!-- Weights * Values -->
                    <div class="flex flex-col gap-3 flex-1">
                        <div class="flex items-center justify-between bg-gray-50 p-2 rounded text-sm text-gray-500 border border-gray-100">
                            <span>0.15 × <span class="text-purple-600 font-bold bg-purple-50 px-1 rounded">V(bank)</span></span>
                        </div>
                        <div class="flex items-center justify-between bg-gray-50 p-2 rounded text-sm text-gray-500 border border-gray-100">
                            <span>0.02 × <span class="text-purple-600 font-bold bg-purple-50 px-1 rounded">V(of)</span></span>
                        </div>
                        <div class="flex items-center justify-between bg-emerald-50 p-2 rounded text-sm text-emerald-800 border-2 border-emerald-200 font-medium transform scale-105">
                            <span>0.82 × <span class="text-purple-600 font-bold bg-purple-100 px-1 rounded">V(river)</span></span>
                        </div>
                    </div>

                    <!-- Sum symbol -->
                    <div class="text-4xl text-gray-300 font-light">+</div>

                    <!-- Result -->
                    <div class="flex-1 bg-indigo-50 border-2 border-indigo-200 p-5 rounded-xl text-center shadow-md relative">
                        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">New "bank"</div>
                        <div class="mt-2 text-indigo-900 font-medium">
                            It now mathematically knows it is a <strong>water-related bank</strong>, not a financial one!
                        </div>
                    </div>

                </div>
            </div>
        `
    },
    {
        title: "6. The Math Equation",
        description: "Putting it all together, here is the official formula used in Large Language Models (like Transformers) to calculate Attention:",
        render: () => `
            <div class="flex-1 flex flex-col gap-6 step-container h-full">

                <!-- Equation Box -->
                <div class="bg-white border border-gray-200 shadow-sm rounded-xl p-8 flex justify-center items-center my-2">
                    <div class="text-2xl md:text-3xl text-gray-800 font-serif flex items-center gap-2">
                        <span>Attention(</span>
                        <span class="text-amber-600 font-bold font-sans">Q</span>,
                        <span class="text-sky-600 font-bold font-sans">K</span>,
                        <span class="text-purple-600 font-bold font-sans">V</span>
                        <span>) = softmax(</span>
                        <div class="math-frac text-xl md:text-2xl">
                            <div class="math-num">
                                <span class="text-amber-600 font-bold font-sans">Q</span><span class="text-sky-600 font-bold font-sans">K</span><sup class="text-sm font-sans text-gray-500">T</sup>
                            </div>
                            <div class="math-den">
                                &radic;<span class="text-gray-500 font-sans italic">d<sub>k</sub></span>
                            </div>
                        </div>
                        <span>)</span>
                        <span class="text-purple-600 font-bold font-sans ml-1">V</span>
                    </div>
                </div>

                <!-- Legend -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div class="flex gap-3 items-start bg-gray-50 p-3 rounded-lg">
                        <span class="text-amber-600 font-bold bg-amber-100 px-2 py-0.5 rounded shadow-sm text-sm">Q</span>
                        <p class="text-sm text-gray-600"><strong>Query matrix:</strong> The word currently looking for context.</p>
                    </div>
                    <div class="flex gap-3 items-start bg-gray-50 p-3 rounded-lg">
                        <span class="text-sky-600 font-bold bg-sky-100 px-2 py-0.5 rounded shadow-sm text-sm">K<sup>T</sup></span>
                        <p class="text-sm text-gray-600"><strong>Keys (Transposed):</strong> What other words offer. We multiply Q by K to get raw scores.</p>
                    </div>
                    <div class="flex gap-3 items-start bg-gray-50 p-3 rounded-lg">
                        <span class="text-gray-500 font-bold italic bg-gray-200 px-2 py-0.5 rounded shadow-sm text-sm">&radic;d<sub>k</sub></span>
                        <p class="text-sm text-gray-600"><strong>Scaling Factor:</strong> Divides the scores so they don't get too massive, preventing softmax from returning extreme values.</p>
                    </div>
                    <div class="flex gap-3 items-start bg-gray-50 p-3 rounded-lg">
                        <span class="text-purple-600 font-bold bg-purple-100 px-2 py-0.5 rounded shadow-sm text-sm">V</span>
                        <p class="text-sm text-gray-600"><strong>Value matrix:</strong> The actual meanings. Multiplied by the softmax percentages to get the final output.</p>
                    </div>
                </div>
            </div>
        `
    }
];

let currentStep = 0;

// DOM Elements
const contentArea = document.getElementById('content-area');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const stepCounter = document.getElementById('step-counter');
const progressBar = document.getElementById('progress-bar');

function updateUI() {
    const step = steps[currentStep];

    // Build Main Content
    let html = `
        <div class="mb-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">${step.title}</h2>
            <p class="text-gray-600 leading-relaxed text-lg">${step.description}</p>
        </div>
        ${step.render()}
    `;
    contentArea.innerHTML = html;

    // Update Progress Bar
    let progressHtml = '';
    for (let i = 0; i < steps.length; i++) {
        if (i <= currentStep) {
            progressHtml += `<div class="flex-1 bg-indigo-500 border-r border-indigo-600 last:border-0 transition-all duration-300"></div>`;
        } else {
            progressHtml += `<div class="flex-1 bg-gray-100 border-r border-gray-200 last:border-0 transition-all duration-300"></div>`;
        }
    }
    progressBar.innerHTML = progressHtml;

    // Update Counters & Buttons
    stepCounter.textContent = `Step ${currentStep + 1} of ${steps.length}`;
    btnPrev.disabled = currentStep === 0;
    btnNext.disabled = currentStep === steps.length - 1;

    if (currentStep === steps.length - 1) {
        btnNext.innerHTML = "Finish";
        btnNext.classList.replace('bg-indigo-600', 'bg-emerald-600');
        btnNext.classList.replace('hover:bg-indigo-700', 'hover:bg-emerald-700');
    } else {
        btnNext.innerHTML = "Next Step &rarr;";
        btnNext.classList.replace('bg-emerald-600', 'bg-indigo-600');
        btnNext.classList.replace('hover:bg-emerald-700', 'hover:bg-indigo-700');
    }
}

// Event Listeners
btnNext.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateUI();
    }
});

btnPrev.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateUI();
    }
});

// Initialize
updateUI();