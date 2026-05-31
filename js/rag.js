// --- Step Definitions ---
const steps = [
    {
        title: "1. The Super-Smart Robot",
        content: `
            <div class="max-w-2xl mx-auto flex flex-col gap-6 fade-in">
                <h2 class="text-2xl font-bold text-indigo-700 mb-2">Meet Your Robot Friend!</h2>
                <p class="text-lg leading-relaxed text-slate-600">
                    Imagine you have a super-smart robot friend who has read millions of books in the public library. This robot knows almost everything about the world, like math, science, and history.
                </p>

                <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                    <div class="text-6xl">🌍</div>
                    <div>
                        <p class="text-slate-700 mb-2">If you ask the robot:</p>
                        <div class="bg-white p-3 rounded-xl border border-slate-200 inline-block text-indigo-900 font-medium shadow-sm mb-2">"What is the capital of France?"</div>
                        <p class="text-slate-700 mt-2">It easily answers: <strong class="text-emerald-600">"Paris!"</strong></p>
                    </div>
                </div>

                <p class="text-lg leading-relaxed text-slate-600 border-l-4 border-amber-400 pl-4 bg-amber-50 p-4 rounded-r-xl">
                    <strong>But here is the catch:</strong> This robot has <em>never</em> been to your house and has <em>never</em> read your personal diary or your company's private rulebook.
                </p>
            </div>
        `
    },
    {
        title: "2. The Question (The Ask)",
        content: `
            <div class="max-w-2xl mx-auto flex flex-col gap-6 fade-in">
                <h2 class="text-2xl font-bold text-indigo-700 mb-2">Step 1: You Ask a Personal Question</h2>
                <p class="text-lg leading-relaxed text-slate-600">
                    What if you ask the robot about something private? Like what you ate for breakfast, or a rule specific to your workplace?
                </p>

                <div class="flex flex-col items-end mt-8 relative">
                    <div class="bg-blue-500 text-white p-5 rounded-2xl rounded-br-none shadow-md text-xl mb-4 max-w-[80%]">
                        "What is our company's policy on PTO (vacation)?"
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="text-slate-500 font-medium">You</span>
                        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl shadow-sm border border-blue-200">
                            🧑‍💼
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "3. The Problem (Hallucination)",
        content: `
            <div class="max-w-2xl mx-auto flex flex-col gap-6 fade-in">
                <h2 class="text-2xl font-bold text-rose-600 mb-2">Oh no! The robot is confused.</h2>
                <p class="text-lg leading-relaxed text-slate-600">
                    Because the robot hasn't read your company's rulebook, it gets confused. It might guess, say "I don't know," or make up a completely silly answer.
                </p>
                <p class="text-sm font-bold text-rose-500 uppercase tracking-widest">In AI, we call this a "Hallucination"!</p>

                <div class="flex flex-col items-start mt-4">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center text-4xl shadow-sm border border-rose-200">
                            🤖
                        </div>
                        <span class="text-slate-500 font-medium">Robot (Without RAG)</span>
                    </div>
                    <div class="bg-rose-50 text-rose-800 p-5 rounded-2xl rounded-bl-none border border-rose-200 shadow-md text-lg italic">
                        "Umm... according to my calculations... you get 100 days of vacation? Wait, no, maybe zero? I am just guessing here!"
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "4. The Search (Retrieval)",
        content: `
            <div class="max-w-3xl mx-auto flex flex-col gap-6 fade-in">
                <h2 class="text-2xl font-bold text-indigo-700 mb-2">Step 2: The Speedy Librarian (RAG to the rescue!)</h2>
                <p class="text-lg leading-relaxed text-slate-600">
                    <strong>RAG</strong> stands for <strong>Retrieval-Augmented Generation</strong>. It fixes this by sending a "speedy librarian" to search your private filing cabinet (called a <em>Vector Database</em>).
                </p>

                <div class="grid md:grid-cols-2 gap-6 items-center">
                    <div class="bg-white p-4 rounded-xl shadow border border-slate-200 text-center">
                        <div class="text-5xl mb-3">🗄️ 🏃💨</div>
                        <p class="text-slate-700 font-medium">Vector Database & Librarian</p>
                        <p class="text-sm text-slate-500 mt-2">Finds the exact piece of paper that talks about vacation days.</p>
                    </div>

                    <div class="bg-slate-800 p-5 rounded-xl shadow border border-slate-700 text-center text-slate-200">
                        <p class="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3">How does it find it? Math!</p>
                        <p class="text-sm mb-4">It turns sentences into numbers and checks how similar they are using the <strong>Cosine Similarity</strong> formula:</p>
                        <div id="math-formula" class="bg-slate-900 p-3 rounded-lg overflow-x-auto text-emerald-400"></div>
                    </div>
                </div>
            </div>
        `,
        onLoad: () => {
            // Render the KaTeX math formula for Vector Cosine Similarity
            const mathContainer = document.getElementById('math-formula');
            if (mathContainer) {
                katex.render("\\text{Similarity} = \\cos(\\theta) = \\frac{\\mathbf{A} \\cdot \\mathbf{B}}{\\|\\mathbf{A}\\| \\|\\mathbf{B}\\|}", mathContainer, {
                    throwOnError: false,
                    displayMode: true
                });
            }
        }
    },
    {
        title: "5. The Combination",
        content: `
            <div class="max-w-2xl mx-auto flex flex-col gap-6 fade-in">
                <h2 class="text-2xl font-bold text-indigo-700 mb-2">Step 3: The Augmented Prompt</h2>
                <p class="text-lg leading-relaxed text-slate-600">
                    The librarian takes your original question and <strong>clips the piece of private paper to it</strong>. This turns the guessing game into an "open-book test" for the robot!
                </p>

                <div class="relative bg-amber-50 border-2 border-dashed border-amber-300 rounded-2xl p-6 mt-4 shadow-sm">
                    <div class="absolute -top-4 -right-4 text-4xl transform rotate-12 drop-shadow-md">📎</div>

                    <h3 class="font-bold text-amber-800 mb-4 uppercase tracking-wider text-sm">New Instructions Sent to Robot:</h3>

                    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm font-mono text-sm text-slate-700 leading-relaxed">
                        <span class="text-indigo-500 font-bold">System:</span> Here is the private rulebook I found:<br>
                        <div class="bg-slate-100 p-2 my-2 border-l-4 border-indigo-400 italic">
                            "Company Policy section 4: All full-time employees get 20 PTO (vacation) days per year."
                        </div>
                        <br>
                        <span class="text-indigo-500 font-bold">System:</span> Now, based ONLY on this rulebook, answer the user's question.<br><br>
                        <span class="text-blue-500 font-bold">User Question:</span> "What is our company's policy on PTO?"
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "6. The Answer (Generation)",
        content: `
            <div class="max-w-2xl mx-auto flex flex-col gap-6 fade-in text-center pt-8">
                <h2 class="text-3xl font-bold text-emerald-600 mb-2">Step 4: The Perfect Answer ✨</h2>
                <p class="text-lg leading-relaxed text-slate-600 mb-6">
                    The super-smart robot reads the attached rulebook and gives you the exact, correct answer without guessing!
                </p>

                <div class="flex flex-col items-center">
                    <div class="bg-emerald-100 text-emerald-900 p-6 rounded-3xl rounded-bl-none shadow-lg text-xl md:text-2xl font-medium border border-emerald-300 max-w-[90%] relative">
                        "Based on the company rulebook, you get 20 PTO days per year!"
                        <div class="absolute -bottom-3 -left-3 w-6 h-6 bg-emerald-100 border-l border-b border-emerald-300 transform rotate-45"></div>
                    </div>

                    <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center text-6xl shadow-md border-4 border-emerald-200 mt-6 z-10 animate-bounce">
                        🤖
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "7. Interactive Simulator",
        content: `
            <div class="max-w-3xl mx-auto flex flex-col gap-4 fade-in">
                <h2 class="text-2xl font-bold text-indigo-700 mb-1">Let's Play: The Open-Book Robot 🎮</h2>
                <p class="text-slate-600 mb-4">Toggle RAG on and off to see how the robot handles private information!</p>

                <div class="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-slate-200">

                    <!-- Toggle Switch -->
                    <div class="flex items-center justify-between mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <div class="flex flex-col">
                            <span class="font-bold text-slate-800">RAG (Open-Book Test) Mode</span>
                            <span class="text-xs text-slate-500">Attach private vector database to prompt?</span>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" id="rag-toggle" class="sr-only peer">
                            <div class="w-14 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-500 shadow-inner"></div>
                            <span class="ml-3 text-sm font-bold text-slate-500 peer-checked:text-emerald-600 w-8" id="rag-status-text">OFF</span>
                        </label>
                    </div>

                    <!-- Interactive Area -->
                    <div class="flex flex-col md:flex-row gap-6 mb-6">
                        <div class="flex-1">
                            <label class="block text-sm font-bold text-slate-700 mb-2">Ask a private question:</label>
                            <input type="text" id="sim-input" value="What is the office Wi-Fi password?" class="w-full p-3 border-2 border-slate-200 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-slate-800" readonly>
                        </div>

                        <div id="sim-db" class="flex-1 bg-indigo-50 border-2 border-indigo-200 p-4 rounded-xl opacity-40 grayscale transition-all duration-300">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-lg">🗄️</span>
                                <label class="block text-xs font-bold text-indigo-800 uppercase tracking-wide">Vector DB (Private Files)</label>
                            </div>
                            <p class="text-sm text-indigo-900 font-mono bg-white p-2 rounded border border-indigo-100 shadow-sm">
                                File: office_info.txt<br>
                                Content: "The guest Wi-Fi password is 'Welcome2026!'"
                            </p>
                        </div>
                    </div>

                    <button id="btn-ask-robot" class="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md text-lg flex items-center justify-center gap-2">
                        <span>💬</span> Ask Robot
                    </button>

                    <!-- Response Area -->
                    <div id="sim-response-area" class="mt-6 pt-6 border-t border-slate-200 hidden fade-in">
                        <div class="flex items-start gap-4">
                            <div class="text-4xl filter drop-shadow-sm">🤖</div>
                            <div class="flex-1 relative">
                                <div id="sim-response-bubble" class="p-4 rounded-2xl rounded-tl-none border shadow-sm font-medium text-slate-800 text-lg">
                                    <!-- Response injected here -->
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `,
        onLoad: () => {
            // Simulator Logic
            const toggle = document.getElementById('rag-toggle');
            const statusText = document.getElementById('rag-status-text');
            const dbBox = document.getElementById('sim-db');
            const askBtn = document.getElementById('btn-ask-robot');
            const responseArea = document.getElementById('sim-response-area');
            const responseBubble = document.getElementById('sim-response-bubble');
            const inputField = document.getElementById('sim-input');

            let isRagOn = false;

            toggle.addEventListener('change', (e) => {
                isRagOn = e.target.checked;
                statusText.textContent = isRagOn ? 'ON' : 'OFF';

                if (isRagOn) {
                    dbBox.classList.remove('opacity-40', 'grayscale');
                    dbBox.classList.add('shadow-md', 'ring-2', 'ring-indigo-300');
                } else {
                    dbBox.classList.add('opacity-40', 'grayscale');
                    dbBox.classList.remove('shadow-md', 'ring-2', 'ring-indigo-300');
                }

                // Hide response if settings change to encourage re-asking
                responseArea.classList.add('hidden');
            });

            askBtn.addEventListener('click', () => {
                responseArea.classList.remove('hidden');

                // Reset classes
                responseBubble.className = "p-5 rounded-2xl rounded-tl-none border shadow-sm font-medium text-lg fade-in ";

                if (isRagOn) {
                    responseBubble.classList.add('bg-emerald-100', 'border-emerald-300', 'text-emerald-900');
                    responseBubble.innerHTML = `<strong>(Reads Document)</strong> Ah! Based on the office files you provided, the guest Wi-Fi password is <span class="font-bold underline text-emerald-700">'Welcome2026!'</span>.`;
                } else {
                    responseBubble.classList.add('bg-rose-50', 'border-rose-200', 'text-rose-900');
                    responseBubble.innerHTML = `<strong>(Confused)</strong> I'm sorry, I don't have access to your private Wi-Fi network information. Maybe it is "Password123"?`;
                }
            });
        }
    }
];

