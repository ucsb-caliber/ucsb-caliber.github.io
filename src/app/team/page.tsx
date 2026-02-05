import { CONTENT } from "@/lib/content";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function TeamPage() {
    const leadership = CONTENT.team.members.filter(m =>
        m.role === "Faculty" || m.role === "Research and Development Team"
    );
    const devLeads = CONTENT.team.members.filter(m =>
        m.role === "Dev Team Lead"
    );

    return (
        <div className="bg-white">
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-20">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Building Mastery Based Learning at Scale</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Our team is composed of dedicated faculty and students from the UCSB Computer Science department.
                    </p>
                </div>

                {/* Leadership / R&D */}
                <div className="mb-24">
                    <h2 className="text-xs font-bold text-aurora-blue uppercase tracking-[0.2em] mb-12 border-b border-slate-100 pb-4">Leadership & R&D</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {leadership.map((member, i) => (
                            <TeamMemberCard key={i} member={member} />
                        ))}
                    </div>
                </div>

                {/* Dev Team Leads */}
                <div className="mb-24">
                    <h2 className="text-xs font-bold text-aurora-blue uppercase tracking-[0.2em] mb-12 border-b border-slate-100 pb-4">Dev Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl">
                        {devLeads.map((member, i) => (
                            <TeamMemberCard key={i} member={member} />
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

function TeamMemberCard({ member }: { member: typeof CONTENT.team.members[0] }) {
    return (
        <div className="group flex flex-col items-center text-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full bg-slate-100 mb-6 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300 group-hover:shadow-xl group-hover:border-aurora-blue/20">
                <Image
                    src={getAssetPath(member.image)}
                    alt={member.name}
                    fill
                    className="object-cover"
                />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
            <p className="text-aurora-blue font-bold text-[10px] mb-2 uppercase tracking-widest">{member.role}</p>
            <p className="text-slate-600 leading-relaxed text-sm max-w-xs">{member.bio}</p>
        </div>
    );
}
