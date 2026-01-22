import { Badge } from "@/components/ui/badge";

export function ProductPreview() {
    const items = [
        { title: "Smart Tagging", desc: "Automated Bloom's taxonomy classification via LLM", status: "Beta" },
        { title: "Content Extraction", desc: "Parse structural plans from PDFs and Slides", status: "Alpha" },
        { title: "Assignment Builder", desc: "Drag-and-drop assembly of practice sets", status: "In Dev" },
        { title: "Mastery Dashboard", desc: "Real-time student progress heatmaps", status: "In Dev" },
    ];

    return (
        <section className="py-24 bg-transparent border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Platform Components</h2>
                    <p className="mt-4 text-slate-600">Modular tools designed for the modern course workflow.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, i) => (
                        <div key={i} className="group p-6 rounded-xl border border-slate-200 bg-white/60 backdrop-blur-sm hover:border-aurora-blue/50 hover:shadow-[0_0_20px_rgba(0,128,255,0.1)] hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div className="h-10 w-10 bg-aurora-blue/10 rounded-lg group-hover:bg-aurora-blue/20 transition-colors flex items-center justify-center">
                                    <div className="w-5 h-5 bg-aurora-blue rounded-full opacity-50"></div>
                                </div>
                                <Badge variant={item.status === "Beta" ? "default" : "secondary"} className="bg-slate-100 text-slate-600 group-hover:bg-aurora-blue group-hover:text-white transition-colors">{item.status}</Badge>
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
