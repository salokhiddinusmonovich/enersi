import { useLang } from "@/contexts/LanguageContext";
import type { ServiceId } from "@/data/company";
import { FadeIn } from "@/components/effects/FadeIn";
import { Icon, type IconName } from "./Icon";

export const SERVICE_ICONS: Record<ServiceId, IconName> = {
    nku: "board", install: "cable", solar: "sun", audit: "gauge", compensation: "wave", service: "wrench",
};

export function ServiceCard({ id, index, detailed = false }: { id: ServiceId; index: number; detailed?: boolean }) {
    const { t } = useLang();
    const s = t.services[id];
    return (
        <FadeIn delay={index * 70} className="h-full">
            <article id={id} className="card group relative h-full scroll-mt-32 overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-volt-500/50 hover:shadow-lift">
                <div className="absolute right-6 top-6 font-display text-5xl font-black text-navy-50 transition-colors group-hover:text-volt-500/15">
                    {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 text-volt-500 transition-colors group-hover:bg-volt-500 group-hover:text-navy-900">
                    <Icon name={SERVICE_ICONS[id]} className="h-7 w-7" />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-bold text-navy-800">{s.title}</h3>
                <p className="relative mt-3 leading-relaxed text-ink-muted">{s.short}</p>
                {detailed && (
                    <ul className="relative mt-6 space-y-2.5 border-t border-line pt-6">
                        {s.points.map((p) => (
                            <li key={p} className="flex items-start gap-2.5 text-[15px] text-navy-800">
                                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-volt-600" strokeWidth={2.6} />
                                {p}
                            </li>
                        ))}
                    </ul>
                )}
            </article>
        </FadeIn>
    );
}
