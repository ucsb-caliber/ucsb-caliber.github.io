"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
            {/* Aurora Blobs */}
            <div className="absolute top-[10%] -left-20 w-[500px] h-[500px] bg-aurora-purple/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
            <div className="absolute top-[40%] -right-20 w-[500px] h-[500px] bg-aurora-cyan/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-[70%] left-1/4 w-[500px] h-[500px] bg-aurora-magenta/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>

            {/* Global Mask */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
        </div>
    );
}
