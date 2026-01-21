import { CONTENT } from "@/lib/content";
import { Map, FileText, Target } from "lucide-react";
import { cn } from "@/lib/utils";

const Icons = {
    Map,
    FileText,
    Target
};

export function Features() {
    return (
        <section className="py-24 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need to run a mastery-based course.
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        Caliber bridges the gap between your lecture materials and student practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {CONTENT.home.features.map((feature, i) => {
                        const IconComp = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
                        return (
                            <div
                                key={i}
                                className={cn(
                                    "p-8 rounded-3xl border border-white/10 bg-card backdrop-blur-sm hover:border-ucsb-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_var(--ucsb-gold)] group hover:-translate-y-2",
                                    "flex flex-col items-start"
                                )}
                            >
                                <div className="h-14 w-14 bg-white/5 rounded-2xl mb-6 flex items-center justify-center shadow-inner text-ucsb-gold group-hover:scale-110 group-hover:bg-ucsb-gold/10 transition-all duration-300 border border-white/5 group-hover:border-ucsb-gold/50">
                                    {IconComp && <IconComp className="h-7 w-7" />}
                                </div>
                                <h3 className="text-xl font-display font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-light">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
