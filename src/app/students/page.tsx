import { CONTENT } from "@/lib/content";
import { Check } from "lucide-react";

export default function StudentsPage() {
    return (
        <div className="bg-white">
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">{CONTENT.students.title}</h1>
                    <p className="text-xl text-slate-600">{CONTENT.students.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {CONTENT.students.features.map((feat, i) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100 text-navy">
                                <Check className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                            <p className="text-slate-600">{feat.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-24 bg-navy/5 rounded-3xl p-12 text-center max-w-4xl mx-auto border border-navy/5">
                    <h2 className="text-2xl font-bold text-navy mb-4">What you won&apos;t see</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We removed the clutter. No confusing navigation, no buried assignments, no &quot;where do I submit?&quot; panic.
                        Just a clear path to mastery.
                    </p>
                </div>
            </section>
        </div>
    )
}
