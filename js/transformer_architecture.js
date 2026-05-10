// Data structure defining each step of the explanation
const steps = [
    {
        title: "1. The Big Picture",
        text: "<p>Modern Large Language Models (LLMs) are built upon the <strong>Transformer architecture</strong>.</p><p>Instead of reading text word-by-word sequentially like older AI, Transformers look at the entire sentence at once. This allows them to process data faster and understand deep context.</p><p>The process starts with an input sequence and ends with predicting the next word.</p>",
        visual: `
            <div class="flex flex-col items-center space-y-6 w-full fade-in">
                <div class="bg-green-100 border border-green-400 text-green-800 px-6 py-3 rounded-lg shadow-sm font-mono w-4/5 text-center">
                    Input: "The quick brown fox"
                </div>
                <div class="text-gray-400">&darr;</div>
                <div class="bg-indigo-100 border-2 border-indigo-400 text-indigo-900 px-8 py-10 rounded-xl shadow-md w-3/4 text-center text-xl font-bold relative">
                    Transformer Block(s)
                    <div class="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-indigo-500 text-white text-xs px-2 py-1 rounded">x 96 layers</div>
                </div>
                <div class="text-gray-400">&darr;</div>
                <div class="bg-blue-100 border border-blue-400 text-blue-800 px-6 py-3 rounded-lg shadow-sm font-mono w-4/5 text-center">
                    Output: "jumps"
                </div>
            </div>
        `
    },
    {
        title: "2. Embeddings & Position",
        text: "<p>Computers don't understand words; they understand numbers.</p><p>First, text is split into chunks called <strong>Tokens</strong>. Then, each token is converted into a list of numbers called an <strong>Embedding</strong>.</p><p>Because Transformers process everything simultaneously, they lose track of word order. We fix this by adding <strong>Positional Encoding</strong>—a mathematical timestamp so the AI knows which word came first.</p>",
        visual: `
            <div class="flex flex-col items-center space-y-4 w-full fade-in">
                <div class="flex space-x-4">
                    <div class="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm">Token: "fox"</div>
                </div>
                <div class="text-gray-400">&darr;</div>
                <div class="flex items-center space-x-4">
                    <div class="bg-pink-100 border border-pink-300 text-pink-800 p-4 rounded-lg flex flex-col items-center">
                        <span class="text-sm font-bold mb-2">Word Embedding</span>
                        <div class="grid grid-cols-1 gap-1 text-xs font-mono">
                            <div class="bg-pink-200 px-2 py-1 rounded">[ 0.12 ]</div>
                            <div class="bg-pink-200 px-2 py-1 rounded">[-0.88 ]</div>
                            <div class="bg-pink-200 px-2 py-1 rounded">[ 0.45 ]</div>
                        </div>
                    </div>
                    <div class="text-2xl font-bold text-gray-500">+</div>
                    <div class="bg-yellow-100 border border-yellow-300 text-yellow-800 p-4 rounded-lg flex flex-col items-center">
                        <span class="text-sm font-bold mb-2">Positional Encoding</span>
                        <div class="grid grid-cols-1 gap-1 text-xs font-mono">
                            <div class="bg-yellow-200 px-2 py-1 rounded">[ sin(x) ]</div>
                            <div class="bg-yellow-200 px-2 py-1 rounded">[ cos(y) ]</div>
                            <div class="bg-yellow-200 px-2 py-1 rounded">[ sin(z) ]</div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "3. Multi-Head Self-Attention",
        text: "<p>This is the magic of the Transformer. <strong>Self-Attention</strong> allows every word to look at every other word to gather context.</p><p>For example, in 'The bank of the river', 'bank' looks at 'river' to know it's not a financial institution.</p><p>It works by creating three vectors for each word: <strong>Query (Q)</strong> (what I'm looking for), <strong>Key (K)</strong> (what I contain), and <strong>Value (V)</strong> (my actual content).</p>",
        visual: `
            <div class="w-full flex flex-col items-center fade-in">
                <div class="bg-orange-100 border border-orange-300 p-6 rounded-xl w-full max-w-sm relative">
                    <div class="text-center font-bold text-orange-800 mb-4 border-b border-orange-200 pb-2">Self-Attention Mechanism</div>
                    <div class="flex justify-around mb-6">
                        <div class="bg-red-100 border border-red-300 text-red-700 px-3 py-2 rounded shadow-sm text-sm font-bold">Query (Q)</div>
                        <div class="bg-green-100 border border-green-300 text-green-700 px-3 py-2 rounded shadow-sm text-sm font-bold">Key (K)</div>
                        <div class="bg-blue-100 border border-blue-300 text-blue-700 px-3 py-2 rounded shadow-sm text-sm font-bold">Value (V)</div>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="h-8 border-l-2 border-dashed border-orange-400"></div>
                        <div class="bg-orange-200 px-4 py-2 rounded-lg text-sm text-orange-900 font-mono shadow-inner">
                            Score = Q &times; K<sup class="text-[10px]">T</sup>
                        </div>
                        <div class="h-8 border-l-2 border-dashed border-orange-400"></div>
                        <div class="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md">
                            Context-Aware Vector
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "4. Feed Forward & Residuals",
        text: "<p>After Attention gathers context, the data passes through a <strong>Feed Forward Neural Network (FFN)</strong> to further process and 'think' about the patterns it found.</p><p>Throughout this process, the model uses <strong>Residual Connections</strong> (Add) and <strong>Layer Normalization</strong> (Norm). This ensures that the original word identity isn't lost during the complex math, keeping the network stable.</p>",
        visual: `
            <div class="w-full flex flex-col items-center fade-in">
                <div class="flex flex-col items-center space-y-3 relative w-3/4">
                    <!-- Input -->
                    <div class="bg-gray-200 px-4 py-2 rounded text-sm w-full text-center z-10">From Previous Layer</div>
                    <div class="text-gray-400">&darr;</div>

                    <!-- Attention block -->
                    <div class="bg-orange-100 border border-orange-300 px-4 py-3 rounded-lg w-full text-center text-orange-800 text-sm z-10 shadow">Multi-Head Attention</div>

                    <!-- Add & Norm 1 -->
                    <div class="text-gray-400">&darr;</div>
                    <div class="bg-yellow-100 border border-yellow-300 px-4 py-2 rounded-full w-3/4 text-center text-yellow-800 text-xs z-10 shadow-sm">Add & Norm</div>

                    <!-- FF Block -->
                    <div class="text-gray-400">&darr;</div>
                    <div class="bg-blue-100 border border-blue-300 px-4 py-3 rounded-lg w-full text-center text-blue-800 text-sm z-10 shadow">Feed Forward Network</div>

                    <!-- Add & Norm 2 -->
                    <div class="text-gray-400">&darr;</div>
                    <div class="bg-yellow-100 border border-yellow-300 px-4 py-2 rounded-full w-3/4 text-center text-yellow-800 text-xs z-10 shadow-sm">Add & Norm</div>

                    <!-- Residual Lines (Decorative via absolute positioning) -->
                    <div class="absolute left-[-20px] top-[15px] bottom-[200px] w-[30px] border-l-2 border-t-2 border-b-2 border-gray-300 rounded-l-xl"></div>
                    <div class="absolute right-[-20px] top-[180px] bottom-[20px] w-[30px] border-r-2 border-t-2 border-b-2 border-gray-300 rounded-r-xl"></div>
                </div>
            </div>
        `
    },
    {
        title: "5. Output Generation",
        text: "<p>Once the sequence has passed through many Transformer layers, we need to convert the final numbers back into words.</p><p>A <strong>Linear Layer</strong> maps the final vector to a massive list of scores (one for every possible word in the vocabulary).</p><p>Finally, a <strong>Softmax</strong> function turns those scores into probabilities (0% to 100%). The model picks the word with the highest probability as its output.</p>",
        visual: `
            <div class="w-full flex flex-col items-center space-y-4 fade-in">
                <div class="bg-indigo-100 px-6 py-3 rounded border border-indigo-300 text-indigo-800">Final Layer Output Vector</div>
                <div class="text-gray-400">&darr;</div>
                <div class="bg-purple-100 border border-purple-300 px-6 py-3 rounded shadow w-full text-center text-purple-800 font-bold">
                    Linear Layer (Vocabulary Size)
                </div>
                <div class="text-gray-400">&darr;</div>
                <div class="bg-pink-100 border border-pink-300 px-6 py-2 rounded-full text-pink-800 text-sm">
                    Softmax (Probabilities)
                </div>
                <div class="text-gray-400">&darr;</div>
                <div class="flex flex-col w-full max-w-xs space-y-1">
                    <div class="flex justify-between items-center bg-green-100 border border-green-300 px-3 py-2 rounded shadow-sm text-green-900 font-bold">
                        <span>"jumps"</span> <span>85%</span>
                    </div>
                    <div class="flex justify-between items-center bg-white border border-gray-200 px-3 py-1 rounded text-gray-500 text-sm">
                        <span>"runs"</span> <span>10%</span>
                    </div>
                    <div class="flex justify-between items-center bg-white border border-gray-200 px-3 py-1 rounded text-gray-500 text-sm">
                        <span>"sleeps"</span> <span>2%</span>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "6. The Core Equations",
        text: "<p>Deep Learning is powered by linear algebra and calculus. Here are the core mathematical formulas that make the Transformer work.</p><p><strong>1. Scaled Dot-Product Attention:</strong> This calculates how much focus a word should put on other words. We scale by the square root of dimensions to keep gradients stable.</p><p><strong>2. Softmax:</strong> Converts raw numbers into a beautiful probability distribution.</p>",
        visual: `
            <div class="w-full flex flex-col items-center justify-center space-y-8 fade-in math-container">

                <div class="bg-white p-6 rounded-xl shadow border border-gray-200 w-full text-center">
                    <h3 class="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Scaled Dot-Product Attention</h3>
                    <div>
                        $$ \\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V $$
                    </div>
                    <p class="text-xs text-gray-400 mt-3 text-left">Where Q=Query, K=Key, V=Value, and d<sub>k</sub> is the dimension of the keys.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow border border-gray-200 w-full text-center">
                    <h3 class="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider">Feed Forward Network</h3>
                    <div>
                        $$ \\text{FFN}(x) = \\max(0, xW_1 + b_1)W_2 + b_2 $$
                    </div>
                    <p class="text-xs text-gray-400 mt-3 text-left">A two-layer network with a ReLU activation function in between.</p>
                </div>

            </div>
        `
    }
];

let currentStep = 0;

// DOM Elements
const titleEl = document.getElementById('step-title');
const descEl = document.getElementById('step-desc');
const visualEl = document.getElementById('step-visual');
const badgeEl = document.getElementById('step-badge');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const progressDots = document.getElementById('progress-dots');

// Initialize UI
function init() {
    // Create dots
    steps.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `w-2.5 h-2.5 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-indigo-600' : 'bg-gray-300'}`;
        dot.id = `dot-${index}`;
        progressDots.appendChild(dot);
    });

    updateView();

    // Event Listeners
    btnNext.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateView();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateView();
        }
    });
}

