import { useLang } from "@/contexts/LanguageContext";
import { FadeIn } from "@/components/effects/FadeIn";

export const TrustStrip = () => {
    const { t } = useLang();
    return (
        <section className="container relative z-10 -mt-12">
            <FadeIn>
                <div className="card grid grid-cols-2 divide-line overflow-hidden lg:grid-cols-4 lg:divide-x">
                    {t.home.trust.map((item, i) => (
                        <div key={i} className={`p-6 md:p-8 ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${i % 2 === 0 ? "border-r border-line lg:border-r-0" : ""}`}>
                            <div className="font-display text-2xl font-black italic text-navy-800 md:text-3xl">{item.title}</div>
                            <div className="mt-1.5 text-sm text-ink-muted">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </section>
    );
};