// --- State Management ---
let currentStepIndex = 0;

const contentArea = document.getElementById('content-area');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const progressBar = document.getElementById('progress-bar');
const dotIndicators = document.getElementById('dot-indicators');

// Initialize UI
function init() {
    // Build Dots
    steps.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `w-2.5 h-2.5 rounded-full transition-colors duration-300 ${idx === 0 ? 'bg-indigo-600' : 'bg-slate-300'}`;
        dot.id = `dot-${idx}`;
        dotIndicators.appendChild(dot);
    });

    renderStep();

    btnNext.addEventListener('click', () => {
        if (currentStepIndex < steps.length - 1) {
            currentStepIndex++;
            renderStep();
        }
    });

    btnBack.addEventListener('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            renderStep();
        }
    });
}

// Render Current Step
function renderStep() {
    const step = steps[currentStepIndex];

    // Update Content
    contentArea.innerHTML = step.content;

    // Run specific load logic for step (e.g., KaTeX or Simulator binding)
    if (step.onLoad) {
        // Small timeout ensures DOM is updated before running logic
        setTimeout(() => step.onLoad(), 0);
    }

    // Update Progress Bar
    const progressPct = ((currentStepIndex + 1) / steps.length) * 100;
    progressBar.style.width = `${progressPct}%`;

    // Update Dots
    steps.forEach((_, idx) => {
        const dot = document.getElementById(`dot-${idx}`);
        if (idx === currentStepIndex) {
            dot.className = 'w-3 h-3 rounded-full transition-all duration-300 bg-indigo-600 ring-4 ring-indigo-100';
        } else if (idx < currentStepIndex) {
            dot.className = 'w-2.5 h-2.5 rounded-full transition-all duration-300 bg-indigo-400';
        } else {
            dot.className = 'w-2.5 h-2.5 rounded-full transition-all duration-300 bg-slate-300';
        }
    });

    // Update Button States
    btnBack.disabled = currentStepIndex === 0;

    if (currentStepIndex === steps.length - 1) {
        btnNext.disabled = true;
        btnNext.classList.add('opacity-40');
    } else {
        btnNext.disabled = false;
        btnNext.classList.remove('opacity-40');
        btnNext.innerHTML = `Next <span>&rarr;</span>`;
    }

    // Scroll to top of content area on change
    contentArea.scrollTop = 0;
}

// Run application
document.addEventListener('DOMContentLoaded', init);