// Update the view based on current step
function updateView() {
    const stepData = steps[currentStep];

    // Trigger animation trick
    visualEl.innerHTML = '';

    // Allow DOM to process empty innerHTML before injecting new content for animation
    setTimeout(() => {
        badgeEl.innerText = `Step ${currentStep + 1} of ${steps.length}`;
        titleEl.innerText = stepData.title;
        descEl.innerHTML = stepData.text;
        visualEl.innerHTML = stepData.visual;

        // Tell MathJax to re-render the equations if they exist in the new HTML
        if (window.MathJax) {
            MathJax.typesetPromise([visualEl]).catch(function (err) {
                console.error('MathJax rendering error:', err.message);
            });
        }
    }, 50);

    // Update buttons
    btnPrev.disabled = currentStep === 0;
    btnNext.disabled = currentStep === steps.length - 1;

    if (currentStep === steps.length - 1) {
        btnNext.innerText = "Finish";
    } else {
        btnNext.innerHTML = "Next Step &rarr;";
    }

    // Update dots
    steps.forEach((_, index) => {
        const dot = document.getElementById(`dot-${index}`);
        if (index === currentStep) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-indigo-600');
        } else {
            dot.classList.remove('bg-indigo-600');
            dot.classList.add('bg-gray-300');
        }
    });
}

// Run setup
document.addEventListener('DOMContentLoaded', init);