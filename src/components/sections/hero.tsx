import { CONTENT } from "@/lib/content";

export function Hero() {
    return (
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
            {/* Background gradients */}
            {/* Background removed to reveal RetroGrid */}
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#febc111a,transparent)]"></div>
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_800px_at_50%_-100px,#00366015,transparent)]"></div>
            </div> */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-100 mb-6 max-w-5xl mx-auto drop-shadow-lg drop-shadow-ucsb-gold/20">
                    {CONTENT.home.hero.headline}
                </h1>

                <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {CONTENT.home.hero.subheadline}
                </p>
            </div>
        </section>
    );
}
