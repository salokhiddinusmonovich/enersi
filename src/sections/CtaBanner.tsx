import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { COMPANY } from "@/data/company";
import { FadeIn } from "@/components/effects/FadeIn";
import { TelegramLogo, Icon } from "@/components/ui/Icon";

export const CtaBanner = () => {
    const { t } = useLang();
    return (
        <section className="container py-20 md:py-24">
            <FadeIn>
                <div className="relative overflow-hidden rounded-3xl bg-navy-800 px-6 py-12 text-white md:px-14 md:py-16">
                    <div className="bg-grid absolute inset-0 opacity-70" />
                    <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-volt-500/25 blur-[100px]" />
                    <svg viewBox="0 0 24 24" className="absolute -right-6 top-1/2 hidden h-72 w-72 -translate-y-1/2 text-volt-500/10 md:block" aria-hidden="true">
                        <path fill="currentColor" d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                    </svg>
                    <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-xl">
                            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-4xl">{t.cta.title}</h2>
                            <p className="mt-4 text-lg text-white/65">{t.cta.sub}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                            <Link to="/contact" className="btn-primary">
                                {t.common.ctaRequest}
                                <Icon name="arrow" className="h-4 w-4" strokeWidth={2.4} />
                            </Link>
                            <a href={COMPANY.contacts.telegramUrl} target="_blank" rel="noreferrer" className="btn-outline-light">
                                <TelegramLogo className="h-4 w-4" />
                                {t.common.ctaTelegram}
                            </a>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
};
