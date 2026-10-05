import { useLang } from "@/contexts/LanguageContext";
import { COMPANY } from "@/data/company";
import { Icon, TelegramLogo } from "@/components/ui/Icon";

/** Thin utility strip above the main bar (desktop only); collapses once the page scrolls. */
export const TopBar = ({ hidden }: { hidden: boolean }) => {
    const { t } = useLang();
    return (
        <div className={`hidden overflow-hidden bg-navy-900 text-[13px] text-white/70 transition-[max-height] duration-300 lg:block ${hidden ? "max-h-0" : "max-h-10"}`}>
            <div className="container flex h-9 items-center gap-6">
                <span className="flex items-center gap-1.5"><Icon name="pin" className="h-3.5 w-3.5 text-volt-500" />{t.topbar.address}</span>
                <span className="flex items-center gap-1.5"><Icon name="shield" className="h-3.5 w-3.5 text-volt-500" />{t.topbar.slogan}</span>
                <span className="ml-auto">{t.common.inn}: {COMPANY.inn}</span>
                {COMPANY.contacts.phone && (
                    <a href={`tel:${COMPANY.contacts.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 font-semibold text-white hover:text-volt-400">
                        <Icon name="phone" className="h-3.5 w-3.5" />{COMPANY.contacts.phone}
                    </a>
                )}
                <a href={COMPANY.contacts.telegramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-semibold text-white hover:text-volt-400">
                    <TelegramLogo className="h-3.5 w-3.5" />@{COMPANY.contacts.telegramUser}
                </a>
            </div>
        </div>
    );
};
