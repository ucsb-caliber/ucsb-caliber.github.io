import { CONTENT } from "@/lib/content";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export default function TeamPage() {
    const allMembers = CONTENT.team.members;

    const leadership = allMembers.filter(m =>
        m.role === "Faculty Advisor" ||
        m.role === "Graduate Student Mentor" ||
        m.role === "Team Lead" ||
        m.role === "Development Team Lead"
    );

    const rdTeam = allMembers.filter(m =>
        m.role === "" &&
        allMembers.indexOf(m) >= 5 && allMembers.indexOf(m) < 10
    );

    const devTeam = allMembers.filter(m =>
        m.role === "" &&
        allMembers.indexOf(m) >= 10
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

                {/* Leadership Section */}
                <div className="mb-32">
                    <h2 className="text-xs font-bold text-aurora-blue uppercase tracking-[0.2em] mb-12 border-b border-slate-100 pb-4">Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {leadership.map((member, i) => (
                            <TeamMemberCard key={i} member={member} size="large" />
                        ))}
                    </div>
                </div>

                {/* R&D Team Section */}
                <div className="mb-32">
                    <h2 className="text-xs font-bold text-aurora-blue uppercase tracking-[0.2em] mb-12 border-b border-slate-100 pb-4">Research & Development</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {rdTeam.map((member, i) => (
                            <TeamMemberCard key={i} member={member} />
                        ))}
                    </div>
                </div>

                {/* Dev Team Section */}
                <div className="mb-32">
                    <h2 className="text-xs font-bold text-aurora-blue uppercase tracking-[0.2em] mb-12 border-b border-slate-100 pb-4">Development Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {devTeam.map((member, i) => (
                            <TeamMemberCard key={i} member={member} />
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

interface TeamMemberCardProps {
    member: typeof CONTENT.team.members[number];
    size?: "small" | "large";
}

function TeamMemberCard({ member, size = "small" }: TeamMemberCardProps) {
    const isLarge = size === "large";

    return (
        <div className="group flex flex-col items-center text-center">
            {member.linkedin ? (
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "relative block overflow-hidden rounded-full bg-slate-100 mb-6 border-4 border-white shadow-lg",
                        "hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:border-aurora-blue/20 cursor-pointer",
                        isLarge ? "h-48 w-48" : "h-40 w-40"
                    )}
                >
                    <Image
                        src={getAssetPath(member.image)}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />
                </a>
            ) : (
                <div className={cn(
                    "relative overflow-hidden rounded-full bg-slate-100 mb-6 border-4 border-white shadow-lg",
                    isLarge ? "h-48 w-48" : "h-40 w-40"
                )}>
                    <Image
                        src={getAssetPath(member.image)}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <h3 className={cn(
                "text-slate-900 mb-1",
                isLarge ? "text-xl font-extrabold tracking-tight" : "text-base font-bold"
            )}>{member.name}</h3>
            {member.role && (
                <p className="text-aurora-blue font-bold text-[11px] leading-tight transition-colors">
                    {member.role}
                </p>
            )}
            {isLarge && member.bio && (
                <p className="text-aurora-blue font-bold text-[11px] leading-tight max-w-xs transition-colors">
                    {member.bio}
                </p>
            )}
        </div>
    );
}

// Helper function if not imported
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
