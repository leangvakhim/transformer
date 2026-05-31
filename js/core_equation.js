const steps = [
    {
        concept: "Introduction",
        title: "Transformers: A 7-Year-Old's Guide 🚀",
        content: `
            <div class="flex flex-col items-center justify-center text-center py-8 space-y-6">
                <div class="bg-indigo-100 p-6 rounded-full text-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <p class="text-xl">Translating advanced mathematical concepts into simple, relatable analogies is a fantastic way to build intuition.</p>
                <p class="text-xl">Let’s look at the two crucial equations from Transformer models and explain them as if we were talking to a 7-year-old, using everyday examples and simple math!</p>
                <p class="text-sm text-slate-500 mt-8">Click <strong>Next</strong> to start the journey!</p>
            </div>
        `
    },
    {
        concept: "Concept 1",
        title: "1. Scaled Dot-Product Attention 🔍",
        content: `
            <div class="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8 shadow-inner text-center">
                <p class="text-blue-900 font-semibold mb-2 uppercase tracking-wide text-sm">The Equation:</p>
                <div class="text-2xl font-serif text-blue-950 overflow-x-auto">
                    $$Attention(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$$
                </div>
            </div>

            <h3 class="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                The Real-World Example: The Library Search
            </h3>
            <p class="mb-4">Imagine you are at a giant library looking for a specific book.</p>
            <ul class="space-y-4">
                <li class="flex items-start gap-3">
                    <span class="bg-slate-200 text-slate-800 font-bold px-3 py-1 rounded">Q</span>
                    <div><strong>Query:</strong> This is what you are asking for. (e.g., <em>"I want a book about space dogs!"</em>)</div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="bg-slate-200 text-slate-800 font-bold px-3 py-1 rounded">K</span>
                    <div><strong>Key:</strong> This is the title on the side of every book on the shelf. (e.g., Book A says <em>"Astro-Pups"</em>).</div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="bg-slate-200 text-slate-800 font-bold px-3 py-1 rounded">V</span>
                    <div><strong>Value:</strong> This is the actual story inside the book.</div>
                </li>
            </ul>
            <div class="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-yellow-900">
                💡 <strong>The Goal:</strong> The Attention equation is just the robot librarian figuring out which book's story ($V$) best matches your question ($Q$) by checking the titles ($K$).
            </div>
        `
    },
    {
        concept: "Concept 1",
        title: "Attention: Setting up the Math 🧮",
        content: `
            <p class="mb-6">Let's pretend our "words" are just simple numbers to see how the librarian does the math step-by-step.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white border-2 border-indigo-200 p-5 rounded-xl shadow-sm text-center">
                    <h4 class="font-bold text-indigo-800 mb-2">Your Question</h4>
                    <div class="text-4xl font-black text-indigo-600 mb-2">$Q$</div>
                    <div class="text-2xl bg-indigo-50 inline-block px-4 py-1 rounded-lg">$4$</div>
                </div>

                <div class="bg-white border-2 border-emerald-200 p-5 rounded-xl shadow-sm text-center relative">
                    <div class="absolute -top-3 -right-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">Great Match!</div>
                    <h4 class="font-bold text-emerald-800 mb-2">Book A</h4>
                    <div class="text-lg text-emerald-600 mb-1">Title ($K_1$) = <span class="font-bold bg-emerald-50 px-2 rounded">$4$</span></div>
                    <div class="text-lg text-emerald-600">Story ($V_1$) = <span class="font-bold bg-emerald-50 px-2 rounded">$100$</span></div>
                </div>

                <div class="bg-white border-2 border-red-200 p-5 rounded-xl shadow-sm text-center relative">
                    <div class="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">Bad Match!</div>
                    <h4 class="font-bold text-red-800 mb-2">Book B</h4>
                    <div class="text-lg text-red-600 mb-1">Title ($K_2$) = <span class="font-bold bg-red-50 px-2 rounded">$1$</span></div>
                    <div class="text-lg text-red-600">Story ($V_2$) = <span class="font-bold bg-red-50 px-2 rounded">$10$</span></div>
                </div>
            </div>
        `
    },
    {
        concept: "Concept 1",
        title: "Attention Step 1: Match Score ✖️",
        content: `
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Step 1: Match the Question to the Titles</h3>
            <div class="bg-slate-100 p-4 rounded-lg mb-6 text-center text-xl font-serif">
                $$Q \\times K^T$$
            </div>

            <p class="mb-6">We multiply your question by the titles to get a "Match Score".</p>

            <div class="flex flex-col gap-4">
                <div class="bg-emerald-50 border border-emerald-200 p-6 rounded-xl flex items-center justify-between">
                    <div>
                        <h4 class="font-bold text-emerald-800 text-xl">Book A Score</h4>
                        <p class="text-emerald-600">Question ($4$) × Title ($4$)</p>
                    </div>
                    <div class="text-4xl font-black text-emerald-600">
                        $4 \\times 4 = 16$
                    </div>
                </div>

                <div class="bg-red-50 border border-red-200 p-6 rounded-xl flex items-center justify-between">
                    <div>
                        <h4 class="font-bold text-red-800 text-xl">Book B Score</h4>
                        <p class="text-red-600">Question ($4$) × Title ($1$)</p>
                    </div>
                    <div class="text-4xl font-black text-red-600">
                        $4 \\times 1 = 4$
                    </div>
                </div>
            </div>
        `
    },
    {
        concept: "Concept 1",
        title: "Attention Step 2: Scale it Down 📉",
        content: `
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Step 2: Shrink the Scores</h3>
            <div class="bg-slate-100 p-4 rounded-lg mb-6 text-center text-xl font-serif">
                $$\\div \\sqrt{d_k}$$
            </div>

            <p class="mb-6">Sometimes scores get too wildly huge, which confuses the computer. So, we shrink them down by dividing by a specific number. Let's pretend our shrink number is <strong>$2$</strong>.</p>

            <div class="grid grid-cols-2 gap-6 text-center">
                <div class="bg-white border-2 border-slate-200 p-6 rounded-xl shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                    <h4 class="font-bold text-slate-600 mb-4">Book A</h4>
                    <div class="text-2xl text-slate-800 mb-2">Old Score: $16$</div>
                    <div class="text-3xl font-black text-emerald-600 bg-emerald-50 py-3 rounded-lg">
                        $16 \\div 2 = 8$
                    </div>
                </div>

                <div class="bg-white border-2 border-slate-200 p-6 rounded-xl shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <h4 class="font-bold text-slate-600 mb-4">Book B</h4>
                    <div class="text-2xl text-slate-800 mb-2">Old Score: $4$</div>
                    <div class="text-3xl font-black text-red-600 bg-red-50 py-3 rounded-lg">
                        $4 \\div 2 = 2$
                    </div>
                </div>
            </div>
        `
    },
    {
        concept: "Concept 1",
        title: "Attention Step 3: The Percentage Maker 📊",
        content: `
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Step 3: Softmax</h3>
            <div class="bg-slate-100 p-4 rounded-lg mb-6 text-center text-xl font-serif">
                $$\\text{softmax}(\\dots)$$
            </div>

            <p class="mb-6">Softmax is a fancy machine that turns our scores into percentages that add up to $100\\%$. It makes the big numbers take up most of the pie.</p>

            <div class="bg-indigo-50 border border-indigo-200 p-6 rounded-xl mb-6">
                <p class="text-indigo-900 mb-4">Score <strong>$8$</strong> is way bigger than score <strong>$2$</strong>. The Softmax machine decides:</p>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-4">
                        <div class="w-32 font-bold text-slate-700">Book A (8)</div>
                        <div class="flex-grow bg-slate-200 rounded-full h-6 overflow-hidden">
                            <div class="bg-emerald-500 h-full text-xs flex items-center justify-end pr-2 text-white font-bold" style="width: 90%">90%</div>
                        </div>
                        <div class="w-16 font-mono font-bold">$0.90$</div>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="w-32 font-bold text-slate-700">Book B (2)</div>
                        <div class="flex-grow bg-slate-200 rounded-full h-6 overflow-hidden">
                            <div class="bg-red-400 h-full text-xs flex items-center pl-2 text-white font-bold" style="width: 10%">10%</div>
                        </div>
                        <div class="w-16 font-mono font-bold">$0.10$</div>
                    </div>
                </div>
            </div>
            <p class="text-center text-sm text-slate-500 font-bold uppercase tracking-widest">They perfectly add up to 100%!</p>
        `
    },
    {
        concept: "Concept 1",
        title: "Attention Step 4: Read the Stories 📖",
        content: `
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Step 4: Multiply by Values</h3>
            <div class="bg-slate-100 p-4 rounded-lg mb-6 text-center text-xl font-serif">
                $$\\times V$$
            </div>

            <p class="mb-6">Finally, we multiply our attention percentages by the actual stories (the Values we defined earlier).</p>

            <div class="bg-white border border-slate-200 shadow-sm rounded-xl overflow-hidden mb-6">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-100 text-slate-600">
                            <th class="p-4 border-b">Book</th>
                            <th class="p-4 border-b">Percentage</th>
                            <th class="p-4 border-b">Story ($V$)</th>
                            <th class="p-4 border-b bg-indigo-50">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-4 border-b font-bold text-emerald-700">Book A</td>
                            <td class="p-4 border-b">$0.90$</td>
                            <td class="p-4 border-b font-bold">$100$</td>
                            <td class="p-4 border-b bg-indigo-50 font-black text-indigo-700">$0.90 \\times 100 = 90$</td>
                        </tr>
                        <tr>
                            <td class="p-4 border-b font-bold text-red-700">Book B</td>
                            <td class="p-4 border-b">$0.10$</td>
                            <td class="p-4 border-b font-bold">$10$</td>
                            <td class="p-4 border-b bg-indigo-50 font-black text-indigo-700">$0.10 \\times 10 = 1$</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="bg-indigo-600 text-white p-6 rounded-xl text-center shadow-lg transform hover:scale-[1.02] transition-transform">
                <h4 class="text-indigo-200 font-bold uppercase tracking-widest text-sm mb-2">Final Answer</h4>
                <div class="text-4xl font-black mb-2">$90 + 1 = 91$</div>
                <p class="text-indigo-100">Because $91$ is so close to Book A's story ($100$), the Transformer successfully paid the most "attention" to the right book!</p>
            </div>
        `
    },
    {
        concept: "Concept 2",
        title: "2. The Feed Forward Network (FFN) ⚙️",
        content: `
            <div class="bg-orange-50 border border-orange-100 p-6 rounded-xl mb-8 shadow-inner text-center">
                <p class="text-orange-900 font-semibold mb-2 uppercase tracking-wide text-sm">The Equation:</p>
                <div class="text-2xl font-serif text-orange-950 overflow-x-auto">
                    $$FFN(x) = \\max(0, xW_1 + b_1)W_2 + b_2$$
                </div>
            </div>

            <h3 class="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                The Real-World Example: The Toy Factory Assembly Line
            </h3>
            <p class="mb-4">Once the Transformer has gathered the right information from the library, it needs to think deeply about it. Imagine a factory that builds toy cars.</p>

            <ul class="space-y-4">
                <li class="flex items-start gap-3">
                    <span class="bg-slate-200 text-slate-800 font-bold px-3 py-1 rounded">x</span>
                    <div>The pieces of information we just gathered.</div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="bg-slate-200 text-slate-800 font-bold px-3 py-1 rounded">W & b</span>
                    <div><strong>Weights & Biases:</strong> The factory machines that change the pieces (painting them, adding wheels).</div>
                </li>
                <li class="flex items-start gap-3">
                    <span class="bg-slate-200 text-slate-800 font-bold px-3 py-1 rounded">max(0, ...)</span>
                    <div><strong>The Quality Control Guard (ReLU):</strong> If a toy piece is broken (a negative number), the guard throws it in the trash (turns it to zero). If it's a good piece, it passes.</div>
                </li>
            </ul>
        `
    },
    {
        concept: "Concept 2",
        title: "FFN: Setting up the Factory 🏭",
        content: `
            <p class="mb-6 text-xl text-center">Let's pretend the information we collected is the number $3$.<br><strong>($x = 3$)</strong></p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div class="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div class="bg-slate-100 p-3 text-center font-bold text-slate-700 border-b border-slate-200">
                        Machine 1 Settings
                    </div>
                    <div class="p-6 text-center space-y-4">
                        <div class="text-lg">Weight ($W_1$) = <span class="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded">$2$</span></div>
                        <div class="text-lg">Bias ($b_1$) = <span class="bg-red-100 text-red-800 font-bold px-3 py-1 rounded">$-10$</span></div>
                    </div>
                </div>

                <div class="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div class="bg-slate-100 p-3 text-center font-bold text-slate-700 border-b border-slate-200">
                        Machine 2 Settings
                    </div>
                    <div class="p-6 text-center space-y-4">
                        <div class="text-lg">Weight ($W_2$) = <span class="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded">$5$</span></div>
                        <div class="text-lg">Bias ($b_2$) = <span class="bg-green-100 text-green-800 font-bold px-3 py-1 rounded">$7$</span></div>
                    </div>
                </div>
            </div>
        `
    },
    {
        concept: "Concept 2",
        title: "FFN Step 1: The First Machine ⚙️",
        content: `
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Step 1: First Machine Processing</h3>
            <div class="bg-slate-100 p-4 rounded-lg mb-8 text-center text-xl font-serif">
                $$xW_1 + b_1$$
            </div>

            <p class="mb-6">The first machine takes our number ($x=3$), multiplies it by a Weight ($W_1 = 2$), and subtracts a Bias ($b_1 = 10$).</p>

            <div class="flex flex-col items-center gap-4">
                <div class="bg-white border-2 border-slate-200 p-4 rounded-xl w-full max-w-md text-center text-2xl font-mono">
                    <span class="text-slate-400">Input:</span> $3$
                </div>
                <div class="text-slate-400 font-bold">↓ Multiply by $2$ ↓</div>
                <div class="bg-blue-50 border-2 border-blue-200 p-4 rounded-xl w-full max-w-md text-center text-2xl font-mono text-blue-800 font-bold shadow-sm">
                    $3 \\times 2 = 6$
                </div>
                <div class="text-slate-400 font-bold">↓ Subtract $10$ ↓</div>
                <div class="bg-red-50 border-2 border-red-200 p-6 rounded-xl w-full max-w-md text-center shadow-md transform -rotate-2">
                    <div class="text-3xl font-black text-red-600 font-mono mb-2">$6 - 10 = -4$</div>
                    <p class="text-red-800 text-sm font-bold">Uh oh! The machine made a mistake, and our toy piece is now a negative number.</p>
                </div>
            </div>
        `
    },
    {
        concept: "Concept 2",
        title: "FFN Step 2: Quality Control 👮",
        content: `
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Step 2: The Guard (ReLU)</h3>
            <div class="bg-slate-100 p-4 rounded-lg mb-8 text-center text-xl font-serif">
                $$\\max(0, \\dots)$$
            </div>

            <p class="mb-8">The guard looks at our number ($-4$) and compares it to $0$. He always picks the maximum (biggest) number.</p>

            <div class="bg-slate-800 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden text-center max-w-lg mx-auto">
                <div class="absolute top-0 right-0 p-4 opacity-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>

                <h4 class="text-xl font-bold mb-6 relative z-10 text-slate-300">Which is bigger: $0$ or $-4$?</h4>

                <div class="flex justify-center items-center gap-8 mb-6 relative z-10">
                    <div class="text-5xl font-black text-emerald-400">$0$</div>
                    <div class="text-2xl text-slate-500">vs</div>
                    <div class="text-5xl font-black text-red-400 opacity-50 line-through">$-4$</div>
                </div>

                <p class="relative z-10 text-lg"><strong>$0$ is bigger!</strong> So, the guard throws the $-4$ in the trash and replaces it with a $0$. Only positive, helpful numbers keep going.</p>
            </div>
        `
    },
    {
        concept: "Concept 2",
        title: "FFN Step 3: The Second Machine 📦",
        content: `
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Step 3: Final Packing</h3>
            <div class="bg-slate-100 p-4 rounded-lg mb-8 text-center text-xl font-serif">
                $$\\times W_2 + b_2$$
            </div>

            <p class="mb-6">Now, the surviving number ($0$) goes to the final machine to be packed up. We multiply by a new weight ($W_2 = 5$) and add a new bias ($b_2 = 7$).</p>

            <div class="bg-white border-2 border-orange-200 rounded-xl overflow-hidden shadow-lg max-w-lg mx-auto">
                <div class="p-6 space-y-6">
                    <div class="flex justify-between items-center bg-slate-50 p-4 rounded-lg">
                        <span class="text-slate-600 font-bold">Input from Guard:</span>
                        <span class="text-2xl font-mono font-black">$0$</span>
                    </div>

                    <div class="flex justify-between items-center bg-blue-50 p-4 rounded-lg">
                        <span class="text-blue-800 font-bold">Multiply by $5$:</span>
                        <span class="text-2xl font-mono font-black text-blue-600">$0 \\times 5 = 0$</span>
                    </div>

                    <div class="flex justify-between items-center bg-green-50 p-4 rounded-lg border-b-4 border-green-500">
                        <span class="text-green-800 font-bold">Add $7$:</span>
                        <span class="text-2xl font-mono font-black text-green-600">$0 + 7 = 7$</span>
                    </div>
                </div>
                <div class="bg-orange-500 text-white p-6 text-center">
                    <div class="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">Final FFN Answer</div>
                    <div class="text-5xl font-black">$7$</div>
                </div>
            </div>
        `
    },
    {
        concept: "Conclusion",
        title: "Putting it all Together! 🎉",
        content: `
            <div class="text-center py-8">
                <div class="inline-flex justify-center items-center w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
                <h3 class="text-3xl font-bold text-slate-800 mb-6">And that's it!</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div class="bg-indigo-50 border border-indigo-200 p-6 rounded-xl shadow-sm">
                        <h4 class="text-indigo-800 font-bold text-xl mb-3 flex items-center gap-2">
                            <span class="bg-indigo-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm">1</span>
                            Attention
                        </h4>
                        <p class="text-indigo-900 leading-relaxed">The Transformer uses the first equation to decide <strong>what to look at</strong> by scoring matches and turning them into percentages.</p>
                    </div>

                    <div class="bg-orange-50 border border-orange-200 p-6 rounded-xl shadow-sm">
                        <h4 class="text-orange-800 font-bold text-xl mb-3 flex items-center gap-2">
                            <span class="bg-orange-500 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-sm">2</span>
                            FFN
                        </h4>
                        <p class="text-orange-900 leading-relaxed">It uses the second equation to <strong>think about what it found</strong>, keeping only the good information and throwing away the bad mistakes!</p>
                    </div>
                </div>

                <p class="mt-8 text-slate-500 font-medium">You now understand the core mathematics of modern AI!</p>
            </div>
        `
    }
];

