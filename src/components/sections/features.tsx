import { CONTENT } from "@/lib/content";
import { Map, FileText, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";

const Icons = {
    Map,
    FileText,
    Target
};

export function Features() {
    return (
        <section className="py-24 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        Everything you need to run a mastery-based course.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        Caliber bridges the gap between your lecture materials and student practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {CONTENT.home.features.map((feature, i) => {
                        const IconComp = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
                        return (
                            <Spotlight
                                key={i}
                                className="group flex flex-col items-start p-8 hover:-translate-y-2 transition-all duration-300 bg-white/40 backdrop-blur-sm border border-slate-200/50 hover:border-aurora-blue/50 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-aurora-blue/5"
                            >
                                <div className="h-14 w-14 bg-aurora-blue/5 rounded-2xl mb-6 flex items-center justify-center shadow-inner text-aurora-blue group-hover:scale-110 group-hover:bg-aurora-blue group-hover:text-white transition-all duration-500 border border-aurora-blue/20">
                                    {IconComp && <IconComp className="h-7 w-7" />}
                                </div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 relative z-10 tracking-tight group-hover:text-aurora-blue transition-colors">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-normal relative z-10 text-sm md:text-base">{feature.description}</p>
                            </Spotlight>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
