import { usePageTitle } from "@/hooks/usePageTitle";
import { CtaBanner } from "@/sections/CtaBanner";
import { HeroSection } from "@/pages/home/HeroSection";
import { TrustStrip } from "@/pages/home/TrustStrip";
import { ServicesSection, ProductsSection, WhySection, ProcessSection, DocsSection } from "@/pages/home/HomeSections";

export const HomePage = () => {
    usePageTitle();
    return (
        <main>
            <HeroSection />
            <TrustStrip />
            <ServicesSection />
            <ProductsSection />
            <WhySection />
            <ProcessSection />
            <DocsSection />
            <CtaBanner />
        </main>
    );
};
