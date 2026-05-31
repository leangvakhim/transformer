// Data containing all the steps, texts, and formulas based on your prompt.
const steps = [
    {
        title: "1. The Problem with Context",
        desc: `
            <p>Explain Attention like you're 7 years old: Imagine you are reading a story about a bat.</p>
            <p>If you see these two sentences, how do you know which "bat" is the animal and which is the sports toy?</p>
            <p>You naturally look at the other words around it! The Attention Mechanism teaches an AI to do exactly that by looking at all the words at the same time.</p>
        `,
        visual: `
            <div class="space-y-4">
                <div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-lg">
                    "The <span class="text-blue-600 font-bold">superhero flew</span> through the <span class="text-blue-600 font-bold">night</span> like a <strong>bat</strong>." <br>
                    <span class="text-sm text-blue-500">➔ Ah, the animal!</span>
                </div>
                <div class="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg text-lg">
                    "He hit the <span class="text-orange-600 font-bold">baseball</span> with a <span class="text-orange-600 font-bold">wooden</span> <strong>bat</strong>." <br>
                    <span class="text-sm text-orange-500">➔ Ah, the toy!</span>
                </div>
            </div>
        `
    },
    {
        title: "2. The Three Nametags (Q, K, V)",
        desc: `
            <p>To figure out context, the AI gives every word three special nametags:</p>
            <ul class="list-disc pl-6 space-y-2">
                <li><strong>The Query (Q):</strong> What the word is <em>asking</em>. (e.g., "bank" asks: Am I money or water?)</li>
                <li><strong>The Key (K):</strong> What the word is <em>answering</em>. (e.g., "river" says: I am about water!)</li>
                <li><strong>The Value (V):</strong> The actual deep <em>meaning</em> of the word.</li>
            </ul>
            <p>When the Query of "bank" matches perfectly with the Key of "river", they give each other a high-five. That high-five is the <strong>Attention Score</strong>.</p>
        `,
        visual: `
            <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div class="bg-white border-2 border-indigo-200 p-4 rounded-xl text-center shadow-sm w-full md:w-1/3">
                    <div class="w-10 h-10 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-xl">Q</div>
                    <h3 class="font-bold">Bank</h3>
                    <p class="text-sm text-slate-500">"Am I money or water?"</p>
                </div>
                <div class="text-indigo-400 font-bold text-2xl">➔ MATCH ➔</div>
                <div class="bg-white border-2 border-teal-200 p-4 rounded-xl text-center shadow-sm w-full md:w-1/3">
                    <div class="w-10 h-10 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-2 font-bold text-xl">K</div>
                    <h3 class="font-bold">River</h3>
                    <p class="text-sm text-slate-500">"I am about water!"</p>
                </div>
            </div>
        `
    },
    {
        title: "3. The Math Behind the Magic",
        desc: `
            <p>While the analogy is simple, AI doesn't read English; it reads lists of numbers called <em>vectors</em>.</p>
            <p>Here is the famous formula for <strong>Scaled Dot-Product Attention</strong>:</p>
        `,
        visual: `
            <div class="text-center bg-white p-6 rounded-xl border border-indigo-100 shadow-sm text-xl overflow-x-auto">
                $$Attention(Q, K, V) = softmax\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$
            </div>
            <p class="text-sm text-center mt-4 text-slate-500">We will break down what happens in this equation step by step.</p>
        `
    },
    {
        title: "4. The Dot Product (The High-Five)",
        desc: `
            <p><strong>$Q \\times K^T$ (The Dot Product):</strong> This is the math version of the "high-five."</p>
            <p>To find out how similar two vectors are, we multiply them. If the vectors point in the same direction (words are related, like "bank" and "river"), the resulting number is very large.</p>
            <p><strong>$\\sqrt{d_k}$ (Scaling):</strong> If vectors are long, numbers get too massive. We divide by a scaling factor so the AI doesn't get overwhelmed.</p>
        `,
        visual: `
            <div class="flex items-center justify-center gap-6 bg-slate-100 p-8 rounded-xl">
                <div class="text-xl font-semibold">
                    $Q(\\text{bank}) \\times K(\\text{river})$
                </div>
                <div class="text-3xl font-bold text-emerald-500">
                    = 150
                </div>
            </div>
        `
    },
    {
        title: "5. Softmax (Making it a Percentage)",
        desc: `
            <p><strong>$softmax$:</strong> We take all those score numbers and run them through a Softmax function.</p>
            <p>This turns the raw scores into percentages that all add up to 100%. So, "river" might get 80% of the attention, "bank" gets 15%, and other tiny words get the rest.</p>
        `,
        visual: `
            <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 class="font-bold text-slate-700 mb-4 text-center">Attention given by "bank"</h4>

                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between text-sm mb-1">
                            <span class="font-bold text-teal-700">river</span>
                            <span class="font-bold">80%</span>
                        </div>
                        <div class="w-full bg-slate-100 rounded-full h-4">
                            <div class="bg-teal-500 h-4 rounded-full" style="width: 80%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between text-sm mb-1">
                            <span class="font-bold text-indigo-700">bank</span>
                            <span class="font-bold">15%</span>
                        </div>
                        <div class="w-full bg-slate-100 rounded-full h-4">
                            <div class="bg-indigo-400 h-4 rounded-full" style="width: 15%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between text-sm mb-1">
                            <span class="text-slate-500">the / of</span>
                            <span class="font-bold">5%</span>
                        </div>
                        <div class="w-full bg-slate-100 rounded-full h-4">
                            <div class="bg-slate-300 h-4 rounded-full" style="width: 5%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "6. Words are Lists of Numbers (Values)",
        desc: `
            <p>To an AI, a word is a list of real numbers representing concepts. Let's pretend our AI only tracks three concepts: <strong>[Nature, Money, Building]</strong>.</p>
            <p>Here is what the dictionary meaning (its Value or $V$) might look like for our words (scored out of 1.0):</p>
        `,
        visual: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-teal-50 border border-teal-200 p-5 rounded-xl">
                    <h4 class="font-bold text-teal-800 text-lg border-b border-teal-200 pb-2 mb-3">Value of "river" ($V_{\\text{river}}$)</h4>
                    <p class="text-sm text-teal-700 mb-2">High in Nature, zero in Money, low in Building.</p>
                    <div class="text-center font-mono font-bold text-xl mt-4">
                        $$V_{\\text{river}} = [0.9, 0.0, 0.1]$$
                    </div>
                </div>
                <div class="bg-indigo-50 border border-indigo-200 p-5 rounded-xl">
                    <h4 class="font-bold text-indigo-800 text-lg border-b border-indigo-200 pb-2 mb-3">Value of "bank" ($V_{\\text{bank}}$)</h4>
                    <p class="text-sm text-indigo-700 mb-2">A bit of Nature, high in Money, high in Building.</p>
                    <div class="text-center font-mono font-bold text-xl mt-4">
                        $$V_{\\text{bank}} = [0.4, 0.9, 0.8]$$
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "7. Mixing the Meanings (Weighted Sum)",
        desc: `
            <p><strong>$\\times V$ (Blending):</strong> Finally, we multiply our Softmax percentages by the Values ($V$).</p>
            <p>We take 80% of the meaning of "river" and 15% of the meaning of "bank". We do this through basic multiplication.</p>
        `,
        visual: `
            <div class="space-y-4">
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <h4 class="font-bold text-slate-700 mb-2 text-sm uppercase">Step A: Take 80% of "river"</h4>
                    <div class="overflow-x-auto">
                        $$0.80 \\times [0.9, 0.0, 0.1] = [0.72, 0.0, 0.08]$$
                    </div>
                </div>
                <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <h4 class="font-bold text-slate-700 mb-2 text-sm uppercase">Step B: Take 15% of "bank"</h4>
                    <div class="overflow-x-auto">
                        $$0.15 \\times [0.4, 0.9, 0.8] = [0.06, 0.135, 0.12]$$
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "8. Why Do We Add? (Mixing Paint)",
        desc: `
            <p>To understand why we add the numbers together, think of it like mixing paint. Imagine the AI is trying to paint a picture of the word "bank".</p>
            <ul class="list-disc pl-6 space-y-2 mb-4 mt-2">
                <li>It has a tube of green paint labeled <strong>"River"</strong> (Nature).</li>
                <li>It has a tube of yellow paint labeled <strong>"Bank"</strong> (Money).</li>
            </ul>
            <p>The Attention percentages tell the AI exactly how much of each paint to squeeze onto the palette: <em>"Give me a huge squeeze of the River green, and a tiny drop of the Bank yellow."</em></p>
            <p>But sitting on the palette, they are still two separate colors. The AI needs one single color to represent the word "bank" in this specific sentence.</p>
        `,
        visual: `
            <div class="flex flex-col sm:flex-row gap-6 items-center justify-center bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div class="flex flex-col items-center">
                    <div class="w-16 h-16 rounded-full bg-teal-500 border-4 border-teal-200 shadow-md mb-2"></div>
                    <span class="font-bold text-teal-700">80% River (Green)</span>
                </div>
                <div class="text-2xl text-slate-400 font-bold hidden sm:block">+</div>
                <div class="flex flex-col items-center">
                    <div class="w-10 h-10 rounded-full bg-yellow-400 border-4 border-yellow-200 shadow-md mb-2"></div>
                    <span class="font-bold text-yellow-600">15% Bank (Yellow)</span>
                </div>
                <div class="text-2xl text-slate-400 font-bold hidden sm:block">➔</div>
                <div class="w-24 h-24 rounded-full border-4 border-slate-300 shadow-inner flex flex-wrap content-center justify-center p-2 bg-slate-50 relative">
                    <div class="w-12 h-12 bg-teal-500 rounded-full absolute top-2 left-2 opacity-80 shadow-sm"></div>
                    <div class="w-8 h-8 bg-yellow-400 rounded-full absolute bottom-4 right-3 opacity-80 shadow-sm"></div>
                    <span class="z-10 text-xs font-bold text-slate-700 bg-white/90 px-2 py-1 rounded shadow-sm">Palette<br>(Unmixed)</span>
                </div>
            </div>
        `
    },
    {
        title: "9. Addition is the Mixing Stick",
        desc: `
            <p>In the math of AI, <strong>Addition is the mixing stick</strong>. When we add the vectors together, we are taking those separate ingredients and swirling them into one single bowl.</p>
            <p>We take the <span class="font-bold text-teal-600">0.72 Nature from the river</span> and add it to the <span class="font-bold text-yellow-600">0.06 Nature from the bank</span> to get a total of <strong>0.78 Nature</strong>.</p>
            <p>If it did not add them together, the AI would just have a confusing list of separate words. Addition allows the AI to compress the meaning of the whole sentence into one single, highly specific mathematical concept!</p>
        `,
        visual: `
            <div class="space-y-6">
                <div class="text-center font-mono text-lg bg-slate-100 p-4 rounded-lg overflow-x-auto shadow-inner border border-slate-200">
                    $$[0.72 + 0.06,\\; 0.0 + 0.135,\\; 0.08 + 0.12]$$
                </div>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <div class="text-2xl text-slate-400 font-bold hidden sm:block">➔</div>
                    <div class="block sm:hidden text-2xl text-slate-400 font-bold">⬇</div>
                    <div class="flex flex-col items-center bg-gradient-to-br from-teal-400 to-yellow-300 p-6 rounded-3xl shadow-lg border-4 border-white">
                        <span class="font-bold text-slate-800 bg-white/90 px-3 py-1 rounded-md mb-2 shadow-sm text-sm uppercase tracking-wider">Mixed Concept</span>
                        <div class="font-mono font-bold text-slate-900 bg-white/90 px-3 py-2 rounded-lg shadow-sm">
                            [0.78, 0.135, 0.20]
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "10. The Aha! Moment",
        desc: `
            <p>Look closely at the shift! Before this math happened, the word "bank" looked like this: $[0.4, 0.9, 0.8]$. It was highly focused on Money (0.9).</p>
            <p>But after the Attention Mechanism mixed in the meaning of "river", the new version of "bank" is very high in Nature (0.78) and very low in Money (0.135).</p>
            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mt-6">
                <p class="font-bold text-indigo-800 text-lg">By adding them together, the AI created a brand new, custom color—a specific shade of green-yellow that perfectly represents the idea of a "river bank" in that exact sentence.</p>
            </div>
        `,
        visual: `
            <div class="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-around items-center">
                <div class="text-center mb-4 md:mb-0">
                    <h4 class="text-indigo-200 text-sm font-bold uppercase mb-2">Original "Bank"</h4>
                    <div class="font-mono text-lg">[0.4, <span class="text-yellow-300 font-bold">0.9</span>, 0.8]</div>
                    <div class="text-xs text-indigo-300 mt-1">High Money</div>
                </div>

                <div class="hidden md:block text-2xl">➔</div>
                <div class="block md:hidden text-2xl my-2">⬇</div>

                <div class="text-center">
                    <h4 class="text-indigo-200 text-sm font-bold uppercase mb-2">Context-Aware "Bank"</h4>
                    <div class="font-mono text-lg">[<span class="text-green-300 font-bold">0.78</span>, 0.135, 0.20]</div>
                    <div class="text-xs text-indigo-300 mt-1">High Nature!</div>
                </div>
            </div>
        `
    }
];

let currentStep = 0;

// DOM Elements
const titleEl = document.getElementById('step-title');
const descEl = document.getElementById('step-desc');
const visualEl = document.getElementById('visual-box');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const counterEl = document.getElementById('step-counter');
const progressBar = document.getElementById('progress-bar');
const contentArea = document.getElementById('content-area');

// Function to update the UI based on current step
function updateUI() {
    // Re-trigger animation
    contentArea.classList.remove('slide-enter');
    void contentArea.offsetWidth; // Trigger reflow
    contentArea.classList.add('slide-enter');

    const stepData = steps[currentStep];

    // Update content
    titleEl.innerHTML = stepData.title;
    descEl.innerHTML = stepData.desc;
    visualEl.innerHTML = stepData.visual;

    // Update Buttons and Counter
    counterEl.innerText = `Step ${currentStep + 1} of ${steps.length}`;
    btnBack.disabled = currentStep === 0;

    if (currentStep === steps.length - 1) {
        btnNext.disabled = true;
        btnNext.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        btnNext.disabled = false;
        btnNext.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    // Update Progress Bar
    const progressPct = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = `${progressPct}%`;

    // Render Math using KaTeX
    renderMath();
}

function renderMath() {
    // KaTeX auto-render extension configuration
    renderMathInElement(contentArea, {
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false,
        errorColor: '#cc0000'
    });
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

// Initialize the first step once the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    updateUI();
});