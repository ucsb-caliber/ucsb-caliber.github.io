import { CONTENT } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Timeline() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background noise texture - faint on light mode */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue via-aurora-purple to-aurora-magenta">{CONTENT.home.timeline.title}</h2>

                <div className="relative">
                    {/* Horizontal Connector Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-px bg-gradient-to-r from-aurora-blue/0 via-aurora-blue/40 to-aurora-blue/0 z-0"></div>

                    <div className="flex flex-col md:flex-row gap-8 relative z-10 justify-between">
                        {CONTENT.home.timeline.steps.map((step, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center group min-w-0">
                                {/* Step Marker */}
                                <div className="w-14 h-14 rounded-full bg-white border-2 border-aurora-blue shadow-[0_0_15px_rgba(56,189,248,0.2)] z-10 mb-8 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-300">
                                    <div className="w-3 h-3 bg-aurora-blue rounded-full animate-pulse"></div>
                                </div>

                                {/* Step Content */}
                                <div className="w-full text-center">
                                    <div className="bg-white/40 backdrop-blur-md p-6 rounded-2xl border border-slate-200/50 hover:border-aurora-blue/50 transition-all shadow-lg hover:shadow-aurora-blue/5 h-full flex flex-col items-center min-h-[160px]">
                                        <div className="text-aurora-blue font-mono text-[10px] mb-2 tracking-[0.2em] uppercase font-bold opacity-70">Step 0{i + 1}</div>
                                        <h3 className="text-lg font-bold mb-3 font-display text-slate-900 group-hover:text-aurora-blue transition-colors tracking-tight">{step.title}</h3>
                                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal opacity-90">{step.description}</p>
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
