import { CONTENT } from "@/lib/content";
import { Info } from "lucide-react";

export function MVPBanner() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-slate-100 shadow-xl">
                    <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center animate-pulse shadow-lg">
                            <Info className="h-8 w-8 text-aurora-blue" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{CONTENT.home.mvpBanner.title}</h3>
                        <p className="text-sm md:text-base font-medium leading-7 text-slate-600">
                            {CONTENT.home.mvpBanner.description}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white border border-white/50 text-aurora-purple text-sm font-bold tracking-wide uppercase shadow-sm">
                            Course Pilots
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
