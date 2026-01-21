import { Badge } from "@/components/ui/badge";

export default function ProductPage() {
    return (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-2xl">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Product Roadmap</h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        We are currently building for the Spring 2026 pilot program.
                        Our focus is on core instructor workflows first, followed by the student delivery experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Now */}
                    <div className="border border-navy/10 rounded-2xl p-8 bg-navy/5 shadow-sm">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-navy/10">
                            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                            <h2 className="text-sm font-bold text-navy uppercase tracking-widest">Now (Active)</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-slate-900">Outcome Mapping</span>
                                    <Badge variant="default" className="text-[10px] h-5 px-1.5">BETA</Badge>
                                </div>
                                <p className="text-sm text-slate-600">Tagging lecture materials with Bloom&apos;s taxonomy levels.</p>
                            </li>
                            <li className="group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-slate-900">Question Gen</span>
                                    <Badge variant="default" className="text-[10px] h-5 px-1.5">BETA</Badge>
                                </div>
                                <p className="text-sm text-slate-600">AI-assisted creation of practice problems from notes.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Next */}
                    <div className="border border-slate-200 rounded-2xl p-8 bg-white">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                            <div className="h-3 w-3 rounded-full bg-gold"></div>
                            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Next (Q2)</h2>
                        </div>
                        <ul className="space-y-6">
                            <li className="group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-slate-900">Student Frontend</span>
                                    <Badge variant="secondary" className="text-[10px] h-5 px-1.5">DEV</Badge>
                                </div>
                                <p className="text-sm text-slate-600">Minimalist interface for taking practice assignments.</p>
                            </li>
                            <li className="group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-slate-900">Mastery View</span>
                                    <Badge variant="secondary" className="text-[10px] h-5 px-1.5">DEV</Badge>
                                </div>
                                <p className="text-sm text-slate-600">Dashboard showing student progress by skill tag.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Later */}
                    <div className="border border-slate-100 rounded-2xl p-8 bg-slate-50/50">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                            <div className="h-3 w-3 rounded-full bg-slate-300"></div>
                            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Later</h2>
                        </div>
                        <ul className="space-y-6 opacity-70">
                            <li>
                                <div className="font-semibold text-slate-900 mb-1">Canvas Integration</div>
                                <p className="text-sm text-slate-500">Deep linking and grade pass-back.</p>
                            </li>
                            <li>
                                <div className="font-semibold text-slate-900 mb-1">Advanced Analytics</div>
                                <p className="text-sm text-slate-500">Department-level learning outcome reporting.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
