import { useLang } from "@/contexts/LanguageContext";
import { COMPANY } from "@/data/company";

export const FooterBottom = () => {
    const { t } = useLang();

    return (
        <div className="container relative mt-14 flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} {COMPANY.legalName}. {t.footer.rights}</span>
            <span>{t.common.inn}: {COMPANY.inn}</span>
        </div>
    );
};
