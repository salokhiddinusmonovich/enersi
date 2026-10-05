import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { COMPANY } from "@/data/company";
import { getNavItems } from "@/sections/Navbar/navItems";
import { NavbarBrand } from "@/sections/Navbar/components/NavbarBrand";
import { Icon, TelegramLogo } from "@/components/ui/Icon";

export const FooterContent = () => {
    const { t } = useLang();
    const { contacts } = COMPANY;

    return (
        <div className="container relative grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr]">
            <div className="max-w-sm">
                <NavbarBrand light />
                <p className="mt-5 text-sm leading-relaxed">{t.footer.desc}</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[.18em] text-volt-500">{t.common.since}</p>
            </div>
            <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">{t.footer.navTitle}</h3>
                <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
                    {getNavItems(t).map((item) => (
                        <Link key={item.to} to={item.to} className="text-sm transition-colors hover:text-volt-400">{item.label}</Link>
                    ))}
                </nav>
            </div>
            <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">{t.footer.contactsTitle}</h3>
                <ul className="mt-5 space-y-4 text-sm">
                    <li className="flex gap-3"><Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-volt-500" />{t.topbar.addressFull}</li>
                    {contacts.phone && (
                        <li><a href={`tel:${contacts.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-volt-400"><Icon name="phone" className="h-4 w-4 text-volt-500" />{contacts.phone}</a></li>
                    )}
                    {contacts.email && (
                        <li><a href={`mailto:${contacts.email}`} className="flex gap-3 hover:text-volt-400"><Icon name="mail" className="h-4 w-4 text-volt-500" />{contacts.email}</a></li>
                    )}
                    <li>
                        <a href={contacts.telegramUrl} target="_blank" rel="noreferrer" className="flex gap-3 hover:text-volt-400">
                            <TelegramLogo className="h-4 w-4 text-volt-500" />@{contacts.telegramUser}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
