import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import RetroGrid from "@/components/ui/retro-grid";

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col relative overflow-hidden">
            <Navbar />

            <div className="flex-grow flex flex-col items-center justify-center relative px-4">
                <RetroGrid className="opacity-10" />

                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8">
                        Research coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-aurora-blue to-aurora-purple">soon.</span>
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed font-medium mb-12">
                        We are currently formalizing our findings on mastery-based learning and AI-assisted pedagogy at scale. Stay tuned for our whitepaper and case studies.
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aurora-blue/5 border border-aurora-blue/20 mb-12 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aurora-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-aurora-blue"></span>
                        </span>
                        <span className="text-[10px] font-bold text-aurora-blue uppercase tracking-widest">In Development</span>
                    </div>

                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-auto"></div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
