import React, { useState, useEffect } from 'react';
import { Terminal, Sparkles, ChevronRight, Play, CheckCircle2, Cpu, Code, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PromptEngineering = () => {
    const strategies = [
        {
            id: 'chaining',
            title: 'Prompt Chaining & Workflows',
            icon: <Cpu className="w-5 h-5 text-emerald-400" />,
            promptText: 'System: You are an entity extraction engine.\nUser: Extract key metrics from: "BridgeGuard AI achieves 92.6% accuracy using YOLOv8."\n\n[Next Chain: Validate metric format as JSON]',
            aiOutput: `{
  "project": "BridgeGuard AI",
  "model": "YOLOv8",
  "accuracy": 0.926,
  "status": "Verified"
}`,
            explanation: 'Chaining multiple LLM calls sequentially to process complex tasks, ensuring structured outputs and lower error rates.'
        },
        {
            id: 'structured',
            title: 'Structured & Role-Based Prompting',
            icon: <Code className="w-5 h-5 text-cyan-400" />,
            promptText: 'Role: Senior Python Developer\nTask: Design a Flask endpoint to query PostgreSQL database.\nConstraints: Use UUID inputs, return JSON format only.\nFormat:\n### Endpoint Specifications ###\n...',
            aiOutput: `@app.route("/api/v1/recommend", methods=["POST"])
def get_recommendation():
    user_id = request.json.get("user_id")
    # Query database and return clean JSON response
    return jsonify({"status": "success", "data": []})`,
            explanation: 'Using strict role playing, markdown templates, and few-shot examples to align AI models with strict structural constraints.'
        },
        {
            id: 'debugging',
            title: 'AI-Assisted Debugging & Error Checking',
            icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
            promptText: 'Error log:\n"RuntimeError: Expected all tensors to be on the same device, but found at least two devices, cuda:0 and cpu."\n\nPrompt: Identify target tensor, insert .to(device) instruction, and optimize CUDA memory.',
            aiOutput: `# Before: loss = criterion(outputs, labels)\n# Fix: ensure labels are moved to correct GPU device\nlabels = labels.to(device)\noutputs = model(inputs.to(device))\nloss = criterion(outputs, labels)`,
            explanation: 'Harnessing LLMs to isolate bugs, explain stack traces, and refactor code safely using context-injected error logs.'
        }
    ];

    const [activeStrategy, setActiveStrategy] = useState(strategies[0]);
    const [typedPrompt, setTypedPrompt] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        // Trigger typing effect when active strategy changes
        setIsTyping(true);
        setIsProcessing(false);
        setShowOutput(false);
        setTypedPrompt('');

        let currentText = activeStrategy.promptText;
        let index = 0;
        let intervalId;

        const typeChar = () => {
            if (index < currentText.length) {
                setTypedPrompt((prev) => prev + currentText.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
                setIsTyping(false);
                setIsProcessing(true);
                
                // Simulate AI processing glow
                setTimeout(() => {
                    setIsProcessing(false);
                    setShowOutput(true);
                }, 1200);
            }
        };

        // Faster typing speed for longer text
        intervalId = setInterval(typeChar, 10);

        return () => clearInterval(intervalId);
    }, [activeStrategy]);

    return (
        <section id="prompting" className="py-24 px-6 lg:px-12 bg-[#060a12] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-4 text-white"
                    >
                        Prompt <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Engineering</span>
                    </motion.h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-4">
                        Leveraging structured prompting, chaining workflows, and AI-assisted development tools to build, debug, and automate web and machine learning projects.
                    </p>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto rounded-full"
                    ></motion.div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Select Prompting Ability */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="text-sm font-bold text-gray-550 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" /> Techniques
                        </div>
                        {strategies.map((strat) => (
                            <button
                                key={strat.id}
                                onClick={() => setActiveStrategy(strat)}
                                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 backdrop-blur-sm ${
                                    activeStrategy.id === strat.id
                                        ? 'bg-slate-900 border-primary/50 shadow-lg shadow-primary/5'
                                        : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/35'
                                }`}
                            >
                                <div className={`p-2.5 rounded-xl border ${
                                    activeStrategy.id === strat.id 
                                        ? 'bg-primary/10 border-primary/30 text-primary' 
                                        : 'bg-slate-800/80 border-slate-700/50 text-gray-400'
                                }`}>
                                    {strat.icon}
                                </div>
                                <div>
                                    <h4 className={`font-bold text-base transition-colors ${
                                        activeStrategy.id === strat.id ? 'text-primary' : 'text-white'
                                    }`}>
                                        {strat.title}
                                    </h4>
                                    <p className="text-xs text-gray-450 mt-1 leading-relaxed">
                                        {strat.explanation}
                                    </p>
                                </div>
                            </button>
                        ))}

                        {/* Summary of Abilities List */}
                        <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl mt-6">
                            <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-3">Core Prompting Skills:</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> AI Automation</div>
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> AI Code Gen</div>
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Prompt Chaining</div>
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> AI Debugging</div>
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Error Checking</div>
                                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> GenAI Workflows</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: AI Terminal Console */}
                    <div className="lg:col-span-8 bg-slate-950/80 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[400px]">
                        {/* Terminal Header */}
                        <div className="bg-slate-900/90 border-b border-slate-850 px-5 py-3 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Terminal className="w-4.5 h-4.5 text-primary" />
                                <span className="text-xs font-mono text-gray-400 tracking-wider">prompt_sandbox.sh — Interactive console</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                            </div>
                        </div>

                        {/* Terminal Work Area */}
                        <div className="p-6 font-mono text-xs md:text-sm overflow-y-auto flex-1 space-y-4 select-text">
                            {/* Input Prompt Section */}
                            <div>
                                <div className="text-primary flex items-center gap-1.5 mb-1.5 font-bold">
                                    <ChevronRight className="w-4 h-4" /> Input Prompt:
                                </div>
                                <div className="text-gray-300 whitespace-pre-wrap pl-5 border-l border-slate-800">
                                    {typedPrompt}
                                    {isTyping && <span className="animate-pulse bg-primary text-primary w-2 h-4 inline-block ml-0.5">|</span>}
                                </div>
                            </div>

                            {/* Processing Loader */}
                            {isProcessing && (
                                <div className="flex items-center gap-2.5 text-primary pl-5 py-2">
                                    <span className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                                    <span className="text-xs tracking-wider uppercase animate-pulse">Inference Engine processing...</span>
                                </div>
                            )}

                            {/* Response Output Section */}
                            <AnimatePresence>
                                {showOutput && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="border-t border-slate-850 pt-4"
                                    >
                                        <div className="text-cyan-400 flex items-center gap-1.5 mb-2 font-bold">
                                            <Play className="w-3 h-3 fill-current" /> AI Model Output:
                                        </div>
                                        <pre className="bg-slate-900/60 border border-slate-850 p-4 rounded-xl text-emerald-450 overflow-x-auto whitespace-pre-wrap pl-5 border-l-2 border-l-emerald-500 leading-relaxed text-xs">
                                            <code>{activeStrategy.aiOutput}</code>
                                        </pre>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromptEngineering;
