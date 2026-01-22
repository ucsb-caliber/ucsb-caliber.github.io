"use client";

import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React, { MouseEvent } from "react";

export const Spotlight = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group/spotlight relative border border-slate-200 bg-white/60 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 128, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
};
