import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { COMPANY } from "@/data/company";
import { FadeIn } from "@/components/effects/FadeIn";
import { CabinetIllustration } from "@/components/ui/CabinetIllustration";
import { Icon, TelegramLogo } from "@/components/ui/Icon";

export const HeroSection = () => {
    const { t } = useLang();
    const h = t.home;

    return (
        <section className="relative overflow-hidden bg-navy-800 pb-20 pt-36 text-white md:pb-28 md:pt-48">
            <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_75%)]" />
            <div className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-volt-500/20 blur-[140px]" />

            <div className="container relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
                <div>
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[.16em] text-volt-400">
                            <Icon name="bolt" className="h-3.5 w-3.5" strokeWidth={2.4} />
                            {h.heroEyebrow} · {t.common.since}
                        </span>
                    </FadeIn>
                    <FadeIn delay={80}>
                        <h1 className="mt-7 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
                            {h.heroTitle1}{" "}
                            <span className="relative inline-block italic text-volt-500">
                                {h.heroTitleAccent}
                                <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none" aria-hidden="true">
                                    <path d="M2 9 C 50 2, 150 2, 198 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>{" "}
                            {h.heroTitle2}
                        </h1>
                    </FadeIn>
                    <FadeIn delay={160}>
                        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">{h.heroSub}</p>
                    </FadeIn>
                    <FadeIn delay={240}>
                        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <Link to="/contact" className="btn-primary !px-7 !py-4 text-[15px]">
                                {t.common.ctaRequest}
                                <Icon name="arrow" className="h-4 w-4" strokeWidth={2.4} />
                            </Link>
                            <a href={COMPANY.contacts.telegramUrl} target="_blank" rel="noreferrer" className="btn-outline-light !px-7 !py-4 text-[15px]">
                                <TelegramLogo className="h-4 w-4" />
                                {t.common.ctaTelegram}
                            </a>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn delay={200} direction="left" className="relative mx-auto w-full max-w-md">
                    <HeroVisual badge={h.heroBadge} badgeSub={h.heroBadgeSub} />
                </FadeIn>
            </div>
        </section>
    );
};

/** Cabinet with current "flowing" into it along three phase lines. */
function HeroVisual({ badge, badgeSub }: { badge: string; badgeSub: string }) {
    return (
        <div className="relative">
            <svg viewBox="0 0 400 120" className="absolute -top-16 left-0 w-full" aria-hidden="true">
                {[150, 200, 250].map((x, i) => (
                    <g key={x}>
                        <path d={`M${x - 120 + i * 60} 0 C ${x - 60} 40, ${x} 60, ${x} 120`} stroke="rgba(255,255,255,.12)" strokeWidth="2" fill="none" />
                        <path d={`M${x - 120 + i * 60} 0 C ${x - 60} 40, ${x} 60, ${x} 120`} stroke="#ff9e19" strokeWidth="2.5" fill="none" className="en-flow" style={{ animationDelay: `${i * 0.3}s` }} />
                    </g>
                ))}
            </svg>
            <CabinetIllustration id="vru" className="relative mx-auto h-[380px] w-auto drop-shadow-[0_40px_60px_rgba(0,0,0,.45)] md:h-[440px]" />
            <div className="absolute -left-2 bottom-16 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 text-navy-800 shadow-lift sm:-left-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt-500 text-navy-900">
                    <Icon name="shield" className="h-6 w-6" strokeWidth={2} />
                </span>
                <span>
                    <span className="block text-sm font-extrabold">{badge}</span>
                    <span className="block font-mono text-xs text-ink-muted">{badgeSub}</span>
                </span>
            </div>
            <div className="absolute -right-2 top-10 rounded-2xl border border-white/15 bg-navy-700/80 px-4 py-3 backdrop-blur sm:-right-6">
                <span className="block font-display text-2xl font-black italic text-volt-500">0,4 kV</span>
                <span className="block text-xs text-white/60">НКУ</span>
            </div>
        </div>
    );
}
