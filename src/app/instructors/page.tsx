import { Button } from "@/components/ui/button";
import { CONTENT } from "@/lib/content";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InstructorsPage() {
    return (
        <div className="bg-white">
            <section className="py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-navy mb-4">{CONTENT.instructors.title}</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Streamline your course planning and give students better feedback without the grading overhead.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Reclaim Your Teaching Time</h2>
                            <div className="space-y-8">
                                {CONTENT.instructors.painPoints.map((pt, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 text-xs font-bold mt-1">✕</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900">{pt.title}</h3>
                                            <p className="text-slate-600 mt-1">{pt.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-navy rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 bg-gold opacity-10 blur-3xl rounded-full"></div>
                            <h2 className="text-2xl font-bold mb-6 text-gold">The Caliber Advantage</h2>
                            <ul className="space-y-4 relative z-10">
                                {CONTENT.instructors.outputs.map((out, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-200">{out}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <p className="text-sm text-slate-400 mb-4 uppercase tracking-wide font-semibold">Interested?</p>
                                <Button variant="secondary" size="lg" className="w-full text-base font-bold" asChild>
                                    <Link href="/product">
                                        View Product Roadmap <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
