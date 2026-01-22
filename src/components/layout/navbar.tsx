"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-card/80 backdrop-blur-md border-white/5 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold text-slate-900 tracking-tight">{CONTENT.nav.logo}</span>
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {CONTENT.nav.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-aurora-blue",
                                    pathname === link.href ? "text-aurora-blue" : "text-slate-600"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-card border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {CONTENT.nav.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium",
                                    pathname === link.href
                                        ? "bg-white/10 text-ucsb-gold"
                                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
