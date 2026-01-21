import { CONTENT } from "@/lib/content";
import Image from "next/image";

export default function TeamPage() {
    return (
        <div className="bg-white">
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-20">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Building the future of <br /> course planning at UCSB.</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        We are a multidisciplinary team of designers, engineers, and learning scientists.
                        {CONTENT.team.expectations}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
                    {CONTENT.team.members.map((member, i) => (
                        <div key={i} className="group flex flex-col items-center text-center">
                            <div className="relative h-48 w-48 overflow-hidden rounded-full bg-slate-100 mb-6 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 group-hover:shadow-xl group-hover:border-navy/10">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                            <p className="text-navy font-semibold text-sm mb-2 uppercase tracking-wide">{member.role}</p>
                            <p className="text-slate-600 leading-relaxed text-sm max-w-xs">{member.bio}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-50 rounded-3xl p-12 text-center border border-slate-200">
                    <p className="text-slate-600 text-lg">Our team is composed of dedicated students and faculty from the UCSB Computer Science department.</p>
                </div>
            </section>
        </div>
    )
}
