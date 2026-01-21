import { CONTENT } from "@/lib/content";

export function Credibility() {
    return (
        <section className="bg-transparent border-t border-white/5 py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Trusted Foundation</p>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {CONTENT.home.credibility.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3 group cursor-default">
                            <div className="h-8 w-8 rounded bg-white/5 flex items-center justify-center text-ucsb-gold font-serif font-bold group-hover:bg-ucsb-gold group-hover:text-navy transition-colors">
                                {item.charAt(0)}
                            </div>
                            <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
