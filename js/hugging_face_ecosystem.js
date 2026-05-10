// Icons
const icons = {
    hub: `<svg xmlns="http://www.w-w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    token: `<svg xmlns="http://www.w-w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>`,
    transformer: `<svg xmlns="http://www.w-w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>`,
    data: `<svg xmlns="http://www.w-w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path d="M13 2v7h7"></path><path d="M13 18v-5"></path><path d="M10.5 15.5 13 13l2.5 2.5"></path></svg>`,
    math: `<svg xmlns="http://www.w-w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 7.5 12 12l-7.5-4.5L12 3l7.5 4.5Z"></path><path d="m12 12 7.5 4.5L12 21l-7.5-4.5L12 12Z"></path><path d="m19.5 16.5-7.5-4.5"></path><path d="m4.5 16.5 7.5-4.5"></path></svg>`,
    space: `<svg xmlns="http://www.w-w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
};

// Data for each step
const steps = [
    {
        title: "1. The Hugging Face Hub",
        description: "Think of the Hub as the 'GitHub of Machine Learning'. It is a central collaborative platform where researchers and developers host, share, and discover over a million open-source Models, Datasets, and interactive Machine Learning applications.",
        icon: icons.hub,
        equation: null
    },
    {
        title: "2. Tokenizers Library",
        description: "Before a Large Language Model (LLM) can process text, the text must be converted into numbers. The Tokenizers library provides blazing-fast text preprocessing to split text into sub-words (tokens) and map them to numerical IDs.",
        icon: icons.token,
        equation: null
    },
    {
        title: "3. Transformers Library",
        description: "This is the core open-source library that powers the ecosystem. It provides simple APIs (like <code>from_pretrained()</code>) to download and use state-of-the-art models (like BERT, GPT, and LLaMA) for tasks ranging from text generation to image classification.",
        icon: icons.transformer,
        equation: null
    },
    {
        title: "4. Datasets & Accelerate",
        description: "<b>Datasets:</b> Lets you easily access and process massive amounts of data with a single line of code, without running out of RAM.<br><br><b>Accelerate:</b> A framework that lets you run your training loops on any distributed setup (Multi-GPU, TPU) with minimal code changes.",
        icon: icons.data,
        equation: null
    },
    {
        title: "5. The Math: Attention Mechanism",
        description: "Underneath the Transformers library lies the <b>Scaled Dot-Product Attention</b> mechanism. This is the mathematical breakthrough that allows LLMs to understand context. It calculates how much 'focus' or 'attention' each word in a sequence should give to every other word.",
        icon: icons.math,
        equation: `
            <div class="text-center py-4 overflow-x-auto text-xl text-gray-800">
                $$ \\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V $$
            </div>
            <div class="text-sm text-gray-500 mt-4 bg-white p-4 rounded border border-gray-100 shadow-sm">
                <ul class="list-disc pl-5 space-y-1">
                    <li><b>Q (Query):</b> What the current token is looking for.</li>
                    <li><b>K (Key):</b> What other tokens contain.</li>
                    <li><b>V (Value):</b> The actual content of the tokens.</li>
                    <li><b>$d_k$:</b> A scaling factor to keep gradients stable.</li>
                </ul>
            </div>
        `
    },
    {
        title: "6. Spaces & Deployment",
        description: "Once your model is trained or downloaded, you can share it with the world! <b>Spaces</b> allows you to build interactive ML demos (using Gradio or Streamlit), while the <b>Inference API</b> lets you integrate these massive models directly into your applications via simple HTTP requests.",
        icon: icons.space,
        equation: null
    }
];

let currentStep = 0;

function init() {
    // Generate dot indicators
    const dotsContainer = document.getElementById('dots-container');
    steps.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `w-2.5 h-2.5 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-hfYellow' : 'bg-gray-300'}`;
        dot.id = `dot-${index}`;
        dotsContainer.appendChild(dot);
    });

    updateUI();
}

function changeStep(direction) {
    const wrapper = document.getElementById('content-wrapper');

    // Fade out effect
    wrapper.style.opacity = 0;
    wrapper.style.transform = direction > 0 ? 'translateX(20px)' : 'translateX(-20px)';

    setTimeout(() => {
        currentStep += direction;
        updateUI();

        // Fade in effect
        wrapper.style.transform = 'translateX(0)';
        wrapper.style.opacity = 1;
    }, 300); // Wait for fade out
}

function updateUI() {
    const step = steps[currentStep];

    // Update text and icon
    document.getElementById('step-counter').innerText = `Step ${currentStep + 1} of ${steps.length}`;
    document.getElementById('step-title').innerHTML = step.title;
    document.getElementById('step-description').innerHTML = step.description;
    document.getElementById('step-icon').innerHTML = step.icon;

    // Handle Equation Area
    const eqDiv = document.getElementById('step-equation');
    if (step.equation) {
        eqDiv.innerHTML = step.equation;
        eqDiv.classList.remove('hidden');

        // Trigger KaTeX to render the math formulas
        if (window.renderMathInElement) {
            renderMathInElement(eqDiv, {
                delimiters: [
                    { left: '$$', right: '$$', display: true },
                    { left: '$', right: '$', display: false }
                ],
                throwOnError: false
            });
        }
    } else {
        eqDiv.innerHTML = '';
        eqDiv.classList.add('hidden');
    }

    // Update Buttons
    document.getElementById('btn-prev').disabled = currentStep === 0;

    const btnNext = document.getElementById('btn-next');
    if (currentStep === steps.length - 1) {
        btnNext.disabled = true;
        btnNext.innerText = "Finish";
    } else {
        btnNext.disabled = false;
        btnNext.innerText = "Next Step";
    }

    // Update Progress Bar
    const progress = ((currentStep + 1) / steps.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    // Update Dots
    steps.forEach((_, index) => {
        const dot = document.getElementById(`dot-${index}`);
        if (index === currentStep) {
            dot.classList.remove('bg-gray-300');
            dot.classList.add('bg-hfYellow');
        } else {
            dot.classList.remove('bg-hfYellow');
            dot.classList.add('bg-gray-300');
        }
    });
}

// Initialize on load
window.onload = init;