let currentStep = 0;

const conceptLabel = document.getElementById('concept-label');
const stepTitle = document.getElementById('step-title');
const stepCounter = document.getElementById('step-counter');
const contentContainer = document.getElementById('step-content');
const progressBar = document.getElementById('progress-bar');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function renderMath() {
    renderMathInElement(contentContainer, {
        delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
        ],
        throwOnError: false
    });
}

function updateUI() {
    const step = steps[currentStep];

    // Re-trigger animation
    contentContainer.classList.remove('slide-fade-in');
    void contentContainer.offsetWidth; // trigger reflow
    contentContainer.classList.add('slide-fade-in');

    // Update texts
    conceptLabel.textContent = step.concept;
    stepTitle.textContent = step.title;
    stepCounter.textContent = `Step ${currentStep + 1} of ${steps.length}`;

    // Inject content
    contentContainer.innerHTML = step.content;

    // Render KaTeX
    renderMath();

    // Update Progress Bar
    const progress = (currentStep / (steps.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;

    // Update Buttons
    prevBtn.disabled = currentStep === 0;

    if (currentStep === steps.length - 1) {
        nextBtn.disabled = true;
        nextBtn.innerHTML = 'Finished <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
    } else {
        nextBtn.disabled = false;
        nextBtn.innerHTML = 'Next <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
    }
}

prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateUI();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateUI();
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', updateUI);