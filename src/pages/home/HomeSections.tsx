import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { DOCS, PRODUCT_IDS, SERVICE_IDS } from "@/data/company";
import { FadeIn } from "@/components/effects/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { DocCard } from "@/components/ui/DocumentViewer";
import { Icon, type IconName } from "@/components/ui/Icon";

function MoreLink({ to, label }: { to: string; label: string }) {
    return (
        <Link to={to} className="btn-outline shrink-0">
            {label}
            <Icon name="arrow" className="h-4 w-4" strokeWidth={2.4} />
        </Link>
    );
}

export const ServicesSection = () => {
    const { t } = useLang();
    return (
        <section className="container py-24 md:py-28">
            <SectionHeading
                eyebrow={t.home.servicesEyebrow}
                title={t.home.servicesTitle}
                sub={t.home.servicesSub}
                action={<MoreLink to="/services" label={t.common.allServices} />}
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {SERVICE_IDS.map((id, i) => <ServiceCard key={id} id={id} index={i} />)}
            </div>
        </section>
    );
};

export const ProductsSection = () => {
    const { t } = useLang();
    return (
        <section className="bg-navy-50 py-24 md:py-28">
            <div className="container">
                <SectionHeading
                    eyebrow={t.home.productsEyebrow}
                    title={t.home.productsTitle}
                    sub={t.home.productsSub}
                    action={<MoreLink to="/products" label={t.common.allProducts} />}
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {PRODUCT_IDS.map((id, i) => <ProductCard key={id} id={id} index={i} />)}
                </div>
            </div>
        </section>
    );
};

const WHY_ICONS: IconName[] = ["doc", "shield", "users", "bolt"];

export const WhySection = () => {
    const { t } = useLang();
    return (
        <section className="relative overflow-hidden bg-navy-800 py-24 text-white md:py-28">
            <div className="bg-grid absolute inset-0 opacity-60" />
            <div className="container relative grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-center">
                <FadeIn>
                    <span className="eyebrow !text-volt-400">{t.home.whyEyebrow}</span>
                    <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-[2.6rem]">{t.home.whyTitle}</h2>
                    <img src="/brand/logo-white.png" alt="ENERSI" className="mt-10 hidden w-56 opacity-90 lg:block" loading="lazy" />
                </FadeIn>
                <div className="grid gap-4 sm:grid-cols-2">
                    {t.home.why.map((w, i) => (
                        <FadeIn key={i} delay={i * 80}>
                            <div className="h-full rounded-2xl border border-white/10 bg-white/[.04] p-6 backdrop-blur transition hover:border-volt-500/40 hover:bg-white/[.07]">
                                <Icon name={WHY_ICONS[i]} className="h-8 w-8 text-volt-500" />
                                <h3 className="mt-5 font-display text-lg font-bold">{w.title}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{w.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const ProcessSection = () => {
    const { t } = useLang();
    return (
        <section className="container py-24 md:py-28">
            <SectionHeading eyebrow={t.home.processEyebrow} title={t.home.processTitle} align="center" />
            <div className="relative grid gap-8 md:grid-cols-5 md:gap-5">
                <div className="absolute left-[10%] right-[10%] top-7 hidden h-[2px] bg-[repeating-linear-gradient(90deg,#ff9e19_0_10px,transparent_10px_18px)] md:block" />
                {t.home.steps.map((s, i) => (
                    <FadeIn key={i} delay={i * 90}>
                        <div className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-800 font-display text-lg font-black italic text-volt-500 shadow-lift ring-8 ring-white">
                                {i + 1}
                            </span>
                            <div>
                                <h3 className="font-display text-base font-bold text-navy-800 md:mt-5">{s.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export const DocsSection = () => {
    const { t } = useLang();
    return (
        <section className="bg-navy-50 py-24 md:py-28">
            <div className="container">
                <SectionHeading
                    eyebrow={t.home.docsEyebrow}
                    title={t.home.docsTitle}
                    sub={t.home.docsSub}
                    action={<MoreLink to="/certificates" label={t.common.allDocs} />}
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {DOCS.slice(0, 3).map((d, i) => <DocCard key={d.id} doc={d} delay={i * 80} />)}
                </div>
            </div>
        </section>
    );
};
