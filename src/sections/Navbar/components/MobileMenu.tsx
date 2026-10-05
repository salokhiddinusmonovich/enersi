import { NavLink, Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { COMPANY } from "@/data/company";
import { getNavItems } from "@/sections/Navbar/navItems";
import { TelegramLogo } from "@/components/ui/Icon";
import { LangSwitcher } from "./LangSwitcher";

export const MobileMenu = () => {
    const { t } = useLang();

    return (
        <div className="en-mobile-menu max-h-[calc(100dvh-64px)] overflow-y-auto border-b border-line bg-white shadow-lift lg:hidden">
            <style>{`
                @keyframes en-menu-drop { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
                .en-mobile-menu { animation: en-menu-drop .24s cubic-bezier(.16,1,.3,1) both; }
            `}</style>
            <nav className="container flex flex-col gap-1 py-4">
                {getNavItems(t).map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) =>
                            `rounded-xl px-4 py-3.5 text-[15px] font-bold transition-colors ${isActive ? "bg-volt-500/10 text-navy-800" : "text-ink-muted hover:bg-navy-50"}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
                <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4">
                    <div><LangSwitcher /></div>
                    <Link to="/contact" className="btn-primary w-full">{t.common.ctaRequest}</Link>
                    <a href={COMPANY.contacts.telegramUrl} target="_blank" rel="noreferrer" className="btn-outline w-full">
                        <TelegramLogo className="h-4 w-4" />@{COMPANY.contacts.telegramUser}
                    </a>
                </div>
            </nav>
        </div>
    );
};
