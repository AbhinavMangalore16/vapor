import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/clerk-react"
import { 
    Terminal, Workflow, Cpu, Shield, 
    ArrowRight, Check, X, GitPullRequest, 
    Layers, Box, Lock, Github, Twitter, Zap
} from "lucide-react"
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaProjectDiagram } from "react-icons/fa";

const font = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
});

export const UnauthenticatedView = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 font-sans overflow-x-hidden">
            
            {/* Navbar */}
            <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
                <div className="container mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="p-1 rounded bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <FaProjectDiagram className="size-5 text-primary" />
                        </div>
                        <span className={cn("text-base font-semibold tracking-tight", font.className)}>Trace.ai</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="#problem" className="hover:text-foreground transition-colors">Platform</Link>
                        <Link href="#compare" className="hover:text-foreground transition-colors">Compare</Link>
                        <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground">
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm" className="font-medium h-8 rounded-md px-4 shadow-sm">
                                Launch Workspace
                            </Button>
                        </SignInButton>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col pt-14">
                
                {/* 1. Hero Section */}
                <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden border-b border-border/40">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-muted-foreground text-xs font-mono animate-in fade-in zoom-in-95 duration-700">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Trace Engine v1.0 is Live
                        </div>
                        
                        <h1 className={cn("text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150 fill-mode-both", font.className)}>
                            Execute system-wide refactors without the autocomplete bottleneck.
                        </h1>
                        
                        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
                            Trace.ai is an autonomous execution engine. Stop prompting for snippets. Start orchestrating deterministic workflows that plan, refactor, and test across your entire repository.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
                            <SignInButton mode="modal">
                                <Button size="lg" className="h-12 px-8 text-base shadow-sm">
                                    Launch Workspace <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </SignInButton>
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base bg-transparent border-border hover:bg-secondary/50">
                                View Architecture
                            </Button>
                        </div>

                        <div className="flex items-center gap-6 mt-8 text-xs font-mono text-muted-foreground animate-in fade-in duration-1000 delay-700 fill-mode-both">
                            <div className="flex items-center gap-2"><Lock className="size-3" /> Secure Runtime</div>
                            <div className="flex items-center gap-2"><Layers className="size-3" /> Model Agnostic</div>
                            <div className="flex items-center gap-2"><Cpu className="size-3" /> Local Execution</div>
                        </div>
                    </div>
                </section>

                {/* 2. Social Proof Section */}
                <section className="py-16 px-6 border-b border-border/40 bg-muted/20">
                    <div className="container mx-auto max-w-5xl flex flex-col items-center gap-12">
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                            Trusted by engineering teams scaling complex architectures
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
                            {/* Placeholders for logos (Stripe, Vercel, Linear style blocks) */}
                            <div className="flex items-center gap-2 font-bold text-xl"><Box className="size-6"/> ACME Corp</div>
                            <div className="flex items-center gap-2 font-bold text-xl"><Layers className="size-6"/> Nexus Systems</div>
                            <div className="flex items-center gap-2 font-bold text-xl"><Terminal className="size-6"/> Synthetix</div>
                            <div className="flex items-center gap-2 font-bold text-xl"><Workflow className="size-6"/> Vektor</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mt-8">
                            <div className="flex flex-col items-center text-center gap-1">
                                <span className="text-3xl font-bold font-mono tracking-tighter">2.4M+</span>
                                <span className="text-sm text-muted-foreground">Workflows Executed</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-1 border-l border-border/50">
                                <span className="text-3xl font-bold font-mono tracking-tighter">15M+</span>
                                <span className="text-sm text-muted-foreground">Files Refactored</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-1 border-l border-border/50">
                                <span className="text-3xl font-bold font-mono tracking-tighter">0</span>
                                <span className="text-sm text-muted-foreground">Data Leaks</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The Problem Section */}
                <section id="problem" className="py-32 px-6">
                    <div className="container mx-auto max-w-5xl flex flex-col items-center text-center gap-6 mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">AI Assistants Suggest. They Don't Execute.</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Traditional AI editors act as advanced autocomplete. They lack system-wide awareness, resulting in broken architectures and manual oversight.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto max-w-5xl">
                        <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 flex flex-col gap-4">
                            <div className="p-2 w-fit rounded-lg bg-background border shadow-sm"><Terminal className="size-5 text-muted-foreground"/></div>
                            <h3 className="text-lg font-semibold tracking-tight">Localized Context</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                standard copilots only see the file you have open. Refactoring a core interface leaves hundreds of undocumented breaking changes across your system.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 flex flex-col gap-4">
                            <div className="p-2 w-fit rounded-lg bg-background border shadow-sm"><Box className="size-5 text-muted-foreground"/></div>
                            <h3 className="text-lg font-semibold tracking-tight">Black-Box Reasoning</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Code generation without deterministic control. When an AI generates 500 lines of code in a single block, you spend more time verifying it than writing it.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 flex flex-col gap-4">
                            <div className="p-2 w-fit rounded-lg bg-background border shadow-sm"><Zap className="size-5 text-muted-foreground"/></div>
                            <h3 className="text-lg font-semibold tracking-tight">No Orchestration</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Current tools cannot chain tasks. You cannot say "Find all deprecated endpoints, rewrite them, update the tests, and run the CI pipeline."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. The Solution Section */}
                <section className="py-32 px-6 bg-muted/20 border-y border-border/40">
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex flex-col items-start gap-4 mb-16">
                            <span className="text-primary font-mono text-sm tracking-tight uppercase">Category Creation</span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">An Execution Engine, Not a Suggestion Box.</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl">
                                Trace.ai provides deterministic control over non-deterministic models.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            <div className="flex flex-col gap-3">
                                <GitPullRequest className="size-6 text-primary mb-2" />
                                <h3 className="text-xl font-semibold tracking-tight">Multi-File Autonomous Refactoring</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Agents traverse your abstract syntax tree (AST). Update a core database schema, and Trace dynamically cascades the necessary mutations through your repositories.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Workflow className="size-6 text-primary mb-2" />
                                <h3 className="text-xl font-semibold tracking-tight">Deterministic Node Orchestration</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Define execution bounds. Chain LLMs, bash scripts, and API calls in a visual graph to ensure the reasoning process is visible, auditable, and reproducible.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Cpu className="size-6 text-primary mb-2" />
                                <h3 className="text-xl font-semibold tracking-tight">Local Sub-Agent Execution</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Deploy lightweight, quantized models locally for latency-critical tasks while reserving frontier models (GPT-4, Claude 3) for complex architectural reasoning.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Shield className="size-6 text-primary mb-2" />
                                <h3 className="text-xl font-semibold tracking-tight">Transparent & Sandboxed Runtime</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Every action is logged. Code modifications occur in an isolated runtime environment. Nothing hits your main branch until the automated tests pass.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. How It Works */}
                <section className="py-32 px-6">
                    <div className="container mx-auto max-w-5xl flex flex-col items-center text-center gap-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Autonomous execution in three phases.</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
                            {/* Desktop connector line */}
                            <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[1px] bg-border z-0" />
                            
                            <div className="relative z-10 flex flex-col items-center gap-4 bg-background p-4">
                                <div className="size-12 rounded-full bg-secondary border border-border flex items-center justify-center font-mono text-sm font-bold shadow-sm">01</div>
                                <h3 className="text-lg font-semibold tracking-tight">Connect Repository</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Trace ingests your codebase, mapping dependencies, types, and architectural patterns into a vector-backed context graph.
                                </p>
                            </div>
                            <div className="relative z-10 flex flex-col items-center gap-4 bg-background p-4">
                                <div className="size-12 rounded-full bg-primary text-primary-foreground border flex items-center justify-center font-mono text-sm font-bold shadow-md">02</div>
                                <h3 className="text-lg font-semibold tracking-tight">Define Workflow</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Specify the objective via natural language or node graph. "Migrate this React component to a Server Component."
                                </p>
                            </div>
                            <div className="relative z-10 flex flex-col items-center gap-4 bg-background p-4">
                                <div className="size-12 rounded-full bg-secondary border border-border flex items-center justify-center font-mono text-sm font-bold shadow-sm">03</div>
                                <h3 className="text-lg font-semibold tracking-tight">Trace & Execute</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    The engine plans the refactor, writes the code, runs the test suite in a sandbox, and iterates until the outcome is achieved.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Differentiation Section */}
                <section id="compare" className="py-24 px-6 bg-secondary/20 border-y border-border/40">
                    <div className="container mx-auto max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">The Paradigm Shift</h2>
                        </div>
                        
                        <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-sm">
                            <div className="grid grid-cols-3 border-b border-border bg-muted/30 p-4">
                                <div className="font-semibold text-sm">Capability</div>
                                <div className="font-semibold text-sm text-center">Traditional AI Editors</div>
                                <div className="font-semibold text-sm text-center text-primary">Trace.ai Engine</div>
                            </div>
                            
                            {[
                                { label: "Reasoning Scope", old: "Active File / Snippet", new: "Full Codebase AST" },
                                { label: "Execution Model", old: "Autocomplete", new: "Agentic Orchestration" },
                                { label: "Workflow Control", old: "Prompt Engineering", new: "Deterministic Nodes" },
                                { label: "Local Models", old: "Limited / Unsupported", new: "Native Ollama Integration" },
                                { label: "Security & Testing", old: "Manual Verification", new: "Sandboxed CI/CD Runtime" },
                                { label: "Cost Management", old: "SaaS Subscription Only", new: "Bring Your Own Key (BYOK)" }
                            ].map((row, i) => (
                                <div key={i} className="grid grid-cols-3 border-b border-border/50 last:border-0 p-4 text-sm items-center hover:bg-muted/20 transition-colors">
                                    <div className="font-medium text-muted-foreground">{row.label}</div>
                                    <div className="text-center text-muted-foreground/80 flex flex-col items-center gap-2">
                                        <X className="size-4 text-muted-foreground/50" />
                                        <span className="hidden sm:inline">{row.old}</span>
                                    </div>
                                    <div className="text-center font-medium flex flex-col items-center gap-2">
                                        <Check className="size-4 text-primary" />
                                        <span className="hidden sm:inline">{row.new}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Pricing Preview */}
                <section id="pricing" className="py-32 px-6">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-col items-center text-center gap-4 mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Developer-native pricing.</h2>
                            <p className="text-muted-foreground text-lg max-w-xl">
                                Scale your autonomous workflows without predatory per-seat constraints.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Builder Tier */}
                            <div className="p-8 rounded-3xl border border-border/60 bg-background flex flex-col">
                                <h3 className="text-xl font-semibold tracking-tight">Builder</h3>
                                <p className="text-sm text-muted-foreground mt-2 mb-6">For individual developers orchestrating local workflows.</p>
                                <div className="text-4xl font-bold tracking-tight mb-8">Free</div>
                                <ul className="flex flex-col gap-4 text-sm text-muted-foreground mb-8 flex-1">
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> Local Agent Execution</li>
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> 10 Active Workspaces</li>
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> Bring Your Own Model</li>
                                </ul>
                                <Button variant="outline" className="w-full">Start Building</Button>
                            </div>

                            {/* Pro Tier (Highlighted) */}
                            <div className="p-8 rounded-3xl border-2 border-primary bg-background shadow-[0_0_40px_-10px_rgba(var(--primary),0.2)] flex flex-col relative scale-105 z-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                                    Production Standard
                                </div>
                                <h3 className="text-xl font-semibold tracking-tight">Pro</h3>
                                <p className="text-sm text-muted-foreground mt-2 mb-6">For AI engineers building production-grade systems.</p>
                                <div className="text-4xl font-bold tracking-tight mb-8">$40<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                                <ul className="flex flex-col gap-4 text-sm text-foreground mb-8 flex-1">
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> Unlimited Workspaces</li>
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> Cloud Runtime Execution</li>
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> Advanced AST Refactoring</li>
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> Sandboxed CI/CD Testing</li>
                                </ul>
                                <Button className="w-full shadow-md">Initialize Pro</Button>
                            </div>

                            {/* Team Tier */}
                            <div className="p-8 rounded-3xl border border-border/60 bg-background flex flex-col">
                                <h3 className="text-xl font-semibold tracking-tight">Team</h3>
                                <p className="text-sm text-muted-foreground mt-2 mb-6">For platform teams scaling autonomous development.</p>
                                <div className="text-4xl font-bold tracking-tight mb-8">Custom</div>
                                <ul className="flex flex-col gap-4 text-sm text-muted-foreground mb-8 flex-1">
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> VPC & On-Prem Deployments</li>
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> SAML SSO & Audit Logs</li>
                                    <li className="flex items-center gap-3"><Check className="size-4 text-primary" /> Custom Model Fine-Tuning</li>
                                </ul>
                                <Button variant="outline" className="w-full">Contact Sales</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Final CTA Section */}
                <section className="py-32 px-6 border-t border-border/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
                    
                    <div className="container mx-auto max-w-4xl flex flex-col items-center text-center gap-8 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Future of Development Is Autonomous.</h2>
                        <p className="text-muted-foreground text-xl max-w-2xl">
                            Stop editing lines. Start orchestrating systems.
                        </p>
                        
                        <div className="flex flex-col items-center gap-4 mt-4">
                            <SignInButton mode="modal">
                                <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                    Initialize Your Workspace
                                </Button>
                            </SignInButton>
                            <span className="text-sm font-mono text-muted-foreground mt-2">
                                No credit card required • Bring your own model • Secure by design
                            </span>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-12 border-t border-border/40 bg-background">
                <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 opacity-80">
                            <Workflow className="size-4 text-primary" />
                            <span className="text-base font-semibold tracking-tight">Trace.ai</span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            The execution engine for the AI-native developer. Build, orchestrate, and deploy deterministic software systems.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="size-4" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="size-4" /></Link>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-sm">Product</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Changelog</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="font-semibold text-sm">Legal</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security Details</Link>
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl px-6 mt-12 pt-8 border-t border-border/30">
                    <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Trace.ai, Inc. All rights reserved.</span>
                </div>
            </footer>
        </div>
    )
}