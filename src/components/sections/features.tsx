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
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Everything you need to run a mastery-based course.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Caliber bridges the gap between your lecture materials and student practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {CONTENT.home.features.map((feature, i) => {
                        const IconComp = Icons[feature.icon as keyof typeof Icons] as React.ElementType;
                        return (
                            <Spotlight
                                key={i}
                                className="group flex flex-col items-start p-8 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="h-14 w-14 bg-aurora-blue/10 rounded-2xl mb-6 flex items-center justify-center shadow-sm text-aurora-blue group-hover:scale-110 group-hover:bg-aurora-blue/20 transition-all duration-300 border border-aurora-blue/10 group-hover:border-aurora-blue/50">
                                    {IconComp && <IconComp className="h-7 w-7" />}
                                </div>
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 relative z-10">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-light relative z-10">{feature.description}</p>
                            </Spotlight>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
