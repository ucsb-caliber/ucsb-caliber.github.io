import { ArrowUpRight, BookOpen, CalendarDays, FileText, MapPin } from "lucide-react";

import RetroGrid from "@/components/ui/retro-grid";

const publication = {
    title: "Caliber: AI-Assisted Infrastructure for Mastery-Based Computer Science Education at Scale",
    authors: [
        "Nikhil Kapasi",
        "Derek Kirschbaum",
        "Aryaman Singh",
        "Diba Mirza",
    ],
    venue: "Proceedings of the 31st ACM Conference on Innovation and Technology in Computer Science Education V. 2",
    shortVenue: "ITiCSE 2026",
    dates: "July 10-15, 2026",
    location: "Madrid, Spain",
    doi: "10.1145/3803401.3811974",
    isbn: "979-8-4007-2633-0/2026/07",
    rights: "ACM publication. Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).",
};

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            <RetroGrid className="opacity-10" />

            <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-28 sm:px-8">
                <div className="max-w-3xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aurora-blue/20 bg-aurora-blue/5 px-3 py-1">
                        <BookOpen className="h-3.5 w-3.5 text-aurora-blue" aria-hidden="true" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-aurora-blue">
                            Research
                        </span>
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
                        Publications
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600">
                        Our work studies how AI-assisted infrastructure can support mastery-based
                        learning workflows in large-scale computer science education.
                    </p>
                </div>

                <article className="mt-14 overflow-hidden rounded-lg border border-slate-200 bg-white/85 shadow-sm backdrop-blur">
                    <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-4 sm:px-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600">
                            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-widest text-white">
                                {publication.shortVenue}
                            </span>
                            <span>{publication.venue}</span>
                        </div>
                    </div>

                    <div className="px-6 py-7 sm:px-8 sm:py-8">
                        <h2 className="max-w-4xl text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
                            {publication.title}
                        </h2>

                        <p className="mt-4 text-base font-medium leading-7 text-slate-700">
                            {publication.authors.join(", ")}
                        </p>

                        <div className="mt-7 grid gap-4 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex items-start gap-3">
                                <CalendarDays className="mt-0.5 h-4 w-4 text-aurora-blue" aria-hidden="true" />
                                <span>{publication.dates}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 text-aurora-blue" aria-hidden="true" />
                                <span>{publication.location}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FileText className="mt-0.5 h-4 w-4 text-aurora-blue" aria-hidden="true" />
                                <span>ISBN {publication.isbn}</span>
                            </div>
                            <a
                                className="flex items-start gap-3 font-semibold text-slate-900 transition hover:text-aurora-blue"
                                href={`https://doi.org/${publication.doi}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                <ArrowUpRight className="mt-0.5 h-4 w-4 text-aurora-blue" aria-hidden="true" />
                                <span>DOI {publication.doi}</span>
                            </a>
                        </div>

                        <div className="mt-8 border-t border-slate-200 pt-5">
                            <p className="text-sm leading-6 text-slate-500">{publication.rights}</p>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}
