import React from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <div
            className={cn(
                "relative flex flex-col items-center justify-center bg-transparent text-slate-950 transition-bg",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={cn(
                        `
            [--white-gradient:repeating-linear-gradient(100deg,var(--background)_0%,var(--background)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--background)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--aurora-blue)_10%,var(--aurora-purple)_15%,var(--aurora-blue)_20%,var(--aurora-magenta)_25%,var(--aurora-cyan)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,_50%_50%]
            filter blur-[10px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-blob after:[background-attachment:fixed] after:mix-blend-multiply
            pointer-events-none
            absolute -inset-[10px] opacity-40 will-change-transform`,

                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
                    )}
                ></div>
                {/* Simplified Blob Version if the complex CSS is too heavy or weird */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-aurora-purple rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-aurora-cyan rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-aurora-magenta rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative z-10 w-full">{children}</div>
        </div>
    );
};
