import { useLang } from "@/contexts/LanguageContext";
import { DOCS } from "@/data/company";
import { usePageTitle } from "@/hooks/usePageTitle";
import { PageHero } from "@/components/ui/PageHero";
import { DocCard } from "@/components/ui/DocumentViewer";
import { CtaBanner } from "@/sections/CtaBanner";

export const CertificatesPage = () => {
    const { t } = useLang();
    usePageTitle(t.pages.docsTitle);
    const groups = [
        { title: t.docs.companyGroup, docs: DOCS.filter((d) => !d.landscape) },
        { title: t.docs.staffGroup, docs: DOCS.filter((d) => d.landscape) },
    ];

    return (
        <main>
            <PageHero title={t.pages.docsTitle} sub={t.pages.docsSub} />
            {groups.map((g) => (
                <section key={g.title} className="container pt-16 md:pt-20">
                    <h2 className="mb-8 flex items-center gap-4 font-display text-2xl font-extrabold text-navy-800">
                        {g.title}
                        <span className="h-px flex-1 bg-line" />
                        <span className="text-base font-bold text-ink-soft">{g.docs.length}</span>
                    </h2>
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {g.docs.map((d, i) => <DocCard key={d.id} doc={d} delay={i * 70} />)}
                    </div>
                </section>
            ))}
            <CtaBanner />
        </main>
    );
};
