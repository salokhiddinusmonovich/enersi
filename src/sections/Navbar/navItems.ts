import type { Translations } from "@/contexts/LanguageContext";

/** Shared by DesktopNav, MobileMenu and the footer so the menus never drift apart. */
export const getNavItems = (t: Translations) => [
    { to: "/", label: t.nav.home, end: true },
    { to: "/services", label: t.nav.services },
    { to: "/products", label: t.nav.products },
    { to: "/certificates", label: t.nav.documents },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
];
