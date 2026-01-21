export default function ResearchPage() {
    return (
        <article className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
                <p className="text-navy font-semibold uppercase tracking-wide mb-2">Pedagogy</p>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">Evidence-Based Instruction</h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Caliber is built on the principles of Mastery Learning and Constructive Alignment, ensuring that assessments actually measure what was taught.
                </p>
            </header>

            <div className="space-y-12 text-lg text-slate-700 leading-relaxed">
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Bloom&apos;s Taxonomy Alignment</h2>
                    <p className="mb-4">
                        One of the hardest parts of creating exams is ensuring difficulty consistency. We use Large Language Models (LLMs) to classify every generated question against local standards based on Bloom&apos;s Revised Taxonomy.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 marker:text-navy">
                        <li><strong>Remember & Understand:</strong> retrieval practice.</li>
                        <li><strong>Apply & Analyze:</strong> scenario-based problem solving.</li>
                        <li><strong>Evaluate & Create:</strong> high-level synthesis tasks.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">The Mastery Loop</h2>
                    <p>
                        Traditional grading &quot;moves on&quot; whether the student learned the concept or not. Mastery learning halts progress on specific strands until competence is demonstrated. Caliber facilitates this by generating infinite variations of practice problems for specific skill tags until the student proves readiness.
                    </p>
                </section>

                <section className="bg-slate-50 p-6 rounded-xl border-l-4 border-navy">
                    <h3 className="font-bold text-slate-900 mb-2">Why It Matters</h3>
                    <p className="text-slate-600 text-base">
                        Research shows that 1-sigma improvement in student outcomes is possible when shifting from
                        conventional instruction to mastery learning relative to control groups (Bloom, 1984).
                    </p>
                </section>
            </div>
        </article>
    )
}
