import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { DOCS, NKU_CERT, PRODUCT_IDS } from "@/data/company";
import { usePageTitle } from "@/hooks/usePageTitle";
import { FadeIn } from "@/components/effects/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/ui/ProductCard";
import { DocCard } from "@/components/ui/DocumentViewer";
import { Icon } from "@/components/ui/Icon";
import { CtaBanner } from "@/sections/CtaBanner";

export const ProductsPage = () => {
    const { t } = useLang();
    usePageTitle(t.pages.productsTitle);
    const p = t.products;
    const specs = [
        { label: p.standard, value: NKU_CERT.standard },
        { label: p.cert, value: NKU_CERT.number },
        { label: p.validUntil, value: NKU_CERT.validUntil },
        { label: p.hsCode, value: NKU_CERT.hsCode },
    ];

    return (
        <main>
            <PageHero title={t.pages.productsTitle} sub={t.pages.productsSub} />

            <section className="container relative z-10 -mt-10">
                <FadeIn>
                    <dl className="card grid grid-cols-2 overflow-hidden lg:grid-cols-4">
                        {specs.map((s, i) => (
                            <div key={s.label} className={`p-5 md:p-6 ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${i < 3 ? "lg:border-r lg:border-line" : ""} ${i % 2 === 0 ? "border-r border-line" : ""}`}>
                                <dt className="text-xs font-bold uppercase tracking-wider text-ink-soft">{s.label}</dt>
                                <dd className="mt-1.5 break-words font-mono text-sm font-bold text-navy-800 md:text-base">{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                </FadeIn>
            </section>

            <section className="container py-20 md:py-24">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {PRODUCT_IDS.map((id, i) => <ProductCard key={id} id={id} index={i} detailed />)}
                </div>
            </section>

            <section className="bg-navy-50 py-20 md:py-24">
                <div className="container grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
                    <FadeIn>
                        <span className="eyebrow">{t.home.productsEyebrow}</span>
                        <h2 className="h-section mt-4">{p.customTitle}</h2>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">{p.customText}</p>
                        <Link to="/contact" className="btn-dark mt-8">
                            {t.common.ctaRequest}
                            <Icon name="arrow" className="h-4 w-4" strokeWidth={2.4} />
                        </Link>
                    </FadeIn>
                    <div className="mx-auto w-full max-w-sm">
                        <DocCard doc={DOCS[0]} />
                    </div>
                </div>
            </section>
            <CtaBanner />
        </main>
    );
};
