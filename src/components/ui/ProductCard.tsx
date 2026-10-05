import { useLang } from "@/contexts/LanguageContext";
import type { ProductId } from "@/data/company";
import { FadeIn } from "@/components/effects/FadeIn";
import { CabinetIllustration } from "./CabinetIllustration";
import { Icon } from "./Icon";

export function ProductCard({ id, index, detailed = false }: { id: ProductId; index: number; detailed?: boolean }) {
    const { t } = useLang();
    const p = t.products[id];
    return (
        <FadeIn delay={index * 80} className="h-full">
            <article id={id} className="card group flex h-full scroll-mt-32 flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative flex items-center justify-center bg-gradient-to-b from-navy-50 to-white px-8 pb-2 pt-8">
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-navy-800 shadow-card">
                        <Icon name="shield" className="h-3.5 w-3.5 text-volt-600" strokeWidth={2.2} />
                        {t.products.certified}
                    </span>
                    <CabinetIllustration id={id} className="h-56 w-auto drop-shadow-[0_18px_24px_rgba(10,38,62,.18)] transition duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                    <div className="font-display text-2xl font-black italic text-volt-600">{p.code}</div>
                    <h3 className="mt-1 font-display text-lg font-bold leading-snug text-navy-800">{p.name}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{p.desc}</p>
                    {detailed && (
                        <ul className="mt-5 space-y-2 border-t border-line pt-5">
                            {p.features.map((f) => (
                                <li key={f} className="flex items-start gap-2.5 text-sm text-navy-800">
                                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-volt-600" strokeWidth={2.6} />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </article>
        </FadeIn>
    );
}
