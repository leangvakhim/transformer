document.addEventListener("DOMContentLoaded", () => {
    // Configuration
    const totalSlides = 7;
    let currentSlide = 1;

    // DOM Elements
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const stepDisplay = document.getElementById('current-step');
    const progressBar = document.getElementById('progress-bar');

    // Render Math Equations using KaTeX
    try {
        if (typeof katex !== 'undefined') {
            // Standard prediction formula
            katex.render("P(w_t \\mid w_1, w_2, ..., w_{t-1})", document.getElementById('math-eq-1'), {
                throwOnError: false,
                displayMode: true
            });

            // In-context learning prediction formula
            katex.render("P(w_{t} \\mid S, (x_1, y_1), ..., (x_k, y_k), x_{new})", document.getElementById('math-eq-2'), {
                throwOnError: false,
                displayMode: true
            });
        } else {
            throw new Error("katex is not loaded");
        }
    } catch (e) {
        console.error("KaTeX failed to load or render", e);
        document.getElementById('math-eq-1').innerText = "P(w_t | context)";
        document.getElementById('math-eq-2').innerText = "P(w_t | System, Examples, Prompt)";
    }

    // Function to update the UI based on current slide
    function updateSlides() {
        // Hide all slides
        document.querySelectorAll('.slide').forEach(el => {
            el.classList.remove('active');
        });

        // Show current slide
        const activeSlide = document.getElementById(`slide-${currentSlide}`);
        if (activeSlide) {
            activeSlide.classList.add('active');
        }

        // Update text counter
        stepDisplay.textContent = currentSlide;

        // Update progress bar
        const progressPercentage = ((currentSlide - 1) / (totalSlides - 1)) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Update button states
        btnPrev.disabled = currentSlide === 1;

        if (currentSlide === totalSlides) {
            btnNext.innerHTML = 'Finish';
            btnNext.classList.remove('bg-teal-600', 'hover:bg-teal-700');
            btnNext.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
        } else {
            btnNext.innerHTML = 'Next <i class="fa-solid fa-arrow-right"></i>';
            btnNext.classList.add('bg-teal-600', 'hover:bg-teal-700');
            btnNext.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
        }
    }

    // Event Listeners for Navigation
    btnNext.addEventListener('click', () => {
        if (currentSlide < totalSlides) {
            currentSlide++;
        } else {
            // currentSlide = 1; // Loop back to start
        }
        updateSlides();
    });

    btnPrev.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--;
            updateSlides();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentSlide < totalSlides) {
                btnNext.click();
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentSlide > 1) {
                btnPrev.click();
            }
        }
    });

    // Initialize UI
    updateSlides();
});