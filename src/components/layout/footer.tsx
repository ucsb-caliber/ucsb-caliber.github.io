import Link from "next/link";
import { CONTENT } from "@/lib/content";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-xl font-bold text-slate-900 tracking-tight">{CONTENT.nav.logo}</span>
                        <p className="mt-4 text-sm text-slate-600 max-w-xs">
                            AI-assisted course planning and mastery-based practice for rigorous university instruction.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Platform</h3>
                        <ul className="mt-4 space-y-4">
                            {/* <li>
                                <Link href="/instructors" className="text-base text-slate-400 hover:text-ucsb-gold">
                                    Instructors
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/students" className="text-base text-slate-500 hover:text-aurora-blue transition-colors">
                                    Students
                                </Link>
                            </li>
                            <li>
                                <Link href="/product" className="text-base text-slate-500 hover:text-aurora-blue transition-colors">
                                    Product
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">Connect</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/team" className="text-base text-slate-500 hover:text-aurora-blue transition-colors">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <a href={`mailto:${CONTENT.common.links.contactEmail}`} className="text-base text-slate-500 hover:text-aurora-blue transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href={CONTENT.common.links.github} target="_blank" rel="noopener noreferrer" className="text-base text-slate-500 hover:text-aurora-blue transition-colors">
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-8 flex justify-between items-center">
                    <p className="text-base text-slate-400">
                        &copy; {currentYear} UCSB Caliber. All rights reserved.
                    </p>
                    <div className="flex flex-col items-end gap-1">
                        <div className="text-sm text-slate-500 font-medium flex items-center gap-1">
                            Designed by Students for Students <span className="text-aurora-magenta">❤️</span>
                        </div>
                        <div className="text-xs text-slate-400 font-medium">
                            Built at UCSB
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
