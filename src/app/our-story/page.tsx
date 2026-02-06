import { CONTENT } from "@/lib/content";

export default function OurStoryPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-slate-900 tracking-tight sm:text-5xl mb-6">
                        {CONTENT.story.title}
                    </h1>
                    <p className="text-xl text-slate-600 mb-12 font-medium">
                        {CONTENT.story.subtitle}
                    </p>

                    <div className="prose prose-slate prose-lg">
                        {CONTENT.story.content.map((paragraph, index) => (
                            <p key={index} className="mb-6 text-slate-700 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    );
}
