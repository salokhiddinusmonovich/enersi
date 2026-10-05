import { useLang } from "@/contexts/LanguageContext";
import { SERVICE_IDS } from "@/data/company";
import { usePageTitle } from "@/hooks/usePageTitle";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CtaBanner } from "@/sections/CtaBanner";
import { ProcessSection } from "@/pages/home/HomeSections";

export const ServicesPage = () => {
    const { t } = useLang();
    usePageTitle(t.pages.servicesTitle);
    return (
        <main>
            <PageHero title={t.pages.servicesTitle} sub={t.pages.servicesSub} />
            <section className="container py-20 md:py-24">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {SERVICE_IDS.map((id, i) => <ServiceCard key={id} id={id} index={i} detailed />)}
                </div>
            </section>
            <div className="border-t border-line"><ProcessSection /></div>
            <CtaBanner />
        </main>
    );
};
