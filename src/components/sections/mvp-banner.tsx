import { CONTENT } from "@/lib/content";
import { Info } from "lucide-react";

export function MVPBanner() {
    return (
        <section className="bg-navy py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[300px] w-[300px] rounded-full bg-gold opacity-10 blur-[80px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-white/10 shadow-2xl">
                    <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-full bg-gold flex items-center justify-center animate-pulse">
                            <Info className="h-8 w-8 text-navy" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">{CONTENT.home.mvpBanner.title}</h3>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="inline-flex items-center px-4 py-2 rounded-lg bg-navy-hover border border-white/10 text-gold text-sm font-bold tracking-wide uppercase">
                            Active Construction
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
