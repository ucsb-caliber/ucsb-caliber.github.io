import { CONTENT } from "@/lib/content";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function Hero() {
    return (
        <AuroraBackground>
            <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="max-w-5xl mx-auto mb-6">
                        <TextGenerateEffect
                            words={CONTENT.home.hero.headline}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 drop-shadow-sm"
                        />
                    </div>

                    <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        {CONTENT.home.hero.subheadline}
                    </p>


                </div>
            </section>
        </AuroraBackground>
    );
}
