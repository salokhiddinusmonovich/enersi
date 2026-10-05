import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { LangSwitcher } from "./LangSwitcher";

export const DesktopActions = () => {
    const { t } = useLang();
    return (
        <div className="ml-auto hidden shrink-0 items-center gap-3 lg:ml-0 lg:flex">
            <LangSwitcher />
            <Link to="/contact" className="btn-primary !px-5 !py-2.5">{t.common.ctaRequest}</Link>
        </div>
    );
};
