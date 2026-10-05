import { ReactNode } from "react";
import { FadeIn } from "@/components/effects/FadeIn";

export function SectionHeading({ eyebrow, title, sub, align = "left", action }: {
    eyebrow: string; title: string; sub?: string; align?: "left" | "center"; action?: ReactNode;
}) {
    const center = align === "center";
    return (
        <FadeIn className={`mb-12 flex flex-col gap-6 md:mb-14 ${center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
            <div className={center ? "max-w-2xl" : "max-w-2xl"}>
                <span className="eyebrow">{eyebrow}</span>
                <h2 className="h-section mt-4">{title}</h2>
                {sub && <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">{sub}</p>}
            </div>
            {action}
        </FadeIn>
    );
}
