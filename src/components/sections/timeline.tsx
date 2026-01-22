import { CONTENT } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Timeline() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background noise texture - faint on light mode */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl font-display font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-magenta">{CONTENT.home.timeline.title}</h2>

                <div className="relative">
                    {/* Glowing Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-aurora-blue/20 via-aurora-purple to-aurora-blue/20 shadow-[0_0_15px_var(--aurora-blue)] md:-ml-0.5"></div>

                    <div className="space-y-16">
                        {CONTENT.home.timeline.steps.map((step, i) => (
                            <div key={i} className={`relative flex items-center md:justify-between ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                <div className="hidden md:block w-5/12"></div>

                                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-aurora-blue shadow-[0_0_10px_var(--aurora-blue)] z-10 -ml-4 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-aurora-blue rounded-full animate-pulse"></div>
                                </div>

                                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                                    <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-slate-200 hover:border-aurora-blue/50 transition-colors shadow-lg hover:shadow-xl group">
                                        <div className="text-aurora-blue font-mono text-sm mb-2 tracking-widest uppercase font-bold">Step 0{i + 1}</div>
                                        <h3 className="text-xl font-bold mb-3 font-display text-slate-900 group-hover:text-aurora-purple transition-colors">{step.title}</h3>
                                        <p className="text-slate-600 font-light">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
