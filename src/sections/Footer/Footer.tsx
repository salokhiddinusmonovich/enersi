import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-navy-900 pt-16 text-white/70">
            <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-volt-500/10 blur-[110px]" />
            <FooterContent />
            <FooterBottom />
        </footer>
    );
